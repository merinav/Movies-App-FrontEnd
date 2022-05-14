import React from 'react';
import { getMovies } from 'api/movies/movies';
import { useQuery } from 'react-query';
import Loader from 'components/Loader/Loader';

import MovieCard from './MovieCard/MovieCard';
import styles from './MovieListContainer.module.css';

const MovieListContainer = (): JSX.Element => {
  const { isLoading, data } = useQuery('movies', getMovies);
  const movie = data?.movies[0];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.movieListContainer}>
      <MovieCard imageUrl={movie?.posterPath} releaseDate={movie?.releaseDate} title={movie?.title} voteAverage={movie?.voteAverage} />
    </div>
  );
};

export default MovieListContainer;
