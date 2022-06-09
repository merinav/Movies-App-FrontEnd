import { Link, generatePath } from 'react-router-dom';
import { ReactComponent as StarIcon } from 'components/Icons/assets/StarIcon.svg';
import { RouteKeys } from 'navigation/routes';

import styles from './MovieCard.module.css';

type MovieCardProps = {
  imageUrl: string;
  title: string;
  voteAverage: number;
  releaseDate: string;
  movieId: number;
};

const MovieCard = ({ imageUrl, movieId, releaseDate, title, voteAverage }: MovieCardProps): JSX.Element => {
  const path = generatePath(RouteKeys.Movie, { movieId: `${movieId}` });

  return (
    <div className={styles.movieCardWrapper}>
      <Link to={path}>
        <img alt={title} className={styles.movieCardImage} loading="lazy" src={imageUrl} />
      </Link>
      <div className={styles.movieCardInfoWrapper}>
        <div>
          <p className={styles.movieCardMovieInfoParagraph}>
            <StarIcon className={styles.movieCardRatingIcon} />
            <span>{voteAverage}</span>
          </p>
          <p className={styles.movieCardMovieTitle}>
            <span>{title}</span>
          </p>
        </div>
        <p className={styles.movieCardReleaseDate}>
          <span>{releaseDate}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
