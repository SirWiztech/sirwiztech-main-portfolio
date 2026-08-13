import { PiHexagonThin } from "react-icons/pi";

const AboutMeImage = () => {
  return (
    <div className="relative h-[460px] w-[300px] sm:w-[320px]">
      <div className="absolute -inset-3 -z-10 rounded-[110px] bg-gradient-to-br from-cyan/30 to-orange/30 opacity-70 blur-2xl" />
      <div className="relative h-full w-full overflow-hidden rounded-[110px] border border-white/10 shadow-cardHover">
        <img
          src="/images/about-us.jpg"
          alt="About Me Image"
          className="h-full w-full object-cover"
          loading="lazy"
          width={320}
          height={460}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
      </div>
      <PiHexagonThin className="absolute -right-14 -top-10 h-28 w-28 animate-spin-slow text-orange/40" />
    </div>
  );
};

export default AboutMeImage;
