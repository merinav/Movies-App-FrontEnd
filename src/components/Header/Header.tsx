// import { ReactNode } from 'react';
import { MyMoviesLogo } from 'components/Icons';

import styles from './Header.module.css';

const Header = (
  <>
    <div className={styles.header}>
      <header>
        <MyMoviesLogo className={styles.icon} />
      </header>
    </div>
  </>
);

export default Header;
