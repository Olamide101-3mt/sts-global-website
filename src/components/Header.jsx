
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS, whatsappLink } from "../data/siteConfig";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-grey-line bg-cream/90 backdrop-blur">
      <div
        className={`max-w-6xl mx-auto px-6 flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Company logo */}
     <Link
  to="/"
  className="font-display font-semibold text-xl text-blue tracking-tight flex items-center gap-2"
>
  <img
    src="/images/logo1.png"
    alt="STS Global logo"
    className="h-10 w-auto object-contain"
  />
  STS <span className="text-green">Global</span>
</Link>
        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-7 text-sm"
        >
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative pb-1 transition-colors ${
                  isActive
                    ? "text-green font-medium"
                    : "text-ink hover:text-green"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* WhatsApp button */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex shrink-0 items-center gap-2 bg-green hover:bg-green-deep text-white text-sm font-medium px-4 py-2.5 rounded transition-colors"
        >
          <span aria-hidden="true">💬</span>
          Chat on WhatsApp
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden text-ink text-2xl leading-none p-2"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-grey-line bg-cream px-6 py-4 flex flex-col gap-4 text-sm"
        >
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-green font-medium"
                  : "text-ink hover:text-green transition-colors"
              }
            >
              {l.label}
            </NavLink>
          ))}

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green hover:bg-green-deep text-white text-sm font-medium px-5 py-2.5 rounded w-fit transition-colors"
          >
            <span aria-hidden="true">💬</span>
            Chat on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
