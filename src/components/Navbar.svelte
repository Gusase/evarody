<script lang="ts">
  import { Link as NavLink } from "svelte-routing";

  const navigations: { text: string; path: string }[] = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Projects",
      path: "/projects",
    },
    {
      text: "Resume",
      path: "/resume",
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];

  export let active: string;
</script>

<nav
  class="flex justify-center basis-16 max-md:items-center space-x-4 p-4 pb-0 bg-transparent backdrop-blur-sm md:backdrop-blur-none" 
>
  {#each navigations as nav}
    <NavLink
      to={nav.path}
      data-sveltekit-reload
      class="text-black dark:text-white hover:underline {active == nav.path
        ? 'underline'
        : ''}"
    >
      {nav.text}
    </NavLink>
  {/each}
</nav>
