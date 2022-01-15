<script lang="ts">
</script>

<main>
  <header class="App-header">
    <h1>The Making Known</h1>
  </header>

  <div>
    <p>This is what I think of that</p>
  </div>
</main>

<style>
main {
  text-align: center;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
}

main > * {
  height: 100vh;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-size: calc(10px + 2vmin);
}
</style>
