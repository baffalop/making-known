<script lang="ts">
import { cubicOut } from 'svelte/easing'
import { fade } from 'svelte/transition'

import { View, Piece } from './types'

export let view: View
export let piece: Piece
export let autoscrolling: boolean

interface FadeParams {
  useCss: boolean
  duration: number
  easing: (n: number) => number
}

function customFade (node: HTMLElement, { useCss = false, duration = 500, easing = cubicOut }: FadeParams) {
  if (useCss) {
    return fade(node, { duration, easing })
  }

  return {
    duration,
    easing,
    tick: (t: number) => node.style.opacity = t.toString()
  }
}
</script>

{#if view === View.Header}
  <div
    class="background red"
    in:customFade="{{ useCss: autoscrolling }}"
    out:customFade="{{ useCss: autoscrolling }}"
  ></div>
{:else if view === View.Player}
  {#if piece === Piece.Herve}
    <div
      class="background sample1"
      in:customFade="{{ useCss: autoscrolling }}"
      out:customFade="{{ useCss: autoscrolling }}"
    ></div>
  {:else if piece === Piece.Julia}
    <div
      class="background sample2"
      in:customFade="{{ useCss: autoscrolling }}"
      out:customFade="{{ useCss: autoscrolling }}"
    ></div>
  {:else if piece === Piece.Conny}
    <div
      class="background sample3"
      in:customFade="{{ useCss: autoscrolling }}"
      out:customFade="{{ useCss: autoscrolling }}"
    ></div>
  {/if}
{/if}

<style>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background.red {
  background: #a6241d;
}

.background.grey {
  background: linear-gradient(to right, #40444a, #6e7172 30%);
}

.background.sample1 {
  background-image: url('img/sample1.jpeg');
  background-size: cover;
}

.background.sample2 {
  background-image: url('img/sample2.jpeg');
  background-size: cover;
}

.background.sample3 {
  background-image: url('img/sample3.jpeg');
  background-size: cover;
}
</style>
