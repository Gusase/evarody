<script lang="ts">
  import Layout from "@/components/Layout.svelte";
  import Heading from "@/components/Heading.svelte";
</script>

<Layout>
  <Heading>
    <span slot="header">Page Not Found</span>
    <span slot="subheader"
      >The content you are looking for may have been moved or removed.</span
    >
  </Heading>

  <a
    class="flex text-sm font-medium underline underline-offset-2 text-zinc-800 transition hover:text-zinc-500 dark:text-zinc-200 dark:hover:text-zinc-500"
    href="/"><span>Go to home page</span></a
  >
</Layout>
