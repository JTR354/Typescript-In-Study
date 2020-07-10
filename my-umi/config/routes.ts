export default [
  {
    path: '/', 
    component: '@/pages/index',
    wrappers: [
      '@/wrappers/auth',
      '@/wrappers/ast'
    ],
    routes: [
      {
        path: '/hello', component: '@/pages/hello'
      }
    ]
  }
]