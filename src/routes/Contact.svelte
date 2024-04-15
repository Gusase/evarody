<script lang="ts">
  import Layout from "../components/Layout.svelte";
  import Heading from "../components/Heading.svelte";
  import { publicKey, emailAddress } from "../lib/data/contact";

  let coppied: boolean, expanded: boolean = false;

  const clipboard = async (val: string) => {
    await navigator.clipboard.writeText(val);
    coppied = true;
    setTimeout(() => {
      coppied = false;
    }, 3000);
  };
</script>

<Layout>
  <Heading>
    <span slot="header">Contact</span>
    <span slot="subheader">{coppied ? "Copied to clipboard!" : "~"}</span>
  </Heading>

  <div class="space-y-3">
    <div
      class="p-5 bg-gray-300/90 dark:bg-black/90 shadow-sm rounded shadow-gray-700/80 dark:shadow-gray-500 w-full md:w-fit max-w-full"
    >
      <h5
        class="mb-0 md:mb-2 text-black dark:text-white inline-flex items-center font-mona75 text-2xl w-full"
      >
        <span>Email</span>

        <button
          title="Copy email address"
          class="ml-auto active:*:fill-white/90 hover:*:stroke-gray-800 focus:*:fill-white/90 hover:*:fill-white/90"
          on:click={() => {
            clipboard(emailAddress);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
            />
          </svg>
        </button>
      </h5>
      <p class="text-gray-950 dark:text-gray-300 hidden md:block">
        {emailAddress}
      </p>
    </div>

    <div
      class="p-5 bg-gray-300/90 dark:bg-black/90 shadow-sm rounded shadow-gray-700/80 dark:shadow-gray-500 w-full md:w-fit max-w-full"
    >
      <h5
        class="mb-0 md:mb-2 text-black dark:text-white inline-flex items-center font-mona75 text-2xl w-full"
      >
        <span>PGP Public Key</span>
        <button
          title="Copy public key"
          class="ml-auto active:*:fill-white/90 hover:*:stroke-gray-800 focus:*:fill-white/90 hover:*:fill-white/90"
          on:click={() => {
            clipboard(publicKey);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
            />
          </svg>
        </button>
      </h5>

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <p
        on:click={() => {
          expanded = !expanded;
        }}
        class="text-gray-950 cursor-pointer dark:text-gray-300 max-md:hidden {!expanded
          ? 'line-clamp-[14]'
          : 'block'}"
        style="white-space: pre-line;"
      >
        {publicKey}
      </p>
    </div>

    <img
      src="https://counter.lunoxia.net/get/@evarody_?theme=rule34"
      class="w-80 mx-auto !mt-14 block md:hidden"
      alt="Thanks to lunoxia.net for this counter /_\\"
      loading="lazy"
    />
  </div>
</Layout>
