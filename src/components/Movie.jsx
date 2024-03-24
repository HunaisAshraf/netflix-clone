import React, { useState, useContext } from "react";
import { IMAGE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const Movie = ({ movie }) => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = (id) => {
    if (user) {
      navigate(`video/${id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <img
        onClick={() => handleClick(movie?.id)}
        className="h-36"
        src={`${IMAGE_URL}${movie?.backdrop_path}`}
        alt={movie?.title}
      />
    </>
  );
};

export default Movie;
