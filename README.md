# Sleeping Forest — Website

Next.js 15 (App Router) marketing/info site for the Sleeping Forest Minecraft server.

## Pages

- `/` — landing page with the "no pay to win / grief-proof" pitch and feature highlights
- `/plugins` — every plugin on the server with a short description
- `/commands` — every command a member can use, grouped by plugin
- `/patch-notes` — reverse-chronological list of patches
- `/patch-notes/[date]` — individual patch notes rendered from the `../patch-notes/*.md` files

## Running locally

```bash
cd website
npm install
npm run dev
```

Open http://localhost:3000.

## Adding a patch note

Drop a new `YYYY-MM-DD.md` file into `../patch-notes/` (the same folder the server reads).
The site picks it up automatically at build time — no code changes needed.

## Editing plugin / command data

- Plugins → [lib/plugins.ts](lib/plugins.ts)
- Commands → [lib/commands.ts](lib/commands.ts)
