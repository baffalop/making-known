<script lang="ts">
export let resolution = 20
export let progress = 0
export let playing = false

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

<div class="timeline">
  {#each blips as { lit, big }, i (i)}
    <div class="blip" class:lit class:big></div>
  {/each}
</div>

<style>
.timeline {
  transform: rotate(-8deg);
  height: 30px;
  width: 10em;
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.blip {
  display: flex;
  border-radius: 100%;
  height: 5px;
  width: 5px;
  background-color: #bbb;
  transition-property: background-color, height, width;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
}

.blip.lit {
  background-color: white;
}

.blip.big {
  height: 9px;
  width: 9px;
}
</style>
