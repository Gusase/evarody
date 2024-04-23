<script lang="ts">
  import { useLocation } from "svelte-routing";
  import Navbar from "@/components/Navbar.svelte";
  import { fade } from "svelte/transition";
  export let location = useLocation();

  $: document.title = `${$location.pathname} - Gusase /_ \\`;
</script>

<Navbar active={$location.pathname} />

<div
  class="fixed inset-0 flex justify-center sm:px-8 -z-[1]"
  in:fade={{ duration: 1000 }}
>
  <div class="flex w-full max-w-7xl lg:px-8">
    <div
      class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
    ></div>
  </div>
</div>
<div class="mx-auto h-full max-w-2xl lg:max-w-5xl">
  <div class="p-5">
    <slot />
  </div>

  {#if $location.pathname != "/chat"}
    <div class="absolute bottom-6 right-6">
      <a
        href="/chats"
        class="bg-white ring-1 ring-gray-300/80 dark:ring-gray-800 dark:bg-zinc-900 p-5 rounded-full inline-block hover:scale-125 transition"
      >
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
  {/if}
</div>
