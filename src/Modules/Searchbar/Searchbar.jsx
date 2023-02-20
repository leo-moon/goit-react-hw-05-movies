import { useState, useCallback, useEffect } from 'react';

import SearchbarForm from './SearchbarForm';
import ImageGallery from './ImageGallery/ImageGallery';
import { searchByTitle } from '../../shared/services/movies-api';

const Searchbar = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState();
  const [showModal, setShowModal] = useState(false);
  const [imageBig, setImageBig] = useState(null);
  useEffect(() => {
    if (search) {
      const fetchImages = async () => {
        try {
          //   setLoading(true);
          const { data } = await searchByTitle(search);
          const results = [...data.results] ? [...data.results] : [];
          // console.log('results', results);
          setItems([...results]);
          //   setTotal(data.totalHits);
        } catch ({ response }) {
          console.log(response.error.message);
        } finally {
          //   setLoading(false);
        }
      };
      fetchImages();
    }
  }, [search, page]);

  const searchImages = useCallback(({ search }) => {
    setSearch(search);
    setItems([]);
    setPage(1);
  }, []);

  // const showBigImage = useCallback(({ largeImageURL }) => {
  //   setImageBig(largeImageURL);
  //   setShowModal(true);
  // }, []);

  return (
    <>
      <SearchbarForm onSubmit={searchImages} />
      {items && <ImageGallery items={items} />}
    </>
  );
};

export default Searchbar;
