// import MovieItem from './MovieItem/MovieItem';

import styles from './movies-list.module.scss';

const MoviesList = ({ items, showBigImage }) => {
  const elements = items.map(
    ({
      id,
      backdrop_path,
      media_type,
      original_language,
      original_title,
      overview,
      poster_path,
      title,
    }) => (
      <li key={id} className={styles.item}>
        <a href={overview}>
          {title}
          <p>{id}</p>
          <p>{backdrop_path}</p>
          <p>{overview}</p>
        </a>
      </li>
    )
  );
  return (
    <ul className={styles.gallery}>
      {elements}
      {/* <MovieItem items={items} showBigImage={showBigImage} /> */}
    </ul>
  );
};

export default MoviesList;

MoviesList.defaultProps = { items: [] };
