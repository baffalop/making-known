<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { Piece, titleFor } from './types'

const dispatch = createEventDispatcher()

function select () {
  dispatch('select')
}
</script>

<ul>
  {#each [Piece.Jane, Piece.Dianna, Piece.Paul] as piece}
    <li>
      <a href="#{piece}" on:click={select}>
        <img src="img/item-{piece}.png" alt={titleFor(piece)} class={piece} />
      </a>
    </li>
  {/each}
</ul>

<style>
ul {
  list-style: none;
  line-height: 4em;
}

img {
  height: 2.5em;
}

a {
  -webkit-tap-highlight-color: transparent;
  transition: opacity 120ms ease-in 150ms;
}

a:active {
  transition: none;
  opacity: 0.5;
}

.jane {
  margin-left: -1.4em;
  height: 2.9em;
}

.dianna {
  margin-left: -0.6em;
  height: 2.7em;
}

.paul {
  margin-top: 0.4em;
  margin-left: 1.4em;
  height: 2.6em;
}
</style>
