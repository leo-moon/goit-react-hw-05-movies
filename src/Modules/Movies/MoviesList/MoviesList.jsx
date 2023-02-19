// import MovieItem from './MovieItem/MovieItem';
// import { Link } from 'react-router-dom';
// import styles from './movies-list.module.scss';

// const MoviesList = ({ items }) => {
//   console.log('MoviesList', items);
//   const elements = items.map(
//     ({
//       id,
//       backdrop_path,
//       media_type,
//       original_language,
//       original_title,
//       overview,
//       poster_path,
//       title,
//     }) => (
//       <Link key={id} to={`/${media_type}/${id}`}>
//         <li className={styles.item}>
//           {/* <a href={overview}> */}
//             <h3> {title}</h3>
//             <p>{id}</p>
//             <p>{backdrop_path}</p>
//             <p>{media_type}</p>
//           {/* </a> */}
//         </li>
//       </Link>
//     )
//   );
//   return (
//     <ul className={styles.gallery}>
//       {elements}
//     </ul>
//   );
// };

// export default MoviesList;

// MoviesList.defaultProps = { items: [] };
