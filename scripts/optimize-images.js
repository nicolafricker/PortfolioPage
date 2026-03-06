#!/usr/bin/env node
/**
 * optimize-images.js
 *
 * Reads all JPEG images from public/img/Work/, moves originals to
 * public/img/Work/originals/ as backup, then produces:
 *   - A resized JPEG fallback (quality 85, longest side ≤ 1200px)
 *   - A WebP version (quality 82, same size constraint) with .webp extension
 *
 * Files already inside the "originals" subfolder are skipped.
 */

import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORK_DIR = path.join(__dirname, "..", "public", "img", "Work");
const ORIGINALS_DIR = path.join(WORK_DIR, "originals");
const MAX_SIDE = 1200;
const JPEG_QUALITY = 85;
const WEBP_QUALITY = 82;

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function main() {
  // Ensure the originals backup directory exists
  fs.mkdirSync(ORIGINALS_DIR, { recursive: true });

  // Collect JPEG files directly in WORK_DIR (not in subdirectories)
  const entries = fs.readdirSync(WORK_DIR, { withFileTypes: true });
  const jpegFiles = entries
    .filter(
      (e) =>
        e.isFile() && /\.(jpe?g)$/i.test(e.name)
    )
    .map((e) => e.name);

  if (jpegFiles.length === 0) {
    console.log("No JPEG files found in", WORK_DIR);
    return;
  }

  console.log(`Found ${jpegFiles.length} JPEG file(s) to process.\n`);

  const rows = [];

  for (const filename of jpegFiles) {
    const srcPath = path.join(WORK_DIR, filename);
    const backupPath = path.join(ORIGINALS_DIR, filename);

    const originalSize = fs.statSync(srcPath).size;

    // Move original to backup folder
    fs.copyFileSync(srcPath, backupPath);

    // Build output paths
    const ext = path.extname(filename); // e.g. ".jpg"
    const base = path.basename(filename, ext); // e.g. "nature-01"
    const jpegOutPath = path.join(WORK_DIR, filename); // same name, replaces original
    const webpOutPath = path.join(WORK_DIR, `${base}.webp`);

    // Use sharp to resize and re-encode
    const pipeline = sharp(backupPath).resize({
      width: MAX_SIDE,
      height: MAX_SIDE,
      fit: "inside", // preserves aspect ratio, never upscales
      withoutEnlargement: true,
    });

    // JPEG fallback
    await pipeline.clone().jpeg({ quality: JPEG_QUALITY }).toFile(jpegOutPath);

    // WebP version
    await pipeline.clone().webp({ quality: WEBP_QUALITY }).toFile(webpOutPath);

    const jpegSize = fs.statSync(jpegOutPath).size;
    const webpSize = fs.statSync(webpOutPath).size;
    const saving = (((originalSize - webpSize) / originalSize) * 100).toFixed(1);

    rows.push({ filename, originalSize, jpegSize, webpSize, saving });
  }

  // Print summary table
  const col = [28, 12, 12, 12, 10];
  const header = [
    "File".padEnd(col[0]),
    "Original".padStart(col[1]),
    "JPEG out".padStart(col[2]),
    "WebP out".padStart(col[3]),
    "Saved%".padStart(col[4]),
  ].join("  ");
  const divider = "-".repeat(header.length);

  console.log(divider);
  console.log(header);
  console.log(divider);
  for (const r of rows) {
    console.log(
      [
        r.filename.padEnd(col[0]),
        formatBytes(r.originalSize).padStart(col[1]),
        formatBytes(r.jpegSize).padStart(col[2]),
        formatBytes(r.webpSize).padStart(col[3]),
        `${r.saving}%`.padStart(col[4]),
      ].join("  ")
    );
  }
  console.log(divider);
  const totalOrig = rows.reduce((s, r) => s + r.originalSize, 0);
  const totalWebp = rows.reduce((s, r) => s + r.webpSize, 0);
  const totalSaving = (((totalOrig - totalWebp) / totalOrig) * 100).toFixed(1);
  console.log(
    [
      "TOTAL".padEnd(col[0]),
      formatBytes(totalOrig).padStart(col[1]),
      "".padStart(col[2]),
      formatBytes(totalWebp).padStart(col[3]),
      `${totalSaving}%`.padStart(col[4]),
    ].join("  ")
  );
  console.log(divider);
  console.log("\nOriginals backed up to:", ORIGINALS_DIR);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
