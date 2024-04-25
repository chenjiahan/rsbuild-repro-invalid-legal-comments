import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  output: {
    filename: {
      js: "[name].js?[contenthash:8]",
    },
  },
});
