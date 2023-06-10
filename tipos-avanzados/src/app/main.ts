import { faker } from '@faker-js/faker'
import { addProduct, products, updateProduct } from "./Products/product.services"


for (let i = 0; i < 20; i++) {
  addProduct({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    tags: [faker.string.alphanumeric()],
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    isNew: faker.datatype.boolean(),
    stock: faker.number.int({ min: 10, max: 100 }),
    categoryId: faker.string.uuid(),
  })
}


// products.forEach(item => {
//   item.id = 20 // ❌ error, no podemos sobreescribir su valor porque lo declaramos como readonly en BaseModel
// })


console.log("🚀 products:", products[0])
const productId = products[0].id
const changes = updateProduct(productId, {
  name: 'Red Hat',
  price: 500
})

console.log("🚀 products:", products[0])
console.log("🚀 changes:", changes)
