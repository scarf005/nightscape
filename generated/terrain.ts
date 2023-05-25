type Terrain = {
  type: Type
  id: string
  alias?: Alias
  name?: string
  description?: string
  symbol: string
  color: Alias
  move_cost?: number
  coverage?: number
  roof?: Roof
  flags?: string[]
  bash?: Bash
  connects_to?: ConnectsTo
  looks_like?: string
  deconstruct?: Deconstruct
  "//"?: string
  open?: string
  close?: string
  examine_action?: string
  light_emitted?: number
  heat_radiation?: number
  trap?: string
  max_volume?: string
  pry?: Pry
  "copy-from"?: string
  message?: string
  delete?: Delete
  extend?: Delete
  curtain_transform?: string
  transforms_into?: string
  harvest_by_season?: HarvestBySeason[]
}

type Alias = string[] | string

type Bash = {
  str_min?: number
  str_max?: number
  sound?: string
  sound_fail?: SoundFail
  ter_set?: string
  items?: Items
  ranged?: Ranged
  sound_vol?: number
  sound_fail_vol?: number
  ter_set_bashed_from_above?: Roof
  str_min_blocked?: number
  str_max_blocked?: number
  explosive?: number
  "//"?: string
  str_min_supported?: number
  bash_below?: boolean
}

type Items = BreakItemElement[] | string

type BreakItemElement = {
  item: string
  count?: Charges
  charges?: number[]
  prob?: number
}

type Charges = number[] | number

type Ranged = {
  reduction: number[]
  block_unaimed_chance?: string
  reduction_laser?: number[]
  destroy_threshold?: number
  flammable?: boolean
}

type SoundFail =
  | "whump!"
  | "bash!"
  | "clang!"
  | "thump"
  | "whack!"
  | "slap!"
  | "wham."
  | "wham!"
  | "thump!"
  | "whump."
  | "smash!"
  | "ker-rash!"
  | "plunk."
  | "thunk."
  | "ting."
  | "brush."
  | "splosh!"
  | "clang."
  | "poof!"
  | "whish."

type Roof =
  | "t_flat_roof"
  | "t_thatch_roof"
  | "t_dirt"
  | "t_floor_wax"
  | "t_rock_floor_no_roof"
  | "t_rock_roof"
  | "t_resin_roof"
  | "t_metal_floor_no_roof"
  | "t_shingle_flat_roof"
  | "t_roof_paper"

type ConnectsTo = "WALL" | "CHAINFENCE" | "WOODFENCE" | "RAILING" | "WATER" | "PAVEMENT" | "RAIL"

type Deconstruct = {
  ter_set: string
  items: DeconstructItem[]
  deconstruct_above?: boolean
}

type DeconstructItem = {
  item: string
  count?: Charges
  charges?: Charges
  prob?: number
}

type Delete = {
  flags: string[]
}

type HarvestBySeason = {
  seasons: Season[]
  entries: Entry[]
}

type Entry = {
  drop: string
  base_num: number[]
  scale_num?: number[]
}

type Season = "autumn" | "spring" | "summer" | "winter"

type Pry = {
  success_message: string
  fail_message: string
  pry_quality: number
  difficulty: number
  new_ter_type: string
  break_message?: string
  pry_bonus_mult?: number
  noise?: number
  break_noise?: number
  breakable?: boolean
  break_ter_type?: string
  break_items?: BreakItemElement[]
  alarm?: boolean
  sound?: string
  break_sound?: string
}

type Type = "terrain"
