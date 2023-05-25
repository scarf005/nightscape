type ToolArmor = {
  id: string
  type: TOOLARMORType
  category?: Category
  symbol?: Symbol
  color?: string
  name: NameUnion
  description?: DescriptionUnion
  flags?: string[]
  price?: number
  price_postapoc?: number
  material?: Material
  weight?: string
  volume?: string
  bashing?: number
  charges_per_use?: number
  ammo?: string
  use_action?: UseActionUnion
  covers?: Cover[]
  techniques?: string[]
  warmth?: number
  encumbrance?: number
  coverage?: number
  material_thickness?: number
  magazines?: Array<MagazineElement[]>
  magazine_well?: MagazineWell
  "copy-from"?: string
  repairs_like?: string
  power_draw?: number
  revert_to?: string
  to_hit?: number
  initial_charges?: number
  max_charges?: number
  environmental_protection?: number
  looks_like?: string
  storage?: string
  turns_per_charge?: number
  qualities?: Array<QualityElement[]>
  environmental_protection_with_filter?: number
  "//"?: string
  solar_efficiency?: number
  extend?: Extend
  weight_capacity_bonus?: string
}

type Category = "clothing" | "tools" | "other"

type Cover =
  | "head"
  | "hand_either"
  | "torso"
  | "arms"
  | "legs"
  | "feet"
  | "hands"
  | "mouth"
  | "eyes"

type DescriptionUnion = DescriptionClass | string

type DescriptionClass = {
  "//~": string
  str: string
}

type Extend = {
  flags: string[]
}

type MagazineWell = "250 ml" | "500 ml"

type MagazineElement = string[] | MagazineEnum

type MagazineEnum = "battery"

type Material = string[] | string

type NameUnion = NameClass | string

type NameClass = {
  str?: string
  str_pl?: string
  str_sp?: string
}

type QualityElement = QualityEnum | number

type QualityEnum = "GLARE" | "LOCKPICK"

type Symbol = "[" | ";" | "," | "-" | "&" | "{" | "y" | "Q"

type TOOLARMORType = "TOOL_ARMOR"

type UseActionUnion = string[] | UseActionClass | string

type UseActionClass = {
  type: UseActionType
  msg?: string
  target?: string
  active?: boolean
  need_charges?: number
  need_charges_msg?: string
  menu_text?: string
  moves?: number
  moves_slow?: number
  need_sunlight?: boolean
  pick_quality?: number
  no_charges_message?: string
  use_message?: string
  "//"?: string
  noise_message?: string
  noise_id?: string
  noise_variant?: string
  noise?: number
  speed_penalty?: number
  volume?: number
  fun?: number
  fun_bonus?: number
  description_frequency?: number
  player_descriptions?: string[]
  npc_descriptions?: string[]
  need_worn?: boolean
  turn_off?: boolean
  flag?: string
  set_charges?: number
  set_charges_msg?: string
  dependencies?: string
}

type UseActionType =
  | "transform"
  | "firestarter"
  | "picklock"
  | "manualnoise"
  | "musical_instrument"
  | "set_transform"
  | "set_transformed"
