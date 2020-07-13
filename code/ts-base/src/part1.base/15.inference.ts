/**
 * 类型推断 inference
 */

 void function() {
  let a = 1
  let b = 2
  let c = 3
  let d = (x = 6) => x + 1

  window.onkeydown = (event: any) => {
    // console.log(event.button);
  }
  interface Foo {
    bar: number
  }
  let foo = {} as Foo
  let foo2 = <Foo>{}
  let foo3: Foo = {
    bar: 1,
  }
  // console.log(foo);
  // console.log(foo2);
  // console.log(foo3);
  
 }()