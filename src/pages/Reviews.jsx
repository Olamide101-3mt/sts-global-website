import { useEffect, useMemo, useState } from "react";
import Reveal from "../components/Reveal";
import useReveal from "../hooks/useReveal";
import { supabase } from "../lib/supabase";

/*
 * DISPLAY RULES
 * - Every review that visitors submit is saved in the database.
 * - The Supabase portion of the LIST shows only reviews rated MIN_RATING
 *   stars or higher, and only the top MAX_REVIEWS: highest rating first,
 *   then newest. Four client-provided hardcoded reviews are always displayed
 *   separately alongside those Supabase reviews.
 * - The RATING SUMMARY combines the totals from review_stats() with the four
 *   hardcoded five-star reviews. Hardcoded reviews are never inserted into
 *   Supabase, and the existing database policies and function remain unchanged.
 *
 * The "4 stars and above" rule for the list is enforced in the database
 * itself (see the select policy in the SQL), so lower-rated reviews can't
 * be read through the public API either. The .gte() filter below just
 * mirrors that rule.
 */
const MAX_REVIEWS = 6;
const MIN_RATING = 4;

/*
 * Genuine customer reviews supplied by the client. They are hardcoded and
 * displayed locally; they are never inserted into Supabase. Their four
 * five-star ratings are added to the frontend rating summary.
 */
const HARDCODED_REVIEWS = [
  {
    id: "client-review-olumide-osisanwo",
    stars: 5,
    text: "They are the best solution to  light, their installation was supper , they work very perfectly. Keep doing your best more customers are on their way.",
    who: "Olumide Osisanwo — Jan 2026",
  },
  {
    id: "client-review-adebayo-yaya",
    stars: 5,
    text: "The name Service Technology has become an household name in the world of solar energy installation in Nigeria.l had introduced several clients to the company and the feedbacks i got after the patronage were all positive.Intending clients should patronise the company because it has integrity and the services it delivers are second to none.l have been a client to the company in the last fifteen years.",
    who: "Adebayo Yaya — Feb 2026",
  },
  {
    id: "client-review-seun-akindipe",
    stars: 5,
    text: "Your services and products are top notch, I have been enjoying the inverter system since installation.",
    who: "Seun Akindipe — Oct 2025",
  },
  {
    id: "client-review-jibola-oseni",
    stars: 5,
    text: "Thank you for doing a great job. Quality materials, quick response to complaints and dedicated to their job. Still enjoying the solar you did. Thank you",
    who: "Jibola Oseni — Dec 2025",
  },
];

// Light spam protection: one review per browser every 2 minutes.
const COOLDOWN_MS = 2 * 60 * 1000;
const COOLDOWN_KEY = "sts_last_review_at";

function readCooldown() {
  try {
    return Number(localStorage.getItem(COOLDOWN_KEY) || 0);
  } catch {
    return 0; // storage blocked (private mode etc.) — just skip the check
  }
}

function writeCooldown() {
  try {
    localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
  } catch {
    /* ignore */
  }
}

