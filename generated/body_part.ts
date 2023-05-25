type BodyPart = {
  id: string
  legacy_id: string
  type: Type
  name: string
  accusative: Accusative
  heading: string
  heading_multiple?: string
  encumbrance_text?: string
  hp_bar_ui_text?: string
  essential?: boolean
  hit_size?: number
  hit_size_relative?: number[]
  hit_difficulty?: number
  stylish_bonus?: number
  hot_morale_mod?: number
  cold_morale_mod?: number
  squeamish_penalty?: number
  bionic_slots?: number
  main_part?: string
  "//"?: string
  name_multiple?: string
  accusative_multiple?: Accusative
  opposite_part?: string
  side?: string
}

type Accusative = {
  ctxt: Ctxt
  str: string
}

type Ctxt = "bodypart_accusative"

type Type = "body_part"
