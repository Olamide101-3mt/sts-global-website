import Reveal from "../components/Reveal";
import { whatsappLink } from "../data/siteConfig";

/*
 * =========================================================
 * SOLAR PACKAGES
 * =========================================================

 */

const PACKAGES = [
  {
    name: "SMS 2KVA Solar Hybrid Inverter System",
    note: "SMS Inverter + 2KWh Lithium Battery + 4 X 300W Mono Panel",
    price: "₦1 320 000",
    warranty: "1 Year Warranty",
    image: "/images/image1N.png",
    placeholder: false,
  },
  {
    name: "SMS 3.6KVA Solar Hybrid Inverter System",
    note: "SMS Inverter + 5KWh Lithium Battery + 8 X 450W Mono Panel",
    price: "₦2 850 000",
    warranty: "1 Year Warranty",
    image:"/images/image1N.png" ,
    placeholder: false,
  },
  {
    name: "SMS 4.2KVA Solar Hybrid Inverter System",
    note: "SMS Inverter + 5KWh Lithium Battery + 9 X 500W Mono Panel",
    price: "₦3 300 000",
    warranty: "1 Year Warranty",
    image: "/images/image1N.png",
    placeholder: false,
  },
  {
    name: "SMS 6.5KVA Solar Hybrid Inverter System",
    note: "SMS Inverter + 10KWh Lithium Battery + 12 X 500W Mono Panel",
    price: "₦4 620 000",
    warranty: "1 Year Warranty",
    image: "/images/image1N.png",
    placeholder: false,
  },
  {
    name: "SMS 24KVA Solar Hybrid Inverter System",
    note: "SMS Inverter + 60KWh Lithium Battery + 40 X 500W Mono Panel",
    price: "₦18 720 000",
    warranty: "1 Year Warranty",
    image: "/images/image1N.png",
    placeholder: false,
  },
];

/*
 * =========================================================
 * SOLAR SOLUTIONS
 * =========================================================
 */

const SOLAR_SOLUTIONS = [
  {
    title: "Solar Panels",
    description:
      "Solar panel solutions designed to convert available sunlight into usable electrical power for your property.",
    icon: "☀",
  },
  {
    title: "Inverters",
    description:
      "Inverter solutions that help convert and manage electrical power for your home or business.",
    icon: "⚡",
  },
  {
    title: "Battery Systems",
    description:
      "Battery storage solutions designed to store energy and support your power needs when required.",
    icon: "▣",
  },
  {
    title: "Complete Solar Systems",
    description:
      "Integrated solar power solutions combining the key components required for a properly planned system.",
    icon: "◈",
  },
];

/*
 * =========================================================
 * SECURITY & SAFETY
 * =========================================================
 */

const SECURITY_SOLUTIONS = [
  {
    title: "CCTV Systems",
    description:
      "Security camera solutions designed to help you monitor and protect your home, office or business premises.",
    icon: "◉",
  },
  {
    title: "Remote Monitoring",
    description:
      "Surveillance solutions that can help you keep an eye on your property beyond the immediate premises.",
    icon: "⌁",
  },
  {
    title: "Fire Alarm Systems",
    description:
      "Fire detection and alarm solutions designed to support early awareness and improved property safety.",
    icon: "△",
  },
  {
    title: "Access & Security",
    description:
      "Security and access solutions designed around the requirements of your property and its users.",
    icon: "▣",
  },
  {
    title: "Electric Fence",
    description:
      "Electric fence solutions designed to provide an additional layer of security around your property.",
    icon: "⚡",
  },
];

/*
 * =========================================================
 * AUTOMATION
 * =========================================================
 */

const AUTOMATION_SOLUTIONS = [
  {
    title: "Property Automation",
    description:
      "Smart automation solutions designed to make selected property functions easier and more convenient to manage.",
    icon: "⌘",
  },
  {
    title: "Access Automation",
    description:
      "Automation solutions for controlling access to your property according to your specific requirements.",
    icon: "↔",
  },
  {
    title: "Smart Property Solutions",
    description:
      "Practical technology solutions that bring greater convenience, control and efficiency to your property.",
    icon: "◇",
  },
];

