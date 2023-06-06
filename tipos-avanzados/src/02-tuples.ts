(() => {
  // Definición
  // let userData: [string, string, number] = [] // error
  let user: [string, string, number] = ['Paola Alapizco', 'pahoalapizco', 31]

  // Re-Asignación
  // user = [] // error
  // user = ['Pedrito Peres'] // error
  // user = ['Pedrito Peres', 'pepe'] // error
  user = ['Pedrito Peres', 'pepe', 20]
  console.log("🚀 user:", user)

  // Push no funciona
  user.push('Fulanito')// Lo ignora

  const [nombre, ,edad] = user
  console.log("🚀 edad:", edad) // string
  console.log("🚀 nombre:", nombre) // number

})()
