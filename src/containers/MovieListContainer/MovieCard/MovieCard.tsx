import { ReactComponent as StarIcon } from 'components/Icons/assets/StarIcon.svg';

import styles from './MovieCard.module.css';

type MovieCardProps = {
  imageUrl?: string;
  title?: string;
  voteAverage?: number;
  releaseDate?: string;
};

const MovieCard = ({ imageUrl, releaseDate, title, voteAverage }: MovieCardProps): JSX.Element => {
  return (
    <div className={styles.movieCardWrapper}>
      <a href={imageUrl}>
        <img alt={title} className={styles.movieCardImage} loading="lazy" src={imageUrl} />
      </a>
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
