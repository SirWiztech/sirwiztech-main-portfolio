import PropTypes from "prop-types";

const Stat = ({ number, text }) => (
  <div className="flex flex-col items-center">
    <p className="font-special text-4xl font-bold text-cyan">{number}</p>
    <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-lightGrey">
      {text}
    </p>
  </div>
);

Stat.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const ExperienceTopLeft = () => {
  return (
    <div className="card-portfolio flex flex-col items-center gap-6 p-8 text-center">
      <p className="font-special text-2xl font-bold uppercase text-orange">
        Since 2023
      </p>
      <div className="flex items-center justify-center gap-6">
        <Stat number="3" text="Years" />
        <span className="h-10 w-px bg-white/10" />
        <Stat number="20 +" text="Websites" />
      </div>
      <p className="text-lightGrey">
        With 4 years of experience building dynamic and user-friendly web
        applications.
      </p>
      <div className="w-full rounded-xl border border-orange/20 bg-orange/10 py-3">
        <Stat number="$100k" text="Max Budget" />
      </div>
    </div>
  );
};

export default ExperienceTopLeft;
