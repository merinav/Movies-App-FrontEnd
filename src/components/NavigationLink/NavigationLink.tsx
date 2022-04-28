import * as React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationLink.module.css';

const NavigationLink = (): JSX.Element => {
  return (
    <div className={styles.headerNavigation}>
      <nav>
        <ul className={styles.headerNavigationUnorderedList}>
          <li className={styles.headerNavigationListItem}>
            <NavLink className={({ isActive }) => (isActive ? styles.activeHeaderNavigationNavLink : styles.headerNavigationNavLink)} to="movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationLink;
