enum Message {
  Error = 'messgae,123',
  Success = 'success',

  Fail = Error
}

// 以下三种枚举值可以作为类型使用
// enum A1{A}
// enum A2{A='22'}
// enum A3{A=2,B=3}

enum Message1 {
  A = 2
}

interface AA {
  type: Message1.A
}