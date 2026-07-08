// Rewrites the static export's absolute asset paths to relative ones so any
// exported page also renders when opened directly from disk (file://), not
// just over HTTP. Depth-aware: out/work/index.html gets "../" prefixes.
// Note: cross-page navigation still needs HTTP; this only keeps each page
// rendering (styles, fonts, images) when opened as a file.
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = "out";

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

let touched = 0;
for (const file of walk(OUT)) {
  let text;
  if (file.endsWith(".html")) {
    const depth = relative(OUT, file).split(sep).length - 1;
    const prefix = depth > 0 ? "../".repeat(depth) : "./";
    text = readFileSync(file, "utf8")
      .replaceAll('"/_next/', `"${prefix}_next/`)
      .replaceAll("/headshot.jpg", `${prefix}headshot.jpg`)
      .replaceAll("/resume.pdf", `${prefix}resume.pdf`)
      .replaceAll('"/icon.svg', `"${prefix}icon.svg`);
  } else if (file.endsWith(".css")) {
    // Font files live in _next/static/media/, CSS in _next/static/css/.
    text = readFileSync(file, "utf8").replaceAll(
      "/_next/static/media/",
      "../media/"
    );
  } else if (file.endsWith(".js")) {
    // Webpack public path, used for any runtime chunk loading.
    const orig = readFileSync(file, "utf8");
    text = orig.replaceAll('"/_next/"', '"./_next/"');
    if (text === orig) continue;
  } else {
    continue;
  }
  writeFileSync(file, text);
  touched++;
}
console.log(`make-relative: rewrote ${touched} files in ${OUT}/`);
