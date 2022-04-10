import HamburgerButton from 'components/HamburgerButton/HamburgerButton';
import { MyMoviesLogo } from 'components/Icons';
import Sidebar from 'components/Sidebar/Sidebar';
import useMediaQuery from 'hooks/useMediaQuery';
import { useState } from 'react';

import styles from './Header.module.css';

const Header = (): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 780px)');

  const [showSidebar, setShowSidebar] = useState(false);

  let showHamburgerButtonTrue = false;

  if (isMobile) {
    if (showSidebar) {
      showHamburgerButtonTrue = true;
    }
  }

  return (
    <header className={styles.header}>
      <MyMoviesLogo className={styles.icon} />
      {isMobile && <HamburgerButton isActive={showHamburgerButtonTrue} onClick={() => setShowSidebar(!showSidebar)} />}
      {isMobile && showSidebar && <Sidebar onBackDropClick={() => setShowSidebar(!showSidebar)} />}
    </header>
  );
};

export default Header;
