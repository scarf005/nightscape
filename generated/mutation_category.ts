type MutationCategory = {
  type: Type
  id: string
  name: string
  threshold_mut: string
  mutagen_message: string
  iv_message: string
  iv_min_mutations?: number
  iv_additional_mutations?: number
  iv_additional_mutations_chance?: number
  iv_fatigue?: number
  junkie_message?: string
  memorial_message?: string
  iv_sound?: boolean
  iv_sound_message?: string
  iv_sound_id?: string
  iv_sound_variant?: string
  "//"?: string
  iv_noise?: number
  iv_hunger?: number
  "//2"?: string
  iv_thirst?: number
  iv_pain?: number
  iv_morale?: number
  iv_morale_max?: number
  iv_sleep?: boolean
  iv_sleep_dur?: number
  iv_sleep_message?: string
}

type Type = "mutation_category"
