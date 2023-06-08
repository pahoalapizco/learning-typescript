import { addProduct, products } from "./Products/product.services"


addProduct({
  id: 12,
  name: 'hat',
  price: 30,
  size: "M",
  category: {
    id: 1,
    name: "accesories",
  }
})
console.log("🚀 products:", products)

products.forEach(item => {
  item.id = 20 // ❌ error, no podemos sobreescribir su valor porque lo declaramos como readonly en BaseModel
})


