/**
 * 抽象函数
 * public
 * protect
 * private
 * readonly
 * static
 * 类的继承
 * 方法重载
 */
abstract class Animal {
  eat():void {
    console.log('eat');
  }
  abstract sleep(): void
}
// let animal = new Animal()

class Dog extends Animal{
  constructor(name: string) {
    super()
    this.name = name
  }  
  public name:string
  run() {}
  private pri() {}
  protected pro() {}
  readonly legs:number = 4
  static food: string = 'bones'
  sleep() {
    this.pri()
    console.log('dog sleep')
  }
}

// console.log(Dog.prototype);
let dog = new Dog('wangw')
// console.log(dog);
// dog.pri()
// dog.pro()
// console.log(Dog.food);
// dog.eat()

class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name)
    this.color = color
    // this.pri()
    this.pro()
  }
  // color: string
}
// console.log(Husky.food);


class Cat extends Animal {
  sleep() {
    console.log('cat go to sleep');
    
  }
}
let cat = new Cat

let animals: Animal[] = [dog, cat]

animals.forEach((item) => {
  item.sleep()
})


/**
 * part02
 */
class Workflow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new Workflow().step1().step2()

class MyFlow extends Workflow{
  next() {
    return this
  }
}

new MyFlow().next().step1().step2().next().step2()