import { defineConfig } from "rollup";
import terser from "@rollup/plugin-terser";

const input = "src/index.js";
const outDir = "dist/rollup";
/**
 *
 * @param {'cjs' | 'esm' | 'umd' | 'iife'} type
 */
const extname = (type) => {
  switch (type) {
    case "esm":
      return "mjs";
    case "cjs":
    case "umd":
    case "iife":
      return "cjs";
  }
};
/**
 *
 * @param {'cjs' | 'esm' | 'umd' | 'iife'} type
 */
const filename = (type) => {
  return `bundle.[format].${extname(type)}`;
};

export default defineConfig([
  {
    input,
    output: {
      dir: outDir,
      entryFileNames: filename("cjs"),
      format: "cjs",
    },
    plugins: [
      terser({
        ecma: 2021,
        module: true,
        warnings: true,
      }),
    ],
  },
  {
    input,
    output: {
      dir: outDir,
      entryFileNames: filename("esm"),
      format: "esm",
    },
    plugins: [
      terser({
        ecma: 2021,
        module: true,
        warnings: true,
      }),
    ],
  },
  {
    input,
    output: {
      dir: outDir,
      entryFileNames: filename("umd"),
      format: "umd",
    },
    plugins: [
      terser({
        ecma: 2021,
        module: true,
        warnings: true,
      }),
    ],
  },
  {
    input,
    output: {
      dir: outDir,
      entryFileNames: filename("iife"),
      format: "iife",
    },
    plugins: [
      terser({
        ecma: 2021,
        module: true,
        warnings: true,
      }),
    ],
  },
]);
