import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchbarForm from './SearchbarForm';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from 'Modules/Movies/ButtonLoad/ButtonLoad';
import { searchByTitle } from '../../shared/services/movies-api';

const Searchbar = ({ media_type }) => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  // const [page, setPage] = useState(1);
  const [items, setItems] = useState();
  // const [showModal, setShowModal] = useState(false);
  // const [imageBig, setImageBig] = useState(null);
  useEffect(() => {
    if (search || page) {
      const fetchImages = async () => {
        try {
          //   setLoading(true);
          const { data } = await searchByTitle(search, media_type, page);
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
  }, [search, page, media_type]);

  const searchImages = useCallback(
    ({ search }) => {
      setSearchParams({ search, page: 1 });
      setItems([]);
    },
    [setSearchParams]
  );

  const changePage = () => {
    const newPage = parseInt( page ) + 1;
    console.log(newPage,'changePage',page);
    setSearchParams({ search, page: newPage });
  };

  

  return (
    <>
      <SearchbarForm onSubmit={searchImages} />
      {items && <ImageGallery items={items} media_type={media_type} />}
      {items && <Button changePage={changePage} text="Load more"></Button>}
      
    </>
  );
};

export default Searchbar;
