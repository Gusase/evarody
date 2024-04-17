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

<nav class="sticky top-0 left-0 w-full z-10 flex justify-center space-x-4 p-4">
  {#each navigations as nav}
    <NavLink
      to={nav.path}
      class="text-blacks dark:text-white hover:underline {active == nav.path ? 'underline' : ''}">
      {nav.text}
    </NavLink>
  {/each}
</nav>
