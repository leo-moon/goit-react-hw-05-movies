import axios from 'axios';

const mainURL = 'https://api.themoviedb.org/3/';
const media_type_values = ['all', 'movie', 'TV', 'person'];
const time_window_values = ['day', 'week'];
const api_KEY = '1a6a0e252669dea132492bf96fa96565';
const media_type = media_type_values[1];
const time_window = time_window_values[0];

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/day?api_key=1a6a0e252669dea132492bf96fa96565',
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const searchNewImages = async (search = '', page = 1, per_page = 6) => {
  const data = await instance.get('', {
    params: {
      q: search,
      per_page: per_page,
      page: page,
    },
  });
  return data;
};

export const startImages = async () => {
  const data = await instance.get('', {
    // params: {
    //   per_page: per_page,
    // },
  });
  console.log('startImages', data);
  return data;
};
