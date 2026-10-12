import { useState } from "react";
import Reveal from "../components/Reveal";
import { BUSINESS, whatsappLink } from "../data/siteConfig";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // NOTE: this form currently just confirms on-screen. To actually
    // deliver messages, point this at a form backend — e.g. Formspree,
    // Web3Forms, or a small PHP mail script on the existing cPanel
    // hosting. See README for options. The WhatsApp button below works
    // immediately with no backend needed.
    setSent(true);
  }

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-green text-xs font-semibold tracking-widest uppercase mb-3">Get in touch</div>
          <h1 className="text-[34px] mb-8">Talk to us about your project</h1>
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 border border-grey-line">
            <div className="p-8 md:p-10 bg-white">
              <h3 className="text-[19px] font-semibold mb-5">Send a message</h3>
              {sent ? (
                <p className="text-grey-mid text-sm">
                  Thanks — your message has been noted. We'll get back to you shortly, or feel free to
                  reach us faster on WhatsApp.
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                    className="w-full border border-grey-line px-3.5 py-3 text-sm mb-4"
                  />
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    className="w-full border border-grey-line px-3.5 py-3 text-sm mb-4"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you need help with?"
                    required
                    rows={4}
                    className="w-full border border-grey-line px-3.5 py-3 text-sm mb-4 focus:outline-none focus:border-green"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green hover:bg-green-deep transition-colors text-white py-3.5 text-sm font-medium"
                  >
                    Send message →
                  </button>
                </form>
              )}
            </div>

            <div className="bg-blue text-white p-8 md:p-10">
              <InfoRow k="Address" v={BUSINESS.address} />
              <InfoRow k="Phone" v={BUSINESS.phone} />
              <InfoRow k="Email" v={BUSINESS.email} />
              <InfoRow k="Hours" v={BUSINESS.hours} />

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green hover:bg-green-deep transition-colors p-5 mt-2"
              >
                <span className="text-2xl">💬</span>
                <span className="text-sm">
                  <b className="block text-[15px] font-semibold mb-0.5">Prefer WhatsApp?</b>
                  Message us directly — usually the fastest reply.
                </span>
              </a>

              


{/* Clickable Google Maps location */}
<a
  href="https://www.google.com/maps/search/?api=1&query=Service+Technology+Solutions+Global%2C+Katola+Estate+Rd%2C+Ikorodu%2C+104101%2C+Lagos%2C+Nigeria"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Open Service Technology Solutions Global on Google Maps"
  className="block aspect-video mt-6 border border-white/15 overflow-hidden group relative"
>
  <iframe
    title="Service Technology Solutions Global location"
    className="w-full h-full grayscale contrast-125 pointer-events-none"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps?q=Service+Technology+Solutions+Global%2C+Katola+Estate+Rd%2C+Ikorodu%2C+104101%2C+Lagos%2C+Nigeria&output=embed"
  />

  {/* Hover message */}
  <span className="absolute bottom-0 left-0 right-0 bg-ink/85 text-white text-xs sm:text-sm px-4 py-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
    Click to open our location in Google Maps →
  </span>
</a>



            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoRow({ k, v }) {
  return (
    <div className="flex gap-3.5 mb-6 text-sm">
      <div>
        <span className="block text-mint text-[11px] tracking-wider uppercase mb-1">{k}</span>
        {v}
      </div>
    </div>
  );
}
