import React from 'react';
import styles from './UserLayout.less';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from '../assets/logo.svg';
import {
  getMenuData,
  getPageTitle,
  MenuDataItem,
} from '@ant-design/pro-layout';
import {
  Link
} from 'umi'

export default ({children}: {children: React.ReactNode}) => {
  const title = getPageTitle({
    pathname: location.pathname,
    // formatMessage,
    // breadcrumb,
    // ...props,
  });
  
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
      {/* <h1 className={styles.title}>Page layout/UserLayout</h1> */}
      <div className={styles.container}>
        <div className={styles.lang}>
          <h1>123</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="./login">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>伊的家供应链管理系统</span>
              </Link>
            </div>
            <div className={styles.desc}>
              让女性更加健康、美丽、自信，塑造内外兼备的精致女人
            </div>
          </div>
          {children}
        </div>
        <footer>footer</footer>
      </div>
    </HelmetProvider>
  )
}
