<script lang="ts">
  import Layout from "@/components/Layout.svelte";
  import Heading from "@/components/Heading.svelte";
  import { publicKey, emailAddresses } from "@/lib/data/contact";
  import { socials } from "@/lib/data/social";
  import Link from "@/components/Link.svelte";

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
      Others
    </h3>
    <div class="space-y-px">
      {#each socials as social}
        {#if !social.visibleOnMainpage}
          <div class="flex items-center gap-x-1.5">
            <img
              src={social.src}
              alt={`${social.platform} icon`}
              class="w-3 h-3 invert-0 dark:invert transition group-hover:opacity-45"
            />
            <Link href={social.link} text={social.platform} />
          </div>
        {/if}
      {/each}
    </div>
  </div>
  <div>
    <h3
      class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 border-t border-zinc-100 pt-6 mt-6 dark:border-zinc-700/40"
    >
      Mailto
    </h3>
    <div class="inline-flex flex-col">
      {#each emailAddresses as email}
        <Link href="mailto:{email}" text={email} />
      {/each}
    </div>
  </div>

  <div class="border-t border-zinc-100 pt-6 mt-6 dark:border-zinc-700/40">
    <h3
      class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
    >
      Keys
    </h3>
    <span class="text-xs font-medium">
      <button
        title="Copy public key"
        on:click={() => {
          clipboard(publicKey.value);
        }}
      >
        <span
          class="border-b border-zinc-400/85 dark:border-zinc-500/85 hover:border-zinc-800 dark:hover:border-zinc-200 text-zinc-800 transition hover:text-zinc-500/85 dark:text-zinc-200 dark:hover:text-zinc-300/85"
          >{publicKey.name}</span
        >
      </button>
    </span>
  </div>
</Layout>
