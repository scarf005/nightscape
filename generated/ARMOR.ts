type Armor = {
  id?: string
  type: ARMORType
  name: Name
  description: string
  weight?: string
  volume?: Price
  price?: Price
  price_postapoc?: Price
  material?: string[]
  symbol?: Symbol
  looks_like?: string
  color?: Color
  covers?: Cover[]
  coverage?: number
  encumbrance?: number
  warmth?: number
  material_thickness?: number
  flags?: string[]
  "copy-from"?: string
  "//"?: string
  environmental_protection?: number
  to_hit?: number
  use_action?: ARMORUseAction
  repairs_like?: string
  qualities?: Array<Price[]>
  storage?: string
  delete?: Delete
  bashing?: number
  techniques?: Technique[]
  proportional?: Proportional
  relative?: Relative
  valid_mods?: ValidMod[]
  cutting?: number
  rigid?: boolean
  abstract?: string
  extend?: Delete
  snippet_category?: SnippetCategory[]
  max_encumbrance?: number
  container_data?: ContainerData
  properties?: Array<string[]>
  category?: string
}

type Color =
  | "white"
  | "dark_gray"
  | "light_gray"
  | "green"
  | "brown"
  | "blue"
  | "light_red"
  | "light_blue"
  | "red"
  | "yellow"
  | "cyan"
  | "light_green"
  | "pink"
  | "light_cyan"
  | "black"

type ContainerData = {
  contains: string
  seals?: boolean
  watertight: boolean
}

type Cover =
  | "arm_either"
  | "eyes"
  | "torso"
  | "arms"
  | "leg_either"
  | "head"
  | "mouth"
  | "legs"
  | "feet"
  | "hand_either"
  | "hands"
  | "hand_r"
  | "hand_l"
  | "foot_either"

type Delete = {
  flags: string[]
}

type Name = {
  str?: string
  str_pl?: string
  str_sp?: string
}

type Price = number | string

type Proportional = {
  weight?: number
  volume?: number
  price?: number
  encumbrance?: number
  warmth?: number
}

type Relative = {
  material_thickness: number
  bashing?: number
}

type SnippetCategory = {
  id: string
  text: string
}

type Symbol =
  | "["
  | ";"
  | "|"
  | "u"
  | ","
  | "-"
  | "^"
  | "s"
  | "."
  | "("
  | "]"
  | "O"
  | "H"
  | ")"
  | "&"

type Technique = "WBLOCK_1" | "WBLOCK_2" | "WBLOCK_3"

type ARMORType = "ARMOR"

type ARMORUseAction = UseActionElement[] | FluffyUseAction | string

type UseActionElement = PurpleUseAction | string

type PurpleUseAction = {
  type: UseActionType
  holster_prompt: string
  holster_msg: string
  draw_cost: number
  min_volume: string
  max_volume: string
  flags: string[]
}

type UseActionType = "unpack" | "transform" | "holster" | "picklock" | "firestarter" | "bandolier"

type FluffyUseAction = {
  type: UseActionType
  group?: string
  filthy_volume_threshold?: string
  items_fit?: boolean
  msg?: string
  target?: string
  menu_text?: string
  need_worn?: boolean
  max_volume?: string
  min_volume?: string
  draw_cost?: number
  skills?: string[]
  holster_prompt?: string
  holster_msg?: string
  multi?: number
  flags?: string[]
  pick_quality?: number
  max_weight?: Price
  moves?: number
  moves_slow?: number
  need_sunlight?: boolean
  capacity?: number
  ammo?: string[]
}

type ValidMod = "steel_padded" | "alloy_padded"
