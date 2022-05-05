import React from 'react';

import styles from './Loader.module.css';

const Loader = (): JSX.Element => {
  return (
    <div className={styles.loaderBackdrop}>
      <div className={styles.ldsellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loader;
