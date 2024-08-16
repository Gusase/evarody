<script lang="ts">
  import { useLocation } from "svelte-routing";
  import Navbar from "@/components/Navbar.svelte";
  import Footer from "@/components/Footer.svelte";
  export let location = useLocation();
</script>

<div
  class="mx-auto max-w-screen-sm isolate flex flex-col h-screen max-md:px-2.5"
>
  <Navbar active={$location.pathname} />

  <div
    class="absolute -z-10 inset-0 h-full w-full dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
  ></div>
  <div
    class="bg-gray-50 dark:bg-zinc-900/90 z-20 border-t rounded-lg basis-full flex-shrink overflow-y-hidden shadow border-t-gray-600/70 dark:border-t-gray-300/70 w-full overflow-x-hidden min-h-0 mt-1 mb-2"
  >
    <div class="p-5 overflow-y-auto h-full">
      <slot />
    </div>
  </div>
  <Footer />
</div>
