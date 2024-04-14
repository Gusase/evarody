<script lang="ts">
  import Layout from "../components/Layout.svelte";
  import Heading from "../components/Heading.svelte";
  import Link from "./Link.svelte";
</script>

<Layout>
  <Heading>
    <span slot="header">Page Not Found.</span>
    <span slot="subheader"
      >The content you are looking for may have been moved or removed.</span
    >
  </Heading>

  <Link label="Home" url="/" linkIcon={false} />
</Layout>
