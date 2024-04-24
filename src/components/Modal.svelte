<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  const dispatch = createEventDispatcher();

  export let src: string;
</script>

<!-- this modal onlu for avatar image -->
<div
  class="relative z-10"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
  transition:fade={{ delay: 50, duration: 100 }}
>
  <div
    class="fixed inset-0 bg-gray-600 bg-opacity-75 backdrop-blur-sm transition-opacity"
  ></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div
      class="flex min-h-full justify-center p-4 text-center items-center sm:p-0 flex-col gap-y-4 sm:gap-y-0"
    >
      <div
        class="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
      >
        <div class="bg-white dark:bg-gray-900 p-4 sm:p-6">
          <img
            class="shadow-lg mx-auto size-full max-w-full animate-landing dark:shadow-gray-800/85"
            {src}
            alt="/_"
            loading="lazy"
            draggable="false"
          />
        </div>
      </div>
      <button
        on:click={() => dispatch("closeModal")}
        type="button"
        class="bg-gray-100 text-black dark:text-gray-100 dark:bg-gray-800 hover:scale-125 transition-all hover:rotate-180 p-5 rounded-full"
      >
        <span class="sr-only">Close</span>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
