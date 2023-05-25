type Tool = {
  id?: string
  "copy-from"?: string
  type: Type
  name: NameUnion
  description?: string
  category?: Category
  weight?: string
  volume?: string
  price?: number
  to_hit?: number
  bashing?: number
  material?: Ammo
  symbol?: string
  color?: Color
  explode_in_fire?: boolean
  explosion?: TOOLExplosion
  use_action?: TOOLUseAction
  initial_charges?: number
  max_charges?: number
  turns_per_charge?: number
  flags?: Ammo
  price_postapoc?: number
  "//"?: string
  ammo?: Ammo
  charges_per_use?: number
  magazines?: Array<MagazineElement[]>
  magazine_well?: MagazineWell
  qualities?: Array<Quality[]>
  techniques?: Ammo
  cutting?: number
  revert_to?: string
  power_draw?: number
  sub?: string
  delete?: Delete
  looks_like?: string
  proportional?: Proportional
  revert_msg?: string
  relic_data?: RelicData
  emits?: string[]
  thrown_damage?: ThrownDamage[]
  weapon_category?: string[]
  abstract?: string
  rand_charges?: number[]
  charge_factor?: number
  artifact_data?: ArtifactData
  extend?: Extend
  relative?: Relative
  ascii_picture?: string
  repairs_like?: string
}

type Ammo = string[] | string

type ArtifactData = {
  effects_wielded: string[]
}

type Category =
  | "weapons"
  | "tools"
  | "spare_parts"
  | "drugs"
  | "ammo"
  | "veh_parts"
  | "guns"
  | "other"

type Color =
  | "red"
  | "green"
  | "light_gray"
  | "light_red"
  | "yellow"
  | "white"
  | "brown"
  | "dark_gray"
  | "blue"
  | "light_blue"
  | "cyan"
  | "light_cyan"
  | "light_green"
  | "magenta"
  | "pink"

type Delete = {
  qualities: Array<Quality[]>
}

type Quality = number | string

type TOOLExplosion = {
  power?: number
  shrapnel?: ShrapnelUnion
  "//"?: string
  distance_factor?: number
  fire?: boolean
  fragment?: Fragment
  damage?: number
  radius?: number
}

type Fragment = {
  impact: Impact
  range: number
}

type Impact = {
  damage_type: DamageType
  amount: number
  armor_multiplier?: number
}

type DamageType = "cut" | "heat"

type ShrapnelUnion = ShrapnelClass | number

type ShrapnelClass = {
  casing_mass: number
  fragment_mass: number
  drop?: string
  recovery?: number
}

type Extend = {
  flags: string[]
}

type MagazineWell = "250 ml" | "500 ml" | "1000 ml" | "1500 ml"

type MagazineElement = string[] | MagazineEnum

type MagazineEnum = "battery" | "weldgas"

type NameUnion = NameClass | string

type NameClass = {
  str?: string
  str_pl?: string
  str_sp?: string
}

type Proportional = {
  weight: number
  volume: number
  price: number
}

type Relative = {
  volume: MagazineWell
  weight: string
}

type RelicData = {
  passive_effects: PassiveEffect[]
}

type PassiveEffect = {
  has: string
  condition: string
  mutations?: string[]
  intermittent_activation?: IntermittentActivation
  values?: Value[]
  ench_effects?: EnchEffect[]
}

type EnchEffect = {
  effect: string
  intensity: number
}

type IntermittentActivation = {
  effects: Effect[]
}

type Effect = {
  frequency: string
  spell_effects: SpellEffect[]
}

type SpellEffect = {
  id: string
}

type Value = {
  value: string
  add: number
}

type ThrownDamage = {
  damage_type: DamageType
  amount: number
}

type Type = "TOOL"

type TOOLUseAction = UseActionElement[] | FluffyUseAction | string

type UseActionElement = PurpleUseAction | string

type PurpleUseAction = {
  type: string
  move_cost?: number
  used_up_item?: string
  bleed?: number
  limb_power?: number
  item_action_type?: ItemActionType
  materials?: string[]
  skill?: PurpleSkill
  tool_quality?: number
  cost_scaling?: number
  clothing_mods?: string[]
  target?: string
  msg?: string
  active?: boolean
  need_charges?: number
  need_charges_msg?: string
  moves?: number
  noise?: number
  noise_message?: string
  noise_id?: string
  noise_variant?: string
  use_message?: string
  no_charges_message?: string
  "//"?: string
  moves_slow?: number
  need_sunlight?: boolean
  menu_text?: string
  flame?: boolean
  noise_chance?: number
  auto_extinguish_chance?: number
  auto_extinguish_message?: string
  voluntary_extinguish_message?: string
  charges_extinguish_message?: string
  water_extinguish_message?: string
}

type ItemActionType = "repair_metal" | "repair_fabric"

type PurpleSkill = "fabrication" | "tailor" | "mechanics"

type FluffyUseAction = {
  target?: string
  msg?: string
  target_charges?: number
  active?: boolean
  need_fire?: number
  menu_text?: string
  type: string
  sound_volume?: number
  sound_msg?: string
  no_deactivate_msg?: string
  explosion?: UseActionExplosion
  volume?: number
  fun?: number
  fun_bonus?: number
  speed_penalty?: number
  description_frequency?: number
  player_descriptions?: string[]
  item_action_type?: ItemActionType
  materials?: string[]
  skill?: PurpleSkill
  tool_quality?: number
  cost_scaling?: number
  move_cost?: number
  radius?: number
  broken_type?: string
  wall?: string
  floor?: string
  floor_center?: string
  door_opened?: string
  door_closed?: string
  need_charges?: number
  need_charges_msg?: string
  moves?: number
  noise?: number
  noise_message?: string
  noise_id?: string
  noise_variant?: string
  use_message?: string
  no_charges_message?: string
  "//"?: string
  verb?: string
  gerund?: string
  on_terrain?: boolean
  material_restricted?: boolean
  fields_type?: string
  fields_radius?: number
  fields_min_intensity?: number
  fields_max_intensity?: number
  transform_age?: number
  not_ready_msg?: string
  draw_explosion_radius?: number
  draw_explosion_color?: Color
  emp_blast_radius?: number
  do_flashbang?: boolean
  target_ammo?: string
  scrambler_blast_radius?: number
  vehicle_name?: string
  unfold_msg?: string
  tools_needed?: ToolsNeeded
  pick_quality?: number
  moves_slow?: number
  need_fire_msg?: string
  monster_id?: string
  friendly_msg?: string
  hostile_msg?: string
  difficulty?: number
  place_randomly?: boolean
  skills?: SkillElement[]
  is_pet?: boolean
  furn_type?: string
  rand_target_charges?: number[]
  target_id?: string
  success_chance?: number
  success_message?: string
  failure_message?: string
  lacks_fuel_message?: string
}

type UseActionExplosion = {
  power?: number
  shrapnel?: ShrapnelUnion
  "//"?: string
  fragment?: Fragment
  damage?: number
  radius?: number
}

type SkillElement = "electronics" | "computer"

type ToolsNeeded = {
  hand_pump: number
}
