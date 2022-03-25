import { ReactNode } from 'react';
import Header from 'components/Header/Header';

import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
  footer: ReactNode;
};

const Layout = ({ children, footer }: LayoutProps): JSX.Element => (
  <>
    <>{Header}</>
    <div className={styles.main}>
      <main>{children}</main>
    </div>
    <div className={styles.contentWrapper}>
      <footer>{footer}</footer>
    </div>
  </>
);

export default Layout;
