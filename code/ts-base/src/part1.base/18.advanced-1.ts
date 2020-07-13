/**
 * 交叉联合类型
 */
void function () {

  let a: number | string = 'a' || 1
  let b: 'a' | 'b' | 'c'
  let c: 1 | 2 | 3

  interface DogInterface {
    run():void
  }
 
  interface CatInterface {
    jump():void
  }
 
  let Pet: DogInterface & CatInterface
 
  class Dog implements DogInterface {
    run() {}
    eat() {}
  }
  class Cat implements CatInterface {
    jump() {}
    eat() {}
  }

  enum Master {
    Boy,
    Girl
  }

  function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog() : new Cat()
    pet.eat()
    if (pet as Dog) {
      (pet as Dog)?.run
    }
    return pet
  }

  /**
   * part02
   */
  interface Square{
    kind: 'square'
    size: number
  }

  interface Rectangle {
    kind: 'rectangle'
    width: number
    height: number
  }

  interface Circle {
    kind: 'circle',
    r: number
  }

  type Shape = Square | Rectangle | Circle

  function area(s: Shape) {
    switch(s.kind) {
      case 'square':
        return s.size * s.size
      case 'rectangle':
        return s.width * s.height
      case 'circle':
        return Math.PI * s.r * s.r
      default:
        return void function(e):never{
          throw new Error(e)
        }(s)
    }
  }
  // console.log(area({kind: 'circle', r: 1}));
  
}()
