// npm i @types/jquery -D
// microsoft.github.io/TypeSearch 查询
// definitelytyped.org/guides/contributing.html 贡献社区typescript版本
import $ from 'jquery'

$('.app').css('color', 'red')

globalLib({x: 1})
globalLib.doSomething()


import moduleLib from './module-lib'

moduleLib.doSomething()

import umdLib from './umd-lib' // allowUmdGlobalAccess
umdLib.doSomething()

// npm i moment

import m from 'moment'
declare module 'moment' {
  export function myFunction(): void
}
m.myFunction = () => {

}

declare global {
  namespace globalLib {
    function doAnything(): void
  }
}

globalLib.doAnything = function () {
  
}

// 声明文件依赖
