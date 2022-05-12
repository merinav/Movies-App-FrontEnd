import { ReactComponent as StarIcon } from 'components/Icons/assets/StarIcon.svg';

import styles from './MovieCard.module.css';

const MovieCard = (): JSX.Element => {
  return (
    <div className={styles.movieCardWrapper}>
      <a href="https://image.tmdb.org/t/p/w500/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg">
        <img
          alt="Doctor Strange in the Multiverse of Madness-movie-poster"
          className={styles.movieCardImage}
          loading="lazy"
          src="https://image.tmdb.org/t/p/w500/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg"
        />
      </a>
      <div className={styles.movieCardInfoWrapper}>
        <div>
          <p className={styles.movieCardMovieInfoParagraph}>
            <StarIcon className={styles.movieCardRatingIcon} />
            <span>7.7</span>
          </p>
          <p className={styles.movieCardMovieTitle}>
            <span>Doctor Strange in the Multiverse of Madness</span>
          </p>
        </div>
        <p className={styles.movieCardReleaseDate}>
          <span>2022-03-30</span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
