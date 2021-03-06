function funA(arg1: number, arg2: number): number;
function funA(arg1: string, srg2: string): string;

function funA(arg1: any, arg2: any) {
  return arg1 + arg2
}

funA(1, 2)
funA('1', '2')

enum StatusNum {
  On,
  Off
}

enum AnimalEnum {
  Dog,
  Hot
}

let ss1 = StatusNum.On
// ss1 = AnimalEnum.Dog