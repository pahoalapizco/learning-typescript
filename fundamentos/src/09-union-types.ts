(() => {
  let dynamicUT: string | number

  dynamicUT = "123"
  console.log("dynamicUT:", typeof dynamicUT, dynamicUT)
  dynamicUT = 456
  console.log("dynamicUT:", typeof dynamicUT, dynamicUT)


  // Con una función:

  const validandoTipos = (element: string | number) => {
    if(typeof element === 'string'){
      console.log("element: ", element.charAt(0))
    }
    else {
      console.log("element: ", element.toFixed(2))
    }
  }

  validandoTipos("Hola")
  validandoTipos(3.1416)
})()
