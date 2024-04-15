<script lang="ts">
  import { Link } from "svelte-routing";

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
      text: "Blog",
      path: "/blog",
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];

  export let active: string;
</script>

<nav class="sticky top-0 left-0 w-full z-50 flex justify-center space-x-4 p-4">
  {#each navigations as nav}
    <Link
      to={nav.path}
      class="text-blacks dark:text-white hover:underline {active == nav.path ? 'underline' : ''}"
      >{nav.text}</Link
    >
  {/each}
</nav>
