import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";

const ARTICLES = {
  "electric-fence": {
    image: "/images/electric.jpg",
    category: "Security",
    title: "Electric Fence Solutions for Enhanced Property Security",
    intro:
      "Protecting a property starts with securing its perimeter. Electric fencing can provide an additional layer of security for residential, commercial and industrial properties.",
    sections: [
      {
        heading: "What is an electric fence system?",
        paragraphs: [
          "An electric fence is a perimeter security system designed to deter unauthorized access by delivering controlled electrical pulses through specialized fence conductors. It is normally installed alongside suitable fencing and security warning signs.",
          "A properly designed installation should consider the property's layout, existing boundary wall, applicable safety requirements and integration with other security equipment."
        ]
      },
      {
        heading: "Benefits of electric fencing",
        paragraphs: [
          "Electric fencing can help discourage intruders, establish a clear security boundary and complement existing systems such as CCTV cameras, alarms and access control.",
          "The most suitable arrangement depends on the property's risk level, perimeter length and the security equipment already in place."
        ]
      },
      {
        heading: "Choosing the right installation",
        paragraphs: [
          "Before installation, assess the perimeter, power supply, maintenance requirements and safe placement of the system. Professional installation and regular inspections help ensure that the equipment operates as intended."
        ]
      }
    ]
  },

  "solar-energy": {
    image: "/images/solar1.jpg",
    category: "Solar",
    title: "Solar Renewable Energy Solutions for Homes, Schools, Churches, and Businesses",
    intro:
      "Solar energy offers homes, schools, churches, and businesses another way to generate electricity and manage their power needs. The right system depends on energy consumption, available sunlight and the appliances that must remain powered.",
    sections: [
     {
        heading: "How does a solar power system work?",
        paragraphs: [
          "Solar panels convert sunlight into electrical energy. Depending on the system design, an inverter converts that energy into usable electricity, while batteries can store energy for use when sunlight is unavailable.",
          "System components and configuration vary according to the property's requirements and whether the installation is grid-connected, off-grid or hybrid."
        ]
      },
   

    
      {
        heading: "Why consider solar energy?",
        paragraphs: [
          "A well-designed solar system can reduce reliance on grid electricity or generators, improve power availability and help manage long-term energy costs. Actual savings depend on system size, usage patterns, installation costs and available sunlight."
        ]
      },
      {
        heading: "How do you choose a suitable system?",
        paragraphs: [
          "Begin by listing your appliances, their power ratings and how many hours you use them daily. A professional assessment can then estimate your energy requirements and determine appropriate panel, inverter and battery capacities.",
          "Choosing components based on actual usage helps avoid an undersized system or unnecessary expenditure."
        ]
      }
    ]
  },

  "automated-gates": {
    image: "/images/gate.jpg",
    category: "Automation",
    title: "Automated Gates, Sliding Gates and Smart Home Automation",
    intro:
      "Automated gates and smart home systems help property owners manage access and everyday functions with greater convenience. The right setup depends on the property's design, security needs and preferred level of automation.",
    sections: [
      {
        heading: "What are automated and sliding gates?",
        paragraphs: [
          "Automated gates use an electric motor and control system to open and close a gate. Sliding gates move along a track or suitable guiding mechanism, making them an option for properties where the gate can move sideways.",
          "Swing gates and sliding gates have different space and installation requirements. A site assessment helps determine which design is appropriate."
        ]
      },
      {
        heading: "How smart home automation works",
        paragraphs: [
          "Smart home automation connects compatible devices and controls so users can manage selected functions such as lighting, access, climate controls and other supported equipment.",
          "Depending on the system, controls may be available through wall panels, remote controls, mobile applications or automated schedules."
        ]
      },
      {
        heading: "Plan for safety and reliability",
        paragraphs: [
          "Gate automation should account for the gate's weight, movement path, obstruction detection, manual release and regular maintenance. Smart home equipment should also be selected for compatibility, network reliability and user requirements."
        ]
      }
    ]
  },

  "cctv-ip-cameras": {
    image: "/images/camera.jpg",
    category: "Security",
    title: "CCTV and IP Camera Security Systems Explained",
    intro:
      "CCTV and IP camera systems help property owners monitor activities around homes, offices, shops and other facilities. Selecting the right system begins with understanding the areas that need monitoring and the level of detail required.",
    sections: [
      {
        heading: "What is the difference between CCTV and IP cameras?",
        paragraphs: [
          "Traditional analogue CCTV systems transmit video through a compatible recording setup, while IP cameras transmit digital video over a network. IP systems can support features such as remote viewing, higher-resolution video and integration with network-based equipment, depending on the devices used."
        ]
      },
      {
        heading: "Important features to consider",
        paragraphs: [
          "Consider image resolution, night vision, field of view, storage capacity, weather resistance and whether remote access is required. Camera placement matters just as much as camera specifications.",
          "A good design covers important entrances and vulnerable areas while respecting people's privacy and applicable laws."
        ]
      },
      {
        heading: "Why professional installation matters",
        paragraphs: [
          "Correct installation helps provide useful camera angles, reliable power and connectivity, secure recording and appropriate user access. Periodic testing and maintenance help keep the system working properly."
        ]
      }
    ]
  },

  "pabx-intercom": {
    image: "/images/Pbx.png",
    category: "Communication",
    title: "PABX Intercom Phone Systems for Homes, Offices and Businesses",
    intro:
      "Reliable communication helps people coordinate activities in homes, offices and commercial facilities. PABX and intercom systems provide different ways to communicate internally and, where configured, connect with external telephone services.",
    sections: [
      {
        heading: "Understanding PABX systems",
        paragraphs: [
          "A Private Automatic Branch Exchange (PABX) manages telephone extensions within an organization. It can allow staff to call one another internally and share external telephone lines, depending on the system configuration.",
          "Modern solutions may use traditional telephone equipment, IP-based technology or a combination of both."
        ]
      },
      {
        heading: "How intercom systems help",
        paragraphs: [
          "Intercom systems support communication between designated locations, such as rooms, office departments, reception desks and building entrances. Video intercom models can also let users see visitors before granting access."
        ]
      },
      {
        heading: "Selecting the right communication system",
        paragraphs: [
          "Consider the number of users and extensions, the size of the premises, existing network infrastructure, required features and opportunities for future expansion. A suitable design should meet today's communication needs without making later upgrades unnecessarily difficult."
        ]
      }
    ]
  },

  "solar-water-pumping": {
    image: "/images/water.jpg",
    category: "Solar",
    title: "Solar Water Pumping Solutions for Rural Communities",
    intro:
      "Access to reliable water is important for households, agriculture and community development. Solar water pumping can help move water where conventional electricity is limited or expensive to access.",
    sections: [
      {
        heading: "How solar water pumping works",
        paragraphs: [
          "Solar panels supply electricity to a compatible pump system, either directly through suitable controls or through a configured electrical arrangement. The pump moves water from a source such as a borehole or well to a storage tank or distribution point.",
          "The system design depends on the water source, pumping depth, required flow rate and the height and distance over which water must be delivered."
        ]
      },
      {
        heading: "Benefits for communities and farms",
        paragraphs: [
          "Solar pumping can reduce dependence on fuel-powered pumps and help provide water during periods when grid electricity is unavailable. It may support household water supply, irrigation and livestock needs when the water source and system are properly designed."
        ]
      },
      {
        heading: "What should be assessed before installation?",
        paragraphs: [
          "A proper assessment should establish the water demand, borehole yield, total pumping head, daily sunlight availability, water storage requirements and water quality.",
          "Regular inspection of panels, pump controls, pipes and water infrastructure helps support long-term reliability. Water extraction should also comply with applicable local requirements."
        ]
      }
    ]
  },

  "elevator-lift": {
    image: "/images/lift.jpg",
    category: "Building Solutions",
    title: "Elevator and Lift Solutions for Modern Buildings",
    intro:
      "Elevators and lifts can improve movement between floors in residential, commercial and public buildings. Choosing an appropriate solution requires careful attention to the building, users and intended purpose.",
    sections: [
      {
        heading: "Understanding lift requirements",
        paragraphs: [
          "Lift systems vary according to their intended use, passenger or goods capacity, travel height, available shaft space and building design. The appropriate system for a private residence may differ significantly from one designed for a busy commercial property."
        ]
      },
      {
        heading: "Safety, accessibility and reliability",
        paragraphs: [
          "Important considerations include suitable safety features, emergency communication, backup and rescue arrangements, accessibility and compliance with relevant building and lift safety standards.",
          "Equipment should be installed and maintained by appropriately qualified professionals in accordance with manufacturer guidance and applicable regulations."
        ]
      },
      {
        heading: "Planning a lift installation",
        paragraphs: [
          "Early consultation helps assess available space, building structure, electrical requirements and anticipated passenger traffic. Planned servicing and periodic safety inspections are also essential to the continued operation of lift equipment."
        ]
      }
    ]
  },

  "smart-home": {
    image: null,
    category: "Automation",
    title: "Smart Home Automation: Making Everyday Living More Convenient",
    intro:
      "Smart home automation brings compatible devices together to make selected household functions easier to control. Depending on the system, homeowners can manage lighting, access, security and other supported features from convenient control points.",
    sections: [
      {
        heading: "What can a smart home system control?",
        paragraphs: [
          "Depending on the devices installed, automation can include lighting controls, smart switches, automated gates, selected security devices, climate controls and scheduled actions.",
          "Some systems support mobile app control, voice commands or automatic responses to configured events."
        ]
      },
      {
        heading: "Benefits of home automation",
        paragraphs: [
          "Automation can simplify everyday routines, provide convenient access to selected controls and help users monitor supported devices. Energy management benefits depend on the equipment, settings and household usage."
        ]
      },
      {
        heading: "Build a system that suits your home",
        paragraphs: [
          "Start with the functions that matter most, then check device compatibility, network coverage, privacy settings and ongoing support. A system can often be planned in stages, allowing additional compatible features to be introduced later."
        ]
      }
    ]
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = ARTICLES[slug];

  if (!post) {
    return (
      <main className="min-h-screen bg-cream px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-semibold text-navy mb-4">
            Article not found
          </h1>
          <p className="text-grey-mid mb-7">
            The article may have moved or the link may be incorrect.
          </p>
          <Link
            to="/blog"
            className="inline-flex bg-green text-white px-6 py-3"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <Reveal>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-green text-sm font-semibold mb-10 hover:gap-3 transition-all"
          >
            <span>←</span> Back to Blog
          </Link>

          <div className="mb-5">
            <span className="inline-block bg-green text-white text-xs font-bold uppercase tracking-wider px-3 py-2">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-navy mb-6">
            {post.title}
          </h1>
          {post.image && (
  <div className="mb-8 overflow-hidden border border-grey-line">
    <img
      src={post.image}
      alt={post.title}
      className="w-full aspect-[16/9] object-cover"
    />
  </div>
)}

          <p className="text-lg leading-8 text-grey-mid mb-10">
            {post.intro}
          </p>

          <div className="h-1 w-16 bg-red mb-10" />
        </Reveal>

        <Reveal>
          <article className="bg-white border border-grey-line p-6 md:p-10">
            {post.sections.map((section) => (
              <section key={section.heading} className="mb-9 last:mb-0">
                <h2 className="text-xl md:text-2xl font-semibold text-navy mb-4">
                  {section.heading}
                </h2>

                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-grey-mid leading-8 mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </article>
        </Reveal>

        <Reveal>
          <section className="bg-navy text-black mt-10 p-7 md:p-10">
            <span className="block w-8 h-[2px] bg-red mb-4" />

            <h2 className="text-2xl font-semibold mb-4 text-black">
              Need help with this solution?
            </h2>

            <p className="text-white/120 leading-7 mb-6">
              Contact STS Global to discuss your property requirements and
              explore a suitable solution.
            </p>

            <Link
              to="/contact"
              className="inline-flex bg-green hover:bg-green-deep text-white px-6 py-3 transition-colors"
            >
              Talk to STS Global →
            </Link>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
