(() => {
  const saludar = (data: { nombre: string, apellido: string, edad?: number }): void => {
    let saludo = `Hola me llamo ${data.nombre} ${data.apellido}`
    saludo += data.edad ? `, tengo ${data.edad} años.` : '.'

    console.log(saludo)
  }
  // Sin mandar la edad
  saludar({
    nombre: 'Gael',
    apellido: 'Camacho'
  })

  // Mandando la edad
  saludar({
    nombre: 'David',
    apellido: 'Lopez',
    edad: 33
  })
})()
