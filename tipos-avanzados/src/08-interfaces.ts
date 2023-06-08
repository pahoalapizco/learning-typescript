(() => {
type Size = "S" | "M" | "L" | "XL"

// definición
interface Product {
  name: string,
  price: number,
  createAt: Date,
  size: Size,
  stock?: number,
}

// objeto
const product: Product = {
  name: 'hat',
  price: 30,
  createAt: new Date(),
  size: "M"
}

// función
const addProducts = (data: Product): Product[] => {
  // array
  const products: Product[] = []
  products.push(data)
  return products
}

console.log("🚀 products:", addProducts(product))

})()
