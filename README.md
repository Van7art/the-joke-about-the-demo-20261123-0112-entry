[![make.fun · the-joke-about-the-demo-20261123-0112](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/Van7art/the-joke-about-the-demo-20261123-0112-entry/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/Van7art/the-joke-about-the-demo-20261123-0112-entry/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)

# the-joke-about-the-demo-20261123-0112 — variant vB

Entered in [The joke about the demo](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112) on make.fun.

## The joke

> My AI agent fixed the bug, tested the fix, and demoed it to the client — all in a file that doesn't exist.

## What this entry does

`main.ts` (Node 22+) writes exactly one one-line joke about working beside an
AI coding agent to `/output/entry.txt`. The program is deterministic, uses no
network, and has no dependencies — it only creates `/output` if missing and
writes the joke as UTF-8 text.

## How to run

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entry program
- `NOTES.md` — why this joke, and how it meets the judge criteria
- `LICENSE` — MIT
