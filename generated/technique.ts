type Technique = {
  type: TechniqueType
  id: string
  name: string
  messages?: string[]
  skill_requirements?: SkillRequirement[]
  melee_allowed?: boolean
  unarmed_allowed?: boolean
  block_counter?: boolean
  crit_ok?: boolean
  mult_bonuses?: TBonus[]
  weighting?: number
  disarms?: boolean
  stun_dur?: number
  unarmed_weapons_allowed?: boolean
  crit_tec?: boolean
  down_dur?: number
  aoe?: string
  wall_adjacent?: boolean
  defensive?: boolean
  grab_break?: boolean
  dodge_counter?: boolean
  knockback_dist?: number
  knockback_spread?: number
  miss_recovery?: boolean
  req_buffs?: ReqBuffs
  stunned_target?: boolean
  powerful_knockback?: boolean
  dummy?: boolean
  description?: string
  "//"?: string
  weapon_damage_requirements?: WeaponDamageRequirement[]
  downed_target?: boolean
  side_switch?: boolean
  human_target?: boolean
  flat_bonuses?: TBonus[]
  take_weapon?: boolean
  knockback_follow?: boolean
}

type TBonus = {
  stat: Stat
  type?: FlatBonusType
  "scaling-stat"?: string
  scale: number
}

type Stat = "arpen" | "movecost" | "damage"

type FlatBonusType = "bash" | "cut" | "stab"

type ReqBuffs = string[] | string

type SkillRequirement = {
  name: Name
  level: number
}

type Name = "melee" | "unarmed"

type TechniqueType = "technique"

type WeaponDamageRequirement = {
  type: FlatBonusType
  min: number
}
