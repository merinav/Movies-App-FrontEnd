//import React from 'react';
import { getMovies } from 'api/movies/movies';
//import type { Movie } from 'api/movies/types';
import { useQuery } from 'react-query';
import Loader from 'components/Loader/Loader';

import MovieCard from './MovieCard/MovieCard';
import styles from './MovieListContainer.module.css';

const MovieListContainer = (): JSX.Element => {
  const { isLoading, data } = useQuery('movies', getMovies);
  const movie0 = data?.movies[0];

  //const iterable = [data?.movies];
  //const movies : Movie = iterable;
  //const test = [ iterable?.forEach((element) => {movie})];

  const moviesArray = [movie0, movie0, movie0];

  const movieCards = moviesArray.map((movie) => (
    <MovieCard imageUrl={movie?.posterPath} key={movie?.movieId} releaseDate={movie?.releaseDate} title={movie?.title} voteAverage={movie?.voteAverage} />
  ));

  if (isLoading) {
    return <Loader />;
  }

  return <div className={styles.movieListContainer}>{movieCards}</div>;
};

export default MovieListContainer;
