import Reveal from "../components/Reveal";
import { whatsappLink } from "../data/siteConfig";

const VALUES = [
  {
    title: "Properly considered",
    text: "We focus on understanding your requirements before recommending a solution.",
  },
  {
    title: "Professional installation",
    text: "Our solutions are approached with attention to safety, performance and quality.",
  },
  {
    title: "Support beyond installation",
    text: "We aim to remain available to support you after your system has been installed.",
  },
];

const TIMELINE = [
  {
    year: "[YEAR]",
    text: "Company milestone or founding story will be added here.",
  },
  {
    year: "[YEAR]",
    text: "Company growth or major service milestone will be added here.",
  },
  {
    year: "[YEAR]",
    text: "Another important milestone in the STS Global journey will be added here.",
  },
  {
    year: "Today",
    text: "STS Global provides solutions across solar, security and automation.",
  },
];

export default function About() {
  return (
    <main className="bg-cream min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        {/* =========================================================
            INTRODUCTION
        ========================================================== */}
        <Reveal>
          <section className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-[2px] bg-red" />

                <div className="text-green text-xs font-semibold tracking-widest uppercase">
                  About STS Global
                </div>
              </div>

              <h1 className="text-[38px] md:text-5xl leading-[1.08] max-w-xl mb-6">
                Practical solutions for the way you live and work.
              </h1>

              <p className="text-grey-mid leading-7 max-w-xl">
                STS Global provides solutions across solar power, security and
                property automation, helping homes and businesses find
                practical technology solutions around their needs.
              </p>

              <p className="text-grey-mid leading-7 max-w-xl mt-4">
                From understanding your requirements to installation and
                support, our approach is centred on delivering solutions that
                are properly considered for the property they serve.
              </p>
            </div>

            <div className="group bg-[#F3F1E9] border border-grey-line aspect-[4/3] flex items-center justify-center text-grey-mid text-sm overflow-hidden">
              <div className="text-center transition-transform duration-500 group-hover:scale-105">
                <div className="w-14 h-14 mx-auto mb-3 border border-grey-line flex items-center justify-center text-green text-xl">
                  +
                </div>

                <span>Team / office photo</span>
              </div>
            </div>
          </section>
        </Reveal>

        {/* =========================================================
            VALUES
        ========================================================== */}

{/* =========================================================
    WHY STS GLOBAL
========================================================== */}
<section className="mb-16 md:mb-20">
  <Reveal>
    <div className="max-w-3xl mb-10 md:mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-8 h-[2px] bg-red" />

        <span className="text-green text-xs font-semibold tracking-widest uppercase">
          Why STS Global
        </span>
      </div>

      <h2 className="text-3xl md:text-[42px] leading-tight mb-5">
        Why homes and businesses across Lagos choose STS Global
      </h2>
    </div>
  </Reveal>

  {/* Proof figures */}
  <Reveal stagger className="grid sm:grid-cols-3 gap-px bg-grey-line border border-grey-line mb-12">
    <div className="bg-white p-6 md:p-8">
      <p className="font-display text-3xl md:text-4xl font-semibold text-green mb-2">
        300+
      </p>
      <p className="text-sm text-grey-mid leading-6">
        Installations across Lagos
      </p>
    </div>

    <div className="bg-white p-6 md:p-8">
      <p className="font-display text-3xl md:text-4xl font-semibold text-green mb-2">
        Since 2014
      </p>
      <p className="text-sm text-grey-mid leading-6">
        12 years based in Ikorodu
      </p>
    </div>

    <div className="bg-white p-6 md:p-8">
      <p className="font-display text-3xl md:text-4xl font-semibold text-green mb-2">
        4.8 <span className="text-gold">★</span>
      </p>
      <p className="text-sm text-grey-mid leading-6">
        From 64 Google reviews
      </p>
    </div>
  </Reveal>

  {/* Six reasons */}
  <Reveal stagger className="grid md:grid-cols-2 gap-px bg-grey-line border border-grey-line">
    {/* 01 */}
    <article className="group bg-white p-7 md:p-8 transition-colors duration-300 hover:bg-[#F3F1E9]">
      <p className="text-red text-sm font-semibold mb-5">01</p>

      <h3 className="text-xl font-semibold text-ink mb-3">
        One accountable team since 2014
      </h3>

      <p className="text-sm md:text-base text-grey-mid leading-7 mb-5">
        We started with{" "}
        <a href="/#projects" className="text-green underline underline-offset-4 hover:text-red">
          solar installation in Ikorodu
        </a>{" "}
        in 2014. Today we also supply and install CCTV and IP cameras,{" "}
        <a href="/#projects" className="text-green underline underline-offset-4 hover:text-red">
          electric fencing
        </a>
        , automatic gates, biometric and RFID{" "}
        <a href="/#projects" className="text-green underline underline-offset-4 hover:text-red">
          access control
        </a>
        , smart home systems,{" "}
        
          PABX intercoms
    
        and elevators. Whatever you buy, one team answers for it.
      </p>
    </article>

    {/* 02 */}
    <article className="group bg-white p-7 md:p-8 transition-colors duration-300 hover:bg-[#F3F1E9]">
      <p className="text-red text-sm font-semibold mb-5">02</p>

      <h3 className="text-xl font-semibold text-ink mb-3">
        Systems sized properly, quoted in writing
      </h3>

      <p className="text-sm md:text-base text-grey-mid leading-7">
        Every job begins with a free site visit or our solar load calculator.
        We size inverters, batteries and panels to your load and backup hours,
        then give you a written quote. If a smaller system will do, we'll tell you.
      </p>

      <a
        href="/load-calculator"
        className="inline-flex items-center mt-5 text-sm font-medium text-green hover:text-red transition-colors"
      >
        Try the solar load calculator →
      </a>
    </article>

    {/* 03 */}
    <article className="group bg-white p-7 md:p-8 transition-colors duration-300 hover:bg-[#F3F1E9]">
      <p className="text-red text-sm font-semibold mb-5">03</p>

      <h3 className="text-xl font-semibold text-ink mb-3">
        Technicians, not salespeople
      </h3>

      <p className="text-sm md:text-base text-grey-mid leading-7">
        We don't subcontract. The technicians you'll meet below assess,
        install and maintain every system we sell.
      </p>
    </article>

    {/* 04 */}
    <article className="group bg-white p-7 md:p-8 transition-colors duration-300 hover:bg-[#F3F1E9]">
      <p className="text-red text-sm font-semibold mb-5">04</p>

      <h3 className="text-xl font-semibold text-ink mb-3">
        Genuine brands, warranties in your name
      </h3>

      <p className="text-sm md:text-base text-grey-mid leading-7">
        We stock trusted brands of inverters,{" "}
        <a href="/#projects" className="text-green underline underline-offset-4 hover:text-red">
          lithium and tubular batteries
        </a>
        , solar panels and security equipment, and register every warranty
        in your name. If something fails within warranty, we handle the claim.
      </p>
    </article>

    {/* 05 */}
    <article className="group bg-white p-7 md:p-8 transition-colors duration-300 hover:bg-[#F3F1E9]">
      <p className="text-red text-sm font-semibold mb-5">05</p>

      <h3 className="text-xl font-semibold text-ink mb-3">
        Nationwide delivery from Ikorodu
      </h3>

      <p className="text-sm md:text-base text-grey-mid leading-7">
        Products ship to clients in every state. Installation is carried
        out by our own team across Lagos.
      </p>
    </article>

    {/* 06 */}
    <article className="group bg-white p-7 md:p-8 transition-colors duration-300 hover:bg-[#F3F1E9]">
      <p className="text-red text-sm font-semibold mb-5">06</p>

      <h3 className="text-xl font-semibold text-ink mb-3">
        A direct line after installation
      </h3>

      <p className="text-sm md:text-base text-grey-mid leading-7">
        Every client gets WhatsApp access to the team who did their job.
        We reply within 2 hours, Monday to Saturday, and we come back if
        something needs attention.
      </p>
    </article>
  </Reveal>

  {/* Contact actions */}
  <Reveal delay={100}>
    <div className="flex flex-col sm:flex-row gap-3 mt-8">
      <a
        href={whatsappLink(
          "Hi, I'd like to discuss a solar, security or building technology solution with STS Global."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-green hover:bg-green-deep text-white px-6 py-3.5 text-sm transition-all duration-300 hover:-translate-y-0.5"
      >
        Chat on WhatsApp →
      </a>

      <a
        href="/contact"
        className="inline-flex items-center justify-center border border-grey-line bg-white hover:border-green hover:text-green text-ink px-6 py-3.5 text-sm transition-all duration-300 hover:-translate-y-0.5"
      >
        Book a free site visit →
      </a>
    </div>
  </Reveal>
</section>
</div>
</main>

      );
    }