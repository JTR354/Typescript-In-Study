import React from 'react'
// import HelloHoc from './hello/hellHoc'
// import HelloHooks from './hello/HelloHooks'
import {Route, Link, Router} from 'react-router-dom'
import {Layout, Menu, ConfigProvider} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import './App.css'
import Empolyee from './employee'

const {Header, Content,Footer} = Layout

const App = () => {
  let defaultKey = 'employee'
  return (
    <ConfigProvider>
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[defaultKey]}
            className="menu"
          >
            <Menu.Item key="employee">员工管理</Menu.Item>
            <Menu.Item key="setting">系统设置</Menu.Item>
          </Menu>
        </Header>
        <Content className="contentWrap">
          <div className="content">
            <Route path="/" exact component={Empolyee} />
            <Route path="/employee" component={Empolyee}></Route>
          </div>
        </Content>
        <Footer className="footer">TypeScript in Action</Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App