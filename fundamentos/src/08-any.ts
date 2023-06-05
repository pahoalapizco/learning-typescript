(() => {
  let dynamic: any
  dynamic = 0 // type: numeric
  dynamic = '' // type: string
  dynamic =  null // type: null
  dynamic = {} // type: object
  dynamic = [] // type: array


  dynamic = "Hola" // type: any
  const str = (dynamic as string) // type: string
  str.toUpperCase() // Función del tipo de dato string
  console.log("str:", str)

  dynamic = 123 // type: any
  const num = (<number>dynamic) // type: number
  num.toFixed() // Función de un tipo numérico
  console.log("num:", num)
})()
