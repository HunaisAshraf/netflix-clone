import React from "react";
import logo from "../assets/logo/netflix.png";
import avatar from "../assets/logo/Netflix-avatar.png"
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="fixed w-full px-14 py-5 flex justify-between">
      <div className="flex gap-8  items-center">
        <img src={logo} alt="netflix logo" className="w-24" />
        <ul className="flex gap-4">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li>
            <IoSearch className="text-2xl" />
          </li>
          <li>Children</li>
          <li>
            <FaRegBell className="text-2xl" />
          </li>
          <li>
            <img
              src={avatar}
              alt="user profile"
              className="w-9 rounded-md"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
