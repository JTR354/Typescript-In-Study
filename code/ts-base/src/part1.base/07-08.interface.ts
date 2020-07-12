/**
 * 对象类型接口
 * 可索引类型接口
 * 函数类型接口
 * 混合类型接口
 * 类类型接口
 */

/**
 * part01
 */
interface List {
  readonly id: number
  name: string
  // [x: string|number]: boolean
  age?: number
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value: List) => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
    // value.id++
  })
}
let result = {
  data: [
      {id: 1, name: 'A', sex: 'male'},
      {id: 2, name: 'B', age: 10}
  ]
}
// render(result)

/**
 * part02
 */

 interface StringArray {
   [index: number]: string
 }
 let chars: StringArray = ['a', 'b']

 /**
  * part03
  */
 interface Names {
   [x: string]: any
   y: number
   [z:number]: number
 }

 /**
  * part04
  */
 {
  // let add: (x:number, y: number) => number
  // interface Add {
    // (x: number, y: number) : number
  // }
  type Add = (x: number, y: number) => number
  let add : Add = (a: number, b: number) => a + b
 }

 /**
  * part05
  */
 interface Lib {
   (): void
   version: string
   doSth(): void
 }

 function getLib () {
   let lib = (() => {}) as Lib
   lib.version = '1.0.0'
   lib.doSth = () => {}
   return lib
 }
 let lib1 = getLib()
//  console.log(lib1())
 let lib2 = getLib()
lib2.doSth()