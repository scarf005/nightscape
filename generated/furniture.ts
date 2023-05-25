type Furniture = {
  type: Type
  id?: string
  name: string
  description: string
  looks_like?: string
  symbol: string
  color?: string
  move_cost_mod?: number
  coverage?: number
  required_str?: number
  flags?: string[]
  emissions?: string[]
  "//"?: string
  bash?: Bash
  bgcolor?: Bgcolor
  deconstruct?: Deconstruct
  max_volume?: string
  abstract?: string
  "copy-from"?: string
  examine_action?: string
  transforms_into?: string
  prompt?: string
  message?: string
  active?: ActiveElement[]
  light_emitted?: number
  extend?: Extend
  crafting_pseudo_item?: Bgcolor
  surgery_skill_multiplier?: number
  comfort?: number
  floor_bedding_warmth?: number
  workbench?: Workbench
  open?: string
  close?: string
  keg_capacity?: number
  "//connects_to"?: string
  deployed_item?: string
  bonus_fire_warmth_feet?: number
  plant_data?: PlantData
  harvest_by_season?: HarvestBySeason[]
  pry?: Pry
  alias?: string
}

type ActiveElement = ActiveClass | string

type ActiveClass = {
  min_power?: number
  transform?: Transform
  power?: number
  consume_every?: string
  max_stored?: number
}

type Transform = {
  id: string
  msg: string
}

type Bash = {
  str_min?: number
  str_max?: number
  sound?: string
  sound_fail?: string
  furn_set?: string
  items?: Item[]
  sound_vol?: number
  sound_fail_vol?: number
  tent_centers?: TentCenter[]
  collapse_radius?: number
}

type Item = {
  item?: string
  count?: Charges
  charges?: Charges
  prob?: number
  group?: string
}

type Charges = number[] | number

type TentCenter =
  | "f_groundsheet"
  | "f_fema_groundsheet"
  | "f_skin_groundsheet"
  | "f_center_groundsheet"

type Bgcolor = string[] | string

type Deconstruct = {
  items: Item[]
  furn_set?: string
}

type Extend = {
  flags?: string[]
  crafting_pseudo_item?: string[]
}

type HarvestBySeason = {
  seasons: Season[]
  entries: Entry[]
}

type Entry = {
  drop: string
  base_num?: number[]
}

type Season = "spring" | "summer" | "autumn" | "winter"

type PlantData = {
  transform: string
  base?: string
}

type Pry = {
  success_message: string
  fail_message: string
  pry_quality: number
  noise: number
  difficulty: number
  new_furn_type: string
}

type Type = "furniture"

type Workbench = {
  multiplier: number
  mass: number
  volume: string
}
