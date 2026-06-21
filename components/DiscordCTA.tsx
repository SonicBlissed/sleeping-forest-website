import { ArrowRight } from "lucide-react";

export const DISCORD_INVITE_URL = "https://discord.gg/ApUMWj4vK3";

export function DiscordCTA() {
  return (
    <div className="mx-auto max-w-xl rounded-xl border border-forest-700/60 bg-bark/70 p-5 shadow-block">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest-400">
        Discord
      </p>
      <div className="mt-3 flex items-center gap-3">
        <span className="flex-1 truncate rounded-md bg-bark/80 px-4 py-3 font-mono text-base font-semibold text-forest-200 sm:text-lg">
          discord.gg/ApUMWj4vK3
        </span>
        <a
          href={DISCORD_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-forest-500 px-4 py-3 text-sm font-semibold text-bark transition-colors hover:bg-forest-400"
        >
          Join <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
      <p className="mt-3 text-center text-xs text-forest-100/60">
        Chat with the community, get update pings, share builds
      </p>
    </div>
  );
}
