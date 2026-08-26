// Generates the pixel textures the Minecraft-style UI needs.
// Everything here is drawn from scratch — no Mojang assets are copied.
// Run with `npm run textures`; output lands in public/textures/.
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "public", "textures");

function crc32(buf) {
  let c, table = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  let crc = 0xffffffff;
  for (const b of buf) crc = table[(crc ^ b) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

/** pixels: (x,y) => [r,g,b] */
function writePng(file, size, pixels) {
  const raw = Buffer.alloc((size * 3 + 1) * size);
  let o = 0;
  for (let y = 0; y < size; y++) {
    raw[o++] = 0; // filter: none
    for (let x = 0; x < size; x++) {
      const [r, g, b] = pixels(x, y);
      raw[o++] = r; raw[o++] = g; raw[o++] = b;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;   // bit depth
  ihdr[9] = 2;   // truecolour
  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
  mkdirSync(OUT, { recursive: true });
  writeFileSync(resolve(OUT, file), png);
  return png.length;
}

// Deterministic PRNG so regenerating never produces a spurious diff.
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function noiseTile(file, size, palette, seed) {
  const rnd = mulberry32(seed);
  const grid = [];
  for (let i = 0; i < size * size; i++) {
    grid.push(palette[Math.floor(rnd() * palette.length)]);
  }
  return writePng(file, size, (x, y) => grid[y * size + x]);
}

// Dirt: the darkened menu backdrop. Muted so white text stays readable over it.
const dirt = [
  [0x6b, 0x4d, 0x35], [0x74, 0x53, 0x39], [0x5f, 0x45, 0x2f],
  [0x7d, 0x5a, 0x3e], [0x67, 0x4a, 0x33], [0x55, 0x3d, 0x2a],
];
// Stone: panel fills and the inventory slot grid.
const stone = [
  [0x7a, 0x7a, 0x7a], [0x82, 0x82, 0x82], [0x71, 0x71, 0x71],
  [0x88, 0x88, 0x88], [0x6b, 0x6b, 0x6b],
];

const a = noiseTile("dirt.png", 16, dirt, 20260826);
const b = noiseTile("stone.png", 16, stone, 71177);
console.log(`textures written → public/textures/  dirt.png ${a}B  stone.png ${b}B`);
