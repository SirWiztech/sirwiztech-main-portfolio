const HeroGradient = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] animate-pulseGlow rounded-full bg-cyan/10 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] animate-pulseGlow rounded-full bg-orange/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-cyan/5 blur-[100px]" />
      <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
    </div>
  );
};

export default HeroGradient;
