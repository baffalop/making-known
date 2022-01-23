<script lang="ts">
import { inview } from 'svelte-inview'
import { quartInOut } from 'svelte/easing'
import { animateScroll } from 'svelte-scrollto-element'
import { tick } from 'svelte'

import { View, Piece } from './types'
import Background from './Background.svelte'
import Menu from './Menu.svelte'
import Player from './Player.svelte'

const inviewConfig = { threshold: 0.7 }

let view: View = View.Header
let currentPiece: Piece = Piece.Herve
let scrollingPlayer: boolean = false

let playerCarousel: HTMLElement
let player: HTMLElement

const viewHeader = () => view = View.Header
const viewMenu = () => view = View.Menu
const viewPlayer = () => view = View.Player

function handleSelect ({ detail: { piece }}) {
  currentPiece = piece
  scrollToPlayer()
}

async function scrollToPlayer () {
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
  <Background view={view} piece={currentPiece} autoscrolling={scrollingPlayer} />

  <header class="centred slide" use:inview={inviewConfig} on:enter={viewHeader}>
    <h1>The Making Known</h1>
  </header>

  <div id="player-carousel" class="slide carousel horizontal" class:snap={!scrollingPlayer} bind:this={playerCarousel}>
    <div class="centred slide" use:inview={inviewConfig} on:enter={viewMenu}>
      <Menu on:select={handleSelect} />
    </div>

    <div class="centred slide" use:inview={inviewConfig} on:enter={viewPlayer} bind:this={player}>
      <Player piece={currentPiece} />
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

header {
  font-style: italic;
  font-size: calc(10px + 2vmin);
}
</style>
