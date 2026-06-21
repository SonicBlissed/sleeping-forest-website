import { plugins } from "@/lib/plugins";

export const metadata = {
  title: "Plugins — Sleeping Forest",
  description:
    "Every plugin on the Sleeping Forest server, all written from scratch.",
};

export default function PluginsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-forest-100 sm:text-5xl">
          Plugins
        </h1>
        <p className="text-forest-100/70">
          Every one of these {plugins.length} plugins was built specifically
          for Sleeping Forest. No off-the-shelf bundles, no half-abandoned
          forks.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {plugins.map((p) => (
          <li
            key={p.name}
            className="rounded-xl border border-forest-900/50 bg-bark/40 p-6 transition-colors hover:border-forest-700/60 hover:bg-bark/60"
          >
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <h2 className="text-lg font-bold text-forest-200">{p.name}</h2>
            </div>
            <p className="mb-3 text-sm font-medium text-forest-400">
              {p.tagline}
            </p>
            <p className="text-sm leading-relaxed text-forest-100/80">
              {p.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
