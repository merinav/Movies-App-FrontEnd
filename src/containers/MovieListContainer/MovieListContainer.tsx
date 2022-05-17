import { getMovies } from 'api/movies/movies';
import { useQuery } from 'react-query';
import Loader from 'components/Loader/Loader';

import MovieCard from './MovieCard/MovieCard';
import styles from './MovieListContainer.module.css';

const MovieListContainer = (): JSX.Element => {
  const { isLoading, data } = useQuery('movies', getMovies);

  const iterable = data?.movies;

  const movieCards = iterable?.map((movie) => (
    <MovieCard imageUrl={movie?.posterPath} key={movie?.movieId} releaseDate={movie?.releaseDate} title={movie?.title} voteAverage={movie?.voteAverage} />
  ));

  if (isLoading) {
    return <Loader />;
  }

  return <div className={styles.movieListContainer}>{movieCards}</div>;
};

export default MovieListContainer;
