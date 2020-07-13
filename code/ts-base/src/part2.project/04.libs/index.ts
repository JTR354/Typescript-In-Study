/**
 * 编写声明文件,方便兼容旧代码
 */
import $ from 'jquery'

$('#app').css('color', 'red')

// globalLib({x: 1})
// globalLib.doSomething()


import moduleLib from './module-lib'
// moduleLib({y: 2})
// moduleLib.doSomething()

import umdLib from './umd-lib'
// umdLib.doSomething()

/**
 * 插件模块
 */

 import m from 'moment'
//  console.log(m.now());
 
 declare module 'moment' {
   export function myFunction(): void
 }
 m.myFunction = () => {
   console.log(',mmm');
   
 }
//  m.myFunction()
 /**
  * 全局插件
  */
 declare global {
   namespace globalLib {
     function doAnything():void
   }
 }

 globalLib.doSomething = () => {}

//  console.log(globalLib);
 