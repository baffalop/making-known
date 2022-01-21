<script lang="ts">
import { inview } from 'svelte-inview'
import { cubicOut, quartInOut } from 'svelte/easing'
import { animateScroll } from 'svelte-scrollto-element'
import { tick } from "svelte";

const inviewHalf = { threshold: 0.5 }

enum View {
  Header = 'header',
  Menu = 'menu',
  Player = 'player',
}

enum Piece {
  Herve = 'Dear Hervé',
  Julia = 'Dear Julia',
  Conny = 'Dear Conny',
}

let view: View = View.Header
let currentPiece: Piece = Piece.Herve
let scrollingPlayer: boolean = false

let playerCarousel: HTMLElement
let player: HTMLElement

const viewHeader = () => view = View.Header
const viewMenu = () => view = View.Menu
const viewPlayer = () => view = View.Player

function fadeJs (node: HTMLElement, { duration = 500, easing = cubicOut }) {
  return {
    duration,
    easing,
    tick: (t: number) => node.style.opacity = t.toString()
  }
}

async function play(p: Piece) {
  currentPiece = p
  scrollingPlayer = true
  await tick()
  animateScroll.scrollTo({
    container: playerCarousel,
    element: player,
    duration: 800,
    easing: quartInOut,
    scrollX: true,
    scrollY: false,
    onDone: () => scrollingPlayer = false,
  })
}
</script>

<main class="carousel snap vertical view-{view}">
  {#if view === View.Header}
    <div class="background red" transition:fadeJs></div>
  {:else if view === View.Player}
    {#if currentPiece === Piece.Herve}
      <div class="background sample1" transition:fadeJs></div>
    {:else if currentPiece === Piece.Julia}
      <div class="background sample2" transition:fadeJs></div>
    {/if}
  {/if}

  <header class="centred slide" use:inview={inviewHalf} on:enter={viewHeader}>
    <h1>The Making Known</h1>
  </header>

  <div id="player-carousel" class="slide carousel horizontal" class:snap={!scrollingPlayer} bind:this={playerCarousel}>
    <div class="centred slide" use:inview={inviewHalf} on:enter={viewMenu}>
      <ul>
        {#each [Piece.Herve, Piece.Julia, Piece.Conny] as piece, i}
          <li style="--i: {i}">
            <a href="#" on:click={() => play(piece)}>No. {i + 1} {piece}</a>
          </li>
        {/each}
      </ul>
    </div>

    <div class="centred slide" use:inview={inviewHalf} on:enter={viewPlayer} bind:this={player}>
      <h2>{currentPiece}</h2>
    </div>
  </div>
</main>

<style>
.carousel {
  height: 100vh;
  width: 100vw;
  overflow: auto;
  display: flex;
}

.carousel.vertical {
  scroll-snap-type: y mandatory;
  flex-direction: column;
}

.carousel.horizontal {
  scroll-snap-type: x mandatory;
  flex-direction: row;
}

.centred {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.slide {
  flex: none;
  height: 100%;
  width: 100%;
}

.carousel.snap > .slide {
  scroll-snap-stop: always;
  scroll-snap-align: center;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background.red {
  background: #a6241d;
}

.background.grey {
  background: linear-gradient(to right, #40444a, #6e7172 30%);
}

.background.sample1 {
  background: url('img/sample1.jpeg') no-repeat;
  background-size: cover;
}

.background.sample2 {
  background: url('img/sample2.jpeg') no-repeat;
  background-size: cover;
}

header {
  font-style: italic;
  font-size: calc(10px + 2vmin);
}
</style>
