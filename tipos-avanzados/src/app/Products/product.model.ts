import { Category } from "@categories/category.model";

export type Size = "S" | "M" | "L" | "XL"

// definición
export interface Product {
  name: string,
  price: number,
  createdAt: Date,
  updatedAt: Date,
  size: Size,
  category: Category,
  stock?: number,
}
