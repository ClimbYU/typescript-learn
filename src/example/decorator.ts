let sign = null;
function setName(name: string) {
  return (target: new (...args: any) => any) => {
    sign = target;
    // console.log(target.name)
  }
}

@setName('lisoo')
class ClassDesc {
  constructor(parameters) { }
}

function addName(constructor: new (...args: any) => any) {
  constructor.prototype.name = 'sss'
}

@addName
class ClassDesc1 {
  constructor() { }
}
interface ClassDesc1 {
  name: string
}

const d = new ClassDesc1()
// console.log(d.name)

// 类装饰器
function classDecorator<T extends new (...arg: any[]) => any>(target: T) {
  return class extends target {
    public newProperty = 'new property'
    public hello = 'over'
  }
}

@classDecorator
class Greeter {
  public property = 'property'
  public hello: string
  constructor(params: string) {
    this.hello = params
  }
}

// console.log(new Greeter(''))

// 方法装饰器
// interface ObjIn {
//   [key: string]: any
// }
// let obj: ObjIn = {}
// Object.defineProperty(obj, 'name', {
//   value: '3ew',
//   configurable: true,
//   writable: true,
//   enumerable: true
// })

// console.log(obj.name)

function enumerable(bool: boolean) {
  return (target: any, propertyName: string, description: PropertyDescriptor) => {
    console.log(target)
    description.enumerable = bool;
  }
}

class ClassF {
  constructor(public age: number) { }

  @enumerable(false) // 是否可枚举
  public getAge() {
    return this.age
  }
}

const classF = new ClassF(18)

// 访问器装饰器
function enumerable1(bool: boolean) {
  return (target: any, propertyName: string, description: PropertyDescriptor) => {
    console.log(target)
    description.enumerable = bool;
  }
}

class ClassG {
  private _name: string
  constructor(public age: number) { }

  @enumerable(false) // get与set都被修饰
  get name() {
    return this._name
  }
  set name(name) {
    this._name = name
  }
}

// 属性装饰器
function printPropertyName(target: any, propertyName: string) {
  console.log(propertyName)
}

class ClassH {
  @printPropertyName
  public name: string = '6789'
}

// 参数装饰器
function required(target: any, propertyName: string, index: number) {
  console.log(`修饰的是${propertyName}第${index + 1}个参数`)
}

class ClassJ {
  public name: string
  public getInfo(prefix: string, @required infoIn: string) {
    return prefix + infoIn
  }

}

interface ClassJ {
  [key: string]: string | number | Function
}

const classj = new ClassJ()
console.log(classj.getInfo('ew', '323'))