<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { Piece, titleFor } from './types'

const dispatch = createEventDispatcher()

function select () {
  dispatch('select')
}
</script>

<ul>
  {#each [Piece.Jane, Piece.Dianna, Piece.Paul] as piece, i}
    <li style="--i: {i}">
      <a href="#piece" on:click={select}><h4>{i + 1}</h4></a>

      <a class="button" href="#{piece}" on:click={select}>
        <img src="img/item-{piece}.png" alt={titleFor(piece)} class={piece} />
      </a>
    </li>
  {/each}
</ul>

<style>
ul {
  list-style: none;
  line-height: 1.5em;
}

a {
  text-decoration: none;
}

h4 {
  font-style: italic;
  font-weight: normal;
  font-size: 1.5em;
  margin-bottom: 0.4em;
  margin-left: calc((var(--i) - 1) * 0.8em + 0.4em);
}

img {
  height: 2.5em;
}

.jane {
  margin-left: -1.4em;
  height: 2.8em;
}

.dianna {
  margin-left: -0.8em;
  height: 3.1em;
}

.paul {
  margin-top: 0.2em;
  margin-left: 0.6em;
  height: 2.8em;
}
</style>
