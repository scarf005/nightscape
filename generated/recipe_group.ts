type RecipeGroup = {
  type: Type
  id: string
  building_type: string
  recipes: Recipe[]
}

type Recipe = {
  id: string
  description: string
  om_terrains?: string[]
}

type Type = "recipe_group"
