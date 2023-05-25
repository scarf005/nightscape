type Gunmod = {
  id: string
  type: Type
  name: Name
  description: string
  weight?: string
  volume?: string
  integral_volume?: IntegralVolumeUnion
  integral_weight?: IntegralWeightUnion
  price?: number
  price_postapoc?: number
  material?: MaterialUnion
  symbol?: Symbol
  color?: Color
  location?: string
  mod_targets?: Skill[]
  install_time?: string
  dispersion_modifier?: number
  mode_modifier?: Array<ModeModifier[]>
  min_skills?: Array<MinSkillElement[]>
  flags?: string[]
  range_modifier?: number
  damage_modifier?: DamageModifier
  ammo_effects?: string[]
  ups_charges_multiplier?: number
  handling_modifier?: number
  loudness_modifier?: number
  "copy-from"?: string
  to_hit?: number
  bashing?: number
  consume_chance?: number
  consume_divisor?: number
  proportional?: Proportional
  "//"?: string
  extend?: Delete
  gun_data?: GunData
  cutting?: number
  qualities?: Array<AddMod[]>
  sight_dispersion?: number
  aim_speed?: number
  magazine_well?: IntegralVolumeUnion
  magazines?: Array<AmmoModifier[]>
  add_mod?: Array<AddMod[]>
  weight_multiplier?: number
  ammo_modifier?: AmmoModifier
  magazine_adaptor?: Array<AmmoModifier[]>
  delete?: Delete
  acceptable_ammo?: string[]
}

type AddMod = number | string

type AmmoModifier = string[] | string

type Color = "dark_gray" | "red" | "light_gray" | "cyan" | "brown" | "light_red" | "green" | "blue"

type DamageModifier = {
  damage_type: DamageType
  amount: number
}

type DamageType = "heat" | "bullet" | "stab"

type Delete = {
  flags: string[]
}

type GunData = {
  ammo?: string
  skill: Skill
  range?: number
  dispersion?: number
  durability: number
  clip_size?: number
  ranged_damage?: DamageModifier
  reload?: number
  ammo_effects?: string[]
}

type Skill =
  | "shotgun"
  | "launcher"
  | "rifle"
  | "smg"
  | "pistol"
  | "ar15"
  | "crossbow"
  | "archery"
  | "m4a1"
  | "m16a4"
  | "h&k416a5"
  | "m27iar"
  | "rugerlcp"
  | "kp32"
  | "kp3at"
  | "kpf9"
  | "cop_38"
  | "moss_brownie"

type IntegralVolumeUnion = IntegralVolumeEnum | number

type IntegralVolumeEnum = "0 ml" | "500 ml" | "149 ml" | "250 ml"

type IntegralWeightUnion = IntegralWeightEnum | number

type IntegralWeightEnum = "0 g"

type MaterialUnion = MaterialElement[] | MaterialElement

type MaterialElement =
  | "steel"
  | "superalloy"
  | "plastic"
  | "cotton"
  | "ceramic"
  | "wood"
  | "aluminum"
  | "glass"

type MinSkillElement = MinSkillEnum | number

type MinSkillEnum = "weapon" | "mechanics" | "gun" | "launcher"

type ModeModifier = string[] | number | string

type Name = {
  str?: string
  str_pl?: string
  str_sp?: string
}

type Proportional = {
  loudness_modifier?: number
  sight_dispersion?: number
}

type Symbol = ":"

type Type = "GUNMOD"
