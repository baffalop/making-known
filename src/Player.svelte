<script lang="ts">
import { Piece, titleFor } from './types'
import Timeline from './Timeline.svelte'

export let piece: Piece

const skipInterval = 10

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

<audio src="audio/{piece}.mp3" bind:currentTime bind:paused bind:duration></audio>

<img src="img/{piece}.png" alt={titleFor(piece)} class="title">

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
  justify-content: space-between;
  width: 12.5em;
}

.title {
  height: 7em;
  margin-bottom: 1em;
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
