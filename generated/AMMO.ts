type Ammo = {
  type: Type
  id?: string
  price?: number
  name: NameUnion
  symbol?: Symbol
  color?: Color
  description?: string
  material?: Material
  volume?: string
  weight?: string
  ammo_type?: string
  damage?: AMMODamage
  range?: number
  stack_size?: number
  count?: number
  effects?: string[]
  bashing?: number
  price_postapoc?: number
  "//"?: string
  dispersion?: number
  recoil?: number
  category?: Category
  phase?: Phase
  container?: string
  looks_like?: string
  flags?: string[]
  "//freezing_point"?: number
  drop_action?: DropAction
  loudness?: number
  dont_recover_one_in?: number
  to_hit?: number
  cutting?: number
  show_stats?: boolean
  "copy-from"?: string
  seed_data?: SeedData
  "//2"?: string
  fuel?: Fuel
  qualities?: Array<Quality[]>
  use_action?: string
  proportional?: Proportional
  extend?: Extend
  delete?: Delete
  abstract?: string
  casing?: string
  shape?: ShapeElement[]
  relative?: Relative
  drop?: string
  explode_in_fire?: boolean
  explosion?: Explosion
}

type Category = "chems" | "spare_parts" | "weapons" | "other" | "drugs" | "fuel"

type Color =
  | "light_green"
  | "red"
  | "cyan"
  | "yellow"
  | "dark_gray"
  | "brown"
  | "pink"
  | "light_cyan"
  | "white"
  | "green"
  | "light_red"
  | "light_gray"
  | "blue"
  | "magenta"

type AMMODamage = {
  damage_type: DamageType
  amount?: number
  armor_penetration?: number
  armor_multiplier?: number
  damage_multiplier?: number
}

type DamageType = "stab" | "bullet" | "acid" | "bash" | "heat"

type Delete = {
  effects: Effect[]
  flags?: Flag[]
  casing?: string
}

type Effect = "NEVER_MISFIRES" | "SHOT" | "EXPLOSIVE_BIG" | "FRAG" | "RECYCLED"

type Flag = "IRREPLACEABLE_CONSUMABLE"

type DropAction = {
  type: string
  emits: string[]
  scale_qty: boolean
}

type Explosion = {
  power: number
  shrapnel: number
}

type Extend = {
  effects: string[]
}

type Fuel = {
  energy: number
  "//"?: string
  explosion_data?: ExplosionData
  pump_terrain?: string
}

type ExplosionData = {
  chance_hot: number
  chance_cold: number
  factor: number
  fiery: boolean
  size_factor: number
}

type Material = string[] | string

type NameUnion = NameClass | string

type NameClass = {
  str?: string
  str_sp?: string
  str_pl?: string
}

type Phase = "liquid" | "solid" | "gas"

type Proportional = {
  weight?: number
  volume?: number
  price?: number
  damage?: ProportionalDamage
  dispersion?: number
  recoil?: number
  loudness?: number
  range?: number
}

type ProportionalDamage = {
  damage_type: DamageType
  amount?: number
  armor_penetration?: number
}

type Quality = number | string

type Relative = {
  damage?: ProportionalDamage
  range?: number
  dispersion?: number
  recoil?: number
  price?: number
}

type SeedData = {
  fruit: string
  "//": string
  plant_name: string
  grow: string
}

type ShapeElement = ShapeClass | string

type ShapeClass = {
  half_angle: number
  length: number
}

type Symbol = "=" | "!" | "*" | "~" | "." | ";" | "H" | "," | "]" | "/" | "%" | "o" | "}" | "+"

type Type = "AMMO"
