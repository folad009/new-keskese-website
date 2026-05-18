"use client";

import ServicePageLayout from "@/components/service-page-layout";

export default function PopUpExperiencesPage() {
  return (
    <ServicePageLayout
      label="Pop-Up Experiences"
      headline={["Temporary Spaces, ", "Permanent Impressions"]}
      gradientLine={1}
      intro="We design and deliver pop-up retail spaces, brand residencies, and temporary experiences that generate buzz, drive footfall, and create moments of genuine discovery — then vanish, leaving only the memory."
      accentGradient="from-rose-500/5 via-transparent to-transparent"
      features={[
        {
          title: "Pop-Up Retail",
          description:
            "Fully designed temporary stores that showcase your brand and products in a curated, experiential environment — driving sales, data capture, and brand love.",
        },
        {
          title: "Brand Residencies",
          description:
            "Multi-week or multi-month branded spaces that serve as cultural hubs — hosting events, workshops, and community programming around your brand.",
        },
        {
          title: "Launch Spaces",
          description:
            "Bespoke environments designed to debut a new product, collection, or brand identity — with built-in media moments and influencer-ready content zones.",
        },
        {
          title: "Travelling Pop-Ups",
          description:
            "Modular pop-up formats designed to tour multiple cities or venues — from custom vehicles to flat-pack environments that assemble in hours.",
        },
        {
          title: "Restaurant & Bar Takeovers",
          description:
            "Branded dining and drinking experiences in collaboration with chefs, bartenders, and venues — limited-edition moments that become social currency.",
        },
        {
          title: "Cultural Collaborations",
          description:
            "Pop-ups at the intersection of brand and culture — gallery shows, music sessions, maker workshops, and community events that earn cultural credibility.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Location Scouting",
          description:
            "We identify the perfect venue or space for your pop-up based on audience demographics, footfall data, and cultural context. From high streets to warehouses to unconventional spaces.",
        },
        {
          step: "02",
          title: "Concept & Narrative",
          description:
            "Every pop-up tells a story. We develop a compelling narrative and experiential concept that gives people a reason to visit, stay, and share.",
        },
        {
          step: "03",
          title: "Interior & Spatial Design",
          description:
            "Full interior design including layout, fixtures, materials, lighting, and sensory elements. We create 3D renders and walkthroughs so you can experience the space before it's built.",
        },
        {
          step: "04",
          title: "Fit-Out & Installation",
          description:
            "We manage the complete build — from construction and electrical to furniture, styling, and technology. Typical fit-out windows of 3-7 days depending on complexity.",
        },
        {
          step: "05",
          title: "Staffing & Operations",
          description:
            "We recruit, train, and manage on-site teams including brand ambassadors, retail staff, and event hosts. Operational playbooks cover every scenario.",
        },
        {
          step: "06",
          title: "Launch, Run & Strike",
          description:
            "We handle the opening event, day-to-day operations management, real-time social content, and end-of-run de-installation and site restoration.",
        },
      ]}
      caseStudies={[
        {
          title: "Taste Lab Pop-Up",
          client: "Global F&B Brand",
          result: "8 cities, 60K visitors, sell-out every night",
          color: "from-amber-600/40 to-yellow-600/40",
        },
        {
          title: "The Sound Room",
          client: "Premium Audio Brand",
          result: "3-month residency, 25K footfall",
          color: "from-emerald-600/40 to-teal-600/40",
        },
        {
          title: "Sneaker Vault",
          client: "Leading Sports Brand",
          result: "Limited-edition launch, 5K queue, sold out in 2 hours",
          color: "from-orange-600/40 to-red-600/40",
        },
        {
          title: "Studio Takeover",
          client: "Beauty Brand",
          result: "Influencer hub, 10M social reach in one week",
          color: "from-pink-600/40 to-fuchsia-600/40",
        },
      ]}
      faq={[
        {
          question: "How long should a pop-up run?",
          answer:
            "It depends on your objectives. A product launch pop-up might run for a weekend. A brand residency could last 2-3 months. We've found the sweet spot for most retail pop-ups is 2-4 weeks — long enough to build momentum but short enough to maintain urgency.",
        },
        {
          question: "Do you handle lease negotiations and permits?",
          answer:
            "Yes. We manage the full process including venue sourcing, lease negotiation, planning permissions, health & safety compliance, and licensing. We have established relationships with landlords and agents in all our key markets.",
        },
        {
          question: "Can you build a travelling pop-up?",
          answer:
            "Absolutely. We design modular formats that can be flat-packed, shipped, and assembled quickly in new locations. We've built pop-ups that toured 8+ cities with a 24-hour turnaround between venues.",
        },
        {
          question: "Do you provide sales staff?",
          answer:
            "We recruit, train, and manage full on-site teams including brand ambassadors, retail staff, event hosts, and security. All staff are briefed on your brand, products, and key messaging.",
        },
        {
          question: "What happens to the build after the pop-up ends?",
          answer:
            "We manage full de-installation and site restoration. Where possible, we design for sustainability — using reusable materials, modular construction, and donating fixtures post-event. We can also store builds for future reactivation.",
        },
      ]}
      ctaText="Ready to pop up somewhere unexpected?"
    />
  );
}
