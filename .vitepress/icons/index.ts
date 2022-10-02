import AstroDark from "./astro-dark.svg";
import AstroLight from "./astro-light.svg";
import Next from "./next.png";
import Playwright from "./playwright.svg";
import CRA from "./cra.svg";
import Redwood from "./redwood.svg";
import RemixDark from "./remix-dark.svg";
import RemixLight from "./remix-light.svg";
import RushDark from "./rush-dark.svg";
import RushLight from "./rush-light.svg";
import Solid from "./solid.svg";
import Svelte from "./svelte.png";
import T3 from "./t3.svg";
import TSDX from "./tsdx.png";
import Vite from "./vite.svg";
import VSCode from "./vscode.png";
import Yarn from "./yarn.svg";

function getIcon(name: string): string | [string, string] {
  if (name.includes("astro")) {
    return [AstroDark, AstroLight];
  }
  if (name.includes("next")) {
    return Next;
  }
  if (name.includes("playwright")) {
    return Playwright;
  }
  if (name.includes("fresh-react-app")) {
    return CRA;
  }
  if (name.includes("redwood")) {
    return Redwood;
  }
  if (name.includes("remix")) {
    return [RemixDark, RemixLight];
  }
  if (name.includes("rush")) {
    return [RushDark, RushLight];
  }
  if (name.includes("solid")) {
    return Solid;
  }
  if (name.includes("sveltekit")) {
    return Svelte;
  }
  if (name.includes("t3")) {
    return T3;
  }
  if (name.includes("tsdx")) {
    return TSDX;
  }
  if (name.includes("vite")) {
    return Vite;
  }
  if (name.includes("vscode")) {
    return VSCode;
  }
  if (name.includes("yarn")) {
    return Yarn;
  }
  return "";
}

export function getIconStyle(name: string): string {
  const icon = getIcon(name);
  if (Array.isArray(icon)) {
    return `--icon-dark: url(${icon[0]}); --icon-light: url(${icon[1]});`;
  }
  return `--icon-dark: url(${icon}); --icon-light: url(${icon});`;
}
