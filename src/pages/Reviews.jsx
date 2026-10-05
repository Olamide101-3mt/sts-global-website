import { useState } from "react";
import Reveal from "../components/Reveal";
import useReveal from "../hooks/useReveal";

const REVIEWS = [
  { stars: 5, text: "From quote to installation was under a week. The solar package they recommended matched exactly what my house needed.", who: "Adebayo O. — Ikorodu" },
  { stars: 5, text: "Very responsive on WhatsApp even after installation, for the few questions I had about the inverter.", who: "Chioma A. — Lagos" },
  { stars: 4, text: "Good CCTV setup, took a little longer than expected but the result works well.", who: "Tunde F. — Ikorodu" },
  { stars: 5, text: "Sent someone to train two of my staff on basic solar maintenance. Very practical, no wasted time.", who: "Grace N. — Lagos" },
];

const BREAKDOWN = [
  { label: "5★", pct: 82 },
  { label: "4★", pct: 12 },
  { label: "3★", pct: 4 },
  { label: "2★", pct: 1 },
  { label: "1★", pct: 1 },
];

function Stars({ count }) {
  return (
    <div className="text-gold text-sm tracking-widest mb-3">
      {"★".repeat(count)}
      <span className="text-grey-line">{"★".repeat(5 - count)}</span>
    </div>
  );
}

function RatingBar({ label, pct }) {
  const [ref, inView] = useReveal(0.3);
  return (
    <div className="grid grid-cols-[16px_1fr_30px] gap-2.5 items-center text-xs text-grey-mid mb-1.5">
      <span>{label}</span>
      <div ref={ref} className="bg-grey-line h-1.5">
        <div
          className="bg-red h-1.5 transition-[width] duration-[1100ms] ease-out"
          style={{ width: inView ? `${pct}%` : "0%" }}
        />
      </div>
      <span>{pct}%</span>
    </div>
  );
}

export default function Reviews() {
  const [rating, setRating] = useState(3);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    // NOTE: this currently just confirms on-screen. To actually store and
    // display new reviews, this needs to POST to a small backend (PHP +
    // MySQL on the existing cPanel hosting) — see README for details.
    setSubmitted(true);
    setName("");
    setText("");
    setRating(3);
  }

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-green text-xs font-semibold tracking-widest uppercase mb-3">Client reviews</div>
          <h1 className="text-[34px] mb-8">What people say after working with us</h1>
        </Reveal>

        <Reveal>
          <div className="grid sm:grid-cols-[auto_1fr] gap-8 sm:gap-12 items-center bg-[#F3F1E9] p-8 mb-12">
            <div className="text-center">
              <div className="font-display text-5xl text-green font-semibold">4.8</div>
              <div className="text-gold text-base tracking-widest">★★★★★</div>
              <div className="text-xs text-grey-mid mt-1">from 64 reviews</div>
            </div>
            <div>
              {BREAKDOWN.map((b) => (
                <RatingBar key={b.label} {...b} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-2 gap-5 mb-14">
          {REVIEWS.map((r, i) => (
            <div key={i} className="border border-grey-line bg-white p-6 hover:shadow-xl transition-shadow">
              <Stars count={r.stars} />
              <p className="text-sm">"{r.text}"</p>
              <div className="text-xs text-grey-mid mt-4">{r.who}</div>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <div className="bg-blue text-white p-8 md:p-10">
            {submitted ? (
              <div>
                <h3 className="text-2xl font-medium mb-2">Thank you!</h3>
                <p className="text-[#B7C6D2] text-sm">
                  Your review has been received and will appear once checked.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-medium mb-1.5">Leave a review</h3>
                <p className="text-[#B7C6D2] text-sm mb-6">
                  Tell others about your experience working with us. Reviews are checked before
                  appearing publicly.
                </p>
                <div
                  className="text-2xl tracking-widest mb-5 cursor-pointer select-none w-fit"
                  onMouseLeave={() => setHoverRating(0)}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      onMouseEnter={() => setHoverRating(n)}
                      onClick={() => setRating(n)}
                      className={(hoverRating || rating) >= n ? "text-red" : "text-[#4C6478]"}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full bg-white/[.06] border border-white/25 text-white placeholder:text-[#8FA1AF] px-3.5 py-3 text-sm mb-3.5"
                />
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Your review…"
                  required
                  rows={3}
                  className="w-full bg-white/[.06] border border-white/25 text-white placeholder:text-[#8FA1AF] px-3.5 py-3 text-sm mb-3.5"
                />
                <button
                  type="submit"
                  className="bg-green hover:bg-green-deep transition-colors px-6 py-3 text-sm font-medium"
                >
                  Submit review →
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
