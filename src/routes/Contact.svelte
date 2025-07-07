<script lang="ts">
  import Layout from "@/components/Layout.svelte";
  import Heading from "@/components/Heading.svelte";
  import { emailAddresses } from "@/lib/data/contact";
  import { socials } from "@/lib/data/social";
  import Link from "@/components/Link.svelte";
</script>

<svelte:head>
  <title>Contact • Evarody</title>
</svelte:head>

<Layout>
  <Heading>
    <span slot="header">Contact</span>
    <span slot="subheader">
      Looking for a way to reach me? Here's the place. (Don't waste your time.)
    </span>
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
          <div class="flex items-center gap-x-1.5 group">
            <img
              src={social.src}
              alt={`${social.platform} icon`}
              class="w-3 h-3 invert-0 dark:invert transition group-hover:opacity-45 group-hover:blur-[1px]"
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
    <p class="text-gray-500 italic dark:text-gray-400 mt-2 text-sm">Currently unavailable.</p>
  </div>
</Layout>
