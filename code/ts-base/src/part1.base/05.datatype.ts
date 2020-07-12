/**
 * 原始类型
 */
let bool: boolean = true
let num: number | undefined | null = 123
num = undefined
num = null
let str: string = '123'

/**
 * 数组
 */
let arr1: number[] = [1,2,3]
let arr2: Array<number|string> = ['4', 1,2,3,4,5]

/**
 * 元组
 */
let tuple: [number, string] = [1, '2']
// tuple.push(2)
// console.log(tuple)
// tuple[2]

/**
 * 函数
 */

let add = (x:number, y: number) => x+y
// console.log(add(5,6))
let compute: (x:number, y: number) => number
compute = (a, b) => a + b
// console.log(compute(9,10));
function _compute(x:number, y: string): string {
  return x + y
}

/**
 * 对象
 */
let obj: {x: number, y: number} = {
  x: 1,
  y: 2
}
obj.x = 333

/**
 * symbol
 */
let s1: symbol = Symbol('EOF')

let s2: symbol = Symbol('EOF')

// console.log(s1 === s2);

/**
 * undefined, null
 */
let un: undefined = void 0
un = undefined
let nu: null = null

/**
 * void
 */
let noReturn = (): void => {}
noReturn = function() {}

/**
 * any
 */
let x: any
x = 1
x = []
x = () => {}

/**
 * never
 */
let error = (): never => {
  throw new Error()
}
let endless = function(): never {
  while(true){

  }
}