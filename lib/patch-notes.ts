import fs from "node:fs";
import path from "node:path";

const PATCH_NOTES_DIR = path.join(process.cwd(), "patch-notes");

export type PatchNote = {
  /** Date string in YYYY-MM-DD format, also used as the URL slug. */
  date: string;
  /** Raw markdown content. */
  content: string;
};

export function getAllPatchNoteDates(): string[] {
  if (!fs.existsSync(PATCH_NOTES_DIR)) return [];
  return fs
    .readdirSync(PATCH_NOTES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .sort((a, b) => b.localeCompare(a)); // newest first
}

export function getPatchNote(date: string): PatchNote | null {
  const file = path.join(PATCH_NOTES_DIR, `${date}.md`);
  if (!fs.existsSync(file)) return null;
  return {
    date,
    content: fs.readFileSync(file, "utf8"),
  };
}

/**
 * Pull a short summary out of a patch note for the list view.
 * Looks for emoji-prefixed section headers (e.g. "**⚡ Hoppers — Speed Boost**")
 * and returns up to `limit` of them.
 */
export function summarizePatchNote(content: string, limit = 4): string[] {
  const lines = content.split(/\r?\n/);
  const summaries: string[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    // Match lines like "**⚡ Hoppers — Speed Boost**" but not "**🛠️ Patch Notes**"
    const match = trimmed.match(/^\*\*(.+?)\*\*$/);
    if (!match) continue;
    const text = match[1].trim();
    if (text === "🛠️ Patch Notes" || text === "Patch Notes") continue;
    summaries.push(text);
    if (summaries.length >= limit) break;
  }
  return summaries;
}

export function formatPatchDate(date: string): string {
  // date is YYYY-MM-DD — parse without timezone shenanigans
  const [y, m, d] = date.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
