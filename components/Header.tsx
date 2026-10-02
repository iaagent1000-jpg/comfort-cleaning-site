"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/15 bg-ink/85 px-4 py-3 text-white shadow-2xl backdrop-blur-xl sm:px-6">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)} aria-label="Comfort Cleaning home">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-signal font-black text-ink transition-transform group-hover:rotate-6">CC</span>
          <span className="font-semibold tracking-tight">Comfort Cleaning</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navigation.map((item) => <Link className={`nav-link ${pathname === item.href ? "text-signal" : ""}`} href={item.href} key={item.href}>{item.label}</Link>)}
          <Link href="/book" className="button button-primary !px-5 !py-3">Book an Assessment</Link>
        </nav>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 md:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span className="sr-only">Toggle menu</span><span className="text-xl">{open ? "×" : "☰"}</span></button>
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
