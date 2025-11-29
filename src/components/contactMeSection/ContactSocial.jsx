import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/ogaraku-ugochukwu-4b2a18373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/SirWiztech" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/sirwiztech/profilecard/?igsh=MXQzbWNtcTNrZ3E4cw==" Icon={FaInstagram} />
      <SingleContactSocial link="https://www.facebook.com/wiztech.ogaraku" Icon={FaFacebookF} />
      <SingleContactSocial link="https://x.com/Sir_wiztech?t=gnqUvXzIoYPbWxN7VX02sA&s=09" Icon={FaTwitter} />
    </div>
  );
};

export default ContactSocial;