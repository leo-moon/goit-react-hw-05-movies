import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { searchReviewsById } from '../../shared/services/movies-api';

import styles from './reviews-page.module.css';

const ReviewPage = () => {
  const [data, setData] = useState([]);
  const { media_type, id } = useParams();
  // console.log('ReviewsPage', params)

  useEffect(() => {
    const searchReviews = async () => {
      try {
        const { results } = await searchReviewsById(media_type, id);
        setData([...results]);
      } catch ({ response }) {
        console.log(response.error.message);
      }
    };
    searchReviews();
  }, [media_type, id]);
  console.log(data);
  const elements = data.map(({ id, author, content }) => (
    // <Link>
    <li key={id}>
      <h3>{author}</h3>
      <p>{content}</p>
    </li>
    // </Link>
  ));
  const reviews = elements.length ? (
    elements
  ) : (
    <h3>We don't have any reviews for this movie.</h3>
  );
  console.log(reviews);
  return <ul className={styles.ul}>{reviews}</ul>;
};

export default ReviewPage;
