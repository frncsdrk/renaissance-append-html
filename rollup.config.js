import pkg from "./package.json";

export default [
  {
    input: "src/Adapter.js",
    output: {
      file: pkg.main,
      format: "cjs",
    },
  },
  {
    input: "src/Adapter.js",
    output: {
      file: pkg.module,
      format: 'es'
    }
  },
];
