type Comestible = {
  type: COMESTIBLEType
  id?: string
  name: NameUnion
  "copy-from"?: string
  looks_like?: string
  description?: string
  proportional?: Proportional
  weight?: Price
  color?: Color
  use_action?: UseActionUnion
  container?: string
  comestible_type?: ComestibleType
  symbol?: Symbol
  quench?: number
  healthy?: number
  price?: Price
  price_postapoc?: Price
  "//"?: string
  volume?: Price
  phase?: Phase
  charges?: number
  category?: string
  flags?: Flags
  fun?: number
  freezing_point?: number
  calories?: number
  material?: MaterialUnion
  stim?: number
  "//2"?: string
  stack_size?: number
  ammo_data?: AmmoData
  drop_action?: DropAction
  explode_in_fire?: boolean
  explosion?: Explosion
  brewable?: Brewable
  addiction_type?: string
  addiction_potential?: number
  primary_material?: PrimaryMaterial
  to_hit?: number
  conditional_names?: ConditionalName[]
  spoils_in?: Price
  vitamins?: Array<Vitamin[]>
  relative?: Relative
  smoking_result?: string
  bashing?: number
  fatigue_mod?: number
  parasites?: number
  delete?: Delete
  milling?: Milling
  cooks_like?: string
  abstract?: string
  seed_data?: SeedData
  tool?: string
  rot_spawn?: string
  rot_spawn_chance?: number
  contamination?: Contamination[]
  armor_data?: ArmorData
}

type AmmoData = {
  ammo_type: string
  damage?: Damage
  effects: string[]
}

type Damage = {
  damage_type: string
  amount: number
}

type ArmorData = {
  covers: string[]
  coverage: number
  encumbrance: number
  storage: string
  material_thickness: number
}

type Brewable = {
  time: string
  results: string[]
}

type Color =
  | "white"
  | "yellow"
  | "pink"
  | "light_green"
  | "green"
  | "light_cyan"
  | "red"
  | "brown"
  | "light_red"
  | "dark_gray"
  | "magenta"
  | "light_gray"
  | "blue"
  | "cyan"
  | "light_blue"
  | "black_red"
  | "black"

type ComestibleType = "DRINK" | "FOOD" | "MED"

type ConditionalName = {
  type: ConditionalNameType
  condition: Condition
  name: NameUnion
}

type Condition = "CANNIBALISM" | "mutant" | "meat"

type NameUnion = NameClass | string

type NameClass = {
  str_sp?: string
  str?: string
  str_pl?: string
}

type ConditionalNameType = "FLAG" | "COMPONENT_ID"

type Contamination = {
  disease: Disease
  probability: number
}

type Disease = "calcium" | "iron" | "vitA" | "vitB" | "vitC" | "bad_food" | "mutant_toxin"

type Delete = {
  flags: Flag[]
}

type Flag = "NUTRIENT_OVERRIDE" | "RAW" | "UNSAFE_CONSUME" | "SMOKABLE"

type DropAction = {
  type: string
  emits: string[]
  scale_qty: boolean
}

type Explosion = {
  power: number
  shrapnel: number
}

type Flags = string[] | string

type MaterialUnion = MaterialElement[] | MaterialElement

type MaterialElement =
  | "hydrocarbons"
  | "water"
  | "alcohol"
  | "fruit"
  | "junk"
  | "powder"
  | "veggy"
  | "egg"
  | "oil"
  | "flesh"
  | "wheat"
  | "mushroom"
  | "milk"
  | "bean"
  | "tomato"
  | "garlic"
  | "nut"
  | "honey"
  | "fur"
  | "hflesh"
  | "cotton"
  | "plastic"
  | "bone"
  | "cardboard"
  | "foodplace_foodstuff"
  | "dry_plant"
  | "feces"

type Milling = {
  into: string
  conversion_rate: number
}

type Phase = "liquid"

type Price = number | string

type PrimaryMaterial =
  | "water"
  | "powder"
  | "junk"
  | "flesh"
  | "cured_meat"
  | "processed_food"
  | "dried_vegetable"
  | "wheat"
  | "cheese"
  | "milk"
  | "ice_cream"
  | "alcohol"

type Proportional = {
  fun?: number
  price?: number
  calories?: number
  weight?: number
  volume?: number
  quench?: number
  parasites?: number
  healthy?: number
}

type Relative = {
  vitamins?: Array<Vitamin[]>
  fun?: number
}

type Vitamin = Disease | number

type SeedData = {
  plant_name: string
  fruit: string
  byproducts?: Byproduct[]
  grow: string
  "//"?: string
  fruit_div?: number
}

type Byproduct =
  | "straw_pile"
  | "withered"
  | "grape_leaves"
  | "cattail_rhizome"
  | "raw_edamame"
  | "horseradish_greens"

type Symbol = "~" | "!" | ";" | "=" | "%" | "," | "*" | "[" | "." | "o" | "`" | "f" | "¨"

type COMESTIBLEType = "COMESTIBLE"

type UseActionUnion = any[] | UseActionClass | string

type UseActionClass = {
  type: UseActionType
  activation_message?: string
  effects?: Effect[]
  bandages_power?: number
  bleed?: number
  move_cost?: number
  disinfectant_power?: number
  bite?: number
  moves?: number
  used_up_item?: UsedUpItemUnion
  stat_adjustments?: StatAdjustments
  fields_produced?: FieldsProduced
  charges_needed?: ChargesNeeded
  tools_needed?: ToolsNeeded
  vitamins?: Array<Vitamin[]>
  mutation_category?: string
  is_strong?: boolean
  is_weak?: boolean
}

type ChargesNeeded = {
  fire: number
}

type Effect = {
  id: string
  duration?: Price
}

type FieldsProduced = {
  fd_cracksmoke?: number
  fd_weedsmoke?: number
  fd_methsmoke?: number
  fd_cigsmoke?: number
}

type StatAdjustments = {
  hunger: number
  thirst?: number
}

type ToolsNeeded = {
  apparatus?: number
  dab_pen_on?: number
  syringe?: number
}

type UseActionType = "consume_drug" | "heal" | "STRONG_ANTIBIOTIC" | "mutagen_iv" | "mutagen"

type UsedUpItemUnion = UsedUpItemClass | string

type UsedUpItemClass = {
  id: string
  quantity: number
  charges?: number
}
