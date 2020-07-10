import React, { ReactChildren, useState } from 'react';
import styles from './index.less';
import {Link, history} from 'umi'

export default (props: any) => {
  let [flag, setFlag] = useState(props.location.pathname === '/')
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      {/* <Link to="/hello">Go to list page</Link> */}
      <h1 onClick={() => {
        flag ? history.push('/hello') : history.goBack()
        setFlag(!flag)
      }}>go to hello</h1>
      <div>{props.children}</div>
    </div>
  );
}
