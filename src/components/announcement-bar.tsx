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
      <div className="marquee-track whitespace-nowrap text-xs sm:text-sm">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 text-xs sm:text-sm font-semibold uppercase tracking-wide sm:tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary-foreground/80" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
