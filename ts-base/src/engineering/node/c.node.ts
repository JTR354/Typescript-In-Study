let c1 = require('./a.node')
let c2 = require('./b.node')
let c3 = require('../es6/a')
import c4 from '../es6/d' // "esModuleInterop": true,       
import c44 = require('../es6/d')

console.log(c1)

console.log(c2)

// c3()
// console.log(c3);
// commonjs 与 es2015 模块导出的不兼容性问题
c3.default()

// 1. 不混用模块系统
c4()
c44()

// ts-node 工具

// tsc input-src -t es3