// Fetch the reviews that are allowed to be shown, best first.
async function fetchTopReviews() {
  return supabase
    .from("reviews")
    .select("id, name, rating, text, created_at")
    .gte("rating", MIN_RATING)
    .order("rating", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(MAX_REVIEWS);
}

// Totals across ALL reviews (see review_stats() in the SQL).
async function fetchStats() {
  return supabase.rpc("review_stats");
}

// Turn a database row into the shape the page displays.
function toDisplay(row) {
  const when = new Date(row.created_at).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });
  return { id: row.id, stars: row.rating, text: row.text, who: `${row.name} — ${when}` };
}

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
  // Reviews loaded from the database
  const [liveReviews, setLiveReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Rating totals across all reviews: null until loaded, "error" if it failed
  const [stats, setStats] = useState(null);
  const [statsError, setStatsError] = useState(false);

  // Form state
  const [rating, setRating] = useState(3);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  // Load the reviews once, when the page opens
  useEffect(() => {
    let active = true;

    async function load() {
      if (!supabase) {
        setLoading(false);
        return;
      }
      const [list, totals] = await Promise.all([fetchTopReviews(), fetchStats()]);
      if (!active) return;
      if (list.error) console.error("Could not load reviews:", list.error);
      else setLiveReviews(list.data);
      if (totals.error) {
        console.error("Could not load rating totals:", totals.error);
        setStatsError(true);
      } else {
        setStats(totals.data);
      }
      setLoading(false);
    }

    load();
    return () => {
      active = false;
    };
  }, []);

  // Always show the four client-provided reviews alongside up to six
  // eligible Supabase reviews. They remain separate from database submissions.
  const visibleReviews = useMemo(
    () => [...HARDCODED_REVIEWS, ...liveReviews.map(toDisplay)],
    [liveReviews]
  );

  // Combine Supabase totals with the four hardcoded five-star reviews.
  // This changes only the frontend summary; no hardcoded review is written to Supabase.
  const hardcodedCount = HARDCODED_REVIEWS.length;
  const databaseTotal = Number(stats?.total ?? 0);
  const total = databaseTotal + hardcodedCount;
  const databaseAverage = databaseTotal ? Number(stats?.average ?? 0) : 0;
  const combinedStarSum = databaseAverage * databaseTotal + hardcodedCount * 5;
  const average = total ? combinedStarSum / total : 0;
  const filledStars = Math.round(average);
  const breakdown = [5, 4, 3, 2, 1].map((n) => {
    const databaseCount = Number(stats?.[`c${n}`] ?? 0);
    const combinedCount = databaseCount + (n === 5 ? hardcodedCount : 0);
    return {
      label: `${n}★`,
      pct: total ? Math.round((combinedCount / total) * 100) : 0,
    };
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanText = text.trim();
    if (!cleanName || !cleanText || status === "submitting") return;

    // Honeypot: real visitors never see this hidden field, many bots fill it.
    if (honeypot) {
      setStatus("success");
      return;
    }

    if (Date.now() - readCooldown() < COOLDOWN_MS) {
      setErrorMsg("You've just sent a review. Please wait a couple of minutes before sending another.");
      setStatus("error");
      return;
    }

    if (!supabase) {
      setErrorMsg("Reviews aren't connected yet. Please try again later.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    // No .select() here on purpose: a review that isn't allowed to be shown
    // can't be read back, and asking for it back would make the save fail.
    const { error } = await supabase
      .from("reviews")
      .insert({ name: cleanName, rating, text: cleanText });

    if (error) {
      console.error("Could not post review:", error);
      setErrorMsg("Sorry, we couldn't send your review. Please try again, or send it to us on WhatsApp.");
      setStatus("error");
      return;
    }

    writeCooldown();
    setStatus("success");
    setName("");
    setText("");
    setRating(3);

    // Refresh the list (the new review appears if it makes the top 6)
    // and the rating summary (which counts every review)
    const [list, totals] = await Promise.all([fetchTopReviews(), fetchStats()]);
    if (list.data) setLiveReviews(list.data);
    if (totals.data) {
      setStats(totals.data);
      setStatsError(false);
    }
  }

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-green text-xs font-semibold tracking-widest uppercase mb-3">Client reviews</div>
          <h1 className="text-[34px] mb-3">What people say after working with us</h1>
          <p className="text-grey-mid text-[15px] mb-10">A selection of reviews from our clients.</p>
        </Reveal>

        {/* Rating summary — based on ALL reviews received, not just the ones listed below */}
        <Reveal>
          <div className="grid sm:grid-cols-[auto_1fr] gap-8 sm:gap-12 items-center bg-[#F3F1E9] p-8 mb-12">
            <div className="text-center">
              <div className="font-display text-5xl text-green font-semibold">
                {total ? average.toFixed(1) : "–"}
              </div>
              <div className="text-base tracking-widest">
                <span className="text-gold">{"★".repeat(filledStars)}</span>
                <span className="text-grey-line">{"★".repeat(5 - filledStars)}</span>
              </div>
              <div className="text-xs text-grey-mid mt-1">
                {statsError
                  ? `including ${hardcodedCount} client reviews; database ratings unavailable`
                  : total
                  ? `based on all ${total} review${total === 1 ? "" : "s"}`
                  : "no reviews yet"}
              </div>
            </div>
            <div>
              {breakdown.map((b) => (
                <RatingBar key={b.label} {...b} />
              ))}
            </div>
          </div>
        </Reveal>

        {visibleReviews.length > 0 ? (
          <Reveal stagger className="grid sm:grid-cols-2 gap-5 mb-14">
            {visibleReviews.map((r) => (
              <div key={r.id} className="border border-grey-line bg-white p-6 hover:shadow-xl transition-shadow">
                <Stars count={r.stars} />
                <p className="text-sm">"{r.text}"</p>
                <div className="text-xs text-grey-mid mt-4">{r.who}</div>
              </div>
            ))}
          </Reveal>
        ) : (
          <p className="text-grey-mid text-sm mb-14">
            {loading ? "Loading reviews…" : "No reviews to show yet. Be the first to share your experience."}
          </p>
        )}

        <Reveal>
          <div className="bg-blue text-white p-8 md:p-10">
            {status === "success" ? (
              <div>
                <h3 className="text-2xl font-medium mb-2">Thank you!</h3>
                <p className="text-[#B7C6D2] text-sm">
                  We've received your review. We read every one, and a selection is featured on this
                  page.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-medium mb-1.5">Leave a review</h3>
                <p className="text-[#B7C6D2] text-sm mb-6">
                  Tell us about your experience working with us. We read every review, and a selection
                  is featured on this page.
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

                {/* Honeypot — hidden from real visitors */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] w-0 h-0 opacity-0"
                />

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  maxLength={60}
                  className="w-full bg-white/[.06] border border-white/25 text-white placeholder:text-[#8FA1AF] px-3.5 py-3 text-sm mb-3.5"
                />
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Your review…"
                  required
                  maxLength={600}
                  rows={3}
                  className="w-full bg-white/[.06] border border-white/25 text-white placeholder:text-[#8FA1AF] px-3.5 py-3 text-sm mb-3.5"
                />

                {status === "error" && (
                  <p role="alert" className="text-[#FFB4A8] text-sm mb-3.5">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-green hover:bg-green-deep disabled:opacity-60 transition-colors px-6 py-3 text-sm font-medium"
                >
                  {status === "submitting" ? "Sending…" : "Submit review →"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}