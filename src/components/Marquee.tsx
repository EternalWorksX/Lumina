export default function Marquee() {
  const items = [
    "150+ Premium Projects",
    "9+ Years of Excellence",
    "Architecture Redefined",
    "Sustainable Living",
  ];

  return (
    <section className="py-12 bg-surface-container-low border-y border-white/5 overflow-hidden">
      <div className="marquee-content whitespace-nowrap">
        {/* Render twice for continuous loop */}
        {[1, 2].map((group) => (
          <div key={group} className="flex gap-16 px-8 items-center">
            {items.map((item, index) => (
              <div key={`${group}-${index}`} className="flex gap-16 items-center">
                <span className="font-display-sm text-display-sm text-on-surface-variant">
                  {item}
                </span>
                <span className="text-primary-container">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
