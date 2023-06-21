import {
  CreateProductDTO,
  UpdateProductDTO,
  FindProductDTO
} from "@dtos/index"

import { Product } from "@models/index"

export interface ProductService {
  add(data: CreateProductDTO): void | Promise<void>
  update(id: Product['id'], changes: UpdateProductDTO): Product | undefined  | Promise<Product | undefined>
  getAll(): Product[] | Promise<Product[]>
  findById(id: Product['id']): Product | undefined | Promise<Product | undefined>
}
