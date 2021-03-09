// 对象的混入
interface ObjectA {
  a: string
}

interface ObjectB {
  b: string
}

let oa: ObjectA = {
  a: '3ew'
}

let ob: ObjectB = {
  b: '3ew'
}

let AB: ObjectA & ObjectB = Object.assign(oa, ob)

// 类的混入
class AM {
  constructor() {
    console.log(3232)
  }
  public A: string
  public FunA() { }
}
class BM {
  constructor() {
    console.log(3232)
  }
  public B: string
  public FunB() { }
}


class ABMIX implements AM, BM {
  constructor() { }
  public A: string = '3e'
  public B: string = '323'
  public FunA: () => void
  public FunB: () => void
  c() { }
}

function mixin(base: any, from: any[]) {
  from.forEach(fromItem => {
    Object.getOwnPropertyNames(fromItem.prototype).forEach(key => {
      console.log(key)
      base.prototype[key] = fromItem.prototype[key]
    })
  })
}

mixin(ABMIX, [AM, BM])
// console.log(new ABMIX())
// console.log(new AM())