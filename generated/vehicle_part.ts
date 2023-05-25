type VehiclePart = {
  id?: string
  "copy-from"?: string
  type: Type
  name?: NameUnion
  item?: string
  color?: Color
  broken_color?: Color
  difficulty?: number
  breaks_into?: BreaksIntoUnion
  requirements?: Requirements
  symbol?: string
  broken_symbol?: string
  durability?: number
  location?: string
  flags?: string[]
  damage_reduction?: DamageReduction
  looks_like?: string
  damage_modifier?: number
  description?: string
  size?: number
  floor_bedding_warmth?: number
  comfort?: number
  noise_factor?: number
  fuel_type?: string
  m2c?: number
  contact_area?: number
  rolling_resistance?: number
  wheel_type?: string
  power?: number
  "//"?: string
  epower?: number
  folded_volume?: FoldedVolume
  workbench?: Workbench
  exclusions?: string[]
  muscle_power_factor?: number
  bonus?: number
  emissions?: string[]
  proportional?: Proportional
  transform_terrain?: TransformTerrain
  abstract?: string
  backfire_threshold?: number
  backfire_freq?: number
  damaged_power_factor?: number
  fuel_options?: string[]
  extend?: Delete
  "//2"?: string
  energy_consumption?: number
  delete?: Delete
  rotor_diameter?: number
  qualities?: Array<QualityUnion[]>
  default_ammo?: string
}

type BreaksIntoUnion = BreaksIntoElement[] | string

type BreaksIntoElement = {
  item?: string
  prob?: number
  count?: Charges
  charges?: Charges
  group?: string
}

type Charges = number[] | number

type Color =
  | "magenta"
  | "light_gray"
  | "red"
  | "light_cyan"
  | "brown"
  | "dark_gray"
  | "white"
  | "light_blue"
  | "blue"
  | "yellow"
  | "cyan"
  | "green"
  | "light_red"
  | "light_green"

type DamageReduction = {
  all?: number
  stab?: number
  cut?: number
  bash?: number
}

type Delete = {
  flags: string[]
}

type FoldedVolume = number | string

type NameUnion = NameClass | string

type NameClass = {
  str: string
}

type Proportional = {
  epower?: number
  durability?: number
  size?: number
  damage_modifier?: number
}

type QualityUnion = QualityEnum | number

type QualityEnum = "LIFT" | "JACK" | "SELF_JACK"

type Requirements = {
  install?: Install
  removal?: Install
  repair?: Repair
}

type Install = {
  skills?: Array<SkillElement[]>
  time?: FoldedVolume
  using?: InstallUsing
  components?: Array<Array<FoldedVolume[]>>
  qualities?: QualityClass[]
}

type QualityClass = {
  id: ID
  level: number
}

type ID = "SCREW" | "WRENCH" | "SCREW_FINE" | "DRILL" | "SAW_M"

type SkillElement = SkillEnum | number

type SkillEnum =
  | "mechanics"
  | "electronics"
  | "computer"
  | "tailor"
  | "launcher"
  | "rifle"
  | "smg"
  | "shotgun"
  | "fabrication"

type InstallUsing = Array<UsingUsingUnion[]> | PurpleUsing

type UsingUsingUnion = PurpleUsing | number

type PurpleUsing =
  | "vehicle_bolt"
  | "vehicle_screw"
  | "welding_standard"
  | "vehicle_nail_install"
  | "rope_natural_short"
  | "sewing_standard"
  | "rope_natural"
  | "vehicle_weld_removal"
  | "vehicle_nail_removal"

type Repair = {
  skills?: Array<SkillElement[]>
  time?: string
  using?: Array<RepairUsing[]>
}

type RepairUsing = FluffyUsing | number

type FluffyUsing =
  | "welding_standard"
  | "adhesive"
  | "sewing_standard"
  | "fabric_standard"
  | "rope_natural_short"
  | "vehicle_screw"
  | "solar_panel"
  | "soldering_standard"
  | "solar_panel_v2"
  | "steel_standard"
  | "tire_repair"
  | "storage_battery"

type TransformTerrain = {
  pre_flags: string[]
  post_terrain: string
}

type Type = "vehicle_part"

type Workbench = {
  multiplier: number
  mass: number
  volume: string
}
