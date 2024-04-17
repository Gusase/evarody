<script lang="ts">
  import { useLocation } from "svelte-routing";
  import Navbar from "@/components/Navbar.svelte";
  export let location = useLocation();
</script>

<Navbar active={$location.pathname} />

<div class="fixed inset-0 flex justify-center sm:px-8 -z-[1]">
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
</div>
