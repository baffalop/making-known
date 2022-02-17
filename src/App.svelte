<script lang="ts">
import { onMount } from 'svelte'
import { fade } from 'svelte/transition'
import { quartInOut } from 'svelte/easing'
import { animateScroll } from 'svelte-scrollto-element'
import IntersectionObserver from 'svelte-intersection-observer'
import sniffer from 'snifferjs'

import { Piece } from './types'
import Menu from './Menu.svelte'
import Player from './Player.svelte'

const introScrollWaitTime = 2000
const autoScrollSpeedSlow = 1400

const navigatedPiece: Piece|null = pieceFromHash()

const sniffed = sniffer(navigator.userAgent)
const isLegacySafari = (sniffed.os.name === 'ios' && sniffed.os.majorVersion < 15)
  || (sniffed.browser.name === 'safari' && sniffed.browser.majorVersion < 15)

let currentPiece: Piece = navigatedPiece || Piece.Jane

let loaded = false
let itsTimeToScrollToIntro = false
let userHasScrolled = false
let autoscrolling = false
let viewIsOnSlide = true

let carousel: HTMLElement
let titleSlide: HTMLElement
let introSlide: HTMLElement
let menuSlide: HTMLElement
let playerSlide: HTMLElement
let creditsSlide: HTMLElement
let player: HTMLElement & { select: () => void }

let slides = []
let viewingSlide: HTMLElement|null
$: viewingPlayer = playerSlide && viewingSlide === playerSlide
$: arrowsAreViewable = viewIsOnSlide && !autoscrolling && viewingSlide != null

let scrollTarget: HTMLElement|null = null

onMount(() => {
  slides = [titleSlide, introSlide, menuSlide, playerSlide, creditsSlide]
  viewingSlide = titleSlide
  window.setTimeout(() => itsTimeToScrollToIntro = true, introScrollWaitTime)
})

window.onload = () => loaded = true
$: if (loaded && itsTimeToScrollToIntro) introScroll()

function introScroll () {
  if (userHasScrolled) {
    return
  }

  if (navigatedPiece !== null) {
    scrollTo(playerSlide, { duration: autoScrollSpeedSlow })
  } else {
    scrollTo(introSlide, { duration: autoScrollSpeedSlow })
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

function scrollTo (target: HTMLElement, { duration = 800, delay = 0 } = {}) {
  scrollTarget = target
  autoscrolling = true

  const action = () => animateScroll.scrollTo({
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

  if (delay) {
    window.setTimeout(action, delay)
  } else {
    window.requestAnimationFrame(action)
  }
}

function forward () {
  navigate(1)
}

function back () {
  navigate(-1)
}

function navigate (i: number) {
  if (viewingSlide === null) {
    return
  }

  const slideIndex = slides.indexOf(viewingSlide)
  const target = slides[slideIndex + i]

  if (target != null) {
    scrollTo(target, { delay: 150 })
  }
}

function handleSelect () {
  player.select()
  scrollTo(playerSlide, { delay: 150 })
}

function onSlideChange (slide: HTMLElement, { detail: { isIntersecting } }: { detail: IntersectionObserverEntry }) {
  if (!userHasScrolled && slide !== titleSlide) {
    return
  }

  viewIsOnSlide = isIntersecting

  if (!isIntersecting) {
    userHasScrolled = true
  }
}
</script>

<main class="carousel horizontal" class:snap={!autoscrolling || isLegacySafari} bind:this={carousel}>
  <header class="centred slide" bind:this={titleSlide}>
    <img class="title" src="img/title.png" alt="The Making Known" />
  </header>

  <div class="centred slide" bind:this={introSlide}>
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
        twenty minutes.
      </p>

      <p>
        Please put on your headphones, turn off the ringer of your device, and when you are
        ready, proceed to the menu to select one of the audio letters of <em>The Making Known</em>.
      </p>

      <p class="centred">
        <button class="arrow right inline" on:click={() => scrollTo(menuSlide)} title="forward"></button>
      </p>
    </div>
  </div>

  <div class="centred slide" bind:this={menuSlide}>
    <Menu on:select={handleSelect} />
  </div>

  <div class="centred slide" bind:this={playerSlide}>
    <Player piece={currentPiece} bind:this={player} />
  </div>

  <div class="centred slide" bind:this={creditsSlide}>
    <div class="text">
      <p>
        <em>The Making Known</em> was written and created by <a href="https://nemer.be" target="_blank">Benny Nemer</a>
        to accompany a scenography of flowers, paper mobiles, and a selection of posters from the Tetlie
        Collection, exhibited in a solo exhibition at the Flaten Art Museum at St Olaf College in the
        winter of 2022. The project was commissioned by museum Director and Curator Jane
        Becker Nelson with financial support from Institute of Museum and Library Services.
        Website programming by Nikita Gaidakov.
      </p>
    </div>
  </div>

  <div class="background default" class:show={[titleSlide, introSlide, creditsSlide, null].includes(viewingSlide)}></div>
  <div class="background jane" class:show={viewingPlayer && currentPiece === Piece.Jane}></div>
  <div class="background dianna" class:show={viewingPlayer && currentPiece === Piece.Dianna}></div>
  <div class="background paul" class:show={viewingPlayer && currentPiece === Piece.Paul}></div>
</main>

{#each slides as slide}
  <IntersectionObserver root={carousel} element={slide} threshold={0.96} on:observe={e => onSlideChange(slide, e)} />
  <IntersectionObserver root={carousel} element={slide} threshold={0.8} on:intersect={() => viewingSlide = slide} />
{/each}

{#if arrowsAreViewable && [menuSlide, playerSlide, creditsSlide].includes(viewingSlide)}
  <button class="arrow left side" on:click={back} title="back" in:fade={{ duration: 400 }} out:fade={{ duration: 150 }}></button>
{/if}

{#if arrowsAreViewable && [introSlide, playerSlide].includes(viewingSlide)}
  <button class="arrow right side" on:click={forward} title="forward" in:fade={{ duration: 400 }} out:fade={{ duration: 150 }}></button>
{/if}

<style>
.carousel {
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
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

.background.default {
  background-image: url(/img/bg-main.jpeg);
  background-position: 95% 75%;
}

.background.jane {
  background-image: url(/img/bg-jane.jpeg);
  background-position: 32% 0;
}

.background.dianna {
  background-image: url(/img/bg-dianna.jpeg);
  background-position: 80% 80%;
}

.background.paul {
  background-image: url(/img/bg-paul.jpeg);
  background-position: 0 0;
}

button.arrow {
  width: 5em;
}

button.arrow.left {
  background-image: url(/img/back.png);
}

button.arrow.right {
  background-image: url(/img/forward.png);
}

button.inline {
  margin-top: 0.6em;
}

.arrow.side {
  position: absolute;
  bottom: 12%;
  --margin: calc(10%);
}

@media (max-width: 1000px) {
  .arrow.side {
    display: none;
  }
}

@media (min-width: 1000px) {
  .arrow.inline {
    display: none;
  }
}

.arrow.side.left {
  left: var(--margin);
}

.arrow.side.right {
  right: var(--margin);
}
</style>
