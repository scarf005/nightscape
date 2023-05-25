type MartialArt = {
  type: MartialArtType
  id: string
  name: NameClass
  description: string
  initiate: string[]
  arm_block_with_bio_armor_arms?: boolean
  leg_block_with_bio_armor_legs?: boolean
  static_buffs?: StaticBuff[]
  onkill_buffs?: OnattackBuffElement[]
  techniques?: string[]
  weapon_category?: string[]
  learn_difficulty?: number
  arm_block?: number
  leg_block?: number
  onhit_buffs?: OnhitBuff[]
  oncrit_buffs?: OncritBuff[]
  onmove_buffs?: EBuff[]
  onattack_buffs?: OnattackBuffElement[]
  onpause_buffs?: OngethitBuffElement[]
  ongethit_buffs?: OngethitBuffElement[]
  ondodge_buffs?: EBuff[]
  allow_melee?: boolean
  force_unarmed?: boolean
  primary_skill?: string
  strictly_melee?: boolean
  onblock_buffs?: OnblockBuff[]
  autolearn?: Array<string[]>
  onmiss_buffs?: OnattackBuffElement[]
  weapons?: string[]
}

type NameClass = {
  str: string
}

type OnattackBuffElement = {
  id: string
  name: string
  description: string
  skill_requirements?: SkillRequirement[]
  unarmed_allowed?: boolean
  buff_duration: number
  bonus_dodges?: number
  melee_allowed?: boolean
  mult_bonuses?: OnattackBuffFlatBonus[]
  max_stacks?: number
  flat_bonuses?: OnattackBuffFlatBonus[]
  bonus_blocks?: number
}

type OnattackBuffFlatBonus = {
  stat: Stat
  scale: number
  type?: FlatBonusType
  "scaling-stat"?: ScalingStat
}

type ScalingStat = "str" | "per" | "dex" | "int"

type Stat = "dodge" | "damage" | "arpen" | "hit" | "block" | "movecost" | "speed" | "armor"

type FlatBonusType = "cut" | "bash" | "stab" | "electric" | "heat"

type SkillRequirement = {
  name: NameEnum
  level: number
}

type NameEnum = "unarmed" | "melee"

type OnblockBuff = {
  id: string
  name: string
  description: string
  skill_requirements: SkillRequirement[]
  melee_allowed: boolean
  max_stacks?: number
  mult_bonuses?: OnblockBuffFlatBonus[]
  buff_duration: number
  flat_bonuses?: OnblockBuffFlatBonus[]
}

type OnblockBuffFlatBonus = {
  stat: Stat
  scale: number
}

type OncritBuff = {
  id: string
  name: string
  description: string
  skill_requirements?: SkillRequirement[]
  unarmed_allowed?: boolean
  buff_duration: number
  flat_bonuses?: OnattackBuffFlatBonus[]
  melee_allowed?: boolean
  max_stacks?: number
  mult_bonuses?: OnattackBuffFlatBonus[]
}

type EBuff = {
  id: string
  name: string
  description: string
  skill_requirements?: SkillRequirement[]
  unarmed_allowed?: boolean
  buff_duration: number
  flat_bonuses?: OnattackBuffFlatBonus[]
  mult_bonuses?: OnattackBuffFlatBonus[]
  bonus_dodges?: number
  melee_allowed?: boolean
  max_stacks?: number
  wall_adjacent?: boolean
  bonus_blocks?: number
  req_buffs?: string[]
}

type OngethitBuffElement = {
  id: string
  name: string
  description: string
  skill_requirements?: SkillRequirement[]
  unarmed_allowed?: boolean
  buff_duration: number
  flat_bonuses: OnattackBuffFlatBonus[]
  melee_allowed?: boolean
  max_stacks?: number
}

type OnhitBuff = {
  id: string
  name: string
  description: string
  skill_requirements: SkillRequirement[]
  unarmed_allowed: boolean
  buff_duration: number
  max_stacks?: number
  flat_bonuses?: OnattackBuffFlatBonus[]
  bonus_blocks?: number
  bonus_dodges?: number
  req_buffs?: string[]
  mult_bonuses?: OnattackBuffFlatBonus[]
}

type StaticBuff = {
  id: string
  name: string
  description: string
  unarmed_allowed?: boolean
  melee_allowed?: boolean
  bonus_blocks?: number
  flat_bonuses?: OnattackBuffFlatBonus[]
  wall_adjacent?: boolean
  "//"?: string
  skill_requirements?: SkillRequirement[]
  bonus_dodges?: number
  unarmed_weapons_allowed?: boolean
  throw_immune?: boolean
  quiet?: boolean
  stealthy?: boolean
  mult_bonuses?: OnattackBuffFlatBonus[]
}

type MartialArtType = "martial_art"
