<script lang="ts">
import { inview as baseInview } from 'svelte-inview'
import { quartInOut } from 'svelte/easing'
import { animateScroll } from 'svelte-scrollto-element'
import { tick } from 'svelte'

import { View, Piece } from './types'
import Menu from './Menu.svelte'
import Player from './Player.svelte'

let view: View = View.Header
let currentPiece: Piece = Piece.Diana
let scrollingPlayer: boolean = false

let playerCarousel: HTMLElement
let player: HTMLElement

// wrapper for inview action with my config defaults
const inview = node => baseInview(node, { threshold: 0.8 })

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

<main class="carousel snap vertical">
  <header class="centred slide" use:inview on:enter={viewHeader}>
    <h1>The Making Known</h1>
    <p>
      You will be led through observations, reflections, and movements selected
      randomly from an evolving collection of objects. The experience will last
      approximately sixty minutes. Please put on your headphones, turn off the
      ringer of your device, and when you are ready, scroll down to begin.
    </p>
  </header>

  <div id="player-carousel" class="slide carousel horizontal" class:snap={!scrollingPlayer} bind:this={playerCarousel}>
    <div class="centred slide" use:inview on:enter={viewMenu}>
      <Menu on:select={handleSelect} />
    </div>

    <div class="centred slide" use:inview on:enter={viewPlayer} bind:this={player}>
      <Player piece={currentPiece} />
    </div>
  </div>

  <div class="background red" class:show={view === View.Menu}></div>
  <div class="background bg1" class:show={view === View.Player && currentPiece === Piece.Diana}></div>
  <div class="background bg2" class:show={view === View.Player && currentPiece === Piece.Jane}></div>
  <div class="background bg3" class:show={view === View.Player && currentPiece === Piece.Paul}></div>
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

h1 {
  text-align: center;
  font-style: italic;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;

  opacity: 0;
  transition: opacity 300ms ease-out;
  will-change: opacity;
}

.background.show {
  opacity: 1;
}

.background.red {
  background: #a6241d;
}

.background.grey {
  background: linear-gradient(to right, #40444a, #6e7172 30%);
}

.background.bg1 {
  background-image: url(img/bg1.jpeg);
}

.background.bg2 {
  background-image: url(img/bg2.jpeg);
}

.background.bg3 {
  background-image: url(img/bg3.jpeg);
}
</style>
