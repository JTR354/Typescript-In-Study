/**
 * 数字枚举
 */

 enum Role {
   Reporter = 1,
   Developer,
   Maintainer,
   Owner,
   Guest
 }

//  console.log(Role.Reporter) // 1
//  console.log(Role) // {1: "Reporter", 2: "Developer", 3: "Maintainer", 4: "Owner", 5: "Guest", Reporter: 1, Developer: 2, Maintainer: 3, Owner: 4, Guest: 5}

/**
 * 字符串枚举
 */
enum Message {
  Susscess = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

/**
 * 异构枚举
 */
enum Answer {
  N,
  Y = 'yes'
}

// console.log(Answer) // {0: "N", N: 0, Y: "yes"}

/**
 * 枚举成员
 */
enum Char {
  a,
  b = Char.a,
  c = 1+3,
  d = Math.random(),
  e = '123'.length,
  f = 4
}
// console.log(Char) 
{
  `
  0: "b"
  0.3077228246861934: "d"
  3: "e"
  4: "f"
  a: 0
  b: 0
  c: 4
  d: 0.3077228246861934
  e: 3
  f: 4
  `
}

/**
 * 枚举常量
 */
const enum Month {
  Jan,
  Feb,
  Mar,
  Apr = Month.Mar + 1
}
let month = [Month.Jan, Month.Feb, Month.Mar]
// console.log(month)

/**
 * 枚举类型
 */
enum E {a,b}
enum F {a=0,b=1}
enum G {a='apple', b='banana'}

let e: E = 3
let f: F = 3
// console.log(e === f)

let e1: E.a = 3
let e2: E.b = 3
let e3: E.a = 3
// console.log(e1 === e2)
// console.log(e1 === e3)

let g1: G = G.a
let g2: G.a = G.a
