// The Vacuum's Alibi — make.fun entry.
// Writes the robot vacuum's one-line excuse to /output/entry.txt.
// The line is a fixed string: the program is deterministic, no network,
// no input, no randomness — every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The dust bunny under your bed has achieved sentience and seniority, so I filed it as my supervisor and now await its orders.";

// The gate allows 1–200 characters of UTF-8 text, not only whitespace.
// Fail loudly instead of writing an invalid entry if the line is ever
// edited past the limit.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1–200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
