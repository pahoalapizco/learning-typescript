// External libreries
import { faker } from '@faker-js/faker'
// Interfaces
import { Product, ProductService } from "@models/index"
// DTOS
import { CreateProductDTO, UpdateProductDTO, FindProductDTO } from "@dtos/index"

export class ProductMemoryService implements ProductService {
  private products: Product[] = []

  /* Methods */
  add = (data: CreateProductDTO): void =>{
    this.products.push({
      ...data,
      id: faker.number.int(300),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.url(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      }
    })
  }

  update = (id: Product['id'], changed: UpdateProductDTO): Product | undefined => {
    const idx: number = this.products.findIndex(item => item.id === id)
    let response: Product | undefined
    if (idx >= 0) {
      this.products[idx] = {
        ...this.products[idx],
        ...changed
      };
      response = this.products[idx]
    } else {
      response = undefined
    }
    return response
  }

  deleteProduct = (id: Product['id']): number | undefined => {
    const idx: number = this.products.findIndex(item => item.id === id)
    let response: number | undefined
    if (idx >= 0) {
      this.products.splice(idx, 1)
      response = idx
    } else {
      response = undefined
    }

    return response
  }

  /* get data */
  getAll(): Product[] {
    return this.products
  }

  find(data: FindProductDTO): Product[] {
    let response: Product[] = []
    Object.keys(data).forEach((key: string) => {
      const filtered: Product[] = this.products.filter(prod => prod[key as keyof typeof prod] === data[key as keyof typeof data])
      response.push(...filtered)
    })

    return response
  }


  findById(id: Product['id']): Product | undefined {
    const product: Product | undefined = this.products.find(prod => prod.id === id)

    return product
  }


}
