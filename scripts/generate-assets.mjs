// One-shot asset generation: PNG OG image + apple-touch-icon from SVG sources.
// Run on demand: `node scripts/generate-assets.mjs`
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pub = (p) => resolve(root, "public", p);

const og = readFileSync(pub("og.svg"));
await sharp(og, { density: 192 })
  .resize(1200, 630, { fit: "fill" })
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(pub("og.png"));
console.log("✓ og.png");

const fav = readFileSync(pub("favicon.svg"));
await sharp(fav, { density: 384 })
  .resize(180, 180, { fit: "fill" })
  .png({ quality: 92, compressionLevel: 9 })
  .toFile(pub("apple-touch-icon.png"));
console.log("✓ apple-touch-icon.png");
