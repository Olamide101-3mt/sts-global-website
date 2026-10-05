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
        className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link to="/" className="font-display font-semibold text-xl text-blue tracking-tight">
          STS <span className="text-green">Global</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-7 text-sm">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative pb-1 transition-colors ${
                  isActive ? "text-green" : "text-ink hover:text-green"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 bg-green hover:bg-green-deep text-white text-sm font-medium px-5 py-2.5 rounded transition-colors"
        >
          💬 Chat on WhatsApp
        </a>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-ink text-2xl leading-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile nav panel */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-grey-line bg-cream px-6 py-4 flex flex-col gap-4 text-sm">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? "text-green font-medium" : "text-ink")}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green text-white text-sm font-medium px-5 py-2.5 rounded w-fit"
          >
            💬 Chat on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
