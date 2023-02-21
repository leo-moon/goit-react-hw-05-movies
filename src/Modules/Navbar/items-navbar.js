import {nanoid} from 'nanoid';

const itemsNavbar = [
  {
    id: nanoid(),
    text: 'Home',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Movie',
    link: '/movie',
  },
  {
    id: nanoid(),
    text: 'TV',
    link: '/tv',
  },
];

export default itemsNavbar;
