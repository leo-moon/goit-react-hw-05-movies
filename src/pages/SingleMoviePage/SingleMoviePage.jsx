import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import Loader from './Loader/Loader';

import { searchByIdType } from '../../shared/services/movies-api';

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
  },[]);
  console.log('movieDataSingleMoviePage', movieData);
  return <h2> SingleMoviePage</h2>;
};

export default SingleMoviePage;

/*
poster_path
title,
release_date,
popularity,

Overview
overview,

Genres
genres



Additional information

Cast
Reviews
*/
