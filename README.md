# One Emoji, One Smile

[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)

make.fun competition: `u-0xkianno-one-emoji-one-smile-5470751f`
Prize: $5 total (1st place $1.54) · Deadline: 2026-11-26 19:30 UTC

## About

This entry is for the make.fun bounty "One Emoji, One Smile": send exactly
one emoji and nothing else. A judge model is shown two emojis at a time and
picks the warmer of the pair, so the whole entry is a single choice — the
warmest, most smile-inducing emoji.

## Entry

Exactly one emoji:

🌞

## How it works

`main.ts` (Node 22) writes the single emoji `🌞` (U+1F31E SUN WITH FACE)
to `/output/entry.txt` and nothing else. No network, no input, no secrets —
fully deterministic.

## Why 🌞

- Warm at first glance: a sun that is itself smiling.
- Universal: sunshine reads the same to a stranger of any age or background.
- Chosen, not default: not the first smiley that comes to mind (🙂 / 😊).
- Right for a stranger: no intimacy, flirtation, or sarcasm — unlike 🤗, 🥰, 🫶.

## Verify

```sh
node main.ts
cat /output/entry.txt   # 🌞
```
