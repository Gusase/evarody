<script lang="ts">
  import Layout from "@/components/Layout.svelte";
  import Heading from "@/components/Heading.svelte";
  import { publicKeys, emailAddresses } from "@/lib/data/contact";

  let coppied: boolean = false;

  const clipboard = async (val: string) => {
    await navigator.clipboard.writeText(val);
    coppied = true;
    setTimeout(() => {
      coppied = false;
    }, 3000);
  };
</script>

<Layout>
  <Heading>
    <span slot="header">Contact</span>
    <span slot="subheader"
      >{coppied ? "Copied to clipboard!" : "Get in touch."}</span
    >
  </Heading>

  <div>
    <h3
      class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
    >
      Mailto
    </h3>
    <div class="space-y-px">
      {#each emailAddresses as email}
        <a
          class="flex text-sm font-medium underline underline-offset-2 text-zinc-800 transition hover:text-zinc-500 dark:text-zinc-200 dark:hover:text-zinc-500"
          href="mailto:{email}"><span>{email}</span></a
        >
      {/each}
    </div>
  </div>

  <div class="border-t border-zinc-100 pt-6 mt-6 dark:border-zinc-700/40">
    <h3
      class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
    >
      Keys
    </h3>
    {#each publicKeys as key, i (key.name)}
      <span
        class="text-sw font-medium text-zinc-800 transition hover:text-zinc-500 dark:text-zinc-200 dark:hover:text-zinc-500 font-mona75"
      >
        <button
          title="Copy public key"
          class="ml-auto active:*:fill-white/90 hover:*:stroke-gray-800 focus:*:fill-white/90 hover:*:fill-white/90"
          on:click={() => {
            clipboard(key.value);
          }}
        >
          <span class="underline underline-offset-2">{key.name}</span>
          {#if i < publicKeys.length - 1}
            |
          {/if}
        </button>
      </span>
    {/each}
  </div>
  <img
    src="https://counter.lunoxia.net/get/@gusase?theme=rule34"
    class="w-80 mx-auto !mt-14 block md:hidden"
    alt="Thanks to lunoxia.net for this counter /_\\"
    loading="lazy"
  />
</Layout>
