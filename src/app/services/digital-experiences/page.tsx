"use client";

import ServicePageLayout from "@/components/service-page-layout";

export default function DigitalExperiencesPage() {
  return (
    <ServicePageLayout
      label="Digital Experiences"
      headline={["Extending Brand Worlds", "Beyond thePhysical"]}
      gradientLine={1}
      intro="AR, VR, spatial computing, interactive web, and AI-powered experiences that extend your brand into digital dimensions — reaching audiences wherever they are, with the same emotional impact as live."
      accentGradient="from-cyan-500/5 via-transparent to-transparent"
      features={[
        {
          title: "Augmented Reality (AR)",
          description:
            "Location-based and marker-triggered AR experiences that overlay your brand world onto the real environment — from product visualisation to city-scale treasure hunts.",
        },
        {
          title: "Virtual Reality (VR)",
          description:
            "Fully immersive VR experiences for events, showrooms, and remote audiences. Transport people anywhere — a factory floor, a fantasy world, or the inside of your product.",
        },
        {
          title: "Spatial Computing",
          description:
            "Experiences for Apple Vision Pro, Meta Quest, and next-gen spatial platforms. We design for the medium, not just port existing content into 3D.",
        },
        {
          title: "Interactive Web Experiences",
          description:
            "WebGL, Three.js, and creative web experiences that turn your website into a destination — microsite campaigns, virtual showrooms, and interactive storytelling.",
        },
        {
          title: "AI-Powered Interactions",
          description:
            "Conversational AI characters, generative art installations, and personalised digital journeys that adapt in real time to each visitor.",
        },
        {
          title: "Live Digital Integration",
          description:
            "Real-time social walls, live polling, gamification layers, and second-screen experiences that bridge physical events and digital audiences.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Platform & Audience Analysis",
          description:
            "We identify the right digital platforms and technologies for your audience, objectives, and distribution strategy. Not every project needs VR — sometimes a clever AR filter delivers more impact.",
        },
        {
          step: "02",
          title: "Experience Design",
          description:
            "UX, interaction design, and narrative architecture. We storyboard the entire digital journey — mapping every interaction, transition, and emotional beat.",
        },
        {
          step: "03",
          title: "Creative Development",
          description:
            "Visual design, 3D asset creation, sound design, and animation. Our creative technologists work in Unity, Unreal, WebGL, and native mobile platforms.",
        },
        {
          step: "04",
          title: "Development & QA",
          description:
            "Agile development with regular builds and testing milestones. Rigorous QA across devices, platforms, and edge cases before any public launch.",
        },
        {
          step: "05",
          title: "Deployment & Distribution",
          description:
            "App store submissions, web deployment, hardware provisioning for events, or integration into physical installations. We manage the full technical launch.",
        },
        {
          step: "06",
          title: "Analytics & Iteration",
          description:
            "Post-launch analytics, user behaviour tracking, and iterative updates. Digital experiences can be continuously optimised — and we make sure they are.",
        },
      ]}
      caseStudies={[
        {
          title: "Digital Canvas AR",
          client: "Luxury Fashion House",
          result: "500K AR sessions, 8x engagement vs. standard ads",
          color: "from-pink-600/40 to-rose-600/40",
        },
        {
          title: "Virtual Showroom",
          client: "Premium Automotive Brand",
          result: "VR test drives in 20 dealerships globally",
          color: "from-sky-600/40 to-indigo-600/40",
        },
        {
          title: "AI Brand Companion",
          client: "Consumer Electronics Brand",
          result: "Conversational AI at CES, 10K+ interactions",
          color: "from-violet-600/40 to-purple-600/40",
        },
        {
          title: "Interactive Microsite",
          client: "Global Streaming Platform",
          result: "2M unique visitors, 4 min avg. session",
          color: "from-cyan-600/40 to-teal-600/40",
        },
      ]}
      faq={[
        {
          question: "Do we need to build an app?",
          answer:
            "Not necessarily. Many of our best digital experiences are web-based (WebAR, WebGL) and require no download. We recommend native apps only when the experience demands persistent use, complex hardware access, or app store distribution.",
        },
        {
          question: "What hardware do you support for VR?",
          answer:
            "We develop for Meta Quest, Apple Vision Pro, HTC Vive, and custom tethered VR setups for events. We also build web-based VR experiences accessible from any browser. We'll recommend the right platform based on your audience and use case.",
        },
        {
          question: "How do AI-powered experiences work?",
          answer:
            "We use large language models, computer vision, and generative AI to create experiences that respond intelligently to each user. This can range from conversational brand characters to generative art that creates unique visuals based on user input.",
        },
        {
          question: "Can digital experiences integrate with live events?",
          answer:
            "Absolutely — that's our sweet spot. We design digital layers that enhance live events: AR wayfinding, real-time social integration, gamification, second-screen experiences, and post-event digital content that extends the experience beyond the venue.",
        },
        {
          question: "What's the typical budget for a digital experience?",
          answer:
            "WebAR filters and simple interactive experiences start around $30K. Full VR experiences, interactive web platforms, and AI-powered installations range from $75K to $300K+ depending on complexity, content, and distribution scale.",
        },
      ]}
      ctaText="Ready to go digital?"
    />
  );
}
