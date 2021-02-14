
interface NameFace {
  firstName: string,
  lastName: string
}

const getName = ({ firstName, lastName }: NameFace): string => {
  return `${firstName}${lastName}`
}

const a = getName({ firstName: 'zhang', lastName: '111' })


// console.log(a)

interface Veg {
  color?: string, // 可选属性
  type: string,
  [prop: string]: any // 绕过多于属性检查
}

const geVeg = ({ color, type }: Veg): string => {
  return `${color ? color : ''}${type}`
}

const v = geVeg({ type: 'aa', color: 'red', name: 123 } as Veg) // 使用类型断言绕过多于属性检查

// type
type Func = (number1: number, number2: string) => string

const res: Func = (n1, n2) => n1 + n2

//
interface Func1 {
  (number1: number, number2: string): number,
  age: number
}

//
interface Func2 {
  [id: number]: number,
  [age: string]: number
}

const a1: Func2 = {
  'age': 12,
  123: 12
}

// 混合类型接口
interface Count {
  (): void,
  name: string
}
