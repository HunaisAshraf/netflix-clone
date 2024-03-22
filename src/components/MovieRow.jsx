import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { IMAGE_URL } from "../constants/constants";
import { Link } from "react-router-dom";

const MovieRow = ({ url, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMovies(response?.data?.results);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="p-3">
      <p className="pb-3 text-2xl font-bold">{title}</p>
      <div className="relative  items-center group">
        <div className="flex w-full gap-5 h-full overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth no-scrollbar">
          {movies?.map((movie) => (
            <Movie key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;

{
  /* <Movie key={movie?.id} data={movie} /> */
}
