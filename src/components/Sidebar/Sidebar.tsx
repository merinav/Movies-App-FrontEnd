import styles from './Sidebar.module.css';

type SidebarProps = {
  onBackDropClick?: () => void;
};

const Sidebar = ({ onBackDropClick }: SidebarProps): JSX.Element => {
  return (
    <div className={styles.sidebarBackdrop} onClick={onBackDropClick}>
      <div className={styles.sidebarTakeover}>
        <ul className={styles.navmenu}>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
