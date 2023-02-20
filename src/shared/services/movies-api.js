import axios from 'axios';

const mainURL = 'https://api.themoviedb.org/3/';
const media_type_values = ['all', 'movie', 'TV', 'person'];
const time_window_values = ['day', 'week'];
const api_KEY = '?api_key=1a6a0e252669dea132492bf96fa96565';
const media_type = media_type_values[1];
const time_window = time_window_values[0];
const trendingURL =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=1a6a0e252669dea132492bf96fa96565';
  // const trendingURL =
  //   'https://api.themoviedb.org/3/search/movie?api_key=1a6a0e252669dea132492bf96fa96565&query=bat';

const instance = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/trending/movie/day?api_key=1a6a0e252669dea132492bf96fa96565',
  // params: {
  //   image_type: 'photo',
  //   orientation: 'horizontal',
  // },
});


// api_key=<<api_key>>&language=en-US
export const searchCastById = async (media_type = 'movie', id) => {
  const url = mainURL + media_type + '/' + id + '/credits' + api_KEY;
  const { data } = await instance.get(url, {
    params: {
      language: 'en-US',
    },
  });
  console.log('searchCast', data);
  return data;
};

export const searchByTitle = async (search, media_type  ) => {
  const url =
    mainURL + 'search/' + media_type + api_KEY;
  console.log('searchByTitle', url);
  const  data  = await instance.get(url, {
    params: {
      language: 'en-US',
      query: search,
    },
  });
  console.log('searchByTitle', data);
  return data;
};

export const poster = async (media_type, id, poster_path) => {
  const url = mainURL + media_type + '/' + id + poster_path + api_KEY;
  console.log('poster',  url);
  const data = await instance.get(url);
  console.log('poster',data, url)
  return data

};

export const searchByIdType = async (media_type = 'movie', id) => {
  const url = mainURL + media_type + '/' + id + api_KEY;
  const data = await instance.get(url, {
    params: {
      language: 'en-US',
    },
  });
  return data;
};

export const homePageMovies = async () => {
  const data = await instance.get(trendingURL);
  return data;
};
