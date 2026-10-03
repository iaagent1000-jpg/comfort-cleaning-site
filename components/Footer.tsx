import Link from "next/link";
import { business, enabledSocialLinks, navigation } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="border-b border-white/10 bg-signal px-4 py-3 text-ink md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
          <a
            className="button !min-h-11 !bg-ink !px-4 !py-2 text-white"
            href={`tel:${business.phoneHref}`}
          >
            Call
          </a>
          <a
            className="button !min-h-11 border border-ink/20 !px-4 !py-2"
            href="https://wa.me/353873439698"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-signal font-black text-ink">
              CC
            </span>
            <span className="text-xl font-semibold">{business.name}</span>
          </div>
          <p className="max-w-md text-white/65">{business.description}</p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[.2em] text-signal">
            Explore
          </h2>
          <div className="grid gap-3">
            {navigation.map((item) => (
              <Link
                className="text-white/70 hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[.2em] text-signal">
            Contact
          </h2>
          <div className="grid gap-3 text-white/70">
            <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>
            <a className="break-all" href={`mailto:${business.email}`}>
              {business.email}
            </a>
            <p>{business.locality}, Co. Wexford</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {enabledSocialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-white/70 transition hover:border-signal hover:text-signal"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45">
        © {new Date().getFullYear()} Comfort Cleaning. Professional cleaning in
        Gorey and County Wexford.
      </div>
    </footer>
  );
}
