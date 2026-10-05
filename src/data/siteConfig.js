export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/load-calculator", label: "Load Calculator" },
  { to: "/products-services", label: "Products & Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// TODO: replace with the real WhatsApp number, in international format
// without the leading +, e.g. "2348012345678".
export const WHATSAPP_NUMBER = "2348027584145";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi, I'm interested in your services at STS Global.";

export function whatsappLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const BUSINESS = {
  name: "STS Global",
  fullName: "Service Technology Solutions Global",
  address: "Katola Estate Rd, Ikorodu, 104101, Lagos, Nigeria",
  email: "info@stsolutionsglobal.com",
  phone: "+234 802 758 4145",
  hours: "Mon – Sat, 9am – 6pm",
};
