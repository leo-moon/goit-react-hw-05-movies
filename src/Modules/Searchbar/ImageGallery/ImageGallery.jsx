// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './image-gallery.module.scss';
// import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import styles from './movies.module.scss';

const ImageGallery = ({ items, media_type }) => {
  console.log('ImageGallery, items', items, media_type);
  const location = useLocation();
  console.log('location',location);
  const elements = items.map(
    ({
      id,
      backdrop_path,
      original_language,
      original_title,
      original_name,
      overview,
      poster_path,
      title,
    }) => (
      <Link key={id} to={`/${media_type}/${id}`} state={{from: location}} >
        <li className={styles.item}>
          <h3> {title ? title : original_name}</h3>
        </li>
      </Link>
    )
  );
  return <ul className={styles.gallery}>{elements}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = { items: [] };
