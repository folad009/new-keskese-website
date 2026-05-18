"use client";

import ServicePageLayout from "@/components/service-page-layout";

export default function BrandActivationsPage() {
  return (
    <ServicePageLayout
      label="Brand Activations"
      headline={["Live Brand Moments", "That Spark Conversation"]}
      gradientLine={1}
      intro="We create live brand experiences that cut through the noise — immersive, shareable moments designed to forge emotional connections between your brand and the people who matter most."
      accentGradient="from-yellow-500/5 via-transparent to-transparent"
      features={[
        {
          title: "Experiential Campaigns",
          description:
            "Multi-touchpoint campaigns that combine physical activations with digital amplification for maximum reach and cultural impact.",
        },
        {
          title: "Sampling & Product Trials",
          description:
            "Designed environments where audiences discover your product through curated, multi-sensory interactions — far beyond handing out freebies.",
        },
        {
          title: "Guerrilla & Street Marketing",
          description:
            "Unexpected interventions in public spaces that generate earned media, social sharing, and word-of-mouth at scale.",
        },
        {
          title: "Festival & Sponsorship Activations",
          description:
            "Custom-built brand environments at festivals, sporting events, and cultural moments that become part of the experience itself.",
        },
        {
          title: "Retail Activations",
          description:
            "In-store and storefront experiences that drive footfall, increase dwell time, and convert browsers into loyal customers.",
        },
        {
          title: "Community Building",
          description:
            "Recurring activation formats that build a devoted brand community through exclusive experiences, content, and belonging.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Discovery & Strategy",
          description:
            "We immerse ourselves in your brand, audience, and objectives. Through workshops and research, we define the strategic foundation — who we're reaching, what we want them to feel, and how we'll measure success.",
        },
        {
          step: "02",
          title: "Creative Concept",
          description:
            "Our creative team develops bold, ownable concepts that bring your brand to life in unexpected ways. Every idea is pressure-tested for shareability, cultural relevance, and brand alignment.",
        },
        {
          step: "03",
          title: "Design & Prototyping",
          description:
            "From spatial design to interactive elements, we produce detailed renders, technical drawings, and working prototypes. You'll see and feel the experience before it's built.",
        },
        {
          step: "04",
          title: "Production & Build",
          description:
            "Our production team manages every detail — fabrication, logistics, permits, staffing, and technology integration. We deliver on time and on budget, anywhere in the world.",
        },
        {
          step: "05",
          title: "Live Delivery",
          description:
            "On the ground, our team ensures flawless execution. Real-time monitoring, troubleshooting, and content capture to maximize every moment.",
        },
        {
          step: "06",
          title: "Measurement & Reporting",
          description:
            "Post-activation, we deliver comprehensive impact reports covering attendance, engagement, social reach, sentiment, and ROI — actionable insights for your next move.",
        },
      ]}
      caseStudies={[
        {
          title: "Urban Pulse Campaign",
          client: "Leading Sports Brand",
          result: "2.5M social impressions in 48 hours",
          color: "from-orange-600/40 to-red-600/40",
        },
        {
          title: "Taste the Future",
          client: "Global F&B Brand",
          result: "45K product trials across 8 cities",
          color: "from-amber-600/40 to-yellow-600/40",
        },
        {
          title: "Glow Trail Festival",
          client: "Energy Drink Brand",
          result: "12 festivals, 300K+ live interactions",
          color: "from-lime-600/40 to-green-600/40",
        },
        {
          title: "Street Canvas",
          client: "Luxury Fashion House",
          result: "Featured in Vogue, GQ, Hypebeast",
          color: "from-pink-600/40 to-rose-600/40",
        },
      ]}
      faq={[
        {
          question: "What is a brand activation?",
          answer:
            "A brand activation is a live experience designed to bring your brand to life and create a direct, memorable interaction with your audience. Unlike traditional advertising, activations are participatory — they invite people in rather than broadcasting at them.",
        },
        {
          question: "How long does it take to plan an activation?",
          answer:
            "Timelines vary by scale and complexity. A pop-up activation can be delivered in 4-6 weeks, while a multi-city campaign typically needs 8-12 weeks. We've delivered under tighter timelines when needed — speed is in our DNA.",
        },
        {
          question: "What's the typical budget range?",
          answer:
            "Activations range from $50K for a single-day pop-up to $500K+ for large-scale, multi-market campaigns. We work with you to maximise impact within your budget and always provide transparent costings upfront.",
        },
        {
          question: "How do you measure success?",
          answer:
            "We use our proprietary Impact Measurement Framework™ which tracks footfall, dwell time, engagement rates, social reach, sentiment analysis, earned media value, and direct business metrics like leads or sales. Every activation gets a comprehensive post-event report.",
        },
        {
          question: "Can you deliver activations internationally?",
          answer:
            "Absolutely. We have studios in London, New York, LA, and Tokyo, plus a vetted partner network across 30+ markets. We've delivered activations in 12 countries and counting.",
        },
      ]}
      ctaText="Ready to activate your brand?"
    />
  );
}
