/// <reference path="a.ts" />
namespace Shape {
  export function square(x: number) {
    return x * x
  }
  // export function cricle(r:number) {
  //   return 1 * r ** 2
  // }
}

// 命名空间不和模块混用
console.log(Shape)
// Shape.cricle(3)
// Shape.square(2)