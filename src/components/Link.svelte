<script lang="ts">
  export let href: string;
  export let text: string;
</script>

<a
  {href}
  class="inline-flex items-center text-sm font-medium border-b border-zinc-400/85 dark:border-zinc-500/85 hover:border-zinc-800 dark:hover:border-zinc-200 text-zinc-800 transition hover:text-zinc-500/85 dark:text-zinc-200 dark:hover:text-zinc-300/85"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>{text}</span>
</a>
