import Reveal from "../components/Reveal";

const POSTS = [
  {
    tag: "Solar",
    color: "bg-green text-white",
    title: "Article title will appear here",
    excerpt:
      "A short description of the article will appear here once STS Global provides the content.",
    date: "[DATE] · [READ TIME]",
  },
  {
    tag: "Security",
    color: "bg-red text-white",
    title: "Article title will appear here",
    excerpt:
      "A short description of the article will appear here once STS Global provides the content.",
    date: "[DATE] · [READ TIME]",
  },
  {
    tag: "Automation",
    color: "bg-gold text-[#3a2c00]",
    title: "Article title will appear here",
    excerpt:
      "A short description of the article will appear here once STS Global provides the content.",
    date: "[DATE] · [READ TIME]",
  },
];

function PostPlaceholder({ label = "Post image" }) {
  return (
    <div className="relative bg-[#F3F1E9] text-grey-mid aspect-[16/10] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent" />

      <div className="relative text-center">
        <div className="w-12 h-12 mx-auto mb-3 border border-grey-line flex items-center justify-center text-green text-lg">
          +
        </div>

        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <main className="bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        {/* =========================================================
            PAGE INTRO
        ========================================================== */}
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[2px] bg-red" />

            <div className="text-green text-xs font-semibold tracking-widest uppercase">
              From the team
            </div>
          </div>

          <h1 className="text-[38px] md:text-5xl leading-[1.08] max-w-3xl mb-5">
            Guides and updates on solar, security &amp; automation.
          </h1>

          <p className="text-grey-mid max-w-[60ch] leading-7 mb-12">
            Practical information to help homeowners and business owners
            understand their power, security and automation options.
          </p>
        </Reveal>

        {/* =========================================================
            FEATURED ARTICLE
        ========================================================== */}
        <Reveal>
          <article className="group grid md:grid-cols-[1.1fr_0.9fr] border border-grey-line bg-white mb-14 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="overflow-hidden">
              <div className="h-full transition-transform duration-500 group-hover:scale-[1.02]">
                <PostPlaceholder label="Featured post image" />
              </div>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center items-start">
              <span className="inline-block bg-green text-white text-[11px] font-bold tracking-wide uppercase px-3 py-1.5 mb-5">
                Featured guide
              </span>

              <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-4">
                Featured article title will appear here
              </h2>

              <p className="text-grey-mid text-sm leading-7 mb-5">
                The featured article introduction will appear here once STS
                Global provides the approved article content.
              </p>

              <div className="flex items-center gap-3 text-xs text-grey-mid">
                <span>[DATE]</span>
                <span className="w-1 h-1 rounded-full bg-red" />
                <span>[READ TIME]</span>
              </div>

              <button
                type="button"
                className="mt-7 text-green text-sm font-medium inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
              >
                Read article <span>→</span>
              </button>
            </div>
          </article>
        </Reveal>

        {/* =========================================================
            ARTICLE GRID
        ========================================================== */}
        <section>
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-7">
              <div>
                <div className="text-green text-xs font-semibold tracking-widest uppercase mb-2">
                  Latest articles
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold">
                  Learn more from STS Global.
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <article
                key={post.tag}
                className="group border border-grey-line bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                    <PostPlaceholder />
                  </div>
                </div>

                <div className="p-5">
                  <span
                    className={`inline-block text-[10px] font-bold tracking-wide uppercase px-3 py-1.5 mb-4 ${post.color}`}
                  >
                    {post.tag}
                  </span>

                  <h3 className="font-display text-[18px] font-semibold leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-[13.5px] leading-6 text-grey-mid mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs text-grey-mid">
                      {post.date}
                    </div>

                    <span className="text-green text-sm transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
        </section>

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}
        <Reveal>
          <section className="relative overflow-hidden bg-navy text-white mt-16 md:mt-20 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-28 h-28 bg-red opacity-90 translate-x-14 -translate-y-14 rotate-45" />

            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-[2px] bg-red" />

                <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                  Need a solution?
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-4">
                Have questions about solar, security or automation?
              </h2>

              <p className="text-white/70 text-sm leading-7 mb-7">
                If you&apos;re not sure what solution is right for your
                property, speak with STS Global about your requirements.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-green hover:bg-green-deep text-white px-6 py-3.5 text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                Talk to STS Global →
              </a>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
