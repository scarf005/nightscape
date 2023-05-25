type Spell = {
  type: Type
  id: string
  name: NameUnion
  description: string
  valid_targets: ValidTarget[]
  effect: string
  effect_str?: string
  base_casting_time?: number
  flags?: string[]
  "//"?: string
  min_duration?: number
  max_duration?: number
  message?: string
  min_aoe?: number
  max_aoe?: number
  field_id?: string
  field_chance?: number
  min_field_intensity?: number
  max_field_intensity?: number
  min_damage?: number
  max_damage?: number
  min_range?: number
  max_range?: number
  damage_type?: string
  extra_effects?: ExtraEffect[]
  sound_description?: string
  sound_type?: string
  sound_ambient?: boolean
  sound_id?: string
  sound_variant?: string
  field_intensity_variance?: number
  damage_increment?: number
  max_level?: number
  range_increment?: number
  duration_increment?: number
  sprite?: string
  targeted_monster_ids?: string[]
  affected_body_parts?: string[]
  spell_class?: string
  energy_source?: string
}

type ExtraEffect = {
  id: string
}

type NameUnion = NameClass | string

type NameClass = {
  str: string
}

type Type = "SPELL"

type ValidTarget = "self" | "ground" | "hostile" | "ally"
