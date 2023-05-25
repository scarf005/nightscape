type Bionic = {
  id: string
  type: Type
  name: Name
  description: string
  occupied_bodyparts?: Array<BashProtecElement[]>
  flags?: Flag[]
  act_cost?: ActCost
  react_cost?: ActCost
  time?: number
  trigger_cost?: string
  bash_protec?: Array<BashProtecElement[]>
  cut_protec?: Array<BashProtecElement[]>
  bullet_protec?: Array<BashProtecElement[]>
  env_protec?: Array<BashProtecElement[]>
  fuel_options?: string[]
  fuel_efficiency?: number
  fuel_capacity?: number
  fake_item?: string
  encumbrance?: Array<BashProtecElement[]>
  included?: boolean
  is_remote_fueled?: boolean
  enchantments?: string[]
  stat_bonus?: Array<ActCost[]>
  included_bionics?: string[]
  exothermic_power_gen?: boolean
  canceled_mutations?: string[]
  kcal_trigger_cost?: number
  capacity?: string
  passive_fuel_efficiency?: number
  fuel_multiplier?: number
  available_upgrades?: string[]
  upgraded_bionic?: string
  weight_capacity_bonus?: string
  "//"?: string
}

type ActCost = number | string

type BashProtecElement = BashProtecEnum | number

type BashProtecEnum =
  | "torso"
  | "head"
  | "arm_l"
  | "arm_r"
  | "leg_l"
  | "leg_r"
  | "hand_l"
  | "hand_r"
  | "eyes"
  | "mouth"
  | "foot_l"
  | "foot_r"

type Flag =
  | "BIONIC_POWER_SOURCE"
  | "BIONIC_TOGGLED"
  | "BIONIC_NPC_USABLE"
  | "BIONIC_SHOCKPROOF"
  | "BIONIC_SLEEP_FRIENDLY"
  | "BIONIC_FAULTY"
  | "BIONIC_WEAPON"
  | "BIONIC_GUN"
  | "BIONIC_ARMOR_INTERFACE"

type Name = {
  str: string
}

type Type = "bionic"
