// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './image-gallery.module.scss';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
// import styles from './movies.module.scss';

const ImageGallery = ({ items, showBigImage }) => {
  console.log('ImageGallery,',items);
  const elements = items.map(
    ({
      id,
      backdrop_path,
      media_type='movie' ,
      original_language,
      original_title,
      overview,
      poster_path,
      title,
    }) => (
      <Link key={id} to={`/${media_type}/${id}`}>
        <li className={styles.item}>
          <h3> {title}</h3>
          {/* <p>{id}</p>
            <p>{media_type}</p> */}
        </li>
      </Link>
    )
  );
  return <ul className={styles.gallery}>{elements}</ul>;
}





export default ImageGallery;

ImageGallery.defaultProps = { items: [] };


  
//   return (
//     <ul className={styles.gallery}>
//       <ImageGalleryItem items={items} showBigImage={showBigImage} />
//     </ul>
//   );
// };