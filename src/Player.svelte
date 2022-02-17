<script lang="ts">
import { fade } from 'svelte/transition'
import { cubicInOut, quartInOut } from 'svelte/easing'

import { Piece, titleFor } from './types'
import Timeline from './Timeline.svelte'
import Credits from './Credits.svelte'
import { fadeAndScale, ondestroy } from './transition'

const skipInterval = 10 // seconds
const saveTimeIntervalDuration = 2000 // ms
const saveTimeOffset = 5 // seconds

export let piece: Piece
export let isInView: boolean

let viewingCredits = false

// to handle the case of reselecting the same piece from the menu
export function select (): void {
  viewingCredits = false
}

let currentTime = 0
let paused = true
let duration = 0
let waiting = false

$: playing = !paused
$: progress = duration == 0 ? 0 : (retrievedTime ?? currentTime) / duration

// when retrieving play position from localStorage, we can't assign it
// directly to currentTime as it gets overwritten on first play.
// set it here then move the value to currentTime on play (via assignRetrievedTime)
let retrievedTime: number|null = null
let timeUpdateInterval: number|null = null

// on change of piece
$: {
  retrievedTime = retrievePlayPosition(piece)
  paused = true
  viewingCredits = false
  setMediaSession(piece)
}

$: {
  if (playing) {
    assignRetrievedTime()
    startTimeUpdate()
  } else {
    stopTimeUpdate()
    storePlayPosition()
  }
}

// properties for the fadeAndScale transition
let ui: HTMLElement
let uiHeight: number
$: if (ui) uiHeight = parseFloat(getComputedStyle(ui).height.replace('px', ''))
let suspendCredits = true
$: if (!viewingCredits) suspendCredits = true
let suspendUi = false
$: if (viewingCredits) suspendUi = true

const creditsFadeInDuration = 800
$: creditsFadeOutDuration = isInView ? 600 : 0
$: uiFadeDuration = isInView ? 300 : 0

function togglePlay (): void {
  paused = !paused
}

function ffw (): void {
  currentTime += skipInterval
  storePlayPosition()
}

function rew (): void {
  currentTime -= skipInterval
  storePlayPosition()
}

function storePlayPosition (): void {
  const timeToSave = Math.max(currentTime - saveTimeOffset, 0)
  window.localStorage.setItem(piece, timeToSave.toString())
}

function retrievePlayPosition(piece: Piece): number|null {
  const parsed = parseFloat(window.localStorage.getItem(piece))
  return isNaN(parsed) ? null : parsed
}

function startTimeUpdate (): void {
  timeUpdateInterval = window.setInterval(storePlayPosition, saveTimeIntervalDuration)
}

function stopTimeUpdate(): void {
  if (timeUpdateInterval) {
    window.clearInterval(timeUpdateInterval)
    timeUpdateInterval = null
  }
}

function assignRetrievedTime (): void {
  if (retrievedTime !== null) {
    currentTime = retrievedTime
    retrievedTime = null
  }
}

function setMediaSession (piece: Piece) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: titleFor(piece),
      album: 'The Making Known',
      artwork: [96, 128, 192, 256, 384, 512].map(size => {
        const sizes = `${size}x${size}`
        return {
          src: `img/album-art/album-${piece}-${sizes}.jpeg`,
          sizes,
          type: 'image/jpeg',
        }
      })
    })
  }
}
</script>

<audio
  src="audio/{piece}.mp3"
  bind:currentTime
  bind:paused
  bind:duration
  on:waiting={() => waiting = true}
  on:canplay={() => waiting = false}
  on:ended={() => window.setTimeout(() => viewingCredits = true, 1000)}
></audio>

<img
  src="img/title-{piece}.png"
  alt={titleFor(piece)}
  class="title"
  on:click={() => viewingCredits = !viewingCredits}
/>

{#if !viewingCredits}
  <div
    class:absolute={suspendUi}
    bind:this={ui}
    in:fade={{ duration: uiFadeDuration, delay: creditsFadeOutDuration }}
    out:fade={{ duration: uiFadeDuration }}
    use:ondestroy={() => suspendCredits = false}
  >
    <Timeline {progress} {playing}/>

    <div class="controls">
      <button class="rew" on:click={rew} title="rewind"></button>
      <button class="play-pause" class:playing class:waiting on:click={togglePlay} title={playing ? 'Pause' : 'Play'}></button>
      <button class="ffw" on:click={ffw} title="fast forward"></button>
    </div>
  </div>
{:else}
  <div
    class="text condensed"
    class:absolute={suspendCredits}
    in:fadeAndScale={{ reference: uiHeight, delay: uiFadeDuration, duration: creditsFadeInDuration, easing: quartInOut }}
    out:fadeAndScale={{ reference: uiHeight, duration: creditsFadeOutDuration, easing: cubicInOut }}
    use:ondestroy={() => suspendUi = false}
  >
    <Credits {piece} />
  </div>
{/if}

<style>
.controls {
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 12.5em;
}

.title {
  height: 7em;
  cursor: pointer;
  margin-bottom: 0.7em;
}

.text.condensed {
  height: 60%;
  will-change: opacity, height;
}

.absolute {
  position: absolute;
}

button.play-pause {
  width: 8em;
  height: 2.5em;
  background-image: url(/img/play-pause.png);
  background-size: 100% auto;
}

button.play-pause.playing {
  background-position: 50% 100%;
}

.play-pause.playing.waiting {
  animation: throb 2.3s infinite;
}

@keyframes throb {
  0%   { opacity: 1.0; }
  50%  { opacity: 0.0; }
  100% { opacity: 1.0; }
}

button.ffw {
  background-image: url(/img/ffw.png);
  margin-top: 0.7em;
}

button.rew {
  background-image: url(/img/rew.png);
  margin-bottom: 0.7em;
}

button.ffw, button.rew {
  opacity: 0.85;
}

button.ffw:active, button.rew:active {
  opacity: 0.4;
}
</style>
