import { ReactNode } from 'react';

import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
};

const Layout = ({ children, header, footer }: LayoutProps): JSX.Element => (
  <>
    <div className={styles.contentWrapper}>
      <header>{header}</header>
    </div>
    <div className={styles.main}>
      <main>{children}</main>
    </div>
    <div className={styles.contentWrapper}>
      <footer>{footer}</footer>
    </div>
  </>
);

export default Layout;
