import { getMovie } from 'api/movies/movie';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Tag from 'components/Tag/Tag';

import styles from './MovieInfoContainer.module.css';

const MovieInfoContainer = (): JSX.Element => {
  const { movieId } = useParams();
  const { isLoading, data } = useQuery(movieId || 'movieId', () => getMovie(movieId || ''), { enabled: !!movieId });

  const formatToUsd = (number?: number): string | 0 | undefined => number && Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.backdropImage} style={{ backgroundImage: `url(${data?.backdropPath})` }}>
      <div className={styles.backdropCover}>
        <div className={styles.movieInfoWrapper}>
          <section className={styles.movieSection}>
            <div className={styles.moviePosterWrapper}>
              <img className={styles.moviePoster} src={data?.posterPath}></img>
            </div>
            <div className={styles.movieDataWrapper}>
              <div className={styles.movieDataHeader}>
                <h2>
                  {data?.originalTitle}
                  <span className={styles.movieDataHeaderDate}> ({data?.releaseDate})</span>
                </h2>
                <h3>{data?.tagline}</h3>
                <div className={styles.tagList}>
                  {data?.genres.map(({ id, name }) => (
                    <Tag key={id}>
                      <span>{name}</span>
                    </Tag>
                  ))}
                </div>
                <dl className={styles.dataList}>
                  <span>
                    <dt>Duration</dt>
                    <dd>
                      <strong>{data?.runtime} min</strong>
                    </dd>
                  </span>
                  <span>
                    <dt>Vote average:</dt>
                    <dd>
                      <strong>{data?.voteAverage}</strong>
                    </dd>
                  </span>
                  <span>
                    <dt>Vote count:</dt>
                    <dd>
                      <strong>{data?.voteCount}</strong>
                    </dd>
                  </span>
                  <span>
                    <dt>Budget:</dt>
                    <dd>
                      <strong>{formatToUsd(data?.budget)}</strong>
                    </dd>
                  </span>
                  <span>
                    <dt>Revenue:</dt>
                    <dd>
                      <strong>{formatToUsd(data?.revenue)}</strong>
                    </dd>
                  </span>
                </dl>
                <div className={styles.descriptionContainer}>
                  <h3>Overview</h3>
                  <span>{data?.overview}</span>
                </div>
                <div className={styles.descriptionContainer}>
                  <h3>Production Companies</h3>
                  {data?.productionCompanies.map((productionCompany) => productionCompany.name).join(', ')}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoContainer;
