import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const MovieRow = ({ row, url, title }) => {
  const [movies, setMovies] = useState([]);

  const hoverLeft = () => {
    var slider = document.getElementById("slider" + row);
    slider.scrollLeft = slider.scrollLeft - 700;
  };
  const hoverRight = () => {
    var slider = document.getElementById("slider" + row);
    slider.scrollLeft = slider.scrollLeft + 700;
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMovies(response?.data?.results);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <p className="p-3 text-2xl font-bold">{title}</p>
      <div className="flex items-center">
        <MdNavigateBefore
          onClick={hoverLeft}
          className="h-full w-36 relative left-14 text-black bg-white 
        rounded-full opacity-60 hover:opacity-80"
        />
        <div
          id={"slider" + row}
          className="flex items-center gap-3 overflow-x-scroll scroll-smooth no-scrollbar"
        >
          {movies?.map((movie) => (
            <Movie key={movie?.id} movie={movie} />
          ))}
        </div>
        <MdNavigateNext
          onClick={hoverRight}
          className="h-full w-36 relative right-14 text-black bg-white 
        rounded-full opacity-60 hover:opacity-80"
        />
      </div>
    </>
  );
};

export default MovieRow;

{
  /* <Movie key={movie?.id} data={movie} /> */
}
