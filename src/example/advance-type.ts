import { isTemplateExpression } from "typescript";

// 1.交叉类型
const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
  let res = {} as T & U

  res = Object.assign(arg1, arg2);

  return res;
}

// 2。类型保护

const arr12 = [1232, '4343']

const getRandomValue = () => {
  const numbers = Math.random() * 10
  if (numbers < 5) { return arr12[1] }
  else {
    return arr12[0]
  }
}
const value = getRandomValue();

if ((value as string).length) {  // 类型断言
  console.log((value as string).length)
} else {
  (value as number).toFixed()
}


// tslint:disable-next-line: no-shadowed-variable
function isString(value: number | string): value is string /** 类型保护 */ {
  return typeof value === 'string'
}


if (isString(value)) {
  console.log(value.length)
} else {
  value.toFixed()
}


if (typeof value === 'string') {
  // tslint:disable-next-line: no-console
  console.log(value.length)
} else {
  value.toFixed()
}

// 类型断言
function getTostring(a: number | null): string {
  return a!.toFixed()
  // function getaa(pref: string) {
  //   return pref + a!.toFixed().toString()
  // }

  // a = a || 0.1

  // return getaa('a')
}

getTostring(null)


// 4.类型别名
type typeString = string;

let namea: typeString
namea = '4343'

type typeInterface<T> = { x: T, y: T };

const typeIn1: typeInterface<number> = {
  x: 1,
  y: -1
}
console.log(typeIn1)

type direction = 'east' | 'west' | 'south' | 'north' // 字符串字面量 

const directionN: direction = 'east'

/**
 * 可辨识联合类型
 * 1. 具有普通的单例类型属性
 * 2. 一个类型别名包含了哪些类型的联合
 */

interface Square {
  kind: 'square',
  size: number
}

interface Rectangle {
  kind: 'rectangle',
  height: number,
  width: number
}

interface Circle {
  kind: 'circle',
  radius: number
}

type Shape = Square | Rectangle | Circle

function assertNever(s: never): never {
  throw new Error('error')
}

function getArea(s: Shape): number {
  switch (s.kind) {
    case 'square': return s.size; break;
    case 'rectangle': return s.width * s.height; break;
    case 'circle': return Math.PI * s.radius ** 2; break
    default: return assertNever(s)
  }
}