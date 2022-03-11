import { ReactNode } from 'react';

import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
};

const Layout = ({ children, header, footer }: LayoutProps): JSX.Element => (
  // TODO: Update the below code to match AC's
  <>
    <div className={styles.main}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  </>
);

export default Layout;
