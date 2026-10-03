"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { images, navigation } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2.5 pt-2.5 sm:px-6 sm:pt-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/15 bg-ink/90 px-3 py-2.5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6 sm:py-3">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)} aria-label="Comfort Cleaning home">
          <span className="relative h-10 w-[3.75rem] shrink-0 overflow-hidden rounded-lg border border-white/15 bg-black shadow-sm">
            <Image src={images.logo} alt="" fill sizes="60px" className="object-contain" priority />
          </span>
          <span className="truncate text-sm font-semibold tracking-tight sm:text-base">Comfort Cleaning</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navigation.map((item) => <Link className={`nav-link ${pathname === item.href ? "text-signal" : ""}`} href={item.href} key={item.href}>{item.label}</Link>)}
          <Link href="/book" className="button button-primary !px-5 !py-3">Book an Assessment</Link>
        </nav>
        <button type="button" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 md:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span className="sr-only">Toggle menu</span><span className="text-lg">{open ? "×" : "☰"}</span></button>
      </div>
      <div id="mobile-menu" className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl bg-ink text-white shadow-2xl transition-all duration-300 md:hidden ${open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}>
        <nav className="grid gap-1 p-4" aria-label="Mobile navigation">
          {navigation.map((item) => <Link className="rounded-xl px-4 py-3 hover:bg-white/10" href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link href="/book" className="button button-primary mt-2" onClick={() => setOpen(false)}>Book an Assessment</Link>
        </nav>
      </div>
    </header>
  );
}
