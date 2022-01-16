<script lang="ts">
import Carousel from './Carousel.svelte'
</script>

<Carousel orientation="vertical">
  <header>
    <h1>The Making Known</h1>
  </header>

  <div>
    <p>This is what I think of that</p>
  </div>
</Carousel>

<style>
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
