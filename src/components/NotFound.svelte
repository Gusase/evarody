<script lang="ts">
  import Layout from "@/components/Layout.svelte";
  import Heading from "@/components/Heading.svelte";
  import Link from "@/components/Link.svelte";
</script>

<svelte:head>
  <title>Not Found</title>
</svelte:head>

<Layout>
  <Heading>
    <span slot="header">Page Not Found</span>
    <span slot="subheader"
      >The content you are looking for may have been moved or removed. You can go now..</span
    >
  </Heading>

  <Link href="/" text="Go to home page" /> 
</Layout>
