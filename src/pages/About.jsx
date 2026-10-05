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
        <section className="mb-16 md:mb-20">
          <Reveal>
            <div className="max-w-2xl mb-8">
              <div className="text-green text-xs font-semibold tracking-widest uppercase mb-3">
                What guides us
              </div>

              <h2 className="text-3xl md:text-[38px] leading-tight">
                The way we approach every project.
              </h2>
            </div>
          </Reveal>

          <Reveal
            stagger
            className="grid sm:grid-cols-3 gap-px bg-grey-line border border-grey-line"
          >
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                className="group bg-white p-7 md:p-8 transition-all duration-300 hover:bg-[#F3F1E9]"
              >
                <div className="flex items-center justify-between mb-7">
                  <span className="text-red text-xs font-semibold">
                    0{index + 1}
                  </span>

                  <span className="text-grey-mid transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="font-display text-[17px] font-semibold mb-3">
                  {value.title}
                </h3>

                <p className="text-sm leading-6 text-grey-mid">
                  {value.text}
                </p>
              </div>
            ))}
          </Reveal>
        </section>

        {/* =========================================================
            JOURNEY
        ========================================================== */}
        <section className="mb-16 md:mb-20">
          <Reveal>
            <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="block w-8 h-[2px] bg-red" />

                  <div className="text-green text-xs font-semibold tracking-widest uppercase">
                    Our journey
                  </div>
                </div>

                <h2 className="text-3xl md:text-[38px] leading-tight mb-4">
                  How STS Global got here.
                </h2>

                <p className="text-grey-mid leading-7 max-w-md">
                  The story, milestones and growth of STS Global will be added
                  here once the company provides the confirmed history.
                </p>
              </div>

              <div className="border-l-2 border-grey-line pl-7 md:pl-9">
                {TIMELINE.map((item, index) => (
                  <div
                    key={`${item.year}-${index}`}
                    className="relative pb-9 last:pb-0"
                  >
                    <div className="absolute -left-[37px] md:-left-[41px] top-1.5 w-3 h-3 bg-red rounded-full border-2 border-cream" />

                    <div className="font-display text-green font-medium text-sm mb-1.5">
                      {item.year}
                    </div>

                    <p className="text-grey-mid leading-7">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <Reveal>
          <section className="relative overflow-hidden bg-navy text-white p-8 md:p-12 lg:p-14">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red opacity-90 translate-x-16 -translate-y-16 rotate-45" />

            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-[2px] bg-red" />

                <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                  Let&apos;s work together
                </span>
              </div>

              <h2 className="text-3xl md:text-[40px] leading-tight mb-5">
                Looking for the right solution for your property?
              </h2>

              <p className="text-white/70 leading-7 max-w-2xl mb-8">
                Tell us what you need and let&apos;s discuss a practical
                solution for your home, office or business.
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
                  href="/products"
                  className="inline-flex items-center justify-center border border-white/35 hover:border-white text-white px-6 py-3.5 text-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  View Products &amp; Services
                </a>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
