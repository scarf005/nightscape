type RecipeCategory = {
  type: Type
  id: string
  "//"?: string
  recipe_subcategories?: string[]
  "//recipe_subcategories"?: string[]
  is_hidden?: boolean
}

type Type = "recipe_category"
