<script lang="ts">
  import Layout from "../components/Layout.svelte";
  import SocialMedia from "../components/SocialMedia.svelte";
  import profile from "../assets/avatar.jpg";
  import Modal from "../components/Modal.svelte";
  let openModal: boolean;
</script>

<svelte:head>
  <link rel="preload" href={profile} as="image" />
</svelte:head>

<Layout>
  <div
    class="mx-auto max-w-2xl lg:max-w-5xl flex flex-col justify-center items-center min-h-[calc(100vh-96px)]"
  >
    <div class="max-w-2xl space-y-3.5 md:space-y-5">

      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        class="size-40 mx-auto rounded-full animate-landing cursor-pointer ring ring-gray-600 hover:ring-gray-800 active:scale-[0.98] transition-all"
        src={profile}
        alt="/_"
        loading="lazy"
        on:click={() => (openModal = !openModal)}
      />
      <h1
        class="mt-5 text-3xl md:text-4xl dark:text-white text-black text-center font-bold"
      >
        Gusesa Abida Ghifar
      </h1>
      <p class="text-gray-800/85 dark:text-gray-300/85 text-center">
        17 y-o Bekasi, Indonesia (UTC +07:00).
      </p>
      <SocialMedia />
    </div>
  </div>

  {#if openModal}
    <Modal src={profile} on:closeModal={() => (openModal = !openModal)} />
  {/if}
</Layout>
