import { readFileSync, writeFileSync } from "fs";
import glob from "glob";

const items: { text: string; link: string }[] = [];
const list: {
  name: string;
  href: string;
}[] = [];

for (const f of glob.sync(".data/results/*.json")) {
  const result = JSON.parse(readFileSync(f, "utf8"));
  console.log(result.generator);
  const frontmatter = {
    layout: "app",
    title: result.generator,
    result,
  };
  writeFileSync(
    result.generator + ".md",
    [
      "---",
      JSON.stringify(frontmatter, null, 2),
      "---",
      "# " + result.generator,
      "",
      result.description,
      "",
      `<GeneratorLinks name="${result.generator}" />`,
      "",
      "## Result",
      "",
      "<GeneratorResult />",
      "",
    ].join("\n")
  );
  items.push({
    text: result.generator,
    link: `/${result.generator}.html`,
  });
  list.push({
    name: result.generator,
    href: `/${result.generator}.html`,
  });
}

const sidebar = [
  {
    text: "Templates",
    items,
  },
];

writeFileSync(".vitepress/sidebar.json", JSON.stringify(sidebar, null, 2));
writeFileSync(".vitepress/list.json", JSON.stringify(list, null, 2));
