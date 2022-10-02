import { defineConfig } from "vitepress";
import sidebar from "./sidebar.json";

export default defineConfig({
  title: "Fresh App Factory",
  description: "We produce freshly-baked apps every midnight",

  themeConfig: {
    sidebar,
  },
});
