import * as R from "remeda";
import path from "path";
/**
 * @import { Configuration } from 'webpack';
 */
/**
 * @type {Configuration}
 */
const baseConfig = {
  mode: "production",
  optimization: {
    usedExports: true,
    sideEffects: true,
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(import.meta.dirname, "../dist/webpack"),
  },
};

/**
 *
 * @param {Configuration} baseConfig
 * @param {Configuration} config
 * @returns
 */
function mergeConfig(baseConfig, config) {
  return R.mergeDeep(baseConfig, config);
}

/**
 *
 * @param {'cjs' | 'esm' | 'umd' | 'window'} type
 */
const extname = (type) => {
  switch (type) {
    case "esm":
      return "mjs";
    case "cjs":
    case "umd":
    case "window":
      return "cjs";
  }
};
const filename = (type) => `bundle.${type}.${extname(type)}`;

/**
 * @type {import('webpack').Configuration[]}
 */
const config = (env, argv) => {
  console.log(env, argv);
  const mode = argv.mode || baseConfig.mode || "production";
  const isProduction = mode === "production";
  const devtool = !isProduction ? "inline-source-map" : undefined;
  return [
    mergeConfig(baseConfig, {
      devtool,
      output: {
        filename: filename("cjs"),
        library: {
          type: "commonjs",
        },
      },
    }),
    mergeConfig(baseConfig, {
      devtool,
      output: {
        filename: filename("umd"),
        library: {
          type: "umd",
        },
      },
    }),
    mergeConfig(baseConfig, {
      devtool,
      experiments: {
        outputModule: true,
      },
      output: {
        filename: filename("esm"),
        library: {
          type: "module",
        },
      },
    }),
    mergeConfig(baseConfig, {
      devtool,
      experiments: {
        outputModule: true,
      },
      output: {
        filename: filename("window"),
        library: {
          type: "window",
        },
      },
    }),
  ];
};

export default config;
