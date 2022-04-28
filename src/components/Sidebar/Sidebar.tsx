import NavigationLink from 'components/NavigationLink/NavigationLink';

import styles from './Sidebar.module.css';

type SidebarProps = {
  onBackDropClick?: () => void;
};

const Sidebar = ({ onBackDropClick }: SidebarProps): JSX.Element => {
  return (
    <div className={styles.sidebarBackdrop} onClick={onBackDropClick}>
      <div className={styles.sidebarTakeover}>
        <ul className={styles.navmenu}>
          <NavigationLink />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
