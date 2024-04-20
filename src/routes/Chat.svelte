<script lang="ts">
  import Layout from "@/components/Layout.svelte";
  import Heading from "@/components/Heading.svelte";
  import Meta from "@/components/META.svelte";
  // XYhjLitdqaH4WES1
  import { createClient } from "@supabase/supabase-js";
  import { type Database, type Chat } from "@/lib/database-type";
  import { onMount } from "svelte";

  const supabaseUrl = "https://vmiwemazahrqqzwldjph.supabase.co";
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

  const db = createClient<Database>(supabaseUrl, supabaseKey);
  let chats: Chat[] = [];
  let postd: boolean = false;
  let newMessage: string = "";

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
          .insert([{ username: "Rei", text: newMessage }])
          .select();
        if (error) throw console.error(error);
        newMessage = "";
        if (data) postd = false;
        chats = [...chats, data?.[0]]; //
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

<Meta title="Mark" />

<Layout>
  <Heading>
    <span slot="header">Chats.</span>
    <span slot="subheader">Mark your existence here</span>
  </Heading>

  {#each chats as chat}
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
        <label for="comment" class="">Your comment: {newMessage}</label>
        <textarea
          bind:value={newMessage}
          id="comment"
          rows="4"
          class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
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
