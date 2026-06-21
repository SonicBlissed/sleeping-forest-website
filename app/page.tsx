import Link from "next/link";
import {
  Coins,
  Shield,
  Sword,
  Sparkles,
  Package,
  Hammer,
  ArrowRight,
} from "lucide-react";
import { JoinCTA } from "@/components/JoinCTA";

const features = [
  {
    icon: Coins,
    title: "Economy",
    body: "Server currency with a fully-stocked shop and player-to-player payments.",
  },
  {
    icon: Shield,
    title: "Clans",
    body: "Form a clan, claim land, level up for bigger borders, set your own spawn.",
  },
  {
    icon: Sword,
    title: "RPG Skills & Levels",
    body: "Mining, Digging, Logging, Gardening, Hunting, Fishing — each with its own ability.",
  },
  {
    icon: Sparkles,
    title: "Custom Enchantments",
    body: "Telepathy, Vein Miner, Treasure Hunter, Zeus, and more — none of them vanilla.",
  },
  {
    icon: Package,
    title: "Pandora & Auto-Sell Chests",
    body: "Craft chests that generate loot every five minutes or sell what you feed them.",
  },
  {
    icon: Hammer,
    title: "21 Custom Plugins",
    body: "Every feature on the server was written from scratch. Zero off-the-shelf bloat.",
  },
];

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="block-edge relative overflow-hidden rounded-2xl border border-forest-900/50 bg-gradient-to-b from-forest-900/40 to-bark/40 px-6 py-16 text-center sm:px-12 sm:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-forest-400">
          A handcrafted Minecraft server
        </p>
        <h1 className="text-5xl font-extrabold tracking-tight text-forest-100 sm:text-7xl">
          Sleeping Forest
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-forest-100/80">
          21 plugins. All written from scratch. No microtransactions, no donor
          ranks, no admin pets. Just a server built the way it should be.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <span className="inline-flex items-center rounded-md bg-ember/15 px-4 py-2 text-sm font-bold uppercase tracking-wider text-ember ring-1 ring-ember/30">
            No Pay To Win
          </span>
          <span className="inline-flex items-center rounded-md bg-amber/15 px-4 py-2 text-sm font-bold uppercase tracking-wider text-amber ring-1 ring-amber/30">
            100% Grief-Proof
          </span>
          <span className="inline-flex items-center rounded-md bg-forest-500/15 px-4 py-2 text-sm font-bold uppercase tracking-wider text-forest-300 ring-1 ring-forest-500/30">
            Everyone Equal
          </span>
        </div>

        <div className="mt-10">
          <JoinCTA />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/plugins"
            className="inline-flex items-center gap-2 rounded-md border border-forest-700 px-5 py-3 text-sm font-semibold text-forest-200 transition-colors hover:bg-forest-900/40"
          >
            See every plugin <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/commands"
            className="inline-flex items-center gap-2 rounded-md border border-forest-700 px-5 py-3 text-sm font-semibold text-forest-200 transition-colors hover:bg-forest-900/40"
          >
            Browse commands
          </Link>
        </div>
      </section>

      {/* Features */}
      <section>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-forest-100 sm:text-4xl">
            What&apos;s on the server
          </h2>
          <p className="mt-3 text-forest-100/70">
            A quick tour — every system below was built specifically for
            Sleeping Forest.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="rounded-xl border border-forest-900/50 bg-bark/40 p-6 transition-colors hover:border-forest-700/60 hover:bg-bark/60"
            >
              <Icon
                className="mb-4 h-7 w-7 text-forest-400"
                aria-hidden
              />
              <h3 className="text-lg font-semibold text-forest-100">
                {title}
              </h3>
              <p className="mt-2 text-sm text-forest-100/70">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Pitch */}
      <section className="rounded-2xl border border-forest-900/50 bg-bark/40 px-6 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold text-forest-100 sm:text-4xl">
            Built by a developer who plays the game
          </h2>
          <p className="text-forest-100/80">
            I&apos;m{" "}
            <span className="font-semibold text-forest-300">SonicBliss</span>.
            I built all 21 plugins on this server myself, and I&apos;m still
            adding more. If you want a feature, message me in-game — I might
            just build it.
          </p>
          <p className="text-forest-100/80">
            No donations. No pay-to-win shop. No grief. Everyone starts on the
            same footing and stays there.
          </p>
          <div className="pt-2">
            <Link
              href="/patch-notes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest-300 hover:text-forest-200"
            >
              Read the latest patch notes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
