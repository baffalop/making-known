<script lang="ts">
export let progress = 0
export let playing = false

let width = 600

$: resolution = 8 + Math.floor(width / 25)
$: blips = genBlips(resolution, progress)

interface Blip {
  lit: boolean
  big: boolean
}

function genBlips (resolution: number, progress: number): Blip[] {
  const playPosition = Math.floor(progress * resolution)

  return range(resolution).map(i => ({
    lit: i <= playPosition,
    big: playing && i == playPosition,
  }))
}

function range (n: number): number[] {
  return [...Array(n).keys()]
}
</script>

<div class="timeline" bind:clientWidth={width}>
  {#each blips as { lit, big }, i (i)}
    <div class="blip" class:lit class:big></div>
  {/each}
</div>

<style>
.timeline {
  transform: rotate(-5deg);
  height: 30px;
  width: 12em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.blip {
  border-radius: 100%;
  height: 5px;
  width: 5px;
  background-color: #676c71e0;
  transition-property: background-color, height, width;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
}

.blip.lit {
  background-color: #e9e9cbcc;
}

.blip.big {
  height: 9px;
  width: 9px;
}
</style>
