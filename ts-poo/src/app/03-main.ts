// External libreries
import { faker } from '@faker-js/faker'
import { ProductHttpService } from "./services";

( async() => {
  const productHttp = new ProductHttpService()

  // await productHttp.add({
  //   title: faker.commerce.productName(),
  //   description: faker.commerce.productDescription(),
  //   images: [faker.image.url()],
  //   price: parseInt(faker.commerce.price(), 10),
  //   categoryId: 12,
  // })

  const products = await productHttp.getAll()
  console.log("🚀 products:", products)

  // const product = await productHttp.findById(0)
  // console.log("🚀 product:", product)

  // const product = await productHttp.update(324, {
  //   title: "Small Red Hat"
  // })
  // console.log("🚀 product:", product)
})()
