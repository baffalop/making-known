<script lang="ts">
import { Piece } from './types'

export let piece: Piece
</script>

{#if piece === Piece.Jane}
  <h4>Narration</h4>
  <p>Benny Nemer, Shea Lime, Timothy Rainey II</p>

  <h4>Choral</h4>
  <p>St. Olaf Chamber Singers, directed by Therees Tkach Hibbard</p>
  <p>Jayden Browne, Michael Caraher, Logan Combs, Marisabel Cordova, Ruby Erickson, Alexander Famous, Roan Findley, Caroline Flaten, Sean Griswold, Daniel Haakenson, Noah Han, Cully Hauck, Nicholas Hinson, Maren Hrivnak, Sara Jensen, Aidan Kocur, Chris Kopits, Shae Lime, Austin Meyer, Will McIntyre, Annika Seager, Anna Seppa, Sarah Shapiro, Maddie Smoot, Julia Walter, Lacy Williams, Hermione Yim.</p>

  <h4>Sound Design</h4>
  <p>Johannes Malfatti</p>

  <h4>Narration Recording</h4>
  <p>Julien Creus (Paris), Douglas Hamilton (Northfield)</p>

  <h4>Boe Chapel Choral Recording</h4>
  <p>Jeffrey O’Donnell and Joshua Wyatt</p>

{:else if piece === Piece.Dianna}
  <h4>Narration</h4>
  <p>Benny Nemer, Shae Lime, Timothy Rainey II</p>

  <h4>Interview</h4>
  <p>Dianna Clise</p>

  <h4>Sound Design</h4>
  <p>Johannes Malfatti</p>

  <h4>Narration Recording</h4>
  <p>Julien Creus (Paris), Douglas Hamilton (Northfield)</p>

  <h4>Interview Recording</h4>
  <p>Jim Loveland and Tyler Thomas</p>

{:else if piece === Piece.Paul}
  <h4>Narration</h4>
  <p>Benny Nemer, Shea Lime, Timothy Rainey II</p>

  <h4>Choral</h4>
  <p>St. Olaf Chamber Singers, directed by Therees Tkach Hibbard</p>
  <p>Jayden Browne, Michael Caraher, Logan Combs, Marisabel Cordova, Ruby Erickson, Alexander Famous, Roan Findley, Caroline Flaten, Sean Griswold, Daniel Haakenson, Noah Han, Cully Hauck, Nicholas Hinson, Maren Hrivnak, Sara Jensen, Aidan Kocur, Chris Kopits, Shae Lime, Austin Meyer, Will McIntyre, Annika Seager, Anna Seppa, Sarah Shapiro, Maddie Smoot, Julia Walter, Lacy Williams, Hermione Yim.</p>

  <h4>Sound Design</h4>
  <p>Johannes Malfatti</p>

  <h4>Narration Recording</h4>
  <p>Julien Creus (Paris), Douglas Hamilton (Northfield)</p>

  <h4>Boe Chapel Choral Recording</h4>
  <p>Jeffrey O’Donnell and Joshua Wyatt</p>

  <p><em>Speech on the Occasion of Receiving the Literature Prize of the Free Hanseatic City of Bremen</em>, Paul Celan, 1958. 	Translation John Felstiner, Selected Poems and Prose of Paul Celan, New York, W. W. Norton, 2000.</p>
  <p><em>Blume</em>, Paul Celan, 1959. Translation Michael Hamburger, Poems of Paul Celan, New York, Persea, 1988.</p>
  <p><em>Sprich auch du</em>, Paul Celan, 1955. Translation John Felstiner, Selected Poems and Prose of Paul Celan, New York, W. W. Norton, 2000.</p>
{/if}

<style>
* {
  text-align: center;
}

h4 {
  font-style: italic;
  font-weight: normal;
  font-size: 1em;
  line-height: 1.4em;
  margin-block-end: 0;
}

h4 + p {
  margin-block-start: 0;
}
</style>
