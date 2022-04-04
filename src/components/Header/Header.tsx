import HamburgerButton from 'components/HamburgerButton/HamburgerButton';
import { MyMoviesLogo } from 'components/Icons';

import styles from './Header.module.css';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <MyMoviesLogo className={styles.icon} />
      <HamburgerButton isActive={true} />
    </header>
  );
};

export default Header;
