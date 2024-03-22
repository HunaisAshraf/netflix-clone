import React, { useState, useContext } from "react";
import { IMAGE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import AuthContext from "../utils/AuthContext";

const Movie = ({ movie }) => {
  const { isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <>
      <p>{isLoggedIn}</p>
      <img
        onClick={() => navigate(`video/${movie?.id}`)}
        className="movie-card h-36"
        src={`${IMAGE_URL}${movie?.backdrop_path}`}
        alt={movie?.title}
      />
    </>
  );
};

export default Movie;
