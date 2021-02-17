class Point {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y
  }

  getPosition() {
    return `(${this.x},${this.y})`
  }
}

const point = new Point(23, 23)


class Parent {
  name: string
  protected age: number = 13

  constructor(name: string) {
    this.name = name
  }

  protected getAge() {
    return this.age
  }
}

class Child extends Parent {
  constructor(name: string) {
    super(name)
    // console.log(super.getAge)
  }
}

// public private potected

class A {
  constructor(public name: string) {
  }
}

const aa = new A('less')


class Parent1 {
  public static age: string
  name: string
  private static process: string

  constructor(name: string) {
    this.name = name;
  }

  setProcess(process: string) {
    Parent1.process = process
    return Parent1.process
  }
}

// console.log(Parent1.process)

// 抽象类
abstract class AbstractClass {
  abstract name: string
  constructor(age: number) {

  }

  public abstract getAge(): number
}

class Abs extends AbstractClass {
  age: number
  name: string
  constructor(age: number) {
    super(age)
    this.age = age
  }

  getAge() {
    return this.age
  }
}

const abs = new Abs(34)
// console.log(abs)

// 接口实现
class AA {
  protected name: string
}

interface AB extends AA { }

class BB extends AA implements AB {
  name: string
}

// 泛型创建实例

const create = <T>(c: new () => T /*传入的是类*/): T => {
  return new c()
}

console.log(create(AA))