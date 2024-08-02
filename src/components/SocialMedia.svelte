<script lang="ts">
  import { socials } from "@/lib/data/social";
</script>

<div class="mt-5 flex justify-center">
  {#each Object.entries(socials) as [platform, social]}
    {#if social.visibleOnMainpage}
      <a 
        class="mx-2 group"
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={platform}
      >
        <img
          class="size-6 invert-0 dark:invert transition hover:opacity-45"
          src={social.src}
          alt={platform}
        />
      </a>
    {/if}
  {/each}
</div>
