<script lang="ts">
import { inview } from 'svelte-inview'

const inviewHalf = { threshold: 0.5 }

let view: 'header' | 'menu' = 'header'

function viewHeader(): void {
  view = 'header'
}

function viewMenu(): void {
  view = 'menu'
}
</script>

<main class="carousel snap vertical view-{view}">
  <header class="centred slide" use:inview={inviewHalf} on:enter={viewHeader}>
    <h1>The Making Known</h1>
  </header>

  <div class="slide carousel snap horizontal">
    <div class="centred slide" use:inview={inviewHalf} on:enter={viewMenu}>
      <p>This is what I think of that</p>
    </div>

    <div class="centred slide" use:inview={inviewHalf} on:enter={viewMenu}>
      <p>And another</p>
    </div>
  </div>
</main>

<style>
.centred {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

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

.slide {
  flex: none;
  height: 100%;
  width: 100%;
}

.carousel.snap > .slide {
  scroll-snap-stop: always;
  scroll-snap-align: center;
}

main:after {
  background: #a6241d;
  opacity: 0;

  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 300ms ease-out;
  z-index: -1;
}

main.view-header:after {
  opacity: 1;
}

header {
  font-style: italic;
  font-size: calc(10px + 2vmin);
}
</style>
