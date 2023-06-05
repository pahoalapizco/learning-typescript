(() => {
  let edad = 31 // number
  edad = edad + "1" // "311" --> Stirng: error

  let anioNacimiento: number
  console.log("Año de nacimiento:", anioNacimiento)

  let precio: number = parseInt("123")

  let numeroString: string = "100"
  let nuevoNumero: number;
  nuevoNumero = parseInt(numeroString)

  nuevoNumero = parseInt("hola") // Error
  console.log(nuevoNumero)


  let primerBinario = 0b1010
  console.log("primerBinario:", primerBinario)
  let segundobinario = 0b1210 // error, 2 es inválido

  //Hexadecimales: se definen colocando "0x" al inicio del valor
  let primerHexa = 0xfff
  console.log("primerHexa:", primerHexa)
  let segundoHexa = 0xffz // error, "z" es inválido
})()
