import { Product, Category  } from "@models/index"

export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: Category['id']
}

export interface UpdateProductDTO extends Partial<Product>  { }

export interface FindProductDTO extends Readonly<Partial <Product> > { }
