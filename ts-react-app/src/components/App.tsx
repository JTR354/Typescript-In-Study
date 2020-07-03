import React from 'react'
// import HelloHoc from './hello/hellHoc'
// import HelloHooks from './hello/HelloHooks'
import {Route, Link, Router} from 'react-router-dom'
import {Layout, Menu, ConfigProvider} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import './App.css'
import Empolyee from './employee'
import Setting from './setting'

const {Header, Content,Footer} = Layout

const App = ({match}: any) => {
  console.log(match)
  let defaultKey = match.url.replace('/', '') || 'employee'
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
            <Menu.Item key="employee"><Link to="/employee">员工管理</Link></Menu.Item>
            <Menu.Item key="setting"><Link to="/setting">系统设置</Link></Menu.Item>
          </Menu>
        </Header>
        <Content className="contentWrap">
          <div className="content">
            <Route path="/" exact component={Empolyee} />
            <Route path="/employee" component={Empolyee}></Route>
            <Route path="/setting" component={Setting}></Route> 
          </div>
        </Content>
        <Footer className="footer">TypeScript in Action</Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App