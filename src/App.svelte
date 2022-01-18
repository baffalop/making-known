<script lang="ts">
import { inview } from 'svelte-inview'

const inviewHalf = { threshold: 0.5 }

enum View {
  Header = 'header',
  Menu = 'menu',
  Player = 'player',
}

let view: View = View.Header

function viewHeader(): void {
  view = View.Header
}

function viewMenu(): void {
  view = View.Menu
}

function viewPlayer(): void {
  view = View.Player
}
</script>

<main class="carousel snap vertical view-{view}">
  <div class="background red" class:show={view === View.Header}></div>
  <div class="background grey" class:show={view === View.Player}></div>

  <header class="centred slide" use:inview={inviewHalf} on:enter={viewHeader}>
    <h1>The Making Known</h1>
  </header>

  <div class="slide carousel snap horizontal">
    <div class="centred slide" use:inview={inviewHalf} on:enter={viewMenu}>
      <p>This is what I think of that</p>
    </div>

    <div class="centred slide" use:inview={inviewHalf} on:enter={viewPlayer}>
      <p>And another</p>
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

  opacity: 0;
  transition: opacity 300ms ease-out;
}

.background.red {
  background: #a6241d;
}

.background.grey {
  background: linear-gradient(to right, #40444a, #6e7172 30%);
}

.background.show {
  opacity: 1;
}

main.view-header:after {
  opacity: 1;
}

header {
  font-style: italic;
  font-size: calc(10px + 2vmin);
}
</style>
