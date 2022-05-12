//import React from 'react';
//import { getMovies } from 'api/movies/movies';
//import { useQuery } from 'react-query';
//import Loader from 'components/Loader/Loader';
import MovieCard from './MovieCard/MovieCard';
import styles from './MovieListContainer.module.css';

const MovieListContainer = (): JSX.Element => {
  // const { isLoading, data } = useQuery('movies', getMovies);
  // //const print = JSON.stringify(data);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className={styles.movieListContainer}>
      <MovieCard />
    </div>
  );
};

export default MovieListContainer;
