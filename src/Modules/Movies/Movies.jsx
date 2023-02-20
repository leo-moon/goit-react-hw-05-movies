import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './movies.module.scss';

// import Modal from 'shared/components/Modal/Modal';
// import Image from './Image/Image';

// import Searchbar from './Searchbar/Searchbar';
import MoviesList from './MoviesList/MoviesList';
import { homePageMovies } from '../../shared/services/movies-api';
import { searchNewImages } from '../../shared/services/movies-api';
import Button from './ButtonLoad/ButtonLoad';
import Loader from './Loader/Loader';

// import './movies-list.module.scss';

const Movies = () => {
  const [search, setSearch] = useState('');

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const [total, setTotal] = useState(0);
  const per_page = 20;
  const [items, setItems] = useState([]);
  //   () => {
  //   const fetchImagesStart = async () => {
  // try {
  //   setLoading(true);
  //   const { data } = await startImages();
  //   const results = [...data.results] ? [...data.results] : [];
  //   console.log('results', results);
  //   setTotal(0);
  //   setItems([...results]);
  // } catch (error) {
  //   setError(error.message);
  // } finally {
  //   setLoading(false);
  // }
  //   };
  //   // console.log('items', items);
  //   fetchImagesStart();
  // });

  useEffect(() => {
    // if (search) {
      const fetchImages = async () => {
        try {
          setLoading(true);
          const { data } = await homePageMovies();
          const results = [...data.results] ? [...data.results] : [];
          // console.log('results', results);
          setTotal(0);
          setItems([ ...results]);
          // console.log('results useEffect', items);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchImages();
    // }
  }, []);
  // try {
  //   setLoading(true);
  //   const { data } = await searchNewImages(search, page);
  //   setItems(prevItems => [...prevItems, ...data.hits]);
  //   setTotal(data.totalHits);
  // } catch (error) {
  //   setError(error.message);
  // } finally {
  //   setLoading(false);
  // }

  // const searchImages = useCallback(({ search }) => {
  //   setSearch(search);
  //   setItems([]);
  //   setPage(1);
  // }, []);

  // const changePage = () => {
  //   setPage(page + 1);
  // };

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
      <Link key={id} to={`/${media_type}/${id}`}>
        <li className={styles.item}>
            <h3> {title}</h3>
            {/* <p>{id}</p>
            <p>{media_type}</p> */}
        </li>
      </Link>
    )
  );
  return (
    <ul className={styles.gallery}>
      {elements}
    </ul>
  );
};

export default Movies;
    






  //   <Searchbar onSubmit={searchImages} />
  //   {error && <p>Something goes wrong</p>} 

  //   {loading && <Loader />}
  //   {!loading && <MoviesList items={items} />}
  //   {!loading && <MoviesList items={items} showBigImage={showBigImage} />}

  //      {!loading && showLoadButton() && (
  //       <Button changePage={changePage} text="Load more"></Button>)} 
  //     {showModal && (
  //       <Modal close={closeModal}>
  //         <Image Image={Image} />
  //   </Modal>)
  // }
// const showLoadButton = () => {
//   if (total <= page * per_page) {
//     console.log(total, 'total');
//     return false;
//   }
//   return true;
// };

// const closeModal = () => {
//   setShowModal(false);
//   setImage(null);
// };

// const showBigImage = useCallback(({ largeImageURL }) => {
//   setImage(largeImageURL);
//   setShowModal(true);
// }, []);
