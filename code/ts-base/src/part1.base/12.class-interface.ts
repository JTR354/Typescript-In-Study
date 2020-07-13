/**
 * interface
 */
interface Human {
  name: string
  eat(): void
}

class Asian implements Human{
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() {}
  age:number = 0
  sleep() {}
}

interface Man extends Human {
  run(): void
}

interface Child extends Human {
  cry(): void
}

interface Boy extends Man,Child {}

let boy: Boy = {
  name: '',
  eat() {},
  run() {},
  cry() {}
}

class Auto {
  state = 1
  // private state2 = 2
}

interface AutoInterface extends Auto {}

class C implements AutoInterface {
  state = 1
  // private state2 = 5
}

class Buss extends Auto implements AutoInterface {}