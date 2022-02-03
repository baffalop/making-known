<script lang="ts">
import { Piece, titleFor } from './types'
import Timeline from './Timeline.svelte'

export let piece: Piece

const skipInterval = 10

let currentTime = 0
let paused = true
let duration = 0

let retrievedTime: number|null = null
let interval: number|null = null

$: playing = !paused
$: progress = duration == 0 ? 0 : (retrievedTime ?? currentTime) / duration

// on change of piece
$: {
  retrievedTime = retrievePlayPosition(piece)
  paused = true
}

$: {
  if (playing) {
    assignRetrievedTime()
    startTimeUpdate()
  } else {
    stopTimeUpdate()
  }
}

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
  interval = window.setInterval(storePlayPosition, 1000)
}

function stopTimeUpdate() {
  if (interval) {
    window.clearInterval(interval)
    interval = null
  }
}

function assignRetrievedTime (): void {
  if (retrievedTime !== null) {
    currentTime = retrievedTime
    retrievedTime = null
  }
}
</script>

<audio src="audio/{piece}.mp3" bind:currentTime bind:paused bind:duration></audio>

<h1>{titleFor(piece)}</h1>
<div class="controls">
  <button class="rew" on:click={rew}></button>
  <button class="play-pause" class:playing on:click={togglePlay}></button>
  <button class="ffw" on:click={ffw}></button>
</div>
<Timeline {progress} {playing} />

<style>
.controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

button {
  font-size: 100%;
  border: 0;
  outline: 0;
  padding: 0;

  background: transparent no-repeat scroll;
  background-size: contain;
  transition: opacity 80ms ease-in 100ms;

  cursor: pointer;
  height: 2.5em;
  width: 3em;
}

button:active {
  transition: none;
  opacity: 0.5;
}

button.play-pause {
  width: 5em;
  height: 2.5em;
  background-image: url(img/play-pause.png);
  background-size: 100% auto;
}

button.play-pause.playing {
  background-position: 50% 100%;
}

button.ffw {
  background-image: url(img/ffw.png);
  background-size: contain;
}

button.rew {
  background-image: url(img/rew.png);
  background-size: contain;
}
</style>
