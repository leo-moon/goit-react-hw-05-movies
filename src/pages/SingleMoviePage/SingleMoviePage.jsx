import { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate, Link, Outlet } from 'react-router-dom';

// import Loader from './Loader/Loader';

import { searchByIdType, poster } from '../../shared/services/movies-api';
import styles from './single-movie-page.module.css';

const SingleMoviePage = () => {
  // const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState();
  const navigate = useNavigate();

  const params = useParams();
  console.log('SingleMoviePage', params);
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
  }, []);

  if (!movieData) {
    return;
  }

  console.log(movieData);
  const { homepage, poster_path, release_date, vote_average, genres } =
    movieData;
  const urlImage = homepage + poster_path;
  const date = release_date.slice(0, 4);
  const popularityRound = Math.round(parseInt(vote_average * 10));

  let genresArray = '';
  genres.forEach(({ name }) => {
    genresArray = genresArray + name + ' ';
  });
  // const goBack = useCallback(() => navigate(-1), [navigate]);

  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <div>
        {/* <img src={urlImage} alt="poster" /> */}
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
      <ul>
        Additional information
        <Link className={styles.li} to="cast">
          Cast
        </Link>
        <Outlet />
        <Link className={styles.li} to="reviews">
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
