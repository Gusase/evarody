<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "@/routes/Home.svelte";
  import Projects from "@/routes/Projects.svelte";
  import Resume from "@/routes/Resume.svelte";
  import Contact from "@/routes/Contact.svelte";
  import NotFound from "@/components/NotFound.svelte";

  export let url: string = "";
</script>

<main class="relative"> 
  <Router {url}>
    <Route path="/" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
    <Route>
      <NotFound />
    </Route>
  </Router>
</main>
