<script lang="ts">
  import Layout from "../components/Layout.svelte";
  import Heading from "../components/Heading.svelte";
  import Link from "../components/Link.svelte";
</script>

<Layout>
  <Heading>
    <span slot="header">Personal Blog.</span>
    <span slot="subheader">~</span>
  </Heading>
  
  <Link label="Evarolog" url="https://evarolog.vercel.app" linkIcon={true} />
</Layout>
