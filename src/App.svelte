<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "@/routes/Home.svelte";
  import Projects from "@/routes/Projects.svelte";
  import Contact from "@/routes/Contact.svelte";
  import NotFound from "@/components/NotFound.svelte";

  export let url: string = "";
</script>

<main class="font-hud">
  <Router {url}>
    <Route path="/" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Route>
      <NotFound />
    </Route>
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
