/**
 * 单独导出
 */
export let a = 1

/**
 * 批量导出
 */
let b = 2
let c = 3
export {b,c}

/**
 * 接口导出
 */
export interface P {
  x:number
  y:number
}

/**
 * 函数导出
 */
export function f() {}

/**
 * 导出时起别名
 */

function g () {}

export {g as G}

/**
 * 默认导出,无需函数名
 */

export default function () {
  console.log('i am default');
}

/**
 * 引入外部模板,重新导出
 */
export {str as hello} from './b'