import React from 'react';
import { getMovies } from 'api/movies/movies';
import { useQuery } from 'react-query';
import Loader from 'components/Loader/Loader';

import styles from './MovieListContainer.module.css';

const MovieListContainer = (): JSX.Element => {
  const { isLoading, data } = useQuery('movies', getMovies);
  const print = JSON.stringify(data);

  if (isLoading) {
    return <Loader />;
  } else {
    return <div className={styles.mainMovieListContainer}>{print}</div>;
  }
};

export default MovieListContainer;
