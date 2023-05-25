type BionicItem = {
  abstract?: Abstract
  type: Type
  category?: string
  name: Name
  weight?: string
  volume?: string
  bashing?: number
  material?: string[]
  symbol?: string
  color?: string
  price_postapoc?: number
  use_action?: string
  flags?: string[]
  is_upgrade?: boolean
  faults?: string[]
  "copy-from"?: Abstract
  extend?: Extend
  price?: number
  description?: string
  id?: string
  looks_like?: LooksLike
  difficulty?: number
  installation_data?: string
  bionic_id?: string
}

type Abstract = "bionic_general" | "bionic_general_npc_usable" | "bionic_general_faulty"

type Extend = {
  flags: string[]
}

type LooksLike = "bio_int_enhancer"

type Name = {
  str?: string
  str_pl?: string
  str_sp?: string
}

type Type = "BIONIC_ITEM"
