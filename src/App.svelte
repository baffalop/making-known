<script lang="ts">
import Carousel from './Carousel.svelte'
import { inview } from 'svelte-inview'

let view: 'header' | 'menu' = 'header'
</script>

<Carousel orientation="vertical" {view}>
  <header class="centred" use:inview={{ threshold: 0.5 }} on:enter={ () => view = 'header' }>
    <h1>The Making Known</h1>
  </header>

  <Carousel orientation="horizontal">
    <div class="centred" use:inview={{ threshold: 0.5 }} on:enter={ () => view = 'menu' }>
      <p>This is what I think of that</p>
    </div>

    <div class="centred" use:inview={{ threshold: 0.5 }} on:enter={ () => view = 'menu' }>
      <p>And another</p>
    </div>
  </Carousel>
</Carousel>

<style>
:global(.carousel:after) {
  background: #a6241d;
  opacity: 0;

  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 300ms ease-out;
  z-index: 1;
}

:global(.carousel.header:after) {
  opacity: 1;
}

:global(.carousel *) {
  z-index: 2;
}

.centred {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

main code {
  background: #a6241d;
  padding: 4px 8px;
  border-radius: 4px;
}

main p {
  margin: 0.4rem;
}

header {
  font-style: italic;
  font-size: calc(10px + 2vmin);
}
</style>
