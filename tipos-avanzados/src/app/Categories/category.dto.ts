import { Category } from "@categories/category.model"

export interface CreateCategoryDTO extends Omit<Category,  'id' | 'createdAt' | 'updatedAt'> {

}

export interface GetCategoryDTO extends Pick<Category, 'id' > {

}
