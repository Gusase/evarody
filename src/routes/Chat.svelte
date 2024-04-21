<script lang="ts">
  import Layout from "@/components/Layout.svelte";
  import Heading from "@/components/Heading.svelte";
  import Meta from "@/components/META.svelte";
  import { createClient } from "@supabase/supabase-js";
  import { type Database, type Chat } from "@/lib/database-type";
  import { onMount } from "svelte";
  import moment from "moment";

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const db = createClient<Database>(supabaseUrl, supabaseKey);

  let chats: Chat[] = [];
  let postd: boolean = false;
  let newMessage: string = "";
  let username: string = "";

  const fetchChats = async () => {
    try {
      const { data, error } = await db.from("chats").select("*");
      if (error) throw console.error(error);
      chats = [...data];
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  const insertChat = async () => {
    try {
      if (newMessage) {
        postd = true;
        const { data, error } = await db
          .from("chats")
          .insert([{ username: username || "Guest", text: newMessage }])
          .select();
        if (error) throw console.error(error);
        [newMessage, username] = "";
        if (data) postd = false;
        chats = [...chats, data?.[0]];
      } else {
        alert("Ha!");
      }
    } catch (error) {
      console.error("Error inserting chat:", error);
    }
  };

  onMount(async (): Promise<any> => {
    await fetchChats();
    const realtime = db
      .channel("room1")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "chats" },
        (payload) => {
          console.log("Change received!", payload);
        }
      )
      .subscribe();
    return () => {
      realtime.unsubscribe();
    };
  });
</script>

<Meta title="Chats" />

<Layout>
  <Heading>
    <span slot="header">Chats.</span>
    <span slot="subheader">Be carefull cz there's no delete button</span>
  </Heading>

  {#if chats.length == 0}
    <p class="text-gray-900 dark:text-white">Fetching...</p>
  {/if}

  {#each chats as chat}
    <span class="inline-block mt-1.5 -mb-1 text-sm text-gray-900/70 dark:text-white/70">{moment(chat.created_at).format("LL")}</span
    >
    <div class="flex flex-wrap">
      {chat.username}:&nbsp;
      {chat.text}
    </div>
  {/each}

  <form on:submit|preventDefault={insertChat}>
    <div
      class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 mt-5"
    >
      <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
        <div class="mb-4 mt-2">
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your name</label
          >
          <input
            type="text"
            name="name"
            bind:value={username}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <label for="comment" class="text-gray-900 dark:text-white">Your comment: {newMessage}</label>
        <textarea
          bind:value={newMessage}
          id="comment"
          rows="4"
          class="w-full p-1.5 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <div
        class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600"
      >
        <button
          on:click={() => {
            insertChat;
          }}
          disabled={postd}
          type="submit"
          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center disabled:opacity-50 text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Post comment
        </button>
      </div>
    </div>
  </form>
</Layout>
