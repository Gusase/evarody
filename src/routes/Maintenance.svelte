<script lang="ts">
  import { onMount } from "svelte";
  import banner from "@/assets/banner.jpg";

  let latestHash: string = "";
  let signed: boolean = false;
  let resTime: number | null = null;
  let errState: boolean = false;

  async function fetchLatestCommit() {
    const s = performance.now();

    try {
      const response = await fetch(
        "https://api.github.com/repos/gusase/evarody/commits/main"
      );
      const e = performance.now();
      resTime = Math.round(e - s);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      latestHash = data.sha.slice(0, 6);
      signed = data.commit.verification.verified;
    } catch (error) {
      errState = true;
      console.error("Error:", error);
    }
  }

  onMount(() => {
    fetchLatestCommit();
  });
</script>

<svelte:head>
  <title>Evarody is offline</title>
  <meta name="description" content="The webmaster is currently working on the site. Or is he?" />
</svelte:head>

<main class="px-6 py-12 max-w-[900px] mx-auto">
  <div
    class="relative w-full h-24 sm:h-56 md:h-64 mt-32 md:mt-40 rounded-lg overflow-hidden shadow-md"
  >
    <img
      src={banner}
      alt="Banner"
      loading="lazy"
      class="absolute inset-0 w-full h-full object-cover object-top"
    />
    <div class="absolute inset-0 bg-[#1e1f88] mix-blend-overlay"></div>
    <div
      class="absolute bottom-2 right-3 backdrop-blur-sm bg-black/30 text-[11px] text-xs lg:text-sm text-zinc-100 px-2 py-1 rounded shadow"
    >
      <a
        href="https://x.com/PainDude_Wu/status/1774128286467252309"
        target="_blank"
        rel="noopener noreferrer"
        class="text-white hover:underline hover:blur-[1px]"
      >
        PainDude_Wu on X
      </a>
    </div>
  </div>

  <header
    class="mt-8 text-3xl md:text-[40px] leading-[64px] md:leading-[72px] font-bold font-scanline"
  >
    What happened?
  </header>

  <section class="mb-10 text-base md:text-xl">
    If you see this page, it means the entire site is temporarily unavailable
    while the webmaster performs a complete overhaul of the codebase (or simply
    just redesigns it?).
  </section>

  <div class="h-32"></div>

  <section class="text-base md:text-xl">
    <p class="mb-4">
      Latest commit:
      {#if errState}
        <span class="text-red-500 italic">fetch failed.</span>
      {:else if latestHash}
        <a
          href={`https://github.com/gusase/evarody/commit/${latestHash}`}
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline"
        >
          <span
            class="{signed
              ? 'text-green-500'
              : 'text-red-500'} hover:blur-[1px]"
          >
            {latestHash}
          </span>
        </a>
        {#if resTime !== null}
          <span class="text-xs text-zinc-400 -ml-1.5">({resTime} ms)</span>
        {/if}
      {:else}
        <span class="text-gray-400 italic">loading...</span>
      {/if}
    </p>
  </section>
</main>
