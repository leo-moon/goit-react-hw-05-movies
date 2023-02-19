import { NavLink } from 'react-router-dom';
import itemsNavbar from './items-navbar';

import styles from './navbar.module.css';

const Navbar = () => {
  const elements = itemsNavbar.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link} className={styles.item}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={styles.menu}>{elements}</ul>;
};

export default Navbar;
