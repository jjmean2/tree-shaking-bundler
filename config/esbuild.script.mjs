import * as esbuild from "esbuild";

const outDir = "dist/esbuild";

const base = {
  entryPoints: ["src/index.js"],
  bundle: true,
  minify: true,
  //   sourcemap: true,
  target: ["chrome58", "firefox57", "safari11", "edge16"],
};

esbuild.build({
  ...base,
  format: "cjs",
  outfile: `${outDir}/bundle.cjs.cjs`,
});
esbuild.build({
  ...base,
  format: "esm",
  outfile: `${outDir}/bundle.esm.mjs`,
});
esbuild.build({
  ...base,
  format: "iife",
  outfile: `${outDir}/bundle.iife.cjs`,
});
