<script lang="ts">
import Carousel from './Carousel.svelte'
import { inview } from 'svelte-inview'

let view: 'header' | 'menu' = 'header'
</script>

<Carousel orientation="vertical" class={view}>
  <header use:inview={{ threshold: 0.5 }} on:enter={() => view = 'header'}>
    <h1>The Making Known</h1>
  </header>

  <div use:inview={{ threshold: 0.5 }} on:enter={() => view = 'menu'}>
    <p>This is what I think of that</p>
  </div>
</Carousel>

<style>
:global(body:has(.header)) {
  background: linear-gradient(to bottom, #302d2c, #6e7172 50%);
}

:global(body:has(.menu)) {
  background: #a6241d;
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
