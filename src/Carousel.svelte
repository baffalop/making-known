<script lang="ts">
export let orientation: 'horizontal' | 'vertical'
export let snap: boolean = true
</script>

<div class="carousel { orientation }" class:snap>
  <slot></slot>
</div>

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

.carousel > :global(*) {
  flex: none;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.carousel.snap > :global(*) {
  scroll-snap-stop: always;
  scroll-snap-align: center;
}
</style>
