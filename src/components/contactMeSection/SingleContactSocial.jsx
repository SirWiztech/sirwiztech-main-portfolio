import PropTypes from "prop-types";

const SingleContactSocial = ({ Icon, link, label }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-orange/40 text-base text-orange transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:bg-orange hover:text-black hover:shadow-glowAmber sm:h-11 sm:w-11 sm:text-xl"
    >
      <Icon />
    </a>
  );
};

SingleContactSocial.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SingleContactSocial;