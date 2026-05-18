"use client";

export default function AnnouncementBar() {
  const items = [
    "Now Booking 2026 Activations",
    "Featured in Ad Age & Campaign",
    "50+ Award-Winning Experiences",
    "Now Booking 2026 Activations",
    "Featured in Ad Age & Campaign",
    "50+ Award-Winning Experiences",
  ];

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden relative">
      <div className="marquee-track whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6 text-sm font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary-foreground/80" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
