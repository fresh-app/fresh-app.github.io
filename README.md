# fresh-app.github.io

[Fresh App Factory’s website.](https://fresh-app.github.io)

See the header above? Yeah it’s a bit misleading. This project initially started as [an Astro site](https://github.com/fresh-app/fresh-astro-project), but then I figured out that I don’t want to spend any time on designing the website, so I switched to [VitePress](https://github.com/fresh-app/fresh-vitepress-site) and just use its default theme.

[![](https://github.com/dtinth/timelapse/raw/master/projects/fresh-app-factory_home.png)](https://fresh-app.github.io)

## How to develop this project

- Install deps
   ```
   yarn
   ```
- Load latest build data
   ```
   yarn tsx scripts/load.ts
   ```
- Generate page files
   ```
   yarn tsx scripts/generate.ts
   ```
- Start development server
   ```
   yarn dev
   ```
