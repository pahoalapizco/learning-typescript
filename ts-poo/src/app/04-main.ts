import { Product, Category } from "@models/index"
import { BaseHttpService } from "./services/index"




(async () => {
  // Instancia de clase para productos
  const productService = new BaseHttpService<Product>("https://api.escuelajs.co/api/v1/products")
  const products = await productService.getAll()
  console.log("🚀 products:", products[0])

  // Instancia de clase para categorias
  const categorieService = new BaseHttpService<Category>("https://api.escuelajs.co/api/v1/categories")
  const categories = await categorieService.getAll()
  console.log("🚀 categories:", categories[0])
})()
