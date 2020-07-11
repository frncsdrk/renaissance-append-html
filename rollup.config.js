import coffee from 'rollup-plugin-coffee-script'
import pkg from "./package.json"

export default [
  {
    input: "src/Adapter.coffee",
    output: {
      file: pkg.main,
      format: "cjs",
    },
    plugins: [
      coffee()
    ]
  },
  {
    input: "src/Adapter.coffee",
    output: {
      file: pkg.module,
      format: 'es'
    },
    plugins: [
      coffee()
    ]
  }
];
