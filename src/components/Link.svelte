<script lang="ts">
  export let href: string;
  export let text: string;
  export let isExternal: boolean = false;

  $: target = isExternal ? "_blank" : null;
  $: rel = isExternal ? "noopener noreferrer" : null;
</script>

<a
  href={href}
  class="flex items-center text-sm font-medium underline underline-offset-2 text-zinc-800 transition hover:text-zinc-500 dark:text-zinc-200 dark:hover:text-zinc-500 {isExternal
    ? 'pr-1'
    : ''}"
  target={target}
  rel={rel}
>
  <span>{text}</span>
  {#if isExternal}
    <svg
      class="w-3 h-3 ml-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      ></path>
    </svg>
  {/if}
</a>
