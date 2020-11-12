/**
 * Boolean
 * Number
 * String
 * Array
 * Tuple
 * Enum
 * Unknown
 * Any
 * Void
 * Null and Undefined
 * Never
 * Object
 * Symbol
 */

/**
 * Boolean
 */
let isDone: boolean = false;

/**
 * Number
 */
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744
// let big: bigint = 100n;

/**
 * String
 */
let fullName:string = 'bob'
let color = "red"
color = `blue${1}`

/**
 * Symbol
 */
let sy: symbol = Symbol('hello symbol')

/**
 * Array
 */
let list: number[] = []
list = [1,2,3]

let list2: Array<number> = [1,2,6]

/**
 * Tuple
 */
let x: [string, number] 
x = ['hello', 10]

/**
 * Enum
 */
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green // 0 

enum Color2 {
    Red = 1,
    Green,
    Blue
}
let c2:Color2 = Color2.Green // 2

enum Color3 {
    Red = 1,
    Green = 4,
    Blue = 6
}
let c3:Color3 = Color3.Green // 4

enum Color4 {
    Red = 1,
    Green,
    Blue
}
let colorName:string = Color4[2] // Green

/**
 * Unknow
 * 可以任意赋值，但不能任意分配
 */

 let notSure: unknown = 4
 notSure = 'maybe a string instead'
 notSure = false

 declare let maybe: unknown

 // Type 'unknown' is not assignable to type 'number'.
//  const aNumber: number = maybe

if (maybe === true) {
    const aBoolean: boolean = maybe
    // Type 'boolean' is not assignable to type 'string'.
    // const aString: string = maybe
}

if (typeof maybe === 'string') {
    // Type 'string' is not assignable to type 'boolean'.
    // const aBoolean: boolean = maybe
    const aSting:string = maybe
}

/**
 * Any
 * 尽量避免使用
 */

 declare function getValue(params:string):any
 const str:string = getValue('myString')

 let looseTyped:any = 5
 looseTyped.ifItExists()

 let strictlyTyped: unknown = 4
 // Property 'ifItExists' does not exist on type 'unknown'.
//  strictlyTyped.ifItExists()

/**
 * Void
 */
function warnUser():void {
    console.log(`this is my waining message`)
}
let unusable: void = undefined
unusable = null

/**
 * Null and Undefined
 */
let u:undefined = undefined
let n:null = null

/**
 * Never
 */

 function error(message: string):never {
     throw new Error(message)
 }

 function fail() {
     return error('something failed')
 }

 function infiniteLoop():never{
     while(true) {
     }
 }

 /**
  * Object
  * Generally, you won’t need to use this.
  */
 declare function create(o:object | null):void
 create({prop:0})
 create(null)
 create(undefined)
 
 // Argument of type 'number' is not assignable to parameter of type 'object'.
//  create(42)

/**
 * Type assertions
 * 类型断言
 * 1. as语法
 * 2. angle-bracket语法
 */
let someValue: unknown = 'this is a string'
let strLength: number = (someValue as string).length

let someVale2: unknown = 'this is a string2'
let strLength2: number = (<string>someValue).length

// when using TypeScript with JSX, only as-style assertions are allowed.

/**
 * It can be tempting to think that the types Number, String, Boolean, Symbol, or Object are the same as the lowercase versions recommended above.
 * 
 * These types do not refer to the language primitives however, and almost never should be used as a type.
 */
/**
 * Number
 * String
 * Boolean
 * Symbol
 * Object
 */