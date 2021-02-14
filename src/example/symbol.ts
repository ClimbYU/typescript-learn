let s = Symbol(123)

console.log(s)

const obj1: object = {
  [s]: 'lesson',
  name: 322,
  age: 23,
  message: '3'
}

console.log(Object.getOwnPropertySymbols(obj1)) //只返回symbol类型
console.log(Reflect.ownKeys(obj1)) //返回所有属性

// 静态方法

const s1 = Symbol.for('123')
const s2 = Symbol.for('123')

console.log(Symbol.keyFor(s1))