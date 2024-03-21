import React from "react";
import banner from "../assets/banner.webp";
import bannerTitle from "../assets/title.webp";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Banner = () => {
  const bgStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="md:min-h-screen px-4 md:px-14 md:py-5  bg-no-repeat bg-cover "
      >
        <img
          src={bannerTitle}
          alt="title"
          className="pt-8 md:pt-52 h-32 sm:h-auto"
        />
        <p>
          In disguise as her friend, Ha-ri shows up to a blind date to scare him
          away. But plans go awry when he turns out to be her CEO — and makes a
          proposal.
        </p>
        <div className=" mt-3 flex items-center gap-3">
          <button className=" bg-white flex items-center justify-center gap-1 sm:gap-4 rounded-md text-black sm:py-3 py-1 w-28 sm:w-36">
            <FaPlay className="text-2xl" /> Play
          </button>
          <button className="flex items-center justify-center gap-1 sm:gap-4 rounded-md bg-gray-600 sm:py-3 py-1 w-28 sm:w-36">
            <IoIosInformationCircleOutline className="text-2xl font-extrabold" />{" "}
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
