/**
 * merge 声明合并
 */

void function () {
  interface A {
    x: number
    // y: string
    foo(bar:number): number
    foo(bar:string): string
  }
  
  interface A {
    y: number
    foo(bar: string): string
    foo(bar: string): string[]
    foo(bar: 'b'): string
  }
  
  let a: A = {
    x: 1,
    y: 2,
    foo(bar: any) {
      return bar
    }
  }
}()
/**
   * part02
   */
  class CC {}
  namespace CC {
    export let state = 1
  }
  // console.log(CC.state);

/**
 * part03
 */
 
function Lib() {}
namespace Lib{
  export let version = '1.0'
}

// console.log(Lib.version);

/**
 * part04
 */

 enum Color {
   Red,
   Yellow,
   Blue
 }

 namespace Color {
   export function mix() {}
 }

//  console.log(Color);
 
