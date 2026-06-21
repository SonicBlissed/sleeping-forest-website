"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Trees } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/plugins", label: "Plugins" },
  { href: "/commands", label: "Commands" },
  { href: "/patch-notes", label: "Patch Notes" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-forest-900/60 bg-bark/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-forest-300 hover:text-forest-200"
        >
          <Trees className="h-5 w-5" aria-hidden />
          <span>Sleeping Forest</span>
        </Link>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    active
                      ? "bg-forest-900/60 text-forest-200"
                      : "text-forest-200/70 hover:bg-forest-900/40 hover:text-forest-100"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
