import { faker } from '@faker-js/faker'
import { addProduct, products, updateProduct, deleteProduct } from "./Products/product.services"
import { Product } from './Products/product.model'

for (let i = 0; i < 20; i++) {
  addProduct({
    id: i === 3 ? 'hola' : faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    tags: [faker.string.alphanumeric()],
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    isNew: faker.datatype.boolean(),
    stock: faker.number.int({ min: 10, max: 100 }),
    createdAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department()
    }
  })
}


// products.forEach(item => {
//   item.id = 20 // ❌ error, no podemos sobreescribir su valor porque lo declaramos como readonly en BaseModel
// })


