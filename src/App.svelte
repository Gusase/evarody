<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "@/routes/Home.svelte";
  import Projects from "@/routes/Projects.svelte";
  import Resume from "@/routes/Resume.svelte";
  import Contact from "@/routes/Contact.svelte";
  import Chat from "@/routes/Chat.svelte";
  import NotFound from "@/components/NotFound.svelte";

  export let url: string = "";
</script>

<main class="relative min-h-dvh">
  <Router {url}>
    <Route path="/" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
    <Route path="/chats" component={Chat} />
    <Route>
      <NotFound />
    </Route>
  </Router>

  <div class="absolute bottom-6 right-6">
    <a href="/chats" class="bg-white ring-1 ring-gray-300/80 dark:ring-gray-800 dark:bg-zinc-900 p-5 rounded-full inline-block hover:scale-125 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 stroke-black dark:stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    </a>
  </div>
</main>
