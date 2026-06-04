"use client";

import ServicePageLayout from "@/components/service-page-layout";

export default function ExperientialStrategyPage() {
  return (
    <ServicePageLayout
      label="Experiential Strategy"
      headline={["Data-Driven Strategy for", "Human-Centred Experiences"]}
      gradientLine={1}
      intro="Before we build anything, we build the case. Our strategists combine audience insights, cultural intelligence, and commercial rigour to ensure every experience delivers against hard business metrics."
      accentGradient="from-green-500/5 via-transparent to-transparent"
      features={[
        {
          title: "Audience Research & Insights",
          description:
            "Quantitative and qualitative research to understand your audience deeply — their behaviours, motivations, cultural touchpoints, and the moments where your brand can meaningfully intersect their lives.",
        },
        {
          title: "Experience Architecture",
          description:
            "Mapping the end-to-end experience journey across physical and digital touchpoints — from awareness to attendance to post-event advocacy. Every moment is intentionally designed.",
        },
        {
          title: "Measurement Frameworks",
          description:
            "Our proprietary Impact Measurement Framework™ defines KPIs before the first sketch is drawn — footfall, engagement, social amplification, sentiment, leads, and business outcomes.",
        },
        {
          title: "Cultural & Trend Intelligence",
          description:
            "We track cultural movements, platform trends, and audience behaviour shifts to ensure your experience feels timely, relevant, and ahead of the curve.",
        },
        {
          title: "Portfolio Strategy",
          description:
            "For brands running multiple activations per year, we build an annual experiential portfolio — mapping moments across the calendar for maximum cumulative impact.",
        },
        {
          title: "ROI & Business Case Development",
          description:
            "We build compelling business cases for experiential investment — modelling projected reach, engagement, earned media value, and commercial return against budget.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Immersion & Discovery",
          description:
            "We go deep into your brand, category, and competitive landscape. Stakeholder interviews, audience data analysis, and cultural audits build the strategic foundation.",
        },
        {
          step: "02",
          title: "Audience Mapping",
          description:
            "Detailed audience segmentation and journey mapping. We identify who we're trying to reach, where they are, and what kind of experience will genuinely move them.",
        },
        {
          step: "03",
          title: "Strategic Platform Development",
          description:
            "We develop a strategic platform — the big idea that connects your brand truth to an audience need. This becomes the creative springboard for all experiential work.",
        },
        {
          step: "04",
          title: "Experience Blueprint",
          description:
            "A detailed blueprint mapping every touchpoint, interaction, and content moment across the experience. This document becomes the creative and production bible.",
        },
        {
          step: "05",
          title: "KPI Framework & Measurement Plan",
          description:
            "We define success metrics, measurement methodology, and reporting cadence. You'll know exactly what we're tracking and how we'll prove impact.",
        },
        {
          step: "06",
          title: "Creative Briefing",
          description:
            "Strategy translates into a tight creative brief that inspires bold ideas while keeping them grounded in audience truth and business objectives.",
        },
      ]}
      caseStudies={[
        {
          title: "Annual Experience Portfolio",
          client: "Fortune 500 Consumer Brand",
          result: "12 activations/year, 3x ROI improvement",
          color: "from-emerald-600/40 to-green-600/40",
        },
        {
          title: "Gen-Z Audience Strategy",
          client: "Global Financial Services",
          result: "First experiential campaign, 40K Gen-Z engagements",
          color: "from-blue-600/40 to-indigo-600/40",
        },
        {
          title: "Experience Measurement Overhaul",
          client: "Premium Spirits Brand",
          result: "First-ever experiential ROI model, board-level buy-in",
          color: "from-amber-600/40 to-orange-600/40",
        },
        {
          title: "Cultural Moments Strategy",
          client: "Sportswear Brand",
          result: "8 cultural tent-pole activations, 200% earned media uplift",
          color: "from-lime-600/40 to-teal-600/40",
        },
      ]}
      faq={[
        {
          question: "Do we need strategy if we already have a creative idea?",
          answer:
            "Strategy and creative amplify each other. Even with a strong creative idea, strategy ensures it reaches the right audience, at the right moment, with the right measurement in place. We often refine and strengthen existing ideas through the strategic lens.",
        },
        {
          question: "What is the Impact Measurement Framework™?",
          answer:
            "It's our proprietary methodology for measuring experiential impact. It combines quantitative metrics (footfall, dwell time, social reach, NPS) with qualitative data (sentiment analysis, brand perception shifts) and commercial outcomes (leads, sales, lifetime value). Every activation gets a tailored measurement plan.",
        },
        {
          question: "Can you work with our existing agency partners?",
          answer:
            "Absolutely. We regularly collaborate with creative agencies, media agencies, and PR firms. We can lead experiential strategy while integrating into your broader agency ecosystem — or provide strategic input to support another agency's activation.",
        },
        {
          question: "How do you prove experiential ROI?",
          answer:
            "We model projected ROI before the activation (to build the business case) and measure actual ROI after. Our framework covers hard metrics (cost per engagement, earned media value, lead value) and softer brand metrics (awareness, consideration, sentiment). We deliver it in a format ready for board-level reporting.",
        },
        {
          question: "Do you offer ongoing strategic retainers?",
          answer:
            "Yes. Many clients retain us for ongoing strategic counsel — annual experience portfolio planning, cultural trend briefings, measurement across multiple activations, and strategic input on briefs. Retainers give you continuous strategic thinking rather than project-by-project.",
        },
      ]}
      ctaText="Let's design a strategy that delivers"
    />
  );
}
