export class MyMath {
  static readonly PI: number = 3.1416

  static max(...numbers: number[]): number {
    return numbers.reduce((max, item) => max >= item  ? max : item, 0)
  }
}

// implementación:
console.log(MyMath.PI) // 3.1416
// MyMath.PI = 0
console.log(MyMath.max(1,2,3,45,82,98, 589)) //  589

// const math = new MyMath()
// // ❌ no es necesario crear la instancia por que la propiedad fue declarada como static
// math.PI
// math.max(1,2,3,45,82,98, 589)
