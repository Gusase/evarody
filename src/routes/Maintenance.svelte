<script lang="ts">
  import { onMount } from "svelte";
  import banner from "@/assets/banner.jpg";

  let lu: string = "";
  let elu: boolean = false;
  let ldimg: boolean = false;
  let perf: number | null = null;

  /**
   * This is the date when the site was established.
   * And yes, I did this manually.
   */
  const est = "2024-04-14T15:14:41Z";

  const formatDate = (t: string): string => {
    return new Date(t).toLocaleDateString(undefined,{year:"numeric",month:"short",day:"numeric"});
  };

  async function fetchLatestInfo() {
    const s = performance.now();
    try {
      const res = await fetch(
        "https://api.github.com/repos/gusase/evarody/commits/main"
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      lu = data.commit.committer.date;

      const e = performance.now();
      perf = Math.round(e - s);
    } catch (e) {
      elu = true;
      console.error(e);
    }
  }

  onMount(() => {
    fetchLatestInfo();
  });
</script>

<svelte:head>
  <title>Evarody is offline</title>
</svelte:head>

<main class="text-white px-6 py-12 max-w-[900px] mx-auto">
  <div
    class="relative w-full h-24 sm:h-56 md:h-64 mt-28 md:mt-40 rounded-lg overflow-hidden shadow-md"
  >
    <img
      src={banner}
      alt="Banner"
      loading="lazy"
      class="w-full h-full object-cover"
      class:a-ct={ldimg}
      on:load={() => (ldimg = true)}
    />
    <div class="absolute inset-0 bg-[#1e1f88] mix-blend-overlay"></div>
  </div>

  <h1
    class="mt-8 text-3xl md:text-[40px] leading-[64px] md:leading-[72px] font-bold font-scanline"
  >
    What happened?
  </h1>
  <section class="mb-10 text-base md:text-xl">
    If you see this page, it means the entire site is temporarily unavailable
    while the webmaster is performing a complete overhaul of the codebase. (Or is he?)
  </section>

  <section class="mb-20 pt-20 md:pt-36">
    <section
      class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base text-zinc-400 tracking-tight md:divide-x max-md:divide-y divide-dashed divide-zinc-600 text-left"
    >
      <div class="space-y-1 md:pr-8">
        <p>
          Font:
          <a
            href="https://hicchicc.github.io/00ff"
            class="text-white hover:underline hover:blur-[1px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            x0y0pxFreeFont by hicchicc
          </a>
        </p>
        <p>
          Banner image:
          <a
            href="https://x.com/PainDude_Wu/status/1774128286467252309"
            class="text-white hover:underline hover:blur-[1px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            PainDude_Wu on X
          </a>
        </p>
        <p class="italic mt-1">I do not own these, please do not sue me.</p>
      </div>

      <div class="space-y-1 md:text-right md:pl-8 max-md:pt-6">
        <p>
          Established:
          <span class="text-white">{formatDate(est)}</span>
        </p>
        <p>
          Last updated:
          {#if elu}
            <span class="text-red-500 italic">fetch failed.</span>
          {:else if lu}
            <span class="text-white">{formatDate(lu)}</span>
          {:else}
            <span class="text-gray-400 italic">loading...</span>
          {/if}
        </p>
        {#if perf !== null}
          <p class="italic mt-1">
            Response time: {perf} ms
          </p>
        {/if}
      </div>
    </section>
  </section>

  <p class="text-xs lg:text-sm opacity-70">© {formatDate(est).slice(8)} • Evarody.</p>
</main>

<style>
  @keyframes fl {
    0% {
      filter: brightness(0.8) contrast(5) saturate(1.5) sepia(0.1)
        drop-shadow(0 0 5px #00ffff);
      opacity: 0.375;
    }
    25% {
      filter: brightness(1.2) contrast(4) saturate(2) sepia(0.2)
        drop-shadow(0 0 10px #0ff);
      opacity: 0.5;
    }
    50% {
      filter: brightness(1.5) contrast(3.5) saturate(2.5) sepia(0.3)
        drop-shadow(0 0 14px #0ff);
      opacity: 0.8;
    }
    80% {
      filter: brightness(1.1) contrast(2.3) saturate(2) sepia(0.25);
      opacity: 1;
    }
    100% {
      filter: brightness(1) contrast(1) saturate(1.05) sepia(0);
      opacity: 1;
    }
  }

  @keyframes ct {
    0% {
      object-position: center;
      opacity: 0;
    }
    40% {
      object-position: center;
      opacity: 0.5;
    }
    55% {
      object-position: center;
      opacity: 0.75;
    }
    100% {
      object-position: top;
      opacity: 1;
    }
  }

  .a-ct {
    animation:
      ct 2s forwards cubic-bezier(0.57, 0.66, 0.31, 0.91),
      fl 4s ease;
  }
</style>
