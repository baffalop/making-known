<script lang="ts">
import { View, Piece } from './types'

export let view: View
export let piece: Piece
</script>

<div class="background red" class:visible={view === View.Menu}></div>
<div class="background bg1" class:visible={view === View.Player && piece === Piece.Diana}></div>
<div class="background bg2" class:visible={view === View.Player && piece === Piece.Julia}></div>
<div class="background bg3" class:visible={view === View.Player && piece === Piece.Conny}></div>

<style>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  opacity: 0;
  transition: opacity 300ms ease-out;
  will-change: opacity;
}

.visible {
  opacity: 1;
}

.background.red {
  background: #a6241d;
}

.background.grey {
  background: linear-gradient(to right, #40444a, #6e7172 30%);
}

.background.bg1 {
  background-image: url('img/bg1.jpeg');
  background-size: cover;
}

.background.bg2 {
  background-image: url('img/bg2.jpeg');
  background-size: cover;
}

.background.bg3 {
  background-image: url('img/bg3.jpeg');
  background-size: cover;
}
</style>
