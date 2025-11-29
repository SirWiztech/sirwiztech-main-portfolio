import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="ogarakuugochukwu9@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+234 8108 78 76 25" Image={FiPhone} />
<<<<<<< HEAD
      <SingleInfo text="Anambra, Nigeria" Image={IoLocationOutline} />
=======
      <SingleInfo text="Abuja, Nigeria" Image={IoLocationOutline} />
>>>>>>> d6f189a3a09658b64d37ef59432d32519b7bcb59
    </div>
  );
};

export default ContactInfo;
