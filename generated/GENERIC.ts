type Generic = {
  id?: string
  type: GENERICType
  "copy-from"?: string
  looks_like?: string
  name: NameUnion
  description?: string
  category?: Category
  weight?: Price
  volume?: Price
  price?: Price
  price_postapoc?: Price
  material?: Material
  symbol?: string
  color?: Color
  abstract?: string
  to_hit?: number
  use_action?: GENERICUseAction
  book_data?: BookData
  gunmod_data?: GunmodData
  extend?: Extend
  bashing?: number
  flags?: string[]
  weapon_category?: Material
  techniques?: Techniques
  cutting?: number
  properties?: Array<string[]>
  qualities?: Array<Price[]>
  "//"?: string
  container_data?: ContainerData
  delete?: Delete
  relic_data?: RelicData
  stackable?: boolean
  countdown_action?: CountdownAction
  emits?: string[]
  countdown_interval?: number
  thrown_damage?: ThrownDamage[]
  min_skills?: Array<Price[]>
  relative?: Relative
  fuel?: Fuel
  snippet_category?: SnippetCategoryUnion
  milling?: Milling
  proportional?: Proportional
  container?: string
  conditional_names?: ConditionalName[]
  damage_states?: number[]
  armor_data?: ArmorData
  explode_in_fire?: boolean
  explosion?: Explosion
}

type ArmorData = {
  covers: string[]
  coverage: number
  encumbrance: number
  material_thickness: number
}

type BookData = {
  martial_art?: string
  time?: number
  intelligence?: number
}

type Category =
  | "tools"
  | "maps"
  | "weapons"
  | "food"
  | "spare_parts"
  | "other"
  | "veh_parts"
  | "drugs"
  | "books"
  | "artifacts"
  | "chems"

type Color =
  | "yellow"
  | "light_gray"
  | "blue"
  | "green"
  | "white"
  | "light_blue"
  | "pink"
  | "light_cyan"
  | "brown"
  | "light_green"
  | "dark_gray"
  | "red"
  | "cyan"
  | "magenta"
  | "light_red"
  | "brown_yellow"
  | "black"

type ConditionalName = {
  type: string
  condition: string
  name: NameUnion
}

type NameUnion = NameClass | string

type NameClass = {
  str?: string
  str_pl?: string
  str_sp?: string
  ctxt?: string
}

type ContainerData = {
  contains: string
  watertight: boolean
  seals?: boolean
}

type CountdownAction = {
  menu_text?: string
  type: CountdownActionType
  target: string
}

type CountdownActionType = "transform"

type Delete = {
  qualities: Array<Price[]>
}

type Price = number | string

type Explosion = {
  power: number
  shrapnel: Shrapnel
}

type Shrapnel = {
  casing_mass: number
  fragment_mass: number
}

type Extend = {
  flags?: string[]
  qualities?: Array<Price[]>
}

type Fuel = {
  energy: number
}

type GunmodData = {
  location: string
  mod_targets: string[]
  mode_modifier: Array<ModeModifierUnion[]>
}

type ModeModifierUnion = PurpleModeModifier[] | FluffyModeModifier | number

type PurpleModeModifier = "MELEE" | "REACH_ATTACK"

type FluffyModeModifier = "REACH" | "bayonet"

type Material = string[] | string

type Milling = {
  into: string
  conversion_rate: number
}

type Proportional = {
  weight?: number
  price?: number
  volume?: number
  bashing?: number
  cutting?: number
}

type Relative = {
  weight?: number
  cutting?: number
  bashing?: number
}

type RelicData = {
  passive_effects: PassiveEffect[]
}

type PassiveEffect = {
  has: string
  condition: string
  mutations: string[]
}

type SnippetCategoryUnion = SnippetCategoryElement[] | string

type SnippetCategoryElement = {
  id: string
  text: string
}

type Techniques = Technique[] | Technique

type Technique =
  | "WBLOCK_1"
  | "BRUTAL"
  | "SWEEP"
  | "SPIN"
  | "WRAP"
  | "DEF_DISARM"
  | "WBLOCK_3"
  | "WIDE"
  | "WBLOCK_2"
  | "IMPALE"
  | "PRECISE"
  | "RAPID"

type ThrownDamage = {
  damage_type: DamageType
  amount: number
}

type DamageType = "bash" | "stab" | "cut"

type GENERICType = "GENERIC"

type GENERICUseAction = UseActionElement[] | FluffyUseAction | string

type UseActionElement = PurpleUseAction | UseActionEnum

type PurpleUseAction = {
  type: string
  moves?: number
  moves_slow?: number
  target?: string
  msg?: string
  active?: boolean
  menu_text?: string
}

type UseActionEnum = "CROWBAR" | "HAMMER"

type FluffyUseAction = {
  type: string
  radius?: number
  message?: string
  terrain?: TerrainElement[]
  max_weight?: number
  target?: string
  msg?: string
  moves?: number
  transform_age?: number
  not_ready_msg?: string
  container?: string
  target_charges?: number
  "//"?: string
  menu_text?: string
  need_fire?: number
  need_fire_msg?: string
  allow_under_player?: boolean
  trap?: string
  practice?: number
  done_message?: string
  furn_type?: string
  moves_slow?: number
  need_sunlight?: boolean
  active?: boolean
  allow_underwater?: boolean
  bury_question?: string
  bury?: Bury
  outer_layer_trap?: string
  needs_solid_neighbor?: boolean
  name?: string
  pick_quality?: number
  holster_prompt?: string
  holster_msg?: string
  max_volume?: string
  draw_cost?: number
  flags?: string[]
  group?: string
  items_fit?: boolean
  filthy_volume_threshold?: string
  belt?: string
  scent_typeid?: string
  duration?: string
  charges_to_use?: number
  effects?: Effect[]
  monster_id?: string
  friendly_msg?: string
  hostile_msg?: string
  difficulty?: number
  skills?: string[]
}

type Bury = {
  trap: string
  moves: number
  practice: number
  done_message: string
}

type Effect = {
  id: string
  duration: number
}

type TerrainElement = TerrainClass | string

type TerrainClass = {
  om_terrain: string
  om_terrain_match_type: string
}
