(() => {
  let precios = [1,2,3,4.5] // number[]
  precios.push(5)
  console.log("precios", precios)

  precios.push("hola") // error

  let mensaje = ["Buenos", "días"] // string[]
  mensaje.map(item => item * 2) // error

  let dosTipos: (number | string)[] = ["hola",2,4,6,"mundo"];
  console.log("dosTipos:", dosTipos)

  let otrosPrecios: (boolean | number)[];
  otrosPrecios = [True]

  otrosPrecios.push("Hola") // error
})()
