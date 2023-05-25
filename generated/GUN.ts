type Gun = {
  id?: string
  "copy-from"?: string
  type: Type
  name: NameUnion
  description?: string
  weight?: string
  volume?: string
  price?: Price
  material?: MaterialUnion
  color?: Color
  range?: number
  ranged_damage?: RangedDamageUnion
  dispersion?: number
  durability?: number
  loudness?: number
  ups_charges?: number
  reload?: number
  valid_mod_locations?: Array<ValidModLocationElement[]>
  ammo_effects?: string[]
  delete?: Delete
  ammo?: Ammo
  clip_size?: number
  symbol?: string
  price_postapoc?: Price
  "//"?: string
  barrel_length?: string
  bashing?: number
  recoil?: number
  reload_noise_volume?: number
  modes?: Array<Mode[]>
  looks_like?: string
  flags?: string[]
  skill?: string
  to_hit?: number
  extend?: Extend
  weapon_category?: string[]
  techniques?: string[]
  armor_data?: ArmorData
  min_strength?: number
  use_action?: UseAction
  abstract?: string
  faults?: Fault[]
  handling?: number
  reload_noise?: string
  proportional?: Proportional
  blackpowder_tolerance?: number
  ascii_picture?: string
  burst?: number
  magazines?: Array<Ammo[]>
  sight_dispersion?: number
  built_in_mods?: string[]
  relative?: Relative
  default_mods?: string[]
  magazine_well?: MagazineWell
  min_cycle_recoil?: number
  "//2"?: string
}

type Ammo = string[] | string

type ArmorData = {
  covers: Cover[]
  encumbrance: number
  coverage?: number
  material_thickness?: number
}

type Cover = "torso" | "arm_either" | "hand_either"

type Color =
  | "magenta"
  | "brown"
  | "dark_gray"
  | "light_gray"
  | "yellow"
  | "green"
  | "red"
  | "cyan"
  | "light_blue"
  | "blue"
  | "brown_yellow"
  | "light_red"

type Delete = {
  flags?: Ammo
  faults?: Fault
}

type Fault = "fault_gun_blackpowder" | "fault_gun_dirt" | "fault_gun_chamber_spent"

type Extend = {
  flags: Ammo
}

type MagazineWell =
  | "250 ml"
  | "65 ml"
  | "500 ml"
  | "44 ml"
  | "55 ml"
  | "80 ml"
  | "41 ml"
  | "1500 ml"

type MaterialUnion = MaterialElement[] | MaterialElement

type MaterialElement =
  | "steel"
  | "plastic"
  | "aluminum"
  | "wood"
  | "leather"
  | "iron"
  | "bone"
  | "hflesh"
  | "stone"
  | "superalloy"
  | "zinc"
  | "ceramic"
  | "budget_steel"
  | "copper"
  | "hardsteel"

type Mode = string[] | number | string

type NameUnion = NameClass | string

type NameClass = {
  str?: string
  ctxt?: string
  str_pl?: string
  str_sp?: string
}

type Price = number | string

type Proportional = {
  reload?: number
  bashing?: number
  weight?: number
  volume?: number
  price?: number
  dispersion?: number
}

type RangedDamageUnion = RangedDamageElement[] | PurpleRangedDamage

type RangedDamageElement = {
  damage_type: DamageType
  amount: number
  armor_multiplier?: number
}

type DamageType = "stab" | "bullet" | "bash" | "acid" | "electric" | "heat"

type PurpleRangedDamage = {
  damage_type: DamageType
  amount: number
  armor_penetration?: number
}

type Relative = {
  bashing?: number
  weight?: number
  volume?: Price
  price?: number
  handling_modifier?: number
  durability?: number
  range?: number
  ranged_damage?: RelativeRangedDamage
  dispersion?: number
  barrel_length?: number
  reload?: number
}

type RelativeRangedDamage = {
  damage_type: DamageType
  amount: number
}

type Type = "GUN"

type UseAction = {
  menu_text?: string
  type: string
  target?: string
  qualities_needed?: QualitiesNeeded
  msg?: string
  moves?: number
}

type QualitiesNeeded = {
  SCREW_FINE: number
}

type ValidModLocationElement = ValidModLocationEnum | number

type ValidModLocationEnum =
  | "emitter"
  | "grip"
  | "sights"
  | "sling"
  | "stock"
  | "rail mount"
  | "underbarrel mount"
  | "accessories"
  | "rail"
  | "underbarrel"
  | "barrel"
  | "grip mount"
  | "mechanism"
  | "dampening"
  | "sights mount"
  | "stabilizer"
  | "bore"
  | "brass catcher"
  | "magazine"
  | "muzzle"
  | "stock mount"
  | "lens"
  | "loading port"
  | "conversion"
