import { Product } from "@products/product.model"

export const products: Product[] = []

export const addProduct = (data: Product): void =>{
  products.push(data)
}

export const getProduct = (id: string | number): Product | undefined => {
  const idx = products.findIndex.call(products, item => item.id === id)
  if (idx >= 0) return products[idx]
  else return undefined
}

export const updateProduct = (id: string | number, product: Product): Product  | undefined=> {
  const idx: number = products.findIndex.call(products, item => item.id === id)
  let response: Product | undefined
  if (idx >= 0) {
    products[idx] = {
      ...products[idx],
      ...product
    };
    response = products[idx]
  } else {
    response = undefined
  }

  return response
}

export const deleteProduct = (id: string | number): number | undefined => {
  const idx: number = products.findIndex.call(products, item => item.id === id)
  let response: number | undefined
  if (idx >= 0) {
    products.splice(idx, 1)
    response = idx
  } else {
    response = undefined
  }

  return response
}
