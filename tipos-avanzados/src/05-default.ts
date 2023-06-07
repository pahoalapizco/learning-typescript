(() => {
  const createPorduct = (
    id: number,
    name: string,
    stock: number = 10,
    isNew: boolean = true
  ) => {
    return {
      id,
      name,
      stock,
      isNew
    }
  }

  const prod1 = createPorduct(1, 'hat')
  const prod2 = createPorduct(2, 'hat', 0, false)
  const prod3 = createPorduct(3, 'hat', 25)

  console.log("🚀 prod1:", prod1)
  console.log("🚀 prod2:", prod2)
  console.log("🚀 prod3:", prod3)
})()
