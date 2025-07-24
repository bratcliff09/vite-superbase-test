import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));
/*
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html'),
      },
    },
  },
})
  */

export default defineConfig({
  base: "/vite-superbase-test/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        second: resolve(__dirname, "second.html"),
      },
    },
  },
});
