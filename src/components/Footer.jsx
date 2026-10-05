import { BUSINESS } from "../data/siteConfig";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products & Services", href: "/products-services" },
  { label: "Calculator", href: "/calculator" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-14">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-red" />

              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                STS Global
              </span>
            </div>

            <h2 className="font-display text-2xl md:text-3xl leading-tight max-w-md mb-4">
              Power. Protection. Smarter properties.
            </h2>

            <p className="text-white/55 leading-7 max-w-md text-sm">
              Solar power, security and automation solutions for homes,
              offices and businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-gold text-xs font-semibold tracking-widest uppercase mb-5">
              Explore
            </div>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-7 text-xs text-white/40">
          <div>
            © {currentYear} {BUSINESS.fullName}
          </div>

          <div>
            Ikorodu, Lagos, Nigeria
          </div>
        </div>
      </div>
    </footer>
  );
}
