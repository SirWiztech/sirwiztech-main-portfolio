const SubSkills = () => {
  return (
    <section aria-hidden="true" className="relative overflow-hidden border-y border-white/10">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink via-transparent to-ink" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink/70 to-ink/20" />
      <img
        src="/images/subSkills.jpg"
        alt=""
        loading="lazy"
        width={1600}
        height={500}
        className="h-56 w-full object-cover md:h-72"
      />
    </section>
  );
};

export default SubSkills;
