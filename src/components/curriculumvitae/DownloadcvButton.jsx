import { FiDownload } from "react-icons/fi";

const DownloadcvButton = () => {
  return (
    <div className="flex justify-center">
      <a
        href="https://curriculum-vitaes.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-darkOrange px-8 py-3.5 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glowAmber"
      >
        <FiDownload />
        Download CV
      </a>
    </div>
  );
};

export default DownloadcvButton;
