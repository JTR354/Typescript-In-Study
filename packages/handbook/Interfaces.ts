/**
 * One of TypeScript’s core principles is that type checking focuses on the shape that values have.
 */

/**
 * first Interface
 * 仅仅使用一次的话，可以使用匿名接口
 * interface关键字方便复用
 */

function printLabel(labelObj: { label: string }) {
  console.log(labelObj.label);
}

let myObj = { size: 10, label: "size 10 object" };
printLabel(myObj);

interface LabeledValue {
  label: string;
}

function printLabel2(labelObj: LabeledValue) {
  console.log(labelObj.label);
}
printLabel2(myObj);

/**
 * Optinoal Properties
 */

interface SquareConfig {
  width?: number;
  color?: string;
}

/**
 * Readonly properties
 */
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 99 };
// Cannot assign to 'x' because it is a read-only property.
//    p1.x = 123
//Property 'z' does not exist on type 'Point'.
// p1.z = 111

let a: number[] = [1, 2, 4, 6];
let ro: ReadonlyArray<number> = a;
a = ro as number[];

// readony vs const
/**
 * Variables use const whereas properties use readonly.
 * 属性用readony 变量用const
 */

/**
 * Excess Property Checks
 */

interface SquareConfig2 {
  color?: string;
  width?: number;
  [propery: string]: any;
}

let ss: SquareConfig2 = { any: 123 };

/**
 * Function Types
 */

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};
mySearch("abac", "a");

/**
 * Indexable Types
 */
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ["bob", "fred"];

let myStr: string = myArray["0"];

interface ReadonlyStringArray {
  readonly [index: number]: string | number;
  name?: number;
  length: string;
}

/**
 * Class Types
 */
//  interface ClockInterface {
//      currentTime: Date
//      setTime?(d: Date): void
//  }

//  class Clock implements ClockInterface {
//      currentTime: Date = new Date()
//      setTime(d: Date) {
//          this.currentTime = d
//      }
//      constructor(h: number) {}
//  }

/**
 * 类接口只检查实例,construct属于静态方法
 */

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

/**
 * 更加简便的书写方式
 */

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
  }
  
  interface ClockInterface {
    tick(): void;
  }
  
  const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
      console.log("beep beep");
    }
  };

  /**
   * extending interfaces
   * 一个接口可以扩展多个接口,从而创建所有接口的组合
   */

  interface Shape {
    color: string;
  }
  
  interface PenStroke {
    penWidth: number;
  }
  
  interface Square extends Shape, PenStroke {
    sideLength: number;
  }
  
  let square = {} as Square; // <Square>{}
  square.color = "blue";
  square.sideLength = 10;
  square.penWidth = 5.0;

  /**
   * Hybird Types
   * 一般用于第三方库封装
   */

  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }
  
  function getCounter(): Counter {
    let counter = function (start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
  }
  
  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 5.0;

  /**
   * Interfaces Extending Classes
   */

  class Control {
    private state: any;
  }
  
  interface SelectableControl extends Control {
    select(): void;
  }
  
  class Button extends Control implements SelectableControl {
    select() {}
  }
  
  class TextBox extends Control {
    select() {}
  }
  
//   class ImageControl implements SelectableControl {
//   Class 'ImageControl' incorrectly implements interface 'SelectableControl'.
//     Types have separate declarations of a private property 'state'.
//     private state: any;
//     select() {}
//   }