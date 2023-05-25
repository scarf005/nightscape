type FieldType = {
  id: string
  type: Type
  legacy_enum_id?: number
  intensity_levels: IntensityLevel[]
  description_affix?: DescriptionAffix
  underwater_age_speedup?: UnderwaterAgeSpeedup
  decay_amount_factor?: number
  is_splattering?: boolean
  half_life?: string
  phase?: Phase
  accelerated_decay?: boolean
  display_field?: boolean
  looks_like?: string
  immunity_data?: ImmunityData
  priority?: number
  display_items?: boolean
  bash?: Bash
  apply_slime_factor?: number
  has_acid?: boolean
  has_fire?: boolean
  stacking_type?: string
  gas_absorption_factor?: number
  dirty_transparency_cache?: boolean
  percent_spread?: number
  outdoor_age_speedup?: string
  has_fume?: boolean
  wandering_field?: string
  has_elec?: boolean
  npc_complain?: NpcComplain
}

type Bash = {
  str_min: number
  str_max: number
  sound_vol: number
  sound_fail_vol: number
  sound: string
  msg_success: string
}

type DescriptionAffix = "covered_in" | "on" | "under" | "illuminated_by"

type ImmunityData = {
  traits?: string[]
  body_part_env_resistance?: Array<BodyPartEnvResistanceElement[]>
}

type BodyPartEnvResistanceElement = BodyPartEnvResistanceEnum | number

type BodyPartEnvResistanceEnum = "mouth" | "eyes"

type IntensityLevel = {
  name?: NameUnion
  color?: string
  sym?: string
  transparent?: boolean
  dangerous?: boolean
  effects?: Effect[]
  light_emitted?: number
  translucency?: number
  convection_temperature_mod?: number
  scent_neutralization?: number
  extra_radiation_max?: number
  radiation_hurt_damage_min?: number
  radiation_hurt_damage_max?: number
  radiation_hurt_message?: string
  "//"?: Empty
  monster_spawn_chance?: number
  monster_spawn_count?: number
  monster_spawn_radius?: number
  monster_spawn_group?: string
  light_override?: number
  intensity_upgrade_chance?: number
  intensity_upgrade_duration?: string
}

type Empty = "repeat last entry"

type Effect = {
  effect_id: string
  body_part: BodyPart
  intensity: number
  min_duration: string
  max_duration: string
  immune_in_vehicle?: boolean
  is_environmental?: boolean
  message?: string
  message_npc?: string
  message_type?: string
  immune_inside_vehicle?: boolean
  "//"?: string
  immune_outside_vehicle?: boolean
  chance_outside_vehicle?: number
  chance_inside_vehicle?: number
}

type BodyPart = "torso" | "mouth"

type NameUnion = NameClass | string

type NameClass = {
  ctxt: string
  str: string
}

type NpcComplain = {
  chance: number
  issue: string
  duration: string
  speech: string
}

type Phase = "liquid" | "solid" | "plasma" | "gas"

type Type = "field_type"

type UnderwaterAgeSpeedup = "25 minutes" | "2 minutes"
