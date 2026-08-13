import PropTypes from "prop-types";

const SingleInfo = ({ text, Image }) => {
  const isEmail = text.includes("@");
  return (
    <div className="flex w-full max-w-full items-center gap-2 sm:gap-3 px-2 sm:px-0">
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 text-base text-cyan sm:h-10 sm:w-10 sm:text-xl">
        <Image />
      </span>
      {isEmail ? (
        <a
          href={`mailto:${text}`}
          className="break-all text-sm text-lightGrey transition-colors hover:text-cyan sm:text-base"
        >
          {text}
        </a>
      ) : (
        <p className="text-sm text-lightGrey sm:text-base">{text}</p>
      )}
    </div>
  );
};

SingleInfo.propTypes = {
  text: PropTypes.string.isRequired,
  Image: PropTypes.elementType.isRequired,
};

export default SingleInfo;