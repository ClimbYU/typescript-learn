const getArr = <T>(val: T, times: number = 5): T[] => {
  return new Array(times).fill(val)
}

// console.log(getArr('123'))
const arr1 = getArr<number>(123)
const ge = getArr<string>('223')

const getarr1 = <T, U>(arg1: T, arg2: U, times: number = 3): T[] => {
  return new Array(times).fill([arg1, arg2])
}

// console.log(getarr1(1, '233'))

let getArr2: <T>(arg: T, arg1: number) => T[]

interface Inter {
  <T>(arg: T, age: number): T[],
  age: number
}

interface Inter1<T> {
  (arg: T, age: number): T[],
  age: number
}
type Interf = <T> (arg1: T, num: number) => T[]

// 泛型约束
interface HasLength {
  length: number
}

const getArr3 = <T extends HasLength>(arg1: T, arg2: number = 3): T[] => {
  return new Array(arg2).fill(arg1)
}

getArr3('123', 4)

// 泛型约束中使用类型参数
const getArr4 = <T, U extends keyof T>(obj: T, prop: U) => {
  return obj[prop]
}

getArr4({
  a: 13,
  b: 34,
}, 'a')