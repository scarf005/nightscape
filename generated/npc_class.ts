type NpcClass = {
  type: Type
  id: string
  name: Name
  job_description: string
  traits?: NpcClassTrait[]
  skills?: Skill[]
  common?: boolean
  bonus_str?: BonusStrUnion
  bonus_dex?: BonusDex
  bonus_int?: Bonus
  bonus_per?: BonusPer
  worn_override?: string
  carry_override?: string
  weapon_override?: string
  "//"?: string
  shopkeeper_item_group?: string
  "//2"?: string
  bionics?: Bionic[]
}

type Bionic = {
  id: string
  chance: number
}

type BonusDex = {
  dice?: number[]
  rng?: number[]
  one_in?: number
  constant?: number
}

type Bonus = {
  rng?: number[]
  one_in?: number
}

type BonusPer = {
  sum?: Sum[]
  rng?: number[]
  one_in?: number
}

type Sum = {
  constant?: number
  dice?: number[]
}

type BonusStrUnion = BonusStrClass | number

type BonusStrClass = {
  rng: number[]
}

type Name = {
  str: string
}

type Skill = {
  skill: string
  level?: Level
  bonus?: Bonus
}

type Level = {
  mul?: Mul[]
  sum?: BonusDex[]
  dice?: number[]
}

type Mul = {
  one_in?: number
  sum?: BonusDex[]
}

type NpcClassTrait = TraitTraitUnion[] | TraitClass

type TraitTraitUnion = number | string

type TraitClass = {
  group?: string
  trait?: string
}

type Type = "npc_class"
