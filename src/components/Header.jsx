import React, { useContext } from "react";
import logo from "../assets/logo/netflix.png";
import avatar from "../assets/logo/Netflix-avatar.png";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import AuthContext from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.displayName)

  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="fixed w-full px-4 py-2 md:px-14 md:py-5 flex justify-between">
      <div className="md:flex gap-8  items-center">
        <img src={logo} alt="netflix logo" className="w-16 md:w-24" />
        <ul className="hidden lg:flex gap-4">
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#"> TV Shows </a>
          </li>
          <li>
            <a href="#"> Movies </a>
          </li>
          <li>
            <a href="#"> New & Popular </a>
          </li>
          <li>
            <a href="#"> My List</a>
          </li>
          <li>
            <a href="#"> Browse By Language</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li>
            <IoSearch className="text-2xl" />
          </li>
          <li>
            <a href="#">Children</a>
          </li>
          <li>
            <FaRegBell className="text-2xl" />
          </li>
          {user ? (
            <>
              <li>
                <img
                  src={avatar}
                  alt="user profile"
                  className="w-9 rounded-md"
                />
              </li>
              <li>
                <button
                  className="bg-red-600 font-bold w-full px-2 py-2 rounded "
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
              <p>{user?.displayName}</p>
            </>
          ) : (
            <li>
              <Link to="/login">
                <button className="bg-red-600 font-bold w-full px-2 py-2 rounded ">
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
