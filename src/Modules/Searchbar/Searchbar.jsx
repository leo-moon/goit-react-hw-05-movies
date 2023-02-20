import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchbarForm from './SearchbarForm';
import ImageGallery from './ImageGallery/ImageGallery';
import { searchByTitle } from '../../shared/services/movies-api';

const Searchbar = ({ media_type }) => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  // const [page, setPage] = useState(1);
  const [items, setItems] = useState();
  const [showModal, setShowModal] = useState(false);
  const [imageBig, setImageBig] = useState(null);
  useEffect(() => {
    if (search) {
      const fetchImages = async () => {
        try {
          //   setLoading(true);
          const { data } = await searchByTitle(search, media_type);
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
    setSearchParams({ search, page: 1 });
    setItems([]);
  }, []);

  // const showBigImage = useCallback(({ largeImageURL }) => {
  //   setImageBig(largeImageURL);
  //   setShowModal(true);
  // }, []);

  return (
    <>
      <SearchbarForm onSubmit={searchImages} />
      {items && <ImageGallery items={items} media_type={media_type} />}
    </>
  );
};

export default Searchbar;
