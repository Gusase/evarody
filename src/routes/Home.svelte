<script lang="ts">
  import Layout from "@/components/Layout.svelte";
  import SocialMedia from "@/components/SocialMedia.svelte";
  import profile from "@/assets/avatar.jpg";
  import { yo as age } from "@/lib/data/age";
</script>

<svelte:head>
  <link rel="preload" href={profile} as="image" />
</svelte:head>

<Layout>
  <div
    class="mx-auto flex flex-col justify-center items-center h-full"
  >
    <div class="w-full space-y-3.5 md:space-y-5">
      <img
        class="size-40 mx-auto rounded-full ring ring-gray-600"
        src={profile}
        alt="my pfp"
        loading="lazy"
        draggable="false"
      />
      <h1
        class="mt-5 text-2xl md:text-3xl dark:text-white text-black text-center font-bold"
      >
        Gusesa Abida Ghifar
      </h1>
      <p
        class="text-gray-800/85 text-sm md:text-base dark:text-gray-300/85 text-center whitespace-pre-line"
      >
        {age()} y'o Informatics Engineering student.
        (UTC+7)
      </p>
      <SocialMedia />
    </div>
  </div>
</Layout>
