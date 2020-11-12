/**
 * Numeric enums
 */

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse) {}

respond("test", UserResponse.Yes);

enum E {
  A = getSomeValue(),
  // Enum member must have initializer.
  //  B
}

function getSomeValue(n: number = 0) {
  return n;
}

/**
 * String enums
 */

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

/**
 * Heterogeneous enums
 */

enum BooleanLikeHeterogenousEnum {
  No = 0,
  Yes = "Yes",
}

/**
 * Computed and constant memebers
 */

enum E {
  X,
}

enum E2 {
  X,
  Y,
  Z,
}

enum E3 {
  A = 1,
  B,
  C,
}

enum FileAccess {
  // costant memebers
  None,
  Read = 1 << 2,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  Size = "123".length,
}

/**
 * Union enums and enum member types
 */

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Circle;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Circle,
  // Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
  // kind: ShapeKind.Square,
  radius: 100,
};

enum E4 {
  Foo,
  Bar,
}

function f(x: E4) {
  if (x !== E4.Foo) {
  }
  return true;
}

/**
 * Enums at runtime
 */
function f2(obj: { X: number }) {
  return obj.X;
}
f2(E);

/**
 * Enums at compile time
 */

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num < LogLevel.WARN) {
    console.log(key, num, message);
  }
}

printImportant("ERROR", "this is a test");

/**
 * Reverse mappings
 */

enum Enum {
  A,
}

let a = Enum.A;
let nameOfA = Enum[a]; // 'A'

/**
     * "use strict";
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
反射
     */


/**
 * Ambient enums
 * 没有声明，应该在typescript编译期处理掉
 */
declare enum Enum2 {
    A,
    B,
    C
}
// Enum2 is not defined
console.log(Enum2);
