<script lang="ts">
  import { socials } from "../lib/data/social";
</script>

<div class="mt-5 flex justify-center">
  {#each socials as social}
    <a
      class="mx-2 group"
      href={social.link}
      target="_blank"
      aria-label={social.txt}
      ><img
        class="size-8 group-last:size-7 group-last:mt-px invert dark:invert-0"
        src={social.src}
        alt={social.txt}
      /></a
    >
  {/each}
</div>
