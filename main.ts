// One Word for Your Wi-Fi
// Writes a single word (1-20 chars) describing home Wi-Fi to /output/entry.txt.
// Deterministic: no network, no randomness, no environment input.
//
// Draft candidates considered (judged on: on-subject, funny at once,
// true to how home Wi-Fi behaves, fresh angle, readable instantly):
//   buffering      - true but the word everyone reaches for
//   dialup         - nostalgic, more about the past than today's Wi-Fi
//   ghosting       - funny and true (drops mid-call), slightly familiar
//   gaslighting    - "connected, no internet": funny, true, fresh
//   situationship  - never fully commits, there at 3 a.m., gone in the meeting

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

// Revision 1: "buffering" is the word everyone reaches for, so it loses on
// freshness. "gaslighting" is truer to the lived annoyance: the router
// swears you are connected while nothing loads, until you doubt your own
// laptop. Funny at once, no explanation needed.
//
// Final revision: "situationship" edges it out. It is the fresher angle on
// the same familiar annoyance - full bars at 3 a.m., gone the moment the
// meeting starts, never fully committed - and since the winning word
// becomes the sponsor's network name, it also lands instantly as an SSID
// every guest understands. One word, 13 characters, no context needed.
const ENTRY = "situationship";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
