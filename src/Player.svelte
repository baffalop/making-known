<script lang="ts">
import { fade } from 'svelte/transition'
import { cubicInOut, quartInOut } from 'svelte/easing'

import { Piece, titleFor } from './types'
import Timeline from './Timeline.svelte'
import Credits from './Credits.svelte'
import { fadeAndScale, ondestroy } from './transition'

const skipInterval = 10

export let piece: Piece

let viewingCredits = false

let currentTime = 0
let paused = true
let duration = 0

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
}

$: {
  if (playing) {
    assignRetrievedTime()
    startTimeUpdate()
  } else {
    stopTimeUpdate()
  }
}

// properties for the fadeAndScale transition
const uiFadeDuration = 300
const creditsFadeInDuration = 800
const creditsFadeOutDuration = 600

let ui: HTMLElement
let uiHeight: number
$: if (ui) uiHeight = parseFloat(getComputedStyle(ui).height.replace('px', ''))
let suspendCredits = true
$: if (!viewingCredits) suspendCredits = true
let suspendUi = false
$: if (viewingCredits) suspendUi = true

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
  window.localStorage.setItem(piece, currentTime.toString())
}

function retrievePlayPosition(piece: Piece): number|null {
  const parsed = parseFloat(window.localStorage.getItem(piece))
  return isNaN(parsed) ? null : parsed
}

function startTimeUpdate (): void {
  timeUpdateInterval = window.setInterval(storePlayPosition, 1000)
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
</script>

<audio
  src="audio/{piece}.mp3"
  bind:currentTime
  bind:paused
  bind:duration
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
      <button class="rew" on:click={rew}></button>
      <button class="play-pause" class:playing on:click={togglePlay}></button>
      <button class="ffw" on:click={ffw}></button>
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

button {
  -webkit-tap-highlight-color: transparent;
  font-size: 100%;
  border: 0;
  outline: 0;
  padding: 0;

  background: transparent no-repeat scroll;
  background-size: contain;
  transition: opacity 80ms ease-in 100ms;

  cursor: pointer;
  height: 1.5em;
  width: 1.75em;
}

button.play-pause {
  width: 8em;
  height: 2.5em;
  background-image: url(img/play-pause.png);
  background-size: 100% auto;
}

button.play-pause.playing {
  background-position: 50% 100%;
}

button.ffw {
  background-image: url(img/ffw.png);
  opacity: 0.85;
  margin-bottom: 0.7em;
}

button.rew {
  background-image: url(img/rew.png);
  opacity: 0.85;
  margin-top: 0.7em;
}

button:active {
  transition: none;
  opacity: 0.5;
}
</style>
