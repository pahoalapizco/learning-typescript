import { validateOrReject } from "class-validator"
// import { CreateCategoryDTO } from "@dtos/index"
import { CreateCategoryDTO } from "./dtos/category.dto"


(async () => {
  try {
    const createCategory = new CreateCategoryDTO()
    createCategory.name = "Pet"
    await validateOrReject(createCategory)
  } catch (error) {
    console.log("❌ error:", error)
  }
})()
