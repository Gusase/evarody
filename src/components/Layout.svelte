<script lang="ts">
  import { useLocation } from "svelte-routing";
  import Navbar from "@/components/Navbar.svelte";
  import Footer from "@/components/Footer.svelte";
  export let location = useLocation();
</script>

<div
  class="mx-auto max-w-screen-sm flex flex-col space-y-2 h-screen max-md:px-2.5"
>
  <Navbar active={$location.pathname} />
  <div
    class="bg-gray-400/5 dark:bg-white/10 border-t rounded-lg basis-full flex-shrink overflow-y-hidden shadow border-t-gray-600/70 dark:border-t-gray-300/70 w-full overflow-x-hidden min-h-0"
  >
    <div class="p-5 overflow-y-auto h-full">
      <slot />
    </div>
  </div>
  <Footer />
</div>
