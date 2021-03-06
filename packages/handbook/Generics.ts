/**
 * Generics
 */

function identity<T>(arg: T):T {
    return arg
}
let output = identity('mystring')

/**
 * Generic Types
 */

 function identity2<T>(arg:T):T {
     return arg
 }

 let myIdentity:<T> (arg:T) => T = (a) => a

 let myIdentity2 = <T>(arg:T):T => {
     return arg
 }

 interface GenericIdentityFn {
     <T>(arg:T): T
 }

 let myIdentity3: GenericIdentityFn = (a) => a

 myIdentity3<number>(1)

 /**
  * Generic Classes
  */

  class GenericNumber<T> {
      zeroValue: T;
      add:(x:T, y:T) => T = (x,y) => x || y
  }

 const gn = new GenericNumber<number>()
 gn.zeroValue = 123
 gn.add(1,2)

 /**
  * Generic Constraints
  */

  interface Lengthwise {
      length: number
  }

  function logginIdentity<T extends Lengthwise>(arg:T):T {
      console.log(arg.length);
      return arg
  }

  logginIdentity({length:3})
  logginIdentity({length:88, value: '12313'})

  /**
   * Using Type Paramseters in Generic Contraints
   */

   function getProperty<T,K extends keyof T>(obj:T, key: K) {
       return obj[key]
   }

   let x = {a:1,b:2,c:3,d:4}
   getProperty(x, 'a')
//    getProperty(x, 'B')

/**
 * Using Class Types in Generics
 */

 function create<T>(c: {new (): T}):T {
     return new c()
 }

 class Beekeeper {
     hasMask: boolean
 }

 class ZooKeeper {
     nametag: string
 }

 class Animal {
     numLegs: number
 }

 class Bee extends Animal {
     keeper: Beekeeper
 }

 class Lion extends Animal {
     keeper: ZooKeeper
 }

 function createInstance<A extends Animal>(c: new () => A):A {
     return new c()
 }

 createInstance(Lion).keeper.nametag
 createInstance(Bee).keeper.hasMask