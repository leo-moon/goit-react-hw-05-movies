import axios from 'axios';

const mainURL = 'https://api.themoviedb.org/3/';
const media_type_values = ['all', 'movie', 'TV', 'person'];
const time_window_values = ['day', 'week'];
const api_KEY = '?api_key=1a6a0e252669dea132492bf96fa96565';
const media_type = media_type_values[1];
const time_window = time_window_values[0];
const trendingURL =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=1a6a0e252669dea132492bf96fa96565';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/day?api_key=1a6a0e252669dea132492bf96fa96565',
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const searchByIdType = async (media_type, id) => {
  const url = mainURL + media_type + '/' + id + api_KEY;
  const data = await instance.get(url, {
    params: {
      language: 'en-US',
    },
  });
  return data;
};

export const homePageMovies = async () => {
  const data = await instance.get(trendingURL, {
    // params: {
    //   per_page: per_page,
    // },
  });
  return data;
};