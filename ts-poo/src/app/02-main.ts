// External libreries
import { faker } from '@faker-js/faker'
/* Services */
import { ProductMemoryService } from "./services/index"

const productMemService = new ProductMemoryService()

for (let i = 0; i < 10; i++) {
  productMemService.add({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    images: [faker.image.url()],
    price: parseInt(faker.commerce.price(), 10),
    categoryId: faker.number.int(350),
  })
}

const products = productMemService.getAll()
console.log("🚀 products:", products)
const idProd = products[0].id
const updated = productMemService.update(idProd, {
  title: "This is a custom title."
})
console.log("🚀 updated:", updated)

