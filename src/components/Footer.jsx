import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="my-16 flex justify-evenly text-[#5c5c5c] text-sm">
      <div>
        <ul className="flex text-2xl gap-4">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaYoutube />
          </li>
        </ul>
        <p className="py-2">Audio Description</p>
        <p className="py-2">Investor Relations</p>
        <p className="py-2">Legal Notices</p>
      </div>
      <div>
        <p className="py-2">Help Center</p>
        <p className="py-2">Jobs</p>
        <p className="py-2">Cookies Preferences</p>
      </div>
      <div>
        <p className="py-2">Gift Cards</p>
        <p className="py-2">Terms of use</p>
        <p className="py-2">COrporate Information</p>
      </div>
    </div>
  );
};

export default Footer;
