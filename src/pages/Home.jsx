import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import LoadCalculator from "../components/LoadCalculator";

const SERVICES = [
  { n: "01", title: "Solar Installation", desc: "Panels, inverters and batteries sized to your actual load.", border: "border-green" },
  { n: "02", title: "CCTV Systems", desc: "Remote-viewable surveillance for homes and offices.", border: "border-blue-mid" },
  { n: "03", title: "Fire Alarm Systems", desc: "Early detection wired to your property's layout.", border: "border-red" },
  { n: "04", title: "Automation & Access", desc: "Smart gates, locks and switches you control from your phone.", border: "border-gold" },
];

const TESTIMONIALS = [
  { stars: 5, text: "Installed our solar system in two days and it's never had an issue since.", who: "Adebayo, Ikorodu" },
  { stars: 5, text: "The CCTV setup was explained clearly and works perfectly with my phone.", who: "Chioma, Lagos" },
  { stars: 4, text: "Professional team, fair pricing. Would recommend for automation work.", who: "Tunde, Ikorodu" },
];

function Stars({ count }) {
  return (
    <div className="text-gold text-sm tracking-widest mb-3">
      {"★".repeat(count)}
      <span className="text-grey-line">{"★".repeat(5 - count)}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
{/* ==================== HERO ==================== */}
<section className="relative overflow-hidden bg-[#F7F4EC]">
  {/* Subtle background decoration */}
  <div
    aria-hidden="true"
    className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D4A72C]/10 blur-3xl"
  />

  <div
    aria-hidden="true"
    className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#0F6B45]/10 blur-3xl"
  />

  <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

      {/* ==================== LEFT: HERO CONTENT ==================== */}
      <Reveal>
        <div className="max-w-2xl">

          {/* Location / category badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0F6B45]/15 bg-white px-4 py-2 text-sm font-medium text-[#0F6B45] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#0F6B45]" />
            Solar · Security · Automation
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Ikorodu, Lagos</span>
          </div>

          {/* Main headline */}
          <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-[#0D2136] sm:text-5xl lg:text-6xl">
            Power and protect your home,
            <span className="mt-2 block text-[#0F6B45]">
              properly engineered.
            </span>
          </h1>

          {/* Supporting copy */}
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Reliable solar power, security and smart automation for homes and
            businesses across Lagos — professionally designed, installed and
            supported by one accountable team.
          </p>

          {/* ==================== CTA BUTTONS ==================== */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            {/* Keep existing calculator route */}
            <Link
              to="/load-calculator"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F6B45] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0F6B45]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#0B5738] focus:outline-none focus:ring-2 focus:ring-[#0F6B45] focus:ring-offset-2"
            >
              Calculate my solar needs
              <span aria-hidden="true">→</span>
            </Link>

            {/* Keep existing Products & Services route */}
            <Link
              to="/products-services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0D2136]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#0D2136] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#0D2136]/30 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0D2136] focus:ring-offset-2"
            >
              View our services
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 grid gap-3 border-t border-[#0D2136]/10 pt-6 sm:grid-cols-3">

            <div className="flex items-start gap-2.5">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0F6B45]/10 text-xs font-bold text-[#0F6B45]">
                ✓
              </div>

              <p className="text-sm leading-5 text-slate-600">
                Professional installation
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0F6B45]/10 text-xs font-bold text-[#0F6B45]">
                ✓
              </div>

              <p className="text-sm leading-5 text-slate-600">
                Residential & commercial
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0F6B45]/10 text-xs font-bold text-[#0F6B45]">
                ✓
              </div>

              <p className="text-sm leading-5 text-slate-600">
                After-sales support
              </p>
            </div>

          </div>
        </div>
      </Reveal>


      {/* ==================== RIGHT: VIDEO PLACEHOLDER ==================== */}
      <Reveal delay={120}>
        <div className="relative">

          {/* Main video container */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#0D2136] shadow-2xl shadow-[#0D2136]/20">

            {/* Video placeholder */}
            <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D2136] via-[#123B4F] to-[#0F6B45] sm:h-[500px]">

              {/* Decorative solar-inspired background */}
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10"
              />

              {/* Grid texture */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Video content */}
              <div className="relative z-10 flex flex-col items-center text-center">

                {/* Play button */}
                <button
                  type="button"
                  aria-label="Play STS Global company video"
                  className="group/play flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-2xl backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-[#123B4F]"
                >
                  <span className="ml-1 text-2xl transition-transform duration-300 group-hover/play:scale-110">
                    ▶
                  </span>
                </button>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A72C]">
                  STS Global
                </p>

                <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  See how we power and protect
                </h2>

                <p className="mt-2 max-w-sm px-6 text-sm leading-6 text-white/70">
                  Company and project video coming soon.
                </p>
              </div>
            </div>

            {/* Bottom overlay information */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D2136]/80 to-transparent px-6 pb-5 pt-16 sm:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/60">
                    Solar · Security · Automation
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Professionally designed solutions for your property.
                  </p>
                </div>

                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-lg backdrop-blur-sm sm:flex">
                  ☀
                </div>
              </div>
            </div>

          </div>

          {/* Floating calculator card */}
          <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur sm:left-auto sm:right-6 sm:w-72">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0F6B45]/10 text-xl">
                ⚡
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Start with your load
                </p>

                <p className="mt-0.5 text-sm font-semibold text-[#0D2136]">
                  Estimate your solar needs
                </p>
              </div>

            </div>
          </div>

        </div>
      </Reveal>

    </div>
  </div>
</section>

{/* TRUST / STATS SECTION */}
<section className="border-y border-[#0D2136]/10 bg-white">
  <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

    <div className="py-10 sm:py-12">

      {/* Intro */}
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F6B45]">
          Why STS Global
        </p>

        <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#0D2136] sm:text-2xl">
          Built around your needs. Delivered by one team.
        </h2>
      </div>

      {/* Trust points */}
      <div className="grid divide-y divide-[#0D2136]/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">

        {/* Item 1 */}
        <div className="flex items-center gap-4 px-4 py-5 sm:px-6 lg:py-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F6B45]/10 text-[#0F6B45]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3 5.25 6v5.25c0 4.5 2.85 7.8 6.75 9.75 3.9-1.95 6.75-5.25 6.75-9.75V6L12 3Z"
              />
            </svg>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#0D2136]">
              Professional installation
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Built with safety and performance in mind.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-4 px-4 py-5 sm:px-6 lg:py-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4A72C]/10 text-[#B38412]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 21h18"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 21V7l7-4 7 4v14"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 21v-5h6v5"
              />
            </svg>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#0D2136]">
              Residential & commercial
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Solutions for homes, offices and businesses.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-4 px-4 py-5 sm:px-6 lg:py-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0D2136]/10 text-[#0D2136]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v18M3 12h18"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.64 5.64 18.36 18.36M18.36 5.64 5.64 18.36"
              />
            </svg>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#0D2136]">
              Complete property solutions
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Solar, security and automation under one roof.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center gap-4 px-4 py-5 sm:px-6 lg:py-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F6B45]/10 text-[#0F6B45]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.36 5.64a9 9 0 1 1-12.72 0"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v9"
              />
            </svg>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#0D2136]">
              After-sales support
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Support beyond the day your system is installed.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

{/* SERVICES SECTION */}
<section className="bg-[#F7F4EC] py-20 sm:py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* Section Header */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0F382C]">
        What We Do
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-[#0A192F] sm:text-4xl lg:text-5xl">
        Complete solutions for a smarter,
        <span className="text-[#0F382C]"> safer property.</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        From reliable solar power to modern security and automation,
        we design and install solutions that make your property more
        efficient, secure and comfortable.
      </p>
    </div>

    {/* Services Grid */}
    <div className="mt-14 grid gap-6 md:grid-cols-2">

      {/* Solar Installation */}
      <Link
        to="/products"
        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0F382C]/10 text-[#0F382C]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
            </svg>
          </div>

          <span className="text-sm font-semibold text-[#0F382C] transition-transform duration-300 group-hover:translate-x-1">
            Explore →
          </span>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-[#0A192F]">
            Solar Installation
          </h3>

          <p className="mt-3 max-w-xl leading-7 text-slate-600">
            Reliable solar power systems designed around your energy needs,
            property and everyday usage.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#F7F4EC] px-3 py-1.5 text-xs font-medium text-slate-600">
            Solar panels
          </span>
          <span className="rounded-full bg-[#F7F4EC] px-3 py-1.5 text-xs font-medium text-slate-600">
            Inverters
          </span>
          <span className="rounded-full bg-[#F7F4EC] px-3 py-1.5 text-xs font-medium text-slate-600">
            Battery systems
          </span>
        </div>

        <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#0F382C]/5 transition-transform duration-500 group-hover:scale-150" />
      </Link>

      {/* CCTV Systems */}
      <Link
        to="/products"
        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0A192F]/10 text-[#0A192F]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7"
            >
              <path d="M3 7h12l4 4H7L3 7Z" />
              <path d="M7 11v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6" />
              <circle cx="17" cy="7" r="2" />
            </svg>
          </div>

          <span className="text-sm font-semibold text-[#0F382C] transition-transform duration-300 group-hover:translate-x-1">
            Explore →
          </span>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-[#0A192F]">
            CCTV Systems
          </h3>

          <p className="mt-3 max-w-xl leading-7 text-slate-600">
            Professional surveillance solutions that help you monitor,
            protect and stay informed about your property.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#F7F4EC] px-3 py-1.5 text-xs font-medium text-slate-600">
            CCTV cameras
          </span>
          <span className="rounded-full bg-[#F7F4EC] px-3 py-1.5 text-xs font-medium text-slate-600">
            Remote monitoring
          </span>
          <span className="rounded-full bg-[#F7F4EC] px-3 py-1.5 text-xs font-medium text-slate-600">
            Surveillance
          </span>
        </div>

        <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#0A192F]/5 transition-transform duration-500 group-hover:scale-150" />
      </Link>

      {/* Fire Alarm Systems */}
      <Link
        to="/products"
        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#8A6A00]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7"
            >
              <path d="M12 3c2 3 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.2-4.6 3.3-6.7" />
              <path d="M12 21c1.5-1 2.5-2.4 2.5-4 0-1.6-.8-3-2.1-4.2-.5 1.5-1.5 2.4-2.4 3.2" />
            </svg>
          </div>

          <span className="text-sm font-semibold text-[#0F382C] transition-transform duration-300 group-hover:translate-x-1">
            Explore →
          </span>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-[#0A192F]">
            Fire Alarm Systems
          </h3>

          <p className="mt-3 max-w-xl leading-7 text-slate-600">
            Early-warning fire detection systems designed to help protect
            people, property and valuable equipment.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#F7F4EC] px-3 py-1.5 text-xs font-medium text-slate-600">
            Fire detection
          </span>
          <span className="rounded-full bg-[#F7F4EC] px-3 py-1.5 text-xs font-medium text-slate-600">
            Alarm systems
          </span>
          <span className="rounded-full bg-[#F7F4EC] px-3 py-1.5 text-xs font-medium text-slate-600">
            Safety systems
          </span>
        </div>

        <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#D4AF37]/5 transition-transform duration-500 group-hover:scale-150" />
      </Link>

      {/* Automation & Access */}
      <Link
        to="/products"
        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0F382C]/10 text-[#0F382C]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7"
            >
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M9 9h6v6H9z" />
              <path d="M9 2v2M15 2v2M9 20v2M15 20v2M20 9h2M20 14h2M2 9h2M2 14h2" />
            </svg>
          </div>

          <span className="text-sm font-semibold text-[#0F382C] transition-transform duration-300 group-hover:translate-x-1">
            Explore →
          </span>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-[#0A192F]">
            Automation & Access
          </h3>

          <p className="mt-3 max-w-xl leading-7 text-slate-600">
            Smart access and automation solutions that give you greater
            control, convenience and security.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#F7F4EC] px-3 py-1.5 text-xs font-medium text-slate-600">
            Access control
          </span>
          <span className="rounded-full bg-[#F7F4EC] px-3 py-1.5 text-xs font-medium text-slate-600">
            Smart systems
          </span>
          <span className="rounded-full bg-[#F7F4EC] px-3 py-1.5 text-xs font-medium text-slate-600">
            Automation
          </span>
        </div>

        <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#0F382C]/5 transition-transform duration-500 group-hover:scale-150" />
      </Link>
    </div>

    {/* Bottom CTA */}
    <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#0A192F] px-7 py-8 sm:flex-row sm:px-10">
      <div>
        <p className="text-lg font-semibold text-white">
          Not sure which solution you need?
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-300">
          Tell us about your property and requirements. We'll help you
          identify the right solution.
        </p>
      </div>

      <Link
        to="/contact"
        className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0A192F] transition hover:bg-[#E2C45A]"
      >
        Talk to STS Global →
      </Link>
    </div>

  </div>
</section>

{/* =========================
    HOW IT WORKS SECTION
========================= */}
<section className="bg-white py-20 sm:py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* Section Header */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0F382C]">
        How It Works
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-[#0A192F] sm:text-4xl lg:text-5xl">
        From your idea to a working solution,
        <span className="text-[#0F382C]"> we make it simple.</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        Whether you need solar power, better security or smart automation,
        our process is designed to keep things clear from the first
        conversation to ongoing support.
      </p>
    </div>

    {/* Process Steps */}
    <div className="relative mt-16">

      {/* Connecting Line - Desktop */}
      <div
        className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-slate-200 lg:block"
        aria-hidden="true"
      />

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Step 1 */}
        <div className="relative text-center">
          <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0F382C] text-white shadow-lg shadow-[#0F382C]/15">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 9.7 9.7 0 0 1-4-.8L3 21l1.8-4.2A8.2 8.2 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z" />
              <path d="M8 10h8M8 14h5" />
            </svg>

            <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#D4AF37] text-xs font-bold text-[#0A192F]">
              1
            </span>
          </div>

          <h3 className="mt-6 text-xl font-bold text-[#0A192F]">
            Tell Us What You Need
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Share your property, energy needs, security concerns or
            automation requirements with our team.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative text-center">
          <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0A192F] text-white shadow-lg shadow-[#0A192F]/15">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7"
            >
              <path d="M4 19.5V5.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" />
              <path d="M4 19.5a2 2 0 0 0 2 2h12" />
              <path d="M8 7h8M8 11h6" />
              <circle cx="16.5" cy="16.5" r="2.5" />
              <path d="m18.3 18.3 1.7 1.7" />
            </svg>

            <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#D4AF37] text-xs font-bold text-[#0A192F]">
              2
            </span>
          </div>

          <h3 className="mt-6 text-xl font-bold text-[#0A192F]">
            We Assess & Recommend
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            We understand your requirements and recommend a solution
            suited to your property, usage and priorities.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative text-center">
          <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0F382C] text-white shadow-lg shadow-[#0F382C]/15">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7"
            >
              <path d="M4 20h16" />
              <path d="M6 17V7l6-4 6 4v10" />
              <path d="M9 17v-5h6v5" />
              <path d="M9 8h.01M12 8h.01M15 8h.01" />
            </svg>

            <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#D4AF37] text-xs font-bold text-[#0A192F]">
              3
            </span>
          </div>

          <h3 className="mt-6 text-xl font-bold text-[#0A192F]">
            We Design & Install
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Our team delivers the agreed solution with attention to
            installation quality, safety and performance.
          </p>
        </div>

        {/* Step 4 */}
        <div className="relative text-center">
          <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0A192F] text-white shadow-lg shadow-[#0A192F]/15">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7"
            >
              <path d="M12 3v18M3 12h18" />
              <circle cx="12" cy="12" r="8" />
              <path d="M8.5 12.5 11 15l4.5-5" />
            </svg>

            <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#D4AF37] text-xs font-bold text-[#0A192F]">
              4
            </span>
          </div>

          <h3 className="mt-6 text-xl font-bold text-[#0A192F]">
            We Support You
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            We remain available to support your system beyond installation
            and help you get lasting value from your investment.
          </p>
        </div>

      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-[#F7F4EC] px-7 py-8 sm:flex-row sm:px-10">
      <div>
        <p className="text-lg font-bold text-[#0A192F]">
          Ready to get started?
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          Tell us what you're looking to power, protect or automate.
        </p>
      </div>

      <Link
        to="/contact"
        className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#0F382C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#14503E]"
      >
        Start a Conversation →
      </Link>
    </div>

  </div>
</section>



      {/* CALCULATOR TEASER
      <section className="py-16 md:py-20 bg-[#F3F1E9]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 items-end mb-10">
              <div>
                <div className="text-green text-xs font-semibold tracking-widest uppercase mb-3">Not sure what size you need?</div>
                <h2 className="text-[34px] max-w-[14ch]">Try the load calculator</h2>
              </div>
              <p className="text-grey-mid text-[15px] max-w-[40ch]">
                List the appliances you want to run, and get a straight recommendation on wattage — no jargon.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <LoadCalculator />
          </Reveal>
        </div>
      </section> */}
      

{/* =========================
    TESTIMONIALS / REVIEWS SECTION
========================= */}
<section className="bg-[#F7F4EC] py-20 sm:py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* Section Header */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0F382C]">
        Client Reviews
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-[#0A192F] sm:text-4xl lg:text-5xl">
        Trusted by clients who value
        <span className="text-[#0F382C]"> reliable solutions.</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        See what our clients have to say about their experience working
        with STS Global.
      </p>
    </div>

    {/* Reviews */}
    <div className="mt-14 grid gap-6 md:grid-cols-3">

      {/* Review 1 */}
      <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
        <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 text-[#D4AF37]"
              aria-hidden="true"
            >
              <path d="M10 1.5l2.63 5.33 5.88.85-4.25 4.14 1 5.86L10 14.92l-5.26 2.76 1-5.86L1.5 7.68l5.87-.85L10 1.5Z" />
            </svg>
          ))}
        </div>

        <blockquote className="mt-6 flex-1 text-base leading-7 text-slate-600">
          “STS Global made the process straightforward from the initial
          conversation through installation. The team took time to
          understand what we needed and delivered professionally.”
        </blockquote>

        <div className="mt-7 border-t border-slate-100 pt-5">
          <p className="font-semibold text-[#0A192F]">
            Client Name
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Residential Client
          </p>
        </div>
      </article>

      {/* Review 2 */}
      <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
        <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 text-[#D4AF37]"
              aria-hidden="true"
            >
              <path d="M10 1.5l2.63 5.33 5.88.85-4.25 4.14 1 5.86L10 14.92l-5.26 2.76 1-5.86L1.5 7.68l5.87-.85L10 1.5Z" />
            </svg>
          ))}
        </div>

        <blockquote className="mt-6 flex-1 text-base leading-7 text-slate-600">
          “We were looking for a solution that would improve both
          reliability and security. The team explained the options clearly
          and helped us choose what made sense for the property.”
        </blockquote>

        <div className="mt-7 border-t border-slate-100 pt-5">
          <p className="font-semibold text-[#0A192F]">
            Client Name
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Business Client
          </p>
        </div>
      </article>

      {/* Review 3 */}
      <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
        <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 text-[#D4AF37]"
              aria-hidden="true"
            >
              <path d="M10 1.5l2.63 5.33 5.88.85-4.25 4.14 1 5.86L10 14.92l-5.26 2.76 1-5.86L1.5 7.68l5.87-.85L10 1.5Z" />
            </svg>
          ))}
        </div>

        <blockquote className="mt-6 flex-1 text-base leading-7 text-slate-600">
          “What stood out was the attention to detail and the support
          after installation. We had our questions answered and the team
          remained available when we needed assistance.”
        </blockquote>

        <div className="mt-7 border-t border-slate-100 pt-5">
          <p className="font-semibold text-[#0A192F]">
            Client Name
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Property Owner
          </p>
        </div>
      </article>

    </div>

    {/* Reviews Page Link */}
    <div className="mt-10 text-center">
      <Link
        to="/reviews"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F382C] transition hover:text-[#0A192F]"
      >
        Read more client reviews
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  </div>
</section>

{/* =========================
    FINAL CTA SECTION
========================= */}
<section className="relative overflow-hidden bg-[#0A192F] py-20 sm:py-24">
  {/* Decorative Elements */}
  <div
    className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#0F382C]/40 blur-3xl"
    aria-hidden="true"
  />

  <div
    className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl"
    aria-hidden="true"
  />

  <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
      Let's Get Started
    </p>

    <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
      Ready to power, protect and automate your property?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
      Tell us what you need and let our team help you find a practical
      solution designed around your property and requirements.
    </p>

    {/* CTA Buttons */}
    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link
        to="/contact"
        className="inline-flex w-full items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0A192F] transition hover:bg-[#E2C45A] sm:w-auto"
      >
        Talk to STS Global →
      </Link>

      <Link
        to="/load-calculator"
        className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto"
      >
        Calculate Your Solar Needs
      </Link>
    </div>

    {/* Supporting Trust Points */}
    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
      <span className="flex items-center gap-2">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-[#D4AF37]"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 1.5a1 1 0 0 1 .72.3l6.5 6.5a1 1 0 0 1 .28.7v3.5a6.5 6.5 0 0 1-13 0V9a1 1 0 0 1 .28-.7l6.5-6.5A1 1 0 0 1 10 1.5Zm0 3.02L6.5 8.02V12.5a3.5 3.5 0 0 0 7 0V8.02L10 4.52Z"
            clipRule="evenodd"
          />
        </svg>
        Professional solutions
      </span>

      <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

      <span>Solar · Security · Automation</span>

      <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

      <span>Serving Ikorodu & Lagos</span>
    </div>

  </div>
</section>
    </>
  );
}
