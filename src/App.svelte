<script lang="ts">
import { inview as baseInview } from 'svelte-inview'
import { quartInOut } from 'svelte/easing'
import { animateScroll } from 'svelte-scrollto-element'

import { Piece } from './types'
import Menu from './Menu.svelte'
import Player from './Player.svelte'

let viewingCarousel = false
let viewingPlayer = false
let currentPiece: Piece = pieceFromHash()
let scrollingPlayer: boolean = false

let playerCarousel: HTMLElement
let player: HTMLElement

function pieceFromHash(): Piece {
  switch (window.location.hash) {
    case '#jane': return Piece.Jane
    case '#dianna': return Piece.Dianna
    case '#paul': return Piece.Paul
    default: return Piece.Jane;
  }
}

window.addEventListener('hashchange', () => {
  currentPiece = pieceFromHash()
})

// wrapper for inview action with my config defaults
const inview = node => baseInview(node, { threshold: 0.6 })

async function scrollToPlayer () {
  scrollingPlayer = true
  window.requestAnimationFrame(
    () => animateScroll.scrollTo({
      container: playerCarousel,
      element: player,
      duration: 800,
      easing: quartInOut,
      scrollX: true,
      scrollY: false,
      onDone: () => scrollingPlayer = false,
    })
  )
}
</script>

<main class="carousel snap vertical">
  <header class="centred slide">
    <img class="title" src="img/title.png" alt="The Making Known" />
  </header>

  <div class="centred slide snap">
    <p>
      You will be led through observations, reflections, and movements selected
      randomly from an evolving collection of objects. The experience will last
      approximately sixty minutes. Please put on your headphones, turn off the
      ringer of your device, and when you are ready, scroll down to begin.
    </p>
  </div>

  <div
    class="slide carousel horizontal"
    class:snap={!scrollingPlayer}
    bind:this={playerCarousel}
    use:inview
    on:enter={() => viewingCarousel = true}
    on:leave={() => viewingCarousel = false}
  >
    <div class="centred slide">
      <Menu on:select={scrollToPlayer} />
    </div>

    <div
      class="centred slide"
      bind:this={player}
      use:inview
      on:enter={() => viewingPlayer = true}
      on:leave={() => viewingPlayer = false}
    >
      <Player piece={currentPiece} />
    </div>
  </div>

  <div class="background red" class:show={viewingCarousel && !viewingPlayer}></div>
  <div class="background bg1" class:show={viewingPlayer && currentPiece === Piece.Dianna}></div>
  <div class="background bg2" class:show={viewingPlayer && currentPiece === Piece.Jane}></div>
  <div class="background bg3" class:show={viewingPlayer && currentPiece === Piece.Paul}></div>
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

.title {
  max-height: 70%;
  max-width: 90%;
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
