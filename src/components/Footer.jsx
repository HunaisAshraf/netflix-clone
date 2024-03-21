import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-around">
      <div>
        <ul className="flex text-2xl gap-4">
          <li><FaFacebookF /></li>
          <li><FaInstagram /></li>
          <li><FaTwitter /></li>
          <li><FaYoutube /></li>
        </ul>
      </div>
      <div className="flex">
         
      </div>
    </div>
  );
};

export default Footer;
