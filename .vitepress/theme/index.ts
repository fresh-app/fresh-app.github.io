import DefaultTheme from "vitepress/theme";
import MyLayout from "./MyLayout.vue";
import GeneratorLinks from "./GeneratorLinks.vue";
import GeneratorResult from "./GeneratorResult.vue";
import "./custom.css";
import "@vscode/codicons/dist/codicon.css";

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    console.log("Whee!");
    app.component("GeneratorLinks", GeneratorLinks);
    app.component("GeneratorResult", GeneratorResult);
  },
};
