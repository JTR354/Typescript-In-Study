import React from 'react';
import styles from './index.less';
import {Link} from 'umi'

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to="/hello">Go to list page</Link>
    </div>
  );
}
