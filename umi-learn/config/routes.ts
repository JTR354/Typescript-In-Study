import {IRoute} from 'umi'

const routes: IRoute[] = [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    exact: true,
    routes: [
      {
        path: '/',
        // redirect: '/workbench'
      },
      {
        path: '/workbench',
        component: '@/pages/index',
        name: 'workbench',
        icon: 'crown',
      }
    ]
  },
  {
    path: '/user',
    exact: true,
    component: '@/layouts/UserLayout',
    routes: [
      {
        path: './login',
        component: './User/Login/Login',
        // name: 'workbench',
        // icon: 'crown',
      }
    ]
  }
]
export default routes