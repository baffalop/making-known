<script lang="ts">
import { Piece, titleFor } from './types'

export let piece: Piece

const skipInterval = 10

let currentTime = 0
let paused = true

$: playing = !paused

function togglePlay (): void {
  paused = !paused
}

function ffw (): void {
  currentTime += skipInterval
}

function rew (): void {
  currentTime -= skipInterval
}
</script>

<h1>{titleFor(piece)}</h1>

<div class="player">
  <button class="rew" on:click={rew}></button>
  <button class="play-pause" class:playing on:click={togglePlay}></button>
  <button class="ffw" on:click={ffw}></button>

  <audio src="audio/{piece}.mp3" bind:currentTime bind:paused></audio>
</div>

<style>
.player {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

button {
  background: transparent no-repeat;
  font-size: 100%;
  border: 0;
  outline: 0;
  padding: 0;

  cursor: pointer;
  height: 3em;
  width: 4em;
}

button.play-pause {
  width: 5em;
  height: 2em;
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
