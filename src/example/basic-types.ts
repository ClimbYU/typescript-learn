let bool: Boolean = false;

// 布尔类型
let boolea: boolean;
boolea = true;


// 数字类型
let num1: Number = 4;
let num2: Number;

num2 = 0b110101010001;
num2 = 0o232332;
num2 = 0X123883

// 字符串类型
let str: string = '33232'

console.log(str)

// 数组类型
let arr: number[]
arr = [1, 23, 3, 3, 35, 3, 5]

let arr2: Array<number>

arr2 = [1, 2, 33,]
console.log(arr2)

let arr3: (number | string)[];

arr3 = [1, 3, 2, 3, 2, '323', '231']

let arr4: Array<Number | String>
arr4 = [232, 24, 5, 43, 2, 32, '43ddws']

// 元组类型

let tuple: [string, number, boolean]

tuple = ['234r', 231, false]

// 枚举类型
enum Roles {
  ADMAIN = 4,
  USER,
  SUPER = 2
}

console.log(Roles.ADMAIN)

// any类型
let value: any;
value = 22
value = '232'
value = [2, 3, '34', false];

let arr5: any[]
arr5 = [2, 3, 2, '323', false]

// void类型
const fn1 = (text: string): void => {
  console.log(text)
}

let val: void
val = undefined
val = null //需要配置tsconfig严格模式为false

// null和undefined类型

let val1: undefined
val1 = undefined
let val2: null;
val2 = null

// never类型 （不存在类型） 是任意类型的子类型

const errFun = (message: string): never => {
  throw new Error(message)
}

const infiniteFunc = (): never => {
  while (true) {

  }
}

//object类型

function getObj(obj: object): void {
  console.log(obj)
}

getObj({})

// 类型断言

function getObjLength(target: number | string): number {
  if ((<string>target).length || (target as string).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}



