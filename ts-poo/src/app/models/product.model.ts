import { BaseModel, Category } from "@models/index";

export interface Product extends BaseModel{
  title:       string;
  price:       number;
  description: string;
  images:      string[];
  category:    Category;
}
