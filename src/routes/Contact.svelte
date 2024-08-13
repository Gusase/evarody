<script lang="ts">
  import Layout from "@/components/Layout.svelte";
  import Heading from "@/components/Heading.svelte";
  import { publicKeys, emailAddresses } from "@/lib/data/contact";
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
          <Link href={social.link} text={social.platform} isExternal={true} />
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
    <div class="space-y-px">
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
    {#each publicKeys as key, i (key.name)}
      <span
        class="text-sw font-medium text-zinc-800 transition hover:text-zinc-500 dark:text-zinc-200 dark:hover:text-zinc-500 font-mona75"
      >
        <button
          title="Copy public key"
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
</Layout>
