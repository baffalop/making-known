<p>
  The <span on:click={ shuffle }><i>{ word }</i></span> making known
</p>

<script lang="ts">
const words: string[] = [
  'real',
  'incredible',
  'unbelievable',
  'inexorable',
  'indefensible',
]

let word: string = words[0]

function shuffle () {
  const i = Math.floor(Math.random() * words.length)
  word = words[i]
}
</script>
