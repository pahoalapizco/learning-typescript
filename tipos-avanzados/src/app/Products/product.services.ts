import { faker } from '@faker-js/faker'
import { Product } from "@products/product.model"
import { CreateProductDTO, FindProductDTO, UpdateProductDTO } from "@products/product.dto"

export const products: Product[] = []

export const addProduct = (data: CreateProductDTO): void =>{
  products.push({
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  })
}

export const getProduct = (id: Product['id'] | number): Product | undefined => {
  const idx = products.findIndex.call(products, item => item.id === id)
  if (idx >= 0) return products[idx]
  else return undefined
}

export const findProducts = (data: FindProductDTO): Product[] => {
  let response: Product[] = []
  Object.keys(data).forEach((key: string) => {
    const filtered: Product[] = products.filter(prod => prod[key as keyof typeof prod] === data[key as keyof typeof data])
    response.push(...filtered)
  })

  return response
}

export const getProductsByName = (name: Product['name']): Product[] => {
  const prod: Product[] = products.filter(item => item.name === name)
  return prod
}

export const updateProduct = (id: Product['id'], changed: UpdateProductDTO): Product  | undefined=> {
  const idx: number = products.findIndex(item => item.id === id)
  let response: Product | undefined
  if (idx >= 0) {
    products[idx] = {
      ...products[idx],
      ...changed
    };
    response = products[idx]
  } else {
    response = undefined
  }

  return response
}

export const deleteProduct = (id: string | number): number | undefined => {
  const idx: number = products.findIndex(item => item.id === id)
  let response: number | undefined
  if (idx >= 0) {
    products.splice(idx, 1)
    response = idx
  } else {
    response = undefined
  }

  return response
}
