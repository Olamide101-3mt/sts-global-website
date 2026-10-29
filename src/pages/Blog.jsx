import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO"

const POSTS = [
  {
    id: "electric-fence",
    image: "/images/electric.jpg",
    tag: "Security",
    color: "bg-red text-white",
    title: "Electric Fence Security Solutions for Enhanced Property Security",
    excerpt:
      "Protect Your Property Styrenthen Your Security.",
    date: "Security Solutions",
    readTime: "Guide",
  },
  {
    id: "solar-energy",
    image: "/images/solar1.jpg",
    tag: "Solar",
    color: "bg-green text-white",
    title: "Solar Renewable Energy Solutions for Homes and Businesses",
    excerpt:
      "Reliable Energy. Intelligent Technology. Sustainable Future.",
    date: "Powering a better future with solar energy",
    readTime: "Guide",
  },
  {
    id: "automated-gates",
    image: "/images/gate.jpg",
    tag: "Automation",
    color: "bg-gold text-[#3a2c00]",
    title: "Automated Gates, Sliding Gates and Smart Home Automation",
    excerpt:
      "Intelligent Access. Enhanced Security. Everyday Convenience",
    date: "Transform Your Property With Smart Automation",
    readTime: "Guide",
  },
  {
    id: "cctv-ip-cameras",
    image: "/images/camera.jpg",
    tag: "Security",
    color: "bg-red text-white",
    title: "CCTV and IP Camera Security Systems Explained",
    excerpt:
      "Smarter Surveillance. Stronger Security. Greater Peace of Mind",
    date: "Protect What Matters Most With Advanced CCTV Technology",
    readTime: "Guide",
  },
  {
    id: "pabx-intercom",
    image: "/images/Pbx.png",
    tag: "Communication",
    color: "bg-navy text-white",
    title: "PABX Intercom Phone Systems for Homes, Offices and Businesses",
    excerpt:
      "Better Communication. Smarter Connectivity. Professional Solutions",
    date: "Improve Communication with a Pabx Intercom Phone System",
    readTime: "Guide",
  },
  {
    id: "solar-water-pumping",
    image: "/images/water.jpg",
    tag: "Solar",
    color: "bg-green text-white",
    title: "Solar Water Pumping Solutions for Rural Communities",
    excerpt:
      "Sustainable Water Supply. Clean Enery. Stronger Communities.",
    date: "Bringing Reliable Water Access To Communities Through Solar Energy",
    readTime: "Guide",
  },
  {
    id: "elevator-lift",
    image: "images/lift.jpg",
    tag: "Other Solutions",
    color: "bg-[#E8EAF0] text-navy",
    title: "Elevator and Lift Solutions for Modern Buildings",
    excerpt:
      "Modern Elevator Solutions For Residential and Commercial Buildings",
    date: "Building Solutions",
    readTime: "Guide",
  },
 
];

function PostPlaceholder({ label = "Article image" }) {
  return (
    <div className="relative aspect-[16/10] bg-[#F3F1E9] text-grey-mid flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent" />
      <div className="relative text-center px-4">
        <div className="w-12 h-12 mx-auto mb-3 border border-grey-line flex items-center justify-center text-green text-lg">
          +
        </div>
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
}

export default function Blog() {
  const featuredPost = POSTS[1];

  return (
    <main className="bg-cream min-h-screen">
      <SEO title = "Solar, Security, CCTV, PABX INTERCOMM, Elevation  lift, Solar Water Pump and Automation Guides"
        description= "Read practical guides from STS Global on solar energy, CCTV, electric fencing, automated gates, intercom systems and smart home technology."
        path ="/blog"
        />
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        {/* PAGE INTRO */}
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[2px] bg-red" />
            <div className="text-green text-xs font-semibold tracking-widest uppercase">
              From the STS Global team
            </div>
          </div>

          <h1 className="text-[38px] md:text-5xl leading-[1.08] max-w-3xl mb-5">
            Insights on solar, security, communication and automation.
          </h1>

          <p className="text-grey-mid max-w-[60ch] leading-7 mb-12">
            Explore our guides to energy solutions, property security,
            automated systems and building technologies for homes,
            businesses and communities.
          </p>
        </Reveal>

        {/* FEATURED ARTICLE */}
        <Reveal>
          <article className="group grid md:grid-cols-[1.1fr_0.9fr] border border-grey-line bg-white mb-14 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="overflow-hidden">
              <div className="h-full transition-transform duration-500 group-hover:scale-[1.02]">
                <img src={featuredPost.image} alt={featuredPost.title}className="w-full aspect-[16/10] object-cover"
              />
              </div>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center items-start">
              <span className="inline-block bg-green text-white text-[11px] font-bold tracking-wide uppercase px-3 py-1.5 mb-5">
                Featured topic
              </span>

              <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-4">
                {featuredPost.title}
              </h2>

              <p className="text-grey-mid text-sm leading-7 mb-5">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-3 text-xs text-grey-mid">
                <span>{featuredPost.date}</span>
                <span className="w-1 h-1 rounded-full bg-red" />
                <span>{featuredPost.readTime}</span>
              </div>

      
<Link
  to={`/blog/${featuredPost.id}`}
  aria-label={`Read ${featuredPost.title}`}
  className="text-green text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1"
>
  Read full article <span>→</span>
              </Link>
            </div>
          </article>
        </Reveal>

        {/* ARTICLE GRID */}
        <section>
          <Reveal>
            <div className="mb-7">
              <div className="text-green text-xs font-semibold tracking-widest uppercase mb-2">
                Explore our solutions
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold">
                Guides and insights from STS Global.
              </h2>

              <p className="text-grey-mid text-sm leading-7 mt-3 max-w-2xl">
                Browse our areas of expertise and contact our team for
                guidance on a solution suited to your requirements.
              </p>
            </div>
          </Reveal>

          <Reveal
            stagger
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {POSTS.map((post) => (
              <article
                key={post.id}
                className="group border border-grey-line bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  {post.image ? (
                    <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full aspect-[16/10] object-cover"
                      />
                    </div>
                  ) : (
                    <PostPlaceholder label="Image coming soon" />
                  )}
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

                  <p className="text-[13.5px] leading-6 text-grey-mid mb-5">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between gap-3 border-t border-grey-line pt-4">
                    <span className="text-xs text-grey-mid">
                      {post.date}
                    </span>

                  
<Link
  to={`/blog/${post.id}`}
  aria-label={`Read ${post.title}`}
  className="text-green text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1"
>
  Read article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
        </section>

        {/* BOTTOM CTA */}
        <Reveal>
          <section className="relative overflow-hidden bg-navy text-white mt-16 md:mt-20 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-28 h-28 bg-red opacity-90 translate-x-14 -translate-y-14 rotate-45" />

            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-[2px] bg-red" />

                <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                  Let's find the right solution
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-4 text-black">
                Need help choosing a solution for your property?
              </h2>

              <p className="text-black text-sm leading-7 mb-7">
                Talk to STS Global about your power, security,
                communication or automation requirements.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-green hover:bg-green-deep text-white px-6 py-3.5 text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                Talk to STS Global →
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
