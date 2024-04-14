<script lang="ts">
  import Layout from "../components/Layout.svelte";
  import SocialMedia from "../components/SocialMedia.svelte";
  import profile from "../assets/avatar.jpg";
</script>

<svelte:head>
  <link rel="preload" href={profile} as="image" />
</svelte:head>

<Layout>
  <div
    class="mx-auto max-w-2xl lg:max-w-5xl flex flex-col justify-center items-center min-h-[calc(100vh-96px)]"
  >
    <div class="max-w-2xl space-y-3.5 md:space-y-5">
      <img
        class="size-40 mx-auto rounded-full"
        src={profile}
        alt="/_"
        loading="lazy"
      />
      <h1 class="mt-5 text-3xl md:text-4xl text-white text-center font-bold">
        Gusesa Abida Ghifar
      </h1>
      <p class="text-gray-300/85 text-center">
        17 y-o Bekasi, Indonesia (UTC +07:00).
      </p>
      <SocialMedia />
    </div>
  </div>
</Layout>
