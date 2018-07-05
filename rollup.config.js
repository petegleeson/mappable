import pkg from "./package.json";
import babel from "rollup-plugin-babel";

// rollup.config.js
export default {
  input: "src/index.js",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
    {
      name: "map",
      file: pkg.browser,
      format: "umd"
    }
  ],
  plugins: [
    babel({
      exclude: "node_modules/**"
    })
  ]
};
