import React, { useState } from "react";
import { API_KEY, BASE_URL, IMAGE_URL } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Movie = ({ movie }) => {
  let navigate = useNavigate();
  console.log(movie)

  const handleClick = (id) => {
    // axios
    //   .get(`${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`)
    //   .then((response) => {
    //     // setVideoId(response?.data?.key);
    //     console.log(response.data)
    //     navigate(`/video/${response?.data?.key}`);
    //   })
    //   .catch((err) => console.log(err));
  };
  return (
    <>
      <img
        onClick={()=>navigate(`video/${movie?.id}`)}
        className="movie-card h-36"
        src={`${IMAGE_URL}${movie?.backdrop_path}`}
        alt={movie?.title}
      />
    </>
  );
};

export default Movie;
