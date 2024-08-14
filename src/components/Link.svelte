<script lang="ts">
  export let href: string;
  export let text: string;
</script>

<a
  {href}
  class="flex items-center text-sm font-medium underline decoration-transparent hover:decoration-white underline-offset-2 text-zinc-800 transition hover:text-zinc-300 dark:text-zinc-200 dark:hover:text-zinc-300/85"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>{text}</span>
</a>
