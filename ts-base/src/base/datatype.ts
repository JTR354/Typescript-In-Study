// es6 基础类型
/**
 * Boolean
 * String
 * Number
 * undefined
 * Function
 * Object
 * Symbol
 */
// typescript 数据类型
/**
 * Boolean
 * String
 * Number
 * Function
 * Object
 * Symbol
 * undefined
 * null
 * Array
 * 
 * void
 * any
 * never
 * 元组
 * 枚举
 * 高级类型
 * 
 */

 // 类型注解
 /**
  * 作用： 相当于强类型语言中的类型声明
  * 语法：(变量/函数):type
  */

 // 原始类型
 let bool: boolean = true
 let str: string | undefined | null = '123'
 let num: number = 3

 // 数组
 let arr1: number[] = [1,2,3,4]
 let arr2: Array<number|string> = [3,12,3123,123, 1231, '123']

 // 元组
 let tupe: [number, string] = [0, 'asd']

 // 函数
 let add = (x: number, y: number) => x + y
 let compt: (x:number, y: number) => number
 compt = function (a, b) {return a+ b}
 compt = (x, y) => x  * y
 

// 对象
let obj:{x: number, y: number} = {x: 1, y: 2}
obj.x = 133
// Symbol
let sy1: symbol = Symbol('uk')
let sy2 = Symbol('uk')

// undefined, null
let un: undefined = undefined
let nul: null = null

str = null
str = undefined

// void
let noReturn = () => {}

// any
let x
x = 1
x = '2'
x = new Object
x = new Function
x = null

// never
let error = () => {
    throw new Error('never')
}
let wh = () => {
    while(true){
    }
}