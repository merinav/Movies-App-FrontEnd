import { ReactNode } from 'react';

import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
};

const Layout = ({ children, header, footer }: LayoutProps): JSX.Element => (
  <>
    {header}
    <main className={styles.main}>{children}</main>
    {footer}
  </>
);

export default Layout;
