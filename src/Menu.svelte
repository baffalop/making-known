<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { Piece, titleFor } from './types'

const dispatch = createEventDispatcher()

function select () {
  dispatch('select')
}
</script>

<ul>
  {#each [Piece.Jane, Piece.Diana, Piece.Paul] as piece, i}
    <li style="--i: {i}">
      <a href="#{piece}" on:click={select}>No. {i + 1} {titleFor(piece)}</a>
    </li>
  {/each}
</ul>

<style>
ul {
  list-style: none;
  line-height: 2em;
}

li {
  transform: translateX(calc((var(--i) - 1) * 0.6em));
}
</style>
