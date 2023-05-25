type AmmoEffect = {
  id: string
  type: Type
  aoe?: Aoe
  explosion?: Explosion
  do_flashbang?: boolean
  do_emp_blast?: boolean
  "//"?: string
  trail?: Trail
}

type Aoe = {
  field_type: string
  intensity_min: number
  intensity_max: number
  radius?: number
  radius_z?: number
  chance?: number
  size?: number
  check_passable?: boolean
  check_sees?: boolean
  check_sees_radius?: number
}

type Explosion = {
  damage?: number
  radius?: number
  fire?: boolean
  fragment?: Fragment
}

type Fragment = {
  impact: Impact
  range: number
}

type Impact = {
  damage_type: string
  amount: number
  armor_multiplier: number
}

type Trail = {
  field_type: string
  intensity_min: number
  intensity_max: number
  chance?: number
}

type Type = "ammo_effect"
