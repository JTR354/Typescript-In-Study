/**
 * Classes
 */

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "hello" + this.greeting;
  }
}

let greeter = new Greeter("world");

/**
 * Inheritance
 */
class Animal {
  eat() {}
}

class Dog extends Animal {
  constructor() {
    super();
  }
  action() {
    super.eat();
  }
}

/**
 * Public, private, and protected modifiers
 */

/**
 * Public by default
 */

class Animal2 {
  public name: string;

  public constructor(theName: string) {
    this.name = theName;
  }

  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

/**
 * ECMAScript Private Fields
 *
 *
 * With TypeScript 3.8, TypeScript supports the new JavaScript syntax for private fields:
 */

class Animal3 {
  #name: string;
  constructor(theName: string) {
    this.#name = theName;
  }
}

// Property '#name' is not accessible outside class 'Animal3' because it has a private identifier.
//   new Animal3("Cat").#name;

/**
 * Understanding TypeScript’s private
 */

class Animal4 {
  private name: string;

  constructor(theName: string) {
    this.name = theName;
  }
}
//   Property 'name' is private and only accessible within class 'Animal4'.
//   new Animal4("Cat").name;

/**
 * Understanding protected
 */

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// Property 'name' is protected and only accessible within class 'Person' and its subclasses.
//   console.log(howard.name);

/**
 * private 只能自己使用
 * protected 内部类和子类使用
 * public 任意用
 */

/**
 * Readonly modifier
 */

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;

  constructor(theName: string) {
    this.name = theName;
  }
}

let dad = new Octopus("Man with the 8 strong legs");
// Cannot assign to 'name' because it is a read-only property.
//   dad.name = "Man with the 3-piece suit";

/**
 * Parameter properties
 */

class Octopus2 {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}
}

let dad2 = new Octopus("Man with the 8 strong legs");
dad.name;

/**
 * Accessors
 * getter setter
 */
const fullNameMaxLength = 10;

class Employee2 {
  private _fullName: string = "";

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }

    this._fullName = newName;
  }
}

let employee = new Employee2();
employee.fullName = "Bob Smith";

if (employee.fullName) {
  console.log(employee.fullName);
}

/**
 * Static Properties
 */

class Grid {
  static origin = { x: 0, y: 0 };

  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }

  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
Grid.origin;
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
//   console.log(grid1.orign);

/**
 *  Abstract Classes
 */
abstract class Animal5 {
  abstract makeSound(): void;

  move(): void {
    console.log("roaming the earth...");
  }
}

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // constructors in derived classes must call super()
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: Department; // ok to create a reference to an abstract type
//   department = new Department(); // error: cannot create an instance of an abstract class
//   Cannot create an instance of an abstract class.
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//   department.generateReports();

/**
 * Using a class as an interface
 */

class Point2 {
  x: number;
  y: number;
}

interface Point3d extends Point2 {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };

/**
 * Constructor functions
 */

class Greeter2 {
  static standardGreeting = "Hello, there";
  greeting: string;
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    } else {
      return Greeter2.standardGreeting;
    }
  }
}

let greeter1: Greeter2;
greeter1 = new Greeter2();
console.log(greeter1.greet()); // "Hello, there"

let greeterMaker: typeof Greeter2 = Greeter2;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter2 = new greeterMaker();
console.log(greeter2.greet()); // "Hey there!"

let greeter3: Greeter2;
greeter3 = new Greeter2();
console.log(greeter3.greet()); // "Hey there!"
