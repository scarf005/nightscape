type Magazine = {
  id?: string
  type: Type
  category?: Category
  name: Name
  description?: string
  ascii_picture?: string
  weight?: string
  volume?: string
  price?: number
  price_postapoc?: number
  material?: MaterialUnion
  symbol?: Symbol
  color?: Color
  ammo_type?: AmmoType
  capacity?: number
  looks_like?: LooksLike
  flags?: string[]
  count?: number
  "//"?: string
  "copy-from"?: string
  bashing?: number
  to_hit?: number
  reliability?: number
  abstract?: string
  rigid?: boolean
  armor_data?: ArmorData
  reload_time?: number
  default_ammo?: string
  linkage?: string
}

type AmmoType = string[] | string

type ArmorData = {
  covers: string[]
  coverage: number
  material_thickness?: number
  encumbrance?: number
}

type Category = "battery" | "veh_parts"

type Color =
  | "yellow"
  | "green"
  | "red"
  | "light_cyan"
  | "white"
  | "light_gray"
  | "dark_gray"
  | "brown"

type LooksLike =
  | "battery"
  | "cargo_rack"
  | "shotbelt_20"
  | "mp5mag"
  | "glock17_17"
  | "stanag30"
  | "pressurized_tank"
  | "38_speedloader"
  | "belt40mm"

type MaterialUnion = MaterialElement[] | PurpleMaterial

type MaterialElement = "iron" | "plastic" | "superalloy" | "steel"

type PurpleMaterial = "steel" | "plastic" | "cotton" | "aluminum"

type Name = {
  str: string
  str_pl?: string
}

type Symbol = "=" | ":" | "]" | "#" | "/"

type Type = "MAGAZINE"
