/**
 * X(目标类型) = Y(源类型),X 兼容 Y
 */

void function () {
  let s: string = 'as'
  /**
   * 接口兼容
   */
  interface X {
    a: any
    b: any
  }

  interface Y {
    a: any
    b: any
    c: any
  }

  let x: X = {a: 1, b: 2}
  let y: Y = {a: 11, b: 22, c: 33}
  x = y
  // y = x

  /**
   * 函数兼容
   */
  type Handler = (a:number, b:number) => void

  function hof(handler: Handler) {
    return handler
  }

  /* 1)参数个数 */ 
  let handler1 = (a: number) => {}
  hof(handler1)
  let handler2 = (a:number, b:number , c: number) => {}
  // hof(handler2)

  /* 可选参数和剩余参数 */
  let a = (p1: number, p2: number) => {}
  let b = (p1?:number, p2?:number) => {}
  let c = (...args: number[]) => {}
  a = b
  a = c
  // b = a
  // b = c
  c = a
  c = b

  /* 2)参数类型 */
  let handler3 = (a:string) => {}
  // hof(handler3)

  interface Point3D {
    x: number
    y: number
    z: number
  }
  interface Point2D {
    x: number
    y: number
  }
  let p3d = (point: Point3D) => {}
  let p2d = (point: Point2D) => {}
  p3d = p2d
  // p2d = p3d


  /* 3) 返回类型 */
  let f = () => ({name: 'Alice'})
  let g = () => ({name: 'alic', location: 'bj'})
  f = g
  // g = f 少的可以兼容多的

  /**
   * 函数重载
   */
  function overload(a:number,b:number):number
  function overload(a:string, b: string ): string
  function overload(a:any, b: any): any {}
  // function overload(a: any){}
  // function overload(a:any, b:any):any {}
  // function overload(a:any, b:any, c: any):any {}

  /**
   * 枚举兼容
   */
  enum Fruit {
    Apple,
    Banana
  }
  enum Color {
    Red,
    Yellow
  }
  let fruit: Fruit.Apple = 1
  // console.log(fruit);
  // console.log(Fruit);
  let no: number = Fruit.Apple
  // let color: Color.Red = Fruit.Apple

  /**
   * 类型兼容
   */
  class A {
    constructor(p: number, q: number) {}
    id: number = 1
    private name: string = ''
  }
  class B {
    static s = 1
    constructor(p:number) {}
    id: number = 2
    private name: string = ''
  }
  class C extends A {}
  let aa = new A(1,2)
  let bb = new B(1)
  // aa = bb
  // bb = aa
  let cc = new C(1, 2)
  aa = cc
  cc = aa

  /**
   * 泛型兼容
   */
  interface Empty<T> {
    // value: T
  }
  let obj1: Empty<number> = {value: 1}
  let obj2: Empty<string> = {value: '1'}
  obj1 = obj2

  let log1 = <T>(x: T):T => {
    console.log(x)
    return x
  }
  let log2 = <U>(y:U):U => {
    console.log(y)
    return y
  }
  log1 = log2
  log2 = log1
  
  
}()