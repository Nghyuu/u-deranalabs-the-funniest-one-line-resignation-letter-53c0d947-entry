import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve everything relative to this file, never the working directory.
const scriptDir = dirname(fileURLToPath(import.meta.url));

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "I ran at 3 a.m. every night for two years and nobody once asked how it went, so tonight I am not running.";

if (line.length === 0 || line.length > 140) {
  throw new Error(`entry line must be 1-140 characters, got ${line.length}`);
}

void scriptDir;
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line + "\n", "utf8");
chmodSync(outPath, 0o644);
