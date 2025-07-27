<script lang="ts">
  import Layout from "@/components/Layout.svelte";
  import SocialMedia from "@/components/SocialMedia.svelte";
  import profile from "@/assets/avatar.png";
</script>

<svelte:head>
  <title>Home - Evarody</title>
  <link rel="preload" href={profile} as="image" />
</svelte:head>

<Layout>
  <div class="mx-auto flex flex-col justify-center items-center h-full">
    <div class="w-full space-y-3.5 md:space-y-5">
      <img
        class="size-40 mx-auto rounded-full ring ring-gray-600"
        src={profile}
        alt="Profile section"
        loading="lazy"
        draggable="false"
      />
      <h1
        class="mt-5 text-2xl md:text-3xl dark:text-white text-black text-center font-bold font-scanline"
      >
        Gusesa Abida Ghifar
      </h1>
      <p
        class="text-gray-800/85 text-sm md:text-base dark:text-gray-300/85 text-center whitespace-pre-line leading-[1.475] w-11/12 md:w-9/12 mx-auto"
      >
        I like computers (well, kind of), music, and snacks. This site is just a space for me to try out new things randomly.
        I'm still trying to get my stuff together. Also, this site was never really finished, ended up in WIP forever.
      </p>
      <SocialMedia />
    </div>
  </div>
</Layout>
