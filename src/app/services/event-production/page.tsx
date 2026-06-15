"use client";

import ServicePageLayout from "@/components/service-page-layout";

export default function EventProductionPage() {
  return (
    <ServicePageLayout
      label="Event Production"
      headline={["End-to-End Production", "At Any Scale, Anywhere"]}
      gradientLine={1}
      intro="From intimate executive dinners to 50,000-person festivals, we produce events that are flawlessly executed, creatively ambitious, and strategically designed to achieve your business objectives."
      heroImage="/images/keskese-web-2.jpg"
      accentGradient="from-blue-500/5 via-transparent to-transparent"
      features={[
        {
          title: "Conferences & Summits",
          description:
            "Multi-day conferences with world-class production, speaker management, and attendee experiences that set your event apart from industry noise.",
        },
        {
          title: "Product Launches",
          description:
            "Theatrical, buzzworthy launches that generate earned media and social conversation — designed to make your product the story of the day.",
        },
        {
          title: "Gala Dinners & Awards",
          description:
            "Premium evening events with impeccable production values — from venue transformation to entertainment, AV, and catering coordination.",
        },
        {
          title: "Corporate Events",
          description:
            "Town halls, team offsites, and annual meetings reimagined as engaging experiences that energise employees and reinforce brand culture.",
        },
        {
          title: "Hybrid & Virtual Events",
          description:
            "Broadcast-quality virtual and hybrid formats that maintain energy, engagement, and production values for remote audiences.",
        },
        {
          title: "Festival Production",
          description:
            "Large-scale outdoor events and festival stages with full site planning, infrastructure, health & safety, and crowd management.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Brief & Scoping",
          description:
            "We align on objectives, audience, format, budget, and timeline. A detailed production scope and preliminary budget are delivered within a week of kickoff.",
        },
        {
          step: "02",
          title: "Creative Direction",
          description:
            "Our creative team develops the event narrative, look-and-feel, and experiential moments. Every touchpoint — from registration to departure — is intentionally designed.",
        },
        {
          step: "03",
          title: "Venue & Vendor Management",
          description:
            "We source, negotiate, and manage all venues, suppliers, and technical partners. Our buying power and relationships mean better quality at better rates.",
        },
        {
          step: "04",
          title: "Technical Production",
          description:
            "Full AV design, staging, lighting, rigging, and show-calling. Our in-house technical directors ensure every cue hits perfectly.",
        },
        {
          step: "05",
          title: "Rehearsals & Load-In",
          description:
            "Detailed production schedules, rehearsals, and pre-event walkthroughs ensure the team and all stakeholders are aligned before doors open.",
        },
        {
          step: "06",
          title: "Live Show & Wrap",
          description:
            "On-site production management with real-time problem solving. Post-event, we handle de-rig, vendor settlement, and deliver a comprehensive wrap report.",
        },
      ]}
      caseStudies={[
        {
          title: "Future Forum Summit",
          client: "Fortune 500 Company",
          result: "3,000 attendees, 95% satisfaction score",
          color: "from-blue-600/40 to-cyan-600/40",
        },
        {
          title: "Wave Runner Launch",
          client: "Automotive Giant",
          result: "50K+ attendees, 15M media impressions",
          color: "from-sky-600/40 to-indigo-600/40",
        },
        {
          title: "Annual Partner Summit",
          client: "Global Tech Company",
          result: "Hybrid event across 3 continents",
          color: "from-violet-600/40 to-purple-600/40",
        },
        {
          title: "Founder's Gala",
          client: "Luxury Fashion Group",
          result: "500 VIPs, covered by 20+ publications",
          color: "from-amber-600/40 to-orange-600/40",
        },
      ]}
      faq={[
        {
          question: "What size events do you produce?",
          answer:
            "Everything from 20-person executive dinners to 50,000+ festivals. Our production infrastructure scales to any format — we've done intimate boardroom events in the same month as stadium shows.",
        },
        {
          question: "Do you handle AV and technical production in-house?",
          answer:
            "We have in-house technical directors and show callers who design and manage all AV, lighting, staging, and rigging. For specialist equipment, we work with a vetted network of preferred partners.",
        },
        {
          question: "Can you produce hybrid and virtual events?",
          answer:
            "Yes. We've delivered 40+ hybrid and virtual events since 2020. Our approach treats the virtual audience as a first-class experience, not an afterthought — with dedicated content, interaction, and production values.",
        },
        {
          question: "How far in advance should we start planning?",
          answer:
            "For large-scale events (500+ attendees), we recommend 4-6 months lead time. Smaller events can be delivered in 6-8 weeks. Product launches and media events typically need 8-12 weeks.",
        },
        {
          question: "Do you manage speakers and talent?",
          answer:
            "We manage speaker logistics, briefings, rehearsals, and on-stage coordination. We also source and book talent, entertainment, and hosts through our network of agents and bureaus.",
        },
      ]}
      ctaText="Let's produce something extraordinary"
    />
  );
}
