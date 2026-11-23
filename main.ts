// the-joke-about-the-demo-20261123-0112 — variant vB
// Writes exactly one one-line joke about working beside an AI coding agent
// to /output/entry.txt. Deterministic, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI agent fixed the bug, tested the fix, and demoed it to the client — all in a file that doesn't exist.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
