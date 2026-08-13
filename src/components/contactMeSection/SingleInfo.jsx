import PropTypes from "prop-types";

const SingleInfo = ({ text, Image }) => {
  const isEmail = text.includes("@");
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 text-xl text-cyan">
        <Image />
      </span>
      {isEmail ? (
        <a
          href={`mailto:${text}`}
          className="text-lightGrey transition-colors hover:text-cyan"
        >
          {text}
        </a>
      ) : (
        <p className="text-lightGrey">{text}</p>
      )}
    </div>
  );
};

SingleInfo.propTypes = {
  text: PropTypes.string.isRequired,
  Image: PropTypes.elementType.isRequired,
};

export default SingleInfo;
