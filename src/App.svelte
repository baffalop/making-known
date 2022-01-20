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
  One,
  Two,
  Three,
}

let view: View = View.Header
let piece: Piece = Piece.One
let scrollingPlayer: boolean = false

let playerCarousel: HTMLElement
let player: HTMLElement

$: title = titleFromPiece(piece)

function titleFromPiece (p: Piece): string {
  switch (p) {
    case Piece.One: return 'First'
    case Piece.Two: return 'Second'
    case Piece.Three: return 'Third'
  }
}

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
  piece = p
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
    <div class="background grey" transition:fadeJs></div>
  {/if}

  <header class="centred slide" use:inview={inviewHalf} on:enter={viewHeader}>
    <h1>The Making Known</h1>
  </header>

  <div id="player-carousel" class="slide carousel horizontal" class:snap={!scrollingPlayer} bind:this={playerCarousel}>
    <div class="centred slide" use:inview={inviewHalf} on:enter={viewMenu}>
      <ul>
        <li><a href="#" on:click={() => play(Piece.One)}>The first piece</a></li>
        <li><a href="#" on:click={() => play(Piece.Two)}>The second piece</a></li>
        <li><a href="#" on:click={() => play(Piece.Three)}>The third piece</a></li>
      </ul>
    </div>

    <div class="centred slide" use:inview={inviewHalf} on:enter={viewPlayer} bind:this={player}>
      <h2>The {title} Piece</h2>
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

header {
  font-style: italic;
  font-size: calc(10px + 2vmin);
}
</style>
