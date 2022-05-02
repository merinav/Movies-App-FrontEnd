import * as React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const MainNavigation = (): JSX.Element => {
  return (
    <div className={styles.headerNavigation}>
      <ul className={styles.headerNavigationUnorderedList}>
        <li className={styles.headerNavigationListItem}>
          <NavLink className={({ isActive }) => (isActive ? styles.activeHeaderNavigationNavLink : styles.headerNavigationNavLink)} to="movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainNavigation;
