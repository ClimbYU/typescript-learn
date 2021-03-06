/**
 * 1. keyof
 */
interface InterfaceAdvance {
  name: string,
  age: number
}

let interfaceObj: keyof InterfaceAdvance  // 只能为接口的key

interfaceObj = 'age'


function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
  return names.map(name => obj[name])
}

let getValue1: (string | number)[] = getValue({
  name: 'zhangsan',
  age: 17
}, ['name', 'age'])

/**
 * 2.索引访问操作符 []
 */

type NameTypes = InterfaceAdvance['name']

let nameTypes1: NameTypes = '32323'

function getProperty<T, K extends keyof T>(obj: T, name: K): T[K] {
  return obj[name]
}

interface Objs<T> {
  [key: number]: T
}

let keys: keyof Objs<number>

keys = 2


interface Objs1<T> {
  [key: string]: T
}
let keys1: Objs1<number>['name']


interface Type {
  a: never,
  b: never,
  c: string,
  d: number,
  e: undefined,
  f: null,
  g: object
}

type Test = Type[keyof Type] // keyof Type 为非never，非undefinedd，非null，组成的联合类型

// 映射类型

interface Info1 {
  name: string,
  age: number,
  sex: boolean
}

type ReadOnlyType<T>{
  // readonly [P in keyof T]: T[P]
  readonly [P in keyof T]?: T[P]
}


type ReadOnlyType1 = ReadOnlyType<Info1>

let info11: ReadOnlyType1 = {
  name: '21',
  age: 232,
  sex: false
}

// info11.sex = true  无法分配到 "sex" ，因为它是只读属性。

type ReadOnlyType2 = Readonly<Info1> // 只读
type ReadOnlyType3 = Partial<Info1> // 可选

// Pick的内置实现方式
type Pick1<T, K extends keyof T> = {
  [P in K]: T[P]
}
// Record的内置实现方式
type Record1<K extends keyof any, T> = {
  [P in K]: T;
};


interface Info2 {
  name: string,
  age: number,
  address: string
}

let info5: Info2 = {
  name: 'se',
  age: 323,
  address: 'beijing'
}

// tslint:disable-next-line: no-shadowed-variable
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const res: any = {}
  keys.map(key => {
    res[key] = obj[key]
  })
  return res;
}

pick(info5, ['address'])

// 将对象中的属性转换为其他值是可以使用record
function getObjectRecord<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U> {
  const res: any = {}
  // tslint:disable-next-line: forin
  for (const key in obj) {
    res[key] = f(obj[key])
  }

  return res;

}

const names = { 0: 'hello', 1: 'world', 2: 'types' }

const lengths = getObjectRecord(names, (s) => s.length)