import { Product } from "@products/product.model"
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


