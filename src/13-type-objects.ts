(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  // alias de un objeto
  type Product = {
    title: string,
    price: number,
    createAt: Date,
    stock: number,
    size?: Sizes
  }

  // uso del alias
  // función
  const crearProducto = (producto: Product):  Product=> {
    return producto
  }

  // variable
  let unProducto: Product = {
    title: 'Sombrero',
    price: 30,
    createAt: new Date('20230506'),
    stock: 10
  }

  // array
  let productos: Product[] = []
  productos.push(crearProducto(unProducto))

  console.log(productos)
})()
