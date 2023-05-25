type EffectType = {
  type: Type
  id: string
  "//"?: string
  permanent?: boolean
  name?: NameElement[]
  desc?: string[]
  int_add_val?: number
  max_intensity?: number
  base_mods?: { [key: string]: number[] }
  show_in_info?: boolean
  apply_message?: string
  rating?: Rating
  remove_message?: string
  max_duration?: string
  scaling_mods?: { [key: string]: number[] }
  remove_memorial_log?: string
  apply_memorial_log?: string
  int_dur_factor?: IntDurFactor
  removes_effects?: string[]
  blood_analysis_description?: string
  miss_messages?: Array<IntDurFactor[]>
  resist_traits?: string[]
  resist_effects?: string[]
  pain_sizing?: boolean
  hurt_sizing?: boolean
  main_parts_only?: boolean
  int_decay_tick?: number
  harmful_cough?: boolean
  flags?: string[]
  dur_add_perc?: number
  morale?: string
  pkill_addict_reduces?: boolean
  max_effective_intensity?: number
  part_descs?: boolean
  speed_name?: string
  decay_messages?: Array<string[]>
  "//1"?: string
  "//2"?: string
  "//3"?: string
  int_decay_step?: number
}

type IntDurFactor = number | string

type NameElement = NameClass | string

type NameClass = {
  ctxt: string
  str: string
}

type Rating = "bad" | "good" | "mixed" | "neutral"

type Type = "effect_type"
