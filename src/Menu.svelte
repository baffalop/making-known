<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { Piece, titleFor } from './types'

const dispatch = createEventDispatcher()

function select (piece: Piece) {
  dispatch('select', { piece })
}
</script>

<ul>
  {#each [Piece.Herve, Piece.Julia, Piece.Conny] as piece, i}
    <li style="--i: {i}">
      <a href="#" on:click={() => select(piece)}>No. {i + 1} {titleFor(piece)}</a>
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
