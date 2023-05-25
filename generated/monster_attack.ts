type MonsterAttack = {
  type: string
  attack_type: string
  id: string
  cooldown: number
  move_cost: number
  damage_max_instance: DamageMaxInstance[]
  body_parts: Array<BodyPart[]>
  effects?: Effect[]
  hit_dmg_u: string
  hit_dmg_npc: string
  no_dmg_msg_u: string
  no_dmg_msg_npc: string
}

type BodyPart = number | string

type DamageMaxInstance = {
  damage_type: string
  amount: number
  armor_penetration?: number
  armor_multiplier?: number
}

type Effect = {
  id: string
  duration: number
  bp?: string
  affect_hit_bp?: boolean
}
