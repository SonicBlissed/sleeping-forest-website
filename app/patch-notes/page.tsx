import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import {
  getAllPatchNoteDates,
  getPatchNote,
  summarizePatchNote,
  formatPatchDate,
} from "@/lib/patch-notes";

export const metadata = {
  title: "Patch Notes — Sleeping Forest",
  description: "Every update shipped to the Sleeping Forest server.",
};

export default function PatchNotesIndex() {
  const dates = getAllPatchNoteDates();

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-forest-100 sm:text-5xl">
          Patch Notes
        </h1>
        <p className="text-forest-100/70">
          Every change shipped to Sleeping Forest, newest first.
        </p>
      </header>

      {dates.length === 0 ? (
        <p className="text-forest-100/60">
          No patch notes yet — check back soon.
        </p>
      ) : (
        <ul className="space-y-4">
          {dates.map((date) => {
            const note = getPatchNote(date);
            if (!note) return null;
            const highlights = summarizePatchNote(note.content);
            return (
              <li key={date}>
                <Link
                  href={`/patch-notes/${date}`}
                  className="group block rounded-xl border border-forest-900/50 bg-bark/40 p-6 transition-colors hover:border-forest-700/60 hover:bg-bark/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-forest-400">
                        <Calendar className="h-4 w-4" aria-hidden />
                        <time dateTime={date}>{formatPatchDate(date)}</time>
                      </div>
                      {highlights.length > 0 && (
                        <ul className="space-y-1 text-sm text-forest-100/80">
                          {highlights.map((h, i) => (
                            <li key={i} className="flex gap-2">
                              <span aria-hidden className="text-forest-500">
                                ·
                              </span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-forest-500 transition-transform group-hover:translate-x-1 group-hover:text-forest-300" />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
