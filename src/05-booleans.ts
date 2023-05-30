( () => {
  let isEnable: boolean = true
  let isNew = false // Toma el tipo boolean gracias a la inferencia.

  isNew = 50 // error
  isEnable = "false" // error

})()
