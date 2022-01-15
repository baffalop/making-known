<script lang="ts">
</script>

<main>
  <header class="App-header">
    <h1>The Making Known</h1>
  </header>
</main>

<style>
:global(body) {
  -webkit-touch-callout: none; /* prevent callout to copy image, etc when tap to hold */
  -webkit-user-select: text;

  background: linear-gradient(to bottom, #302d2c, #6e7172 50%);
  color: #efcd89;
  font-family: 'GaramondBT', serif, system-ui, -apple-system, -apple-system-font;
  font-size: calc(14pt + 0.35vw);

  margin: 0;
  height: 100%;
}

main {
  text-align: center;
}

main code {
  background: #a6241d;
  padding: 4px 8px;
  border-radius: 4px;
}

main p {
  margin: 0.4rem;
}

header {
  font-style: italic;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
}
</style>
