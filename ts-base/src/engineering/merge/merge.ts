interface A {
  x: number
  // y: string error
  foo(bar:number):number // 3
  foo(bar:'a'):number // 0-2
}

interface A {
  y: number
  foo(bar:number):string  // 1
  foo(bar:number[]):string[] // 2
  foo(bar:'b'):string // 0-1
}

let aa: A = {
  x: 1,
  y: 2,
  foo(bar:any) {
    return bar
  }
}

// function
function Lib() {}

namespace Lib {
  export let version = '1.0'
}

console.log(Lib.version)

// class
class C {}
namespace C {
  export let state = 1
}

console.log(C.state)

// enum
namespace Color {
  export function mix() {

  }
}
enum Color {
  Red,
  Yellow,
  Bule
}


console.log(Color)