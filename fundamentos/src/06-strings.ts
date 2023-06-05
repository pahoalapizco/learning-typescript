(() => {
  // Simples:
  let comillaSimple = 'Esto es un string'
  let comillaSimpleOk = 'Esto es un string que usa "comillas dobles"'
  // let comillaSimpleErr = 'Esto es un incorrecto con comillas 'simples' dentro de comillas simples' // error

  // Dobles
  let comillaDoble = "Esto es un string"
  let comillaDobleOk = "Esto es un string que usa 'comillas simples'"
  // let comillaDobleErr = "Esto es un incorrecto con comillas "dobles" dentro de comillas dobles"

  // Backticks
  let backtick = `Esto es un string`
  let backtickComSimple = `Esto es un string que usa 'comillas simples'`
  let backtickComDoble = `Esto es un stringq ue usa "comillas dobles"`

  let texto = `
    Este es
    un texto
    con 3 líneas
  `
  console.log(texto)

  let nombre: string = "Paho"
  let edad: number = 31
  let concatenar = `Hola mi nombres es ${nombre} y tengo ${edad} años.`

  console.log(concatenar)
})()
