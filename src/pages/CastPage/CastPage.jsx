import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
        setData([...cast]);
      } catch ({ response }) {
        console.log(response.error.message);
      }
    };
    searchCast();
  }, [media_type, id]);
  console.log(data);
  const basicUrl = 'https://image.tmdb.org/t/p/w500';
  const elements = data.map(({ id, name, profile_path, character }) => (
    <li key={id} className={styles.li}>
      <img
        className={styles.cast}
        src={basicUrl + profile_path}
        alt="actor"
      />
      <div>
        <h3>{name}</h3>
        <h4>
          {character  && `Character: ${character}`}
        </h4>
      </div>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default CastPage;
