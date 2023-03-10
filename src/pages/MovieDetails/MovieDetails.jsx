// import { useEffect, useState, useCallback } from 'react';
import { useEffect, useState } from 'react';

import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';

// import Loader from './Loader/Loader';

import { searchByIdType, makeImageUrl } from '../../shared/services/movies-api';
import styles from './movie-details.module.css';

const SingleMoviePage = () => {
  // const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const from  = location.state?.from || '/' ;

  const params = useParams();
  // console.log('SingleMoviePage   location ', location);
  // console.log('SingleMoviePage    from', from);
  // console.log('SingleMoviePage  navigate, ', navigate);

  const { media_type, id } = params;
  useEffect(() => {
    const fetchByIDType = async () => {
      try {
        //   setLoading(true);
        const { data } = await searchByIdType(media_type, id);
        setMovieData(data);
      } catch ({ response }) {
        console.log(response.data.message);
      } finally {
        //   setLoading(false);
      }
    };
    fetchByIDType();
  }, [media_type, id]);

  if (!movieData) {
    return;
  }

  console.log('SingleMoviePage   movieData', movieData);
  const { poster_path, release_date, first_air_date, vote_average, genres } =
    movieData;

  console.log('poster_path', poster_path);
  const urlImage = makeImageUrl(poster_path);
  const date = release_date
    ? release_date.slice(0, 4)
    : first_air_date.slice(0, 4);
  // const title =

  const popularityRound = Math.round(parseInt(vote_average * 10));

  let genresArray = '';
  genres.forEach(({ name }) => {
    genresArray = genresArray + name + ' ';
  });

  const goBack = () => navigate(from);
  // const goBack = useCallback(() => navigate(from), [navigate]);

  return (
    <>
      <button onClick={goBack}>Go back</button>
      <div className={styles.div}>
        <img  className={styles.image} src={urlImage} alt="poster" />
        <div>
          <h2>
            {movieData?.title} ({date})
          </h2>
          {/* {movieData?.poster_path} */}
          <p>User score: {popularityRound}%</p>
          <h3>Overview</h3>
          <p>{movieData?.overview}</p>
          <h3>Genres</h3>
          <p>{genresArray}</p>
        </div>
      </div>
      <ul className={styles.ul}>
        Additional information
        <Link className={styles.li} to="cast" state={{ from }}>
          Cast
        </Link>
        <Link className={styles.li} to="reviews" state={{ from }}>
          Reviews
        </Link>
        <Outlet />
      </ul>
    </>
  );
};

export default SingleMoviePage;

/*
poster_path




Additional information

Cast
Reviews
*/
