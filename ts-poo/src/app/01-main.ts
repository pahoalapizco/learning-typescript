import axios from "axios"
// Interfaces
import { Product } from "./models/product.model"
import { Category } from "./models/category.model"

(async () => {
  type TQuery = {
    limit?: number,
    offset?: number
  }

  const getProducts = async (query?: TQuery): Promise<Product[]> => {
    const withQuery = !query ? "" : `?limit=${query.limit}&offset=${query.offset}`

    const { data } =
      await axios.get(`https://api.escuelajs.co/api/v1/products${withQuery}`)
    return data
  }

  const products = await getProducts({ limit: 1, offset: 1})
  // console.log("🚀 Total:", products.length)
  console.log("🚀 products:", products)


  const getCategories = async (query?: TQuery) => {
    const withQuery = !query ? "" : `?limit=${query.limit}`


    const { data } = await axios.get<Category[]>(`https://api.escuelajs.co/api/v1/categories${withQuery}`)

    return data
  }

  const categories = await getCategories({ limit: 10 })
  // console.log("🚀 Total:", products.length)
  console.log("🚀 categories:", categories)
})()
