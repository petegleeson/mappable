import pkg from "./package.json";
// rollup.config.js
export default {
  input: "src/index.js",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" }
  ]
};
