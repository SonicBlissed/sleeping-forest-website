"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export const SERVER_ADDRESS = "sleepingforest.mcserver.us";
export const MINECRAFT_VERSION = "26.1.2";

export function JoinCTA() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(SERVER_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Older browsers / non-secure contexts: noop. The address is still
      // visible on screen for manual copying.
    }
  }

  return (
    <div className="mx-auto max-w-xl rounded-xl border border-forest-700/60 bg-bark/70 p-5 shadow-block">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest-400">
        Server Address
      </p>
      <div className="mt-3 flex items-center gap-3">
        <code className="flex-1 truncate rounded-md bg-bark/80 px-4 py-3 font-mono text-base font-semibold text-forest-200 sm:text-lg">
          {SERVER_ADDRESS}
        </code>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Address copied" : "Copy server address"}
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-forest-500 px-4 py-3 text-sm font-semibold text-bark transition-colors hover:bg-forest-400"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" aria-hidden /> Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" aria-hidden /> Copy
            </>
          )}
        </button>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className="inline-flex items-center rounded-md bg-forest-500/15 px-3 py-1 font-semibold text-forest-300 ring-1 ring-forest-500/30">
          Java Edition
        </span>
        <span className="inline-flex items-center rounded-md bg-forest-500/15 px-3 py-1 font-semibold text-forest-300 ring-1 ring-forest-500/30">
          Minecraft {MINECRAFT_VERSION}
        </span>
      </div>
      <p className="mt-3 text-center text-xs text-forest-100/60">
        Multiplayer → Direct Connect
      </p>
    </div>
  );
}
