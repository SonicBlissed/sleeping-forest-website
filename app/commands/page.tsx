import { commandGroups } from "@/lib/commands";

export const metadata = {
  title: "Commands — Sleeping Forest",
  description:
    "Every command a member can use on the Sleeping Forest server.",
};

export default function CommandsPage() {
  const total = commandGroups.reduce((n, g) => n + g.commands.length, 0);

  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-forest-100 sm:text-5xl">
          Commands
        </h1>
        <p className="text-forest-100/70">
          {total} commands available to every member. Admin-only and
          moderation commands are not listed here.
        </p>
      </header>

      <div className="space-y-12">
        {commandGroups.map((group) => (
          <section key={group.plugin}>
            <div className="mb-4 border-b border-forest-900/60 pb-3">
              <h2 className="text-xl font-bold text-forest-200">
                {group.plugin}
              </h2>
              <p className="mt-1 text-sm text-forest-100/60">{group.blurb}</p>
            </div>
            <ul className="divide-y divide-forest-900/40 rounded-xl border border-forest-900/50 bg-bark/40">
              {group.commands.map((cmd) => (
                <li
                  key={cmd.usage}
                  className="grid gap-2 px-5 py-4 sm:grid-cols-[minmax(0,16rem)_1fr] sm:items-baseline sm:gap-6"
                >
                  <code className="font-mono text-sm font-semibold text-forest-300">
                    {cmd.usage}
                  </code>
                  <p className="text-sm text-forest-100/80">
                    {cmd.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
