const items = ["Fast Learner", "Team Work", "Details Master"];

// Repeat the set enough times that the strip is always wider than the
// viewport (even on ultrawide screens), so the -50% translateX loop never
// reveals a blank gap.
const copies = 10;

const SubHeroMain = () => {
  const row = Array.from({ length: copies * items.length }, (_, i) => items[i % items.length]);

  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-white/10 bg-surface py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 pr-10 font-special text-xl font-semibold uppercase tracking-wide text-white/60"
          >
            {item}
            <span className="text-orange">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default SubHeroMain;
