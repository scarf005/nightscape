type Enchantment = {
  type: Type
  id: string
  values?: Value[]
  has?: string
  emitter?: string
  intermittent_activation?: IntermittentActivation
  hit_me_effect?: HitMeEffect[]
  condition?: string
  ench_effects?: EnchEffect[]
}

type EnchEffect = {
  effect: string
  intensity: number
}

type HitMeEffect = {
  id: string
  hit_self: boolean
  once_in: number
  message: string
  npc_message: string
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

type Type = "enchantment"

type Value = {
  value: string
  add: number
}
