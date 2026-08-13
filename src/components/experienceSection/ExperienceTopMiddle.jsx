const ExperienceTopMiddle = () => {
  return (
    <div className="relative w-full max-w-[320px] justify-self-center">
      <div className="absolute -inset-4 -z-10 rounded-full bg-cyan/10 blur-3xl" />
      <img
        src="/images/experience-image.png"
        alt="Wiztech working on projects"
        loading="lazy"
        width={320}
        height={320}
        className="w-full rounded-full border border-white/10 shadow-cardHover"
      />
    </div>
  );
};

export default ExperienceTopMiddle;
