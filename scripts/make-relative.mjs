// Rewrites the static export's absolute /_next/ asset paths to relative ones
// so out/index.html also renders when opened directly from disk (file://),
// not just over HTTP. Runs automatically after `next build`.
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

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
    text = readFileSync(file, "utf8").replaceAll('"/_next/', '"./_next/');
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
