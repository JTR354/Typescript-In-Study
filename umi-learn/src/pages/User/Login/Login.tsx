import React from 'react';
import styles from './Login.less';

export default (props: any) => {
  return (
    <div>
      <h1 className={styles.title}>Page User/Login/Login</h1>
      {props.children}
    </div>
  );
}
