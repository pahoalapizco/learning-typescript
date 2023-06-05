(() => {
  //#region parametros tipados
  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales
  const createProductJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
  const producto1 = createProductJson(
    "titulo",
    new Date('02/06/2023'),
    30,
    'S'
    // 'XS' // Error porque el valor XS no existe en literal type "Sizes"
  )

  console.log("producto1:", producto1)
  // La función retorna un objeto JSON, por lo tanto podemos acceder a sus propiedades,
  console.log("producto1:", producto1.size)
  console.log("producto1:", producto1.createdAt)


  // TS nos marcara un error porque no le mandamos el último parametro.
  /*  const producto2 = createProductJson(
     "titulo",
     new Date('02/06/2023'),
     30,
   ) */


  // Parametros opcionales

  const createProductJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto2V2 = createProductJsonV2(
    "titulo",
    new Date('02/06/2024'),
    30,
  )
  console.log("producto2V2:", producto2V2)
  // La función retorna un objeto JSON, por lo tanto podemos acceder a sus propiedades,
  console.log("producto2V2:", producto2V2.createdAt)
  // Como no lo enviamos obtendremos un undefined
  console.log("producto2V2:", producto2V2.size)

  //#endregion

  //#region Retorno de funciones

  // tipo de retorno inferido
  const saludar = (nombre: string, apellido: string, edad?: number) => {
    let saludo = `Hola me llamo ${nombre} ${apellido}`
    saludo += edad ? `, tengo ${edad} años.` : '.'

    return saludo
  }

  const unSaludo = saludar('Paho', 'Alapizco') // type: string
  console.log("unSaludo:", unSaludo)

  // tipo de retorno explicito
  const saludarV2 = (nombre: string, apellido: string, edad?: number): string => {
    let saludo = `Hola me llamo ${nombre} ${apellido}`
    saludo += edad ? `, tengo ${edad} años.` : '.'

    return saludo
  }

  const unSaludoV2 = saludarV2('Paho', 'Alapizco', 31) // type: string
  console.log("unSaludoV2:", unSaludoV2)


  // tipo void, sin retorno

  const saludandoAndo = (nombre: string, apellido: string, edad?: number): void => {
    const unSaludox = saludarV2(nombre, apellido, edad) // type: string
    console.log("unSaludo sin retorno:", unSaludox)
  }

  saludandoAndo('Paho', 'Alapizco', 31)

  //#endregion

})()
