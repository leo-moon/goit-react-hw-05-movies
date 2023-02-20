import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import Loader from './Loader/Loader';

import { searchByIdType, poster } from '../../shared/services/movies-api';

const SingleMoviePage = () => {
  // const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState();

  const params = useParams();
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
  const {homepage, poster_path, release_date, vote_average, genres } = movieData;
    const urlImage = homepage+ poster_path
  const date = release_date.slice(0, 4);
  const popularityRound = Math.round(parseInt(vote_average * 10));
  
    let genresArray = '';
  genres.forEach(({ name }) => {
    genresArray = genresArray + name + ' ';
  });

  return (
    <>
      <img src={urlImage} alt="poster" />
      <h2>
        {movieData?.title} ({date})
      </h2>
      {movieData?.poster_path}
      <p>User score: {popularityRound}%</p>
      <h3>Overview</h3>
      <p>{movieData?.overview}</p>
      <h3>Genres</h3>
      <p>{genresArray}</p>
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
