"use client";

import ServicePageLayout from "@/components/service-page-layout";

export default function ImmersiveInstallationsPage() {
  return (
    <ServicePageLayout
      label="Immersive Installations"
      headline={["Multi-Sensory Worlds That", "Transport Audiences"]}
      gradientLine={1}
      intro="We design and build immersive environments that engage all the senses — sight, sound, touch, even smell and taste. Installations that don't just display your brand; they let people live inside it."
      accentGradient="from-purple-500/5 via-transparent to-transparent"
      features={[
        {
          title: "360° Environments",
          description:
            "Fully enclosed spaces that transport visitors into an alternate reality — custom-built worlds that immerse from every angle with projection, lighting, and sound.",
        },
        {
          title: "Interactive Installations",
          description:
            "Touch-responsive, motion-tracked, and sensor-driven installations where the audience becomes a participant, shaping the experience in real time.",
        },
        {
          title: "Light & Projection Art",
          description:
            "Large-scale projection mapping, LED installations, and light sculptures that transform architecture and spaces into living canvases.",
        },
        {
          title: "Sound Design & Sonic Branding",
          description:
            "Spatial audio environments and bespoke soundscapes that create emotional depth — from binaural experiences to room-scale acoustic design.",
        },
        {
          title: "Kinetic & Mechanical Art",
          description:
            "Motorised sculptures, robotic elements, and moving structures that bring physical dynamism and awe to your brand expression.",
        },
        {
          title: "Permanent & Touring Installations",
          description:
            "Long-term installations for brand HQs, retail flagships, and museums — designed to tour or remain as a lasting brand landmark.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Concept & Vision",
          description:
            "We start with the emotion you want to evoke. Our creative team develops immersive concepts using mood boards, spatial sketches, and narrative frameworks.",
        },
        {
          step: "02",
          title: "Spatial Design",
          description:
            "Detailed 3D modeling, spatial flow planning, and visitor journey mapping. We design how people move through and interact with the space at every point.",
        },
        {
          step: "03",
          title: "Technical Architecture",
          description:
            "Our technologists specify all hardware, software, sensors, projectors, and audio systems. Every technical decision serves the creative vision.",
        },
        {
          step: "04",
          title: "Prototyping & Testing",
          description:
            "We build working prototypes and test interactive elements in our Immersive Lab before full production — reducing risk and refining the experience.",
        },
        {
          step: "05",
          title: "Fabrication & Installation",
          description:
            "Our production team manages fabrication, shipping, and installation with military precision. Complex builds are assembled and tested off-site before final install.",
        },
        {
          step: "06",
          title: "Launch & Maintenance",
          description:
            "We handle launch events, staff training, and ongoing technical support. For permanent installations, we provide maintenance contracts and content updates.",
        },
      ]}
      caseStudies={[
        {
          title: "Neon Horizons",
          client: "Global Tech Brand",
          result: "4 cities, 200K+ visitors, viral social content",
          color: "from-violet-600/40 to-fuchsia-600/40",
        },
        {
          title: "Sound Garden",
          client: "Premium Audio Brand",
          result: "Award-winning installation, 3-month run",
          color: "from-emerald-600/40 to-teal-600/40",
        },
        {
          title: "Infinity Room",
          client: "Luxury Automotive Brand",
          result: "Permanent flagship installation, 500K annual visitors",
          color: "from-sky-600/40 to-blue-600/40",
        },
        {
          title: "Data Sculpture",
          client: "Financial Services Brand",
          result: "Real-time data visualisation in physical space",
          color: "from-cyan-600/40 to-indigo-600/40",
        },
      ]}
      faq={[
        {
          question: "What is an immersive installation?",
          answer:
            "An immersive installation is a designed environment that fully envelops the visitor — engaging multiple senses through light, sound, projection, interactive technology, and physical materials. Unlike a display, you step inside it and become part of it.",
        },
        {
          question: "How long does an installation take to build?",
          answer:
            "Small interactive installations can be designed and built in 6-8 weeks. Large-scale, multi-room immersive environments typically require 3-6 months from concept to opening. Permanent installations may take 6-12 months.",
        },
        {
          question: "Can installations be designed to tour?",
          answer:
            "Yes. We design many installations with modularity and transportability in mind. Touring installations use modular construction, flight-case-ready components, and standardised technical specs to adapt to different venues.",
        },
        {
          question: "What technology do you use?",
          answer:
            "It depends on the concept. We work with projection mapping, LED walls, spatial audio, motion sensors, LiDAR, haptic feedback, AR overlays, real-time generative graphics, robotic elements, and more. Technology serves the creative vision, never the other way around.",
        },
        {
          question: "Do you offer ongoing maintenance?",
          answer:
            "For permanent and long-running installations, we offer maintenance contracts covering hardware monitoring, software updates, content refreshes, and on-call technical support.",
        },
      ]}
      ctaText="Ready to design an immersive world?"
    />
  );
}
