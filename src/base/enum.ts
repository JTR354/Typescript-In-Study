// 枚举
/**
 * 枚举：一组具有名字的常量集合
 */

 // 数字枚举
 enum Role {
    Report,
    Developer = 2,
    Maintainer,
    Owner,
    Guest
 }
 console.log(Role) // {0: "Report", 2: "Developer", 3: "Maintainer", 4: "Owner", 5: "Guest", Report: 0, Developer: 2, Maintainer: 3, Owner: 4, Guest: 5}
 console.log(Role.Developer) // 2
//  "use strict";
// 反向映射
// var Role;
// (function (Role) {
//     Role[Role["Report"] = 0] = "Report";
//     Role[Role["Developer"] = 2] = "Developer";
//     Role[Role["Maintainer"] = 3] = "Maintainer";
//     Role[Role["Owner"] = 4] = "Owner";
//     Role[Role["Guest"] = 5] = "Guest";
// })(Role || (Role = {}));

// 字符串枚举
enum Message {
    Success = '恭喜',
    Fail = '抱歉失败了'
}
console.log(Message);

// "use strict";
// var Message;
// (function (Message) {
//     Message["Success"] = "\u606D\u559C";
//     Message["Fail"] = "\u62B1\u6B49\u5931\u8D25\u4E86";
// })(Message || (Message = {}));

// 异构枚举
enum Answer {
    N,
    Y = 'Yes'
}
console.log(Answer);


// 枚举成员
// Role.Report = 2 xxxx
enum Char {
    // const
    a,
    b = Char.a,
    c = 1+3,
    // computed
    d = Math.random(),
    e = '123'.length,
    f = 4
}

// 常量枚举
const enum Month {
    Jan,
    Feb,
    May
}
let month = [Month.Jan]

// 枚举类型
enum E {a,b}
enum F {a =0, b=1}
enum G {a='apple',b='banana'}

let e:E = 3
let f:F = 3
// console.log(e === f)

let e1: E.a = 1
let e2: F.b
// e1 === e2
let e3: E.a = 1
e1 === e3

let g1: G = G.b
let g2: G.a = G.a

// 思维:
/**
 * 将程序中不容易记忆的硬编码
 * 或者在未来中可能改变的常量
 * 抽取出来定义为枚举类型
 * 提高程序的可读性和可维护性
 * 使你的程序以不变应万变
 */

 const enum RoleNum {
     r1 = 1,
     r2,
     r3,
     r4,
     r5
 }

 function initByRoleFn(role: RoleNum | number) {
     switch (role){
        case RoleNum.r1:
        case RoleNum.r2:
            console.log('to do sth 1')
            break
        case RoleNum.r3:
        case RoleNum.r4:
            console.log('to to sth 2')
            break
        case RoleNum.r5:
            console.log('to do sth 3')
            break
        default:
            console.log('to do any')
     }
 }
 initByRoleFn(9)