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

/** 0 */

type ReadOnlyType<T> = {
  // readonly [P in keyof T]: T[P]
  readonly [P in keyof T]?: T[P]
}


type ReadOnlyType1 = ReadOnlyType<Info1>

type RemoveReadonly<T> = {
  -readonly [P in keyof T]: T[P]
}

type ReadOnlyType4 = RemoveReadonly<Info1> // 去掉readonly

let info11: ReadOnlyType1 = {
  name: '21',
  age: 232,
  sex: false
}

// info11.sex = true  无法分配到 "sex" ，因为它是只读属性。

type ReadOnlyType2 = Readonly<Info1> // 只读
type ReadOnlyType3 = Partial<Info1> // 可选

/** 1 */

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

/** 2 */

type Proxy<T> = {
  get(): T;
  set(value: T): void;
}

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}

function proxify<T>(obj: T): Proxify<T> {
  const res = {} as Proxify<T>;
  // tslint:disable-next-line: forin
  for (const key in obj) {
    res[key] = {
      get: () => obj[key],
      set: (val) => obj[key] = val
    }
  }

  return res;
}

let props = {
  name: 'lison',
  age: 18
}

let proxyProps = proxify(props)
console.log(proxyProps)

function unproxify<T>(t: Proxify<T>): T {
  const res = {} as T;
  // tslint:disable-next-line: forin
  for (const key in t) {
    res[key] = t[key].get()
  }
  return res;
}

/** 3 */

const stringIndex = 'a';
const numberIndex = 1;
const symbolIndex = Symbol();

type Objs2 = {
  [stringIndex]: string,
  [numberIndex]: number,
  [symbolIndex]: symbol
}

type keysType = keyof Objs2

/** 4 */
type MapetoPromise<T> = {
  [P in keyof T]: Promise<T[P]>
}

type Tuple = [number, string, boolean];
type PromiseTuple = MapetoPromise<Tuple>

let tuple1: PromiseTuple = [
  new Promise((resolve) => resolve(1)),
  new Promise((resolve) => resolve('string')),
  new Promise((resolve) => resolve(false))
]

/**
 * 5
 *
 */
// unknown

// 1. 任何类型都可赋值给unkonwn
let value1: unknown
value1 = 123;
value1 = 'se'
// 2. 没有类型断言或基于控制流的类型细化时，unknown不能赋值给任何类型，此时只能赋值给unknown或any
let value2: unknown
// let value3:string = value2
let value3: string = value2 as string
// 3. 没有类型断言或基于控制流的类型细化时，不能进行任何操作
// 4. unkonwn与任何其他类型组成的交叉类型,最后都等于其他类型
type type1 = string & unknown
// 5. unkonwn与任何其他类型(any除外)组成的联合类型,最后都等于unknown
type type2 = string | unknown
type type3 = any | unknown
// 6. never时unkonwn的子类型
type type4 = never extends unknown ? true : false
// 7. keyof unkonwn = never
// 8. 只能对unkonwn进行等于或不等于操作
// 9. unknown类型的值不能访问他的属性,作为函数调用和作为类创建实例
// 10. 使用映射类型时如果遍历的是unknown类型，则不会映射任何属性
type Types1<T> = {
  [P in keyof T]: number
}

type types11 = Types1<any>;
type types12 = Types1<unknown>;

/**
 *
 * 6
 *
 */
type Types2<T> = T extends string ? string : number

type TypeNumber<T> = T extends any ? T : never;
type Type3 = TypeNumber<string | number>;

type TypeName1<T> =
  T extends string ? string :
  T extends number ? number :
  T extends boolean ? boolean :
  T extends undefined ? undefined :
  T extends () => void ? () => void :
  object

type Type6 = TypeName1<(() => void) | string>
type Type7 = TypeName1<(() => void) | string[]>


type Type8<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

interface Part {
  id: number
  name: string
  subparts: Part[]
  subpartsUpadate(newName: string): void
  updatePart(newName: string): void
}

type Test1 = Type8<Part>


/** infer */
type Type9<T> = T extends any[] ? T[number] : T
type Test2 = Type9<string[]>
type Test3 = Type9<number>

// tslint:disable-next-line: array-type
type Types10<T> = T extends Array<infer U> ? U : T; // infer U 推断数组内元素类型是什么

/** 8 */
// Exclude<T,U>

type Type11 = Exclude<'a' | 'b', 'a'> // type Type11 = "b"
// Extract<T,U>

type Type12 = Extract<'a' | 'b', 'a'> // type Type12 = "a"

// NonNullable<T>
type Type13 = NonNullable<string | number | null | undefined> // type Type13 = string | number

// ReturnType<T>
type Type14 = ReturnType<() => string> // type Type14 = string

// InstanceType<T>

class AClass {
  // tslint:disable-next-line: no-empty
  constructor() { }
}

type T1 = InstanceType<typeof AClass> // type T1 = AClass
type T2 = InstanceType<any> // type T1 = any