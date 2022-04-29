import HamburgerButton from 'components/HamburgerButton/HamburgerButton';
import { MyMoviesLogo } from 'components/Icons';
import MainNavigation from 'components/MainNavigation/MainNavigation';
import Sidebar from 'components/Sidebar/Sidebar';
import useMediaQuery from 'hooks/useMediaQuery';
import { useState, useEffect } from 'react';

import styles from './Header.module.css';

const Header = (): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 780px)');

  const [showSidebar, setShowSidebar] = useState(false);

  function handleOnClick() {
    setShowSidebar(!showSidebar);
  }

  function handleOnBackDropClick() {
    setShowSidebar(false);
  }

  useEffect(() => {
    if (!isMobile) {
      setShowSidebar(false);
    }
  });

  return (
    <header className={styles.header}>
      <MyMoviesLogo className={styles.icon} />
      {isMobile ? <HamburgerButton isActive={showSidebar} onClick={handleOnClick} /> : <MainNavigation />}
      {isMobile && showSidebar && <Sidebar onBackDropClick={handleOnBackDropClick} />}
    </header>
  );
};

export default Header;
