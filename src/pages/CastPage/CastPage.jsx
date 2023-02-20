import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

import { searchCastById } from '../../shared/services/movies-api';
import styles from './casr-page.module.css';

const CastPage = () => {
  const [data, setData] = useState([]);
  const { media_type, id } = useParams();
  // console.log('CastPage', params)

  useEffect(() => {
    const searchCast = async () => {
      try {
        const { cast } = await searchCastById(media_type, id);
        setData(cast);
      } catch ({ response }) {
        console.log(response.error.message);
      }
    };
    searchCast();
  });
  const elements = data.map(({ id, name, profile_path }) => (
    <li key={id}>
      <img src="profile_path" alt="actor" />
      <h3>{name}</h3>
    </li>
  ));
  return <p>CastPage</p>;
};

export default CastPage;
