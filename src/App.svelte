<p>
  The <span on:click={ shuffle }><i>{ word }</i></span> making known
</p>

<script>
const words = [
  'real',
  'incredible',
  'unbelievable',
  'inexorable',
  'indefensible',
]

let word = words[0]

function shuffle () {
  const i = Math.floor(Math.random() * words.length)
  word = words[i]
}
</script>
