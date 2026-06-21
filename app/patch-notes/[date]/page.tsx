import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  getAllPatchNoteDates,
  getPatchNote,
  formatPatchDate,
} from "@/lib/patch-notes";

type Params = Promise<{ date: string }>;

export function generateStaticParams() {
  return getAllPatchNoteDates().map((date) => ({ date }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { date } = await params;
  const note = getPatchNote(date);
  if (!note) return { title: "Patch Notes — Sleeping Forest" };
  return {
    title: `${formatPatchDate(note.date)} — Patch Notes — Sleeping Forest`,
    description: `Patch notes for the Sleeping Forest server, released ${formatPatchDate(note.date)}.`,
  };
}

export default async function PatchNotePage({ params }: { params: Params }) {
  const { date } = await params;
  const note = getPatchNote(date);
  if (!note) notFound();

  return (
    <article className="space-y-8">
      <div>
        <Link
          href="/patch-notes"
          className="inline-flex items-center gap-2 text-sm text-forest-400 hover:text-forest-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> All patch notes
        </Link>
      </div>

      <header className="space-y-2 border-b border-forest-900/60 pb-6">
        <div className="flex items-center gap-2 text-sm text-forest-400">
          <Calendar className="h-4 w-4" aria-hidden />
          <time dateTime={note.date}>{formatPatchDate(note.date)}</time>
        </div>
        <h1 className="text-3xl font-bold text-forest-100 sm:text-4xl">
          Patch Notes
        </h1>
      </header>

      <div className="prose prose-invert prose-patch max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {note.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
