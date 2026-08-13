import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      <SingleContactSocial
        link="https://www.linkedin.com/in/ogaraku-ugochukwu-4b2a18373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        Icon={FaLinkedinIn}
        label="LinkedIn"
      />
      <SingleContactSocial
        link="https://github.com/SirWiztech"
        Icon={FiGithub}
        label="GitHub"
      />
      <SingleContactSocial
        link="https://www.instagram.com/sirwiztech/profilecard/?igsh=MXQzbWNtcTNrZ3E4cw=="
        Icon={FaInstagram}
        label="Instagram"
      />
      <SingleContactSocial
        link="https://www.facebook.com/wiztech.ogaraku"
        Icon={FaFacebookF}
        label="Facebook"
      />
      <SingleContactSocial
        link="https://x.com/Sir_wiztech?t=gnqUvXzIoYPbWxN7VX02sA&s=09"
        Icon={FaTwitter}
        label="Twitter / X"
      />
    </div>
  );
};

export default ContactSocial;