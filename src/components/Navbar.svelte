<script lang="ts">
  import { Link } from "svelte-routing";

  const navigations: { text: string; path: string }[] = [
    { text: "Home", path: "/" },
    { text: "Projects", path: "/projects" },
    { text: "Contact", path: "/contact" },
  ];
</script>

<nav
  class="flex justify-center max-md:items-center space-x-4 p-4 pb-0 bg-transparent backdrop-blur-sm md:backdrop-blur-none"
>
  {#each navigations as n}
    <Link
      let:active
      to={n.path}
      aria-label="{n.text} link"
      class="text-black dark:text-white hover:underline hover:blur-[1px] inline-block"
    >
      <span class:underline={active}>
        {n.text}
      </span>
    </Link>
  {/each}
</nav>