/*
 * =========================================================
 * SOLUTION CARD
 * =========================================================
 */

function SolutionCard({ title, description, icon }) {
  return (
    <div className="group bg-white border border-grey-line p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4 mb-7">
        <div className="w-11 h-11 flex items-center justify-center bg-cream text-green text-xl transition-all duration-300 group-hover:bg-green group-hover:text-white">
          {icon}
        </div>

        <span className="text-grey-mid text-sm transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>

      <h3 className="text-xl font-semibold text-ink mb-3">{title}</h3>

      <p className="text-sm leading-7 text-grey-mid">{description}</p>
    </div>
  );
}

/*
 * =========================================================
 * SERVICE SECTION
 * =========================================================
 */

function ServiceSection({ eyebrow, title, description, items }) {
  return (
    <section className="py-16 md:py-20 border-t border-grey-line">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="text-green text-xs font-semibold tracking-widest uppercase mb-3">
              {eyebrow}
            </div>

            <h2 className="text-3xl md:text-[38px] leading-tight mb-5">
              {title}
            </h2>

            <p className="text-grey-mid leading-7 max-w-md">
              {description}
            </p>
          </div>
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-2 gap-5">
          {items.map((item) => (
            <SolutionCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/*
 * =========================================================
 * PACKAGE CARD
 * =========================================================
 */

function PackageCard({ pkg }) {
  return (
    <article
      className={`group relative bg-white border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
        pkg.placeholder
          ? "border-grey-line"
          : "border-green"
      }`}
    >
      {/* Featured / available badge */}
      {!pkg.placeholder && (
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center gap-2 bg-red text-white text-[10px] font-semibold px-3 py-2 tracking-widest uppercase shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            1 Year Warranty
          </span>
        </div>
      )}

      {/* =====================================================
          PACKAGE IMAGE
      ====================================================== */}

      <div className="relative bg-[#F3F3F1] aspect-[4/3] overflow-hidden">
        {pkg.image ? (
          <img
            src={pkg.image}
            alt={`${pkg.name} - ${pkg.note}`}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 border-2 border-dashed border-grey-line flex items-center justify-center text-green text-2xl mb-4">
              +
            </div>

            <span className="text-sm font-medium text-green mb-1">
              Package image
            </span>

            <span className="text-xs text-grey-mid">
              Coming soon
            </span>
          </div>
        )}

        {/* Bottom image gradient */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* =====================================================
          PACKAGE INFORMATION
      ====================================================== */}

      <div className="p-6 md:p-7">
        {/* Warranty
        <div className="mb-5">
          <span className="inline-flex items-center gap-2 bg-gold text-[#3A2C00] px-4 py-2 text-xs font-bold uppercase tracking-wide shadow-sm">
            <span>✓</span>
            {pkg.warranty}
          </span>
        </div> */}

        {/* Package name */}
        <h3 className="text-2xl md:text-[28px] leading-tight font-semibold text-ink mb-3">
          {pkg.name}
        </h3>

        {/* Description */}
        <p className="text-sm leading-7 text-grey-mid min-h-[50px] mb-6">
          {pkg.note}
        </p>

        {/* Divider */}
        <div className="border-t border-grey-line pt-5">
          <div className="text-[10px] uppercase tracking-widest text-grey-mid mb-1">
            Package Price
          </div>

          <div className="font-display text-[28px] md:text-[32px] font-medium text-green mb-6">
            {pkg.price}
          </div>

          <a
            href={whatsappLink(
              `Hi, I'd like to enquire about the ${pkg.name} solar package.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-center py-3.5 text-sm transition-all duration-300 hover:-translate-y-0.5 ${
              pkg.placeholder
                ? "border border-grey-line text-ink hover:border-green hover:text-green"
                : "bg-green hover:bg-green-deep text-white"
            }`}
          >
            {pkg.placeholder
              ? "Package Details Coming Soon"
              : "Enquire about this package →"}
          </a>
        </div>
      </div>
    </article>
  );
}

/*
 * =========================================================
 * MAIN PRODUCT PAGE
 * =========================================================
 */

export default function Products() {
  return (
    <main className="bg-cream min-h-screen overflow-hidden">
      {/* =========================================================
          PAGE HERO
      ========================================================== */}

      <section className="pt-16 md:pt-24 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-[2px] bg-red" />

                <div className="text-green text-xs font-semibold tracking-widest uppercase">
                  Products &amp; Services
                </div>
              </div>

              <h1 className="text-[38px] md:text-5xl lg:text-[56px] leading-[1.08] mb-6">
                Solutions designed to power, protect and automate your property.
              </h1>

              <p className="text-grey-mid text-base md:text-lg leading-8 max-w-2xl">
                Explore STS Global&apos;s solutions for solar power, security,
                safety and property automation — designed around your needs
                and requirements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* =========================================================
            SOLAR PACKAGES
        ========================================================== */}

        <section className="pb-16 md:pb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px] bg-red" />

              <div className="text-green text-xs font-semibold tracking-widest uppercase">
                Solar Packages
              </div>
            </div>

            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-14 mb-10">
              <div>
                <h2 className="text-3xl md:text-[38px] leading-tight">
                  Start with a solution that fits your power needs.
                </h2>
              </div>

              <div>
                <p className="text-grey-mid leading-7 max-w-2xl">
                  Our solar packages provide a starting point for different
                  power requirements. Final system specifications and pricing
                  should be confirmed with STS Global after assessing your
                  actual load and property requirements.
                </p>
              </div>
            </div>
          </Reveal>

          {/* =====================================================
              PACKAGE CARDS
          ====================================================== */}

          <Reveal stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </Reveal>
        </section>

        {/* =========================================================
            SOLAR SOLUTIONS
        ========================================================== */}

        <ServiceSection
          eyebrow="01 · Solar"
          title="Reliable power starts with the right system."
          description="Explore solar solutions for generating, managing and storing power for your home or business."
          items={SOLAR_SOLUTIONS}
        />

        {/* =========================================================
            SECURITY & SAFETY
        ========================================================== */}

        <ServiceSection
          eyebrow="02 · Security & Safety"
          title="Protect what matters to you."
          description="Security and safety solutions designed to give you greater awareness and control over your property."
          items={SECURITY_SOLUTIONS}
        />

        {/* =========================================================
            AUTOMATION
        ========================================================== */}

        <ServiceSection
          eyebrow="03 · Automation"
          title="Make your property smarter."
          description="Practical automation solutions designed to improve convenience, control and everyday property management."
          items={AUTOMATION_SOLUTIONS}
        />

        {/* =========================================================
            FINAL CTA
        ========================================================== */}

        <section className="py-16 md:py-20 border-t border-grey-line">
          <Reveal>
            <div className="relative overflow-hidden bg-navy p-8 md:p-12 lg:p-14">
              {/* Decorative red accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red opacity-90 translate-x-16 -translate-y-16 rotate-45" />

              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-3 mb-5">
                  <span className="block w-8 h-[2px] bg-red" />

                  <div className="text-gold text-xs font-semibold tracking-widest uppercase">
                    Need help choosing?
                  </div>
                </div>

                <h2 className="text-white text-3xl md:text-[40px] leading-tight font-semibold mb-5">
                  Let&apos;s find the right solution for your property.
                </h2>

                <p className="text-white/75 leading-7 max-w-2xl mb-8">
                  Not sure which solar, security or automation solution is
                  right for you? Tell us what you need and we can discuss the
                  requirements for your property.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappLink(
                      "Hi, I'd like to discuss a solution for my property."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green hover:bg-green-deep text-white px-6 py-3.5 text-sm transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Talk to STS Global →
                  </a>

                  <a
                    href="/calculator"
                    className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white px-6 py-3.5 text-sm transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Calculate my solar needs
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}