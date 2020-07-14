import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Layout, Menu, ConfigProvider} from 'antd'
import {Link, Route} from 'react-router-dom'

import Setting from './Setting'
import Employee from './Employee'

enum MENU {
  employee='/employee',
  setting='/setting'
}
// console.log(MENU);

function App({match}: any) {
  // let defaultKey = (match && match.url.replace('/', '')) || MENU.employee
  let defaultKey = match.url === '/' ? MENU.employee : match.url
  // console.log(defaultKey)
  return (
    <ConfigProvider>
      <Layout>
        <Layout.Header>
          <Menu
            theme="dark"
            defaultSelectedKeys={[defaultKey]}
            className="menu"
            mode="horizontal"
          >
            <Menu.Item key={MENU.employee} className="menu"><Link to={MENU.employee}>员工管理</Link></Menu.Item>
            <Menu.Item key={MENU.setting} className="menu"><Link to={MENU.setting}>系统设置</Link></Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content className="contentWrap">
          <div className="content">
            <Route path="/" exact component={Employee}></Route>
            <Route path={MENU.employee} exact component={Employee}></Route>
            <Route path={MENU.setting} exact component={Setting}></Route>
          </div>
        </Layout.Content>
        <Layout.Footer className="footer">Typescript in Study</Layout.Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
