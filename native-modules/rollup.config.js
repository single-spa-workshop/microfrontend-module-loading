import path from "path";
import { babel } from "@rollup/plugin-babel";

export default [
  {
    input: path.resolve(process.cwd(), "./native-modules/app1.js"),
    output: {
      dir: path.resolve(process.cwd(), "./native-modules/dist"),
      format: "es",
    },
    external: ["react", "react-dom", "styleguide"],
    plugins: [babel({ babelHelpers: "bundled" })],
  },
  {
    input: path.resolve(process.cwd(), "./native-modules/app2.js"),
    output: {
      dir: path.resolve(process.cwd(), "./native-modules/dist"),
      format: "es",
    },
    external: ["react", "react-dom", "styleguide"],
    plugins: [babel({ babelHelpers: "bundled" })],
  },
  {
    input: path.resolve(process.cwd(), "./native-modules/styleguide.js"),
    output: {
      dir: path.resolve(process.cwd(), "./native-modules/dist"),
      format: "es",
    },
    external: ["react", "react-dom"],
    plugins: [babel({ babelHelpers: "bundled" })],
  },
];
