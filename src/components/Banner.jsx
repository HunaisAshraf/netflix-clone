import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IMAGE_URL, request } from "../constants/constants";

const Banner = () => {
  const [banner, setBanner] = useState({});

  useEffect(() => {
    axios.get(request).then((response) => {
      const index = Math.floor(Math.random() * response?.data?.results.length);
      setBanner(response?.data?.results[index]);
      console.log(banner);
    }).catch;
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
           url(${IMAGE_URL}${banner?.backdrop_path})`,
        }}
        className="sm:min-h-screen px-4 md:px-14 md:py-5 bg-no-repeat bg-cover"
      >
        <h1 className="text-7xl pt-8 md:w-[600px] md:pt-52">{banner?.title}</h1>
        <p className="md:w-[600px] md:py-11">{banner?.overview}</p>
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
