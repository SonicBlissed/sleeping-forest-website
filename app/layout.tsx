import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Sleeping Forest — Handcrafted Minecraft Server",
  description:
    "A Minecraft survival server with 21 custom-built plugins. No pay to win. Grief-proof. Run by a developer who actually plays the game.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Nav />
        <main className="mx-auto max-w-6xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
          {children}
        </main>
        <footer className="border-t border-forest-900/60 bg-bark/60 py-8 text-center text-sm text-forest-200/60">
          <p className="font-mono text-forest-300">
            sleepingforest.mcserver.us
            <span className="mx-2 text-forest-200/30">·</span>
            <span className="text-forest-200/70">Java Edition 26.1.2</span>
          </p>
          <p className="mt-3">
            Sleeping Forest · A handcrafted Minecraft server · Built with care
            by{" "}
            <Link
              href="/"
              className="text-forest-400 hover:text-forest-300"
            >
              SonicBliss
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
