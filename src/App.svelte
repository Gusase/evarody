<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "@/routes/Home.svelte";
  import Projects from "@/routes/Projects.svelte";
  import Contact from "@/routes/Contact.svelte";
  import NotFound from "@/components/NotFound.svelte";
  import Maintenance from "@/routes/Maintenance.svelte";

  export let url: string = "";

  const isProd = import.meta.env.MODE == "production";
</script>

<main class="font-hud">
  <Router {url}>
    {#if isProd}
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route>
        <NotFound />
      </Route>
    {:else}
      <Maintenance />
    {/if}
  </Router>
</main>

<style>
  :global(body)::before {
    --size: 45px;
    --line: color-mix(in lch, canvasText, transparent 70%);
    content: "";
    height: 100vh;
    width: 100vw;
    position: fixed;
    background: repeating-linear-gradient(
      45deg,
      var(--line) 0,
      var(--line) 1px,
      transparent 1px,
      transparent var(--size)
    );
    mask-image: radial-gradient(
      ellipse 50% 30% at 50% 0%,
      rgba(255, 255, 255, 0.319) 60%,
      transparent 100%
    );
    top: 0;
    transform-style: flat;
    pointer-events: none;
    z-index: -1;
  }
</style>
