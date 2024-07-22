import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist/vite",
    // minify: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(import.meta.dirname, "../src/index.js"),
      name: "MyLib",
      fileName: "bundle",
      formats: ["es", "cjs", "umd", "iife"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      //   output: {
      //     globals: {
      //     },
      //   },
    },
  },
});
