"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950/70 px-6 py-4 backdrop-blur-md">
      <div className="text-lg font-bold text-teal-400">Unfook</div>

      <nav className="flex items-center gap-6 text-sm text-zinc-300">
        <Link href="#how" className="hover:text-white">
          How It Works
        </Link>
        <Link href="#why" className="hover:text-white">
          Why Unfook
        </Link>
        <Link href="#features" className="hover:text-white">
          Features
        </Link>
        <Link href="#reviews" className="hover:text-white">
          Reviews
        </Link>
      </nav>

      <Link
        href="#get-started"
        className="rounded-xl bg-teal-500 px-4 py-2 font-semibold text-zinc-900 hover:bg-teal-400 active:translate-y-[1px]"
      >
        Get Started
      </Link>
    </header>
  );
}
