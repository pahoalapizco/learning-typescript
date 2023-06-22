import {
  IsAlpha,
  IsUrl,
  IsEnum,
  Length,
  IsEmpty
} from "class-validator"

// Moodels
import { AccessType, Category } from "../models/category.model"
// import { AccessType, Category } from "@models/index"

// Interface para crear una categoria, no son necesarios el id, createAt ni updatedAt
export interface ICreateCategoryDTO extends Omit<Category, "id" | "createdAt" | "updatedAt"> {}

// Implementamos decoradores en la clase `CreateCategoryDTO` para cuidar la integridad de los datos
export class CreateCategoryDTO implements ICreateCategoryDTO {
  // Con "!"  le decimos que la propiedad se inicializará despues
  @IsAlpha()
  @Length(4, 140)
  @IsEmpty()
  name!: string

  @IsUrl()
  @IsEmpty()
  image!: string

  @IsEnum(AccessType)
  access?: AccessType | undefined
}
