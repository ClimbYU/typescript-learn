function mergeOption<T, U extends string>(op1: T, op2: U) {
  return { ...op1, op2 }
}

mergeOption({ a: "232" }, 'name') // {a:'232',op2:'name'}


function getExcludeProp<T extends { props: string }>(obj: T) {
  const { props, ...reset } = obj

  return reset
}

const objInfo = {
  props: 'ewewe',
  name: '3232',
  age: 23e3
}

getExcludeProp(objInfo)
// {
  // name: '3232',
  // age: 23e3}