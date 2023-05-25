type Mutation = {
  type: Type
  id: string
  name: NameUnion
  points?: number
  description: DescriptionUnion
  starting_trait?: boolean
  valid?: boolean
  purifiable?: boolean
  "//"?: string
  player_display?: boolean
  types?: string[]
  flags?: string[]
  changes_to?: string[]
  category?: Category[]
  movecost_flatground_modifier?: number
  active?: boolean
  cost?: number
  time?: number
  hunger?: boolean
  encumbrance_covered?: Array<EncumbranceAlway[]>
  lumination?: Array<EncumbranceAlway[]>
  prereqs?: string[]
  cancels?: string[]
  hearing_modifier?: number
  prereqs2?: string[]
  threshreq?: string[]
  wet_protection?: WetProtection[]
  movecost_obstacle_modifier?: number
  max_stamina_modifier?: number
  speed_modifier?: number
  healing_awake?: number
  healing_resting?: number
  mending_modifier?: number
  metabolism_modifier?: number
  starts_active?: boolean
  night_vision_range?: number
  reading_speed_multiplier?: number
  movecost_swim_modifier?: number
  hp_adjustment?: number
  social_modifiers?: SocialModifiers
  hp_modifier?: number
  armor?: Armor[]
  weight_capacity_modifier?: number
  leads_to?: string[]
  fatigue_modifier?: number
  mixed_effect?: boolean
  noise_modifier?: number
  overmap_sight?: number
  initial_ma_styles?: string[]
  scent_intensity?: number
  visibility?: number
  ugliness?: number
  fatigue_regen_modifier?: number
  vitamins_absorb_multi?: Array<VitaminsAbsorbMulti[]>
  passive_mods?: PassiveMods
  attacks?: AttacksUnion
  movecost_modifier?: number
  attackcost_modifier?: number
  bodytemp_modifiers?: number[]
  bodytemp_sleep?: number
  bash_dmg_bonus?: number
  encumbrance_always?: Array<EncumbranceAlway[]>
  restricts_gear?: RestrictsGear[]
  ranged_mutation?: RangedMutation
  thirst_modifier?: number
  pierce_dmg_bonus?: number
  scent_mask?: number
  thirst?: boolean
  fatigue?: boolean
  cut_dmg_bonus?: number
  butchering_quality?: number
  enchantments?: string[]
  rand_cut_bonus?: RandCutBonus
  allow_soft_gear?: boolean
  dodge_modifier?: number
  hp_modifier_secondary?: number
  pain_recovery?: number
  spawn_item?: RangedMutation
  body_size?: string
  stealth_modifier?: number
  stamina_regen_modifier?: number
  craft_skill_bonus?: Array<CraftSkillBonus[]>
  vitamin_rates?: Array<VitaminRateElement[]>
  scent_type?: string
  temperature_speed_modifier?: number
  threshold?: boolean
  profession?: boolean
  debug?: boolean
  skill_rust_multiplier?: number
  "copy-from"?: string
  transform?: Transform
  "//2"?: string
}

type Armor = {
  parts: PartsUnion
  physical?: number
  cut?: number
  bash?: number
  bullet?: number
  stab?: number
  heat?: number
  acid?: number
}

type PartsUnion = RestrictsGear[] | PartsEnum

type RestrictsGear =
  | "head"
  | "leg_l"
  | "leg_r"
  | "foot_l"
  | "foot_r"
  | "arm_l"
  | "arm_r"
  | "hand_l"
  | "hand_r"
  | "torso"
  | "eyes"
  | "mouth"

type PartsEnum = "ALL" | "torso" | "eyes"

type AttacksUnion = Attack[] | AttacksClass

type Attack = {
  attack_text_u: string
  attack_text_npc: string
  blocker_mutations?: string[]
  body_part?: RestrictsGear
  chance: number
  base_damage?: Damage
  required_mutations?: string[]
  hardcoded_effect?: boolean
}

type Damage = {
  damage_type: DamageType
  amount: number
}

type DamageType = "stab" | "cut" | "bash"

type AttacksClass = {
  attack_text_u: string
  attack_text_npc: string
  body_part?: RestrictsGear
  chance: number
  base_damage?: BaseDamage
  strength_damage?: Damage
  blocker_mutations?: string[]
}

type BaseDamage = Damage[] | Damage

type Category =
  | "SPIDER"
  | "MOUSE"
  | "ELFA"
  | "INSECT"
  | "FISH"
  | "ALPHA"
  | "LUPINE"
  | "BIRD"
  | "TROGLOBITE"
  | "CHIMERA"
  | "RAPTOR"
  | "MEDICAL"
  | "CATTLE"
  | "URSINE"
  | "SLIME"
  | "LIZARD"
  | "BEAST"
  | "FELINE"
  | "PLANT"
  | "RAT"
  | "CEPHALOPOD"
  | "MYCUS"
  | "MARLOSS"

type CraftSkillBonus = number | string

type DescriptionUnion = DescriptionClass | string

type DescriptionClass = {
  "//~": string
  str: string
}

type EncumbranceAlway = RestrictsGear | number

type NameUnion = NameClass | string

type NameClass = {
  str: string
}

type PassiveMods = {
  per_mod?: number
  dex_mod?: number
  str_mod?: number
  int_mod?: number
}

type RandCutBonus = {
  min: number
  max: number
}

type RangedMutation = {
  type: string
  message: string
}

type SocialModifiers = {
  intimidate?: number
  persuade?: number
  lie?: number
}

type Transform = {
  target: string
  msg_transform: string
  active: boolean
  moves: number
}

type Type = "mutation"

type VitaminRateElement = VitaminRateEnum | number

type VitaminRateEnum = "vitA" | "vitB" | "vitC" | "calcium" | "iron"

type VitaminsAbsorbMulti = Array<VitaminRateElement[]> | string

type WetProtection = {
  part: RestrictsGear
  neutral?: number
  good?: number
  ignored?: number
}
