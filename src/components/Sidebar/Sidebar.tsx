import MainNavigation from 'components/MainNavigation/MainNavigation';

import styles from './Sidebar.module.css';

type SidebarProps = {
  onBackDropClick?: () => void;
};

const Sidebar = ({ onBackDropClick }: SidebarProps): JSX.Element => {
  return (
    <div className={styles.sidebarBackdrop} onClick={onBackDropClick}>
      <div className={styles.sidebarTakeover}>
        <nav className={styles.navmenu}>
          <MainNavigation />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
