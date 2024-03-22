import React from "react";
import MovieRow from "./MovieRow";
import { requests } from "../utils/constants";

const MovieCollection = () => {
  return (
    <div>
      <MovieRow url={requests.PopularMovies} title="Popular Movies" />
      <MovieRow url={requests.TopRatedMovies} title="Popular Movies" />
      <MovieRow url={requests.ActionMovies} title="Action Movies" />
      <MovieRow url={requests.ComedyMovies} title="Comedy Movies" />
      <MovieRow url={requests.RomanceMovies} title="Romance Movies" />
      <MovieRow url={requests.DramaMovies} title="Drama Movies" />
      <MovieRow url={requests.ScienceAndFiction} title="Sci-fi Movies" />
      <MovieRow url={requests.AdventuresMovies} title="Adventure Movies" />
      <MovieRow url={requests.ThrilledMovies} title="Thriller Movies" />
    </div>
  );
};

export default MovieCollection;
