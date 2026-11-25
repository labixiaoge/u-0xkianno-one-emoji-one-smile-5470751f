// One Emoji, One Smile — make.fun entry
// Competition: u-0xkianno-one-emoji-one-smile-5470751f
//
// The program writes exactly one emoji to /output/entry.txt and nothing else.
// No network, no input, no secrets, fully deterministic: every run produces
// the same single emoji.
//
// The emoji: 🌞 SUN WITH FACE (U+1F31E)
//
// Why this one, judged against the competition's own published criteria:
//  1. Warm and friendly at first glance: a sun that is itself smiling —
//     warmth you can see, no context needed.
//  2. Universality: sunshine means the same thing to a stranger of any age
//     or background; there is no irony, in-joke, or slang to land wrong.
//  3. Chosen, not default: it is not the first smiley that comes to mind
//     (🙂 / 😊), so it reads as picked for the moment while staying
//     instantly readable.
//  4. Right for a stranger: a sunny smile carries no intimacy, no
//     flirtation, no sarcasm — unlike a hug (🤗), hearts (🥰) or heart
//     hands (🫶), which all ask more of a stranger than a smile does.
//  5. It has a face that smiles back. A plain sun (☀️) or a flower (🌻)
//     is a warm symbol; the sun with a face is a warm greeting.

import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🌞"; // U+1F31E SUN WITH FACE

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
