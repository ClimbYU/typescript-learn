let add: (num1: number, num2: number) => number

type Add1 = (num1: number, num2: number) => number


let addFunc = (num1: number, num2: number) => num1 + num2

// 可选参数
type Add2 = (a: number, b: number, c?: number) => number;

const handle = (arg1: number, ...arg2: number[]): number => {
  return arg2.push(arg1)
}

// 重载
function Add4(arg: string): string[]
function Add4(arg: number): number[]

function Add4(arg: any): any {
  if (typeof arg === 'string') {
    return arg.split('')
  } else {
    return arg.toString().map(item => Number(item))
  }
}