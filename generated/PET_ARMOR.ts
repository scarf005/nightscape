type PetArmor = {
  abstract?: Abstract
  type: Type
  name: Name
  symbol?: string
  min_pet_vol?: string
  max_pet_vol?: string
  pet_bodytype?: string
  flags?: string[]
  id?: string
  "copy-from"?: Abstract
  color?: Color
  description?: string
  price?: number
  price_postapoc?: number
  material?: string[]
  weight?: string
  volume?: Volume
  material_thickness?: number
  environmental_protection?: number
  snippet_category?: SnippetCategory[]
  storage?: string
  "//"?: string
}

type Abstract = "medium_quadruped_armor" | "small_quadruped_armor"

type Color = "yellow" | "green" | "light_cyan"

type Name = {
  str: string
  str_pl?: string
}

type SnippetCategory = {
  id: string
  text: string
}

type Type = "PET_ARMOR"

type Volume = "150 L" | "4500 ml"
