<script lang="ts">
import { onMount } from 'svelte'
import { inview as baseInview } from 'svelte-inview'
import { quartInOut } from 'svelte/easing'
import { animateScroll } from 'svelte-scrollto-element'

import Sniffer from 'snifferjs'

import { View, Piece } from './types'
import Menu from './Menu.svelte'
import Player from './Player.svelte'

const introScrollWaitTime = 2000
const autoScrollSpeedSlow = 1400

const navigatedPiece: Piece|null = pieceFromHash()

const sniffer = Sniffer(navigator.userAgent)
const isLegacySafari = (sniffer.os.name === 'ios' && sniffer.os.majorVersion < 15)
  || (sniffer.browser.name === 'safari' && sniffer.browser.majorVersion < 15)

let view: View = View.Text
let currentPiece: Piece = navigatedPiece || Piece.Jane

let loaded = false
let itsTimeToScrollToIntro = false
let userHasScrolled = false
let autoscrolling = false

let carousel: HTMLElement
let introText: HTMLElement
let menu: HTMLElement
let player: HTMLElement
let scrollTarget: HTMLElement|null = null

onMount(() => window.setTimeout(() => itsTimeToScrollToIntro = true, introScrollWaitTime))
window.onload = () => loaded = true
$: if (loaded && itsTimeToScrollToIntro) introScroll()

function introScroll () {
  if (!userHasScrolled) {
    if (navigatedPiece !== null) {
      scrollTo(player, autoScrollSpeedSlow)
    } else {
      scrollTo(introText, autoScrollSpeedSlow)
    }
  }
}

function pieceFromHash(): Piece|null {
  switch (window.location.hash) {
    case '#jane': return Piece.Jane
    case '#dianna': return Piece.Dianna
    case '#paul': return Piece.Paul
    default: return null
  }
}

window.addEventListener('hashchange', () => {
  currentPiece = pieceFromHash() || Piece.Jane
})

// wrapper for inview action with my config defaults
const inview = node => baseInview(node, { threshold: 0.8 })

const viewText = () => view = View.Text
const viewPlayer = () => view = View.Player
const viewMenu = () => {
  // the menu's red can flash by if autoscrolling past it from title on load
  if (!autoscrolling || scrollTarget === menu) view = View.Menu
}

function scrollTo (target: HTMLElement, duration = 800) {
  scrollTarget = target
  if (!isLegacySafari) autoscrolling = true

  window.requestAnimationFrame(
    () => animateScroll.scrollTo({
      container: carousel,
      element: target,
      duration,
      easing: quartInOut,
      scrollX: true,
      scrollY: false,
      onDone: () => {
        scrollTarget = null
        autoscrolling = false
      },
    })
  )
}
</script>

<main
  class="carousel horizontal"
  class:snap={!autoscrolling}
  bind:this={carousel}
  use:inview
  on:enter={viewText}
>
  <header class="centred slide" use:inview on:leave={() => userHasScrolled = true}>
    <img class="title" src="img/title.png" alt="The Making Known" />
  </header>

  <div class="centred slide" bind:this={introText} use:inview on:enter={viewText}>
    <div class="text">
      <p>
        This is a narrated encounter with posters designed by the Nazi German government to
        communicate with the occupied nations of Belgium, France, and Luxembourg during the
        Second World War. The posters are part of the Tetlie Collection of WWII Propaganda
        Posters at the Flaten Art Museum at St Olaf College in Northfield, Minnesota.
      </p>

      <p>
        The encounter takes form through three audio letters written by the artist to individuals of
        relevance to the preservation and interpretation of the posters and their twenty-first century
        meaning: a curator, a paper conservator, and a poet. Each letter lasts between fifteen and
        twenty minutes. Please put on your headphones, turn off the ringer of your device, and when you are
        ready, proceed to the menu to select one of the audio letters of <em>The Making Known</em>.
      </p>

      <p class="centred">
        <button class="arrow right inline" on:click={() => scrollTo(menu)}>Forward</button>
      </p>
    </div>
  </div>

  <div class="centred slide" bind:this={menu} use:inview on:enter={viewMenu}>
    <Menu on:select={() => scrollTo(player)} />
  </div>

  <div class="centred slide" bind:this={player} use:inview on:enter={viewPlayer}>
    <Player piece={currentPiece} isInView={view === View.Player} />
  </div>

  <div class="centred slide" use:inview on:enter={viewText}>
    <div class="text">
      <p>
        <em>The Making Known</em> was written and created by <a href="https://nemer.be" target="_blank">Benny Nemer</a>
        to accompany a scenography of a flowers, paper mobiles, and a selection of posters from the Tetlie Collection,
        which were exhibited in a solo exhibition with the same title at the Flaten Art Museum in the winter of 2022.
        The project was commissioned by museum Director and Curator Jane Becker Nelson with financial support from
        (Can’t Remember Right Now), and research and exhibition assistance from Mona Weselman and Krista Anderson-Larson.
        Website programming by Nikita Gaidakov.
      </p>
    </div>
  </div>

  <div class="background red" class:show={view === View.Menu}></div>
  <div class="background jane" class:show={view === View.Player && currentPiece === Piece.Jane}></div>
  <div class="background dianna" class:show={view === View.Player && currentPiece === Piece.Dianna}></div>
  <div class="background paul" class:show={view === View.Player && currentPiece === Piece.Paul}></div>
</main>

<style>
.carousel {
  height: 100%;
  width: 100%;
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

.background.jane {
  background-image: url(img/bg-jane.jpeg);
  background-position: 32% 0;
}

.background.dianna {
  background-image: url(img/bg-dianna.jpeg);
  background-position: 80% 80%;
}

.background.paul {
  background-image: url(img/bg-paul.jpeg);
  background-position: 0 0;
}

button.arrow {
  width: 5em;
  display: none;
}

button.arrow.left {
  background-image: url(img/back.png);
}

button.arrow.right {
  background-image: url(img/forward.png);
}

button.inline {
  margin-top: 0.6em;
}

@media screen and (max-width: 800px) {
  button.inline {
    display: block;
  }
}

@media (pointer: none) {
  button.inline {
    display: block;
  }
}
</style>
