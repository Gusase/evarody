import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { fileURLToPath, URL } from "url";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  /* the rest of the config is omitted for brevity */
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@routes",
        replacement: fileURLToPath(new URL("./src/routes", import.meta.url)),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
      {
        find: "@components",
        replacement: fileURLToPath(new URL("./src/components", import.meta.url)),
      },
      {
        find: "@lib",
        replacement: fileURLToPath(new URL("./src/lib", import.meta.url)),
      },
    ],
  },
  plugins: [svelte()],
});
