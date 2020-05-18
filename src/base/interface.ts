// Object 对象类型接口
interface List {
    readonly id: number
    name: string
    age?: number
}
interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(element => {
      console.log(element.age, element)
    })
}

let result = {
    data: [
        {id: 12, name: 'jtr', age: 123123},
        {id: 22, name: 'lost', te: '213'}
    ]
}
render(result)

// 数组
interface StringArray {
    [index: number]: string
}
let char: StringArray = ['a', 'b']

interface Names {
    [x:string]: any
    [z:number]: number
}
let obj2: Names = {'id': 'asd', '1': 123}

// Function 函数类型接口
let add2: (x:number, y:number) => number
interface Add {
    (x:number, y: number) : number
}

type Add2 = (x:number, y:number) => number
let add3:Add = (a ,b) => a + b

interface Lib {
    ():void
    version: string
    methods(): void
}

function getLib(x: any) {
    let lib = (() => {console.log('void' + x)}) as Lib
    lib.version = '1.0.0'
    lib.methods = () => {console.log('methods' + x)}
    return lib;
}
let l1 = getLib(1)
let l2 = getLib(2)
l1()
l2.methods()
console.log(l1)
console.log(l2)
