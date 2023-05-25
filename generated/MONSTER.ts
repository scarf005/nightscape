type Monster = {
  id?: string
  type: MONSTERType
  name?: NameUnion
  description?: string
  default_faction?: string
  species?: string[]
  volume?: string
  weight?: string
  hp?: number
  speed?: number
  material?: Material[]
  symbol?: string
  color?: string
  looks_like?: string
  melee_cut?: number
  dodge?: number
  harvest?: string
  death_function?: string[]
  flags?: string[]
  categories?: Category[]
  aggression?: number
  morale?: number
  melee_skill?: number
  fear_triggers?: RTrigger[]
  armor_cut?: number
  armor_bullet?: number
  anger_triggers?: RTrigger[]
  special_attacks?: MONSTERSpecialAttack[]
  vision_day?: number
  vision_night?: number
  "//"?: string
  diff?: number
  melee_dice?: number
  melee_dice_sides?: number
  armor_bash?: number
  path_settings?: PathSettings
  revert_to_itype?: string
  death_drops?: DeathDropsUnion
  starting_ammo?: { [key: string]: number }
  special_when_hit?: SpecialWhenHitElement[]
  bodytype?: Bodytype
  upgrades?: UpgradesUnion
  burn_into?: BurnInto
  fungalize_into?: string
  "copy-from"?: string
  relative?: Relative
  delete?: Delete
  extend?: Extend
  luminance?: number
  armor_acid?: number
  armor_fire?: number
  melee_damage?: MeleeDamage[]
  regenerates_in_dark?: boolean
  emit_fields?: EmitField[]
  regenerates?: number
  regeneration_modifiers?: RegenerationModifier[]
  regen_morale?: boolean
  placate_triggers?: PlacateTrigger[]
  abstract?: string
  reproduction?: Reproduction
  baby_flags?: BabyFlag[]
  armor_stab?: number
  attack_effs?: AttackEFF[]
  phase?: string
  "//2"?: string
  scents_ignored?: string[]
  mech_str_bonus?: number
  mech_battery?: string
  mech_weapon?: string
  attack_cost?: number
  proportional?: Proportional
  zombify_into?: string
  alias?: string
  mountable_weight_ratio?: number
  grab_strength?: number
  "//3"?: string
  "//4"?: string
}

type RTrigger =
  | "PLAYER_WEAK"
  | "HURT"
  | "FRIEND_DIED"
  | "FRIEND_ATTACKED"
  | "STALK"
  | "PLAYER_CLOSE"
  | "SOUND"
  | "PLAYER_NEAR_BABY"
  | "MATING_SEASON"
  | "FIRE"

type AttackEFF = {
  id: string
  "//"?: string
  duration: number
}

type BabyFlag = "SPRING" | "SUMMER" | "AUTUMN" | "WINTER"

type Bodytype =
  | "human"
  | "bear"
  | "blob"
  | "quadruped"
  | "angel"
  | "snake"
  | "crab"
  | "fish"
  | "frog"
  | "gator"
  | "migo"
  | "pig"
  | "bird"
  | "insect"
  | "spider"
  | "flying insect"

type BurnInto = "mon_zombie_scorched" | "mon_zombie_fiend" | "mon_zombie_child_scorched"

type Category = "WILDLIFE" | "CLASSIC"

type DeathDropsUnion = DeathDropsClass | string

type DeathDropsClass = {
  groups?: Group[]
  subtype?: Subtype
  "//"?: string
}

type Group = GroupElement[] | string

type GroupElement = number | string

type Subtype = "collection"

type Delete = {
  upgrades?: DeleteUpgrades
  flags?: string[]
  categories?: Category[]
  fear_triggers?: RTrigger[]
}

type DeleteUpgrades = {
  half_life: number
  into: string
}

type EmitField = {
  emit_id: string
  delay: string
}

type Extend = {
  special_attacks?: ExtendSpecialAttack[]
  flags: string[]
  death_function?: string[]
}

type ExtendSpecialAttack = GroupElement[] | PurpleSpecialAttack

type PurpleSpecialAttack = {
  id?: ID
  cooldown?: number
  damage_max_instance?: DamageMaxInstance[]
  type?: SpecialAttackType
  max_range?: number
  move_cost?: number
  gun_type?: string
  fake_skills?: Array<GroupElement[]>
  fake_dex?: number
  fake_per?: number
  require_targeting_player?: boolean
  description?: string
  ranges?: Array<RangeElement[]>
}

type DamageMaxInstance = {
  damage_type: DamageMaxInstanceDamageType
  amount: number
  armor_multiplier?: number
}

type DamageMaxInstanceDamageType = "bash" | "stab" | "cut" | "acid"

type ID = "slam" | "scratch" | "impale" | "inject"

type RangeElement = RangeEnum | number

type RangeEnum = "DEFAULT" | "AUTO" | "BURST"

type SpecialAttackType = "leap" | "gun" | "bite" | "spell"

type Material =
  | "iflesh"
  | "flesh"
  | "steel"
  | "powder"
  | "bone"
  | "veggy"
  | "paper"
  | "superalloy"
  | "stone"

type MeleeDamage = {
  damage_type: MeleeDamageDamageType
  amount: number
}

type MeleeDamageDamageType = "electric" | "cold" | "acid"

type NameUnion = NameClass | string

type NameClass = {
  str?: string
  str_pl?: string
  str_sp?: string
  ctxt?: Bodytype
}

type PathSettings = {
  max_dist?: number
  allow_open_doors?: boolean
  avoid_traps?: boolean
  avoid_sharp?: boolean
}

type PlacateTrigger = "PLAYER_WEAK" | "MEAT"

type Proportional = {
  hp: number
}

type RegenerationModifier = {
  effect: EffectEnum
  base_mod: number
  scaling_mod?: number
}

type EffectEnum = "onfire" | "corroding"

type Relative = {
  hp?: number
  speed?: number
  melee_skill: number
  dodge?: number
  vision_night?: number
  vision_day?: number
  armor_bash?: number
  morale?: number
  melee_dice_sides?: number
  melee_cut?: number
}

type Reproduction = {
  baby_egg?: string
  baby_count: number
  baby_timer: number
  baby_monster?: string
}

type MONSTERSpecialAttack = GroupElement[] | FluffySpecialAttack

type FluffySpecialAttack = {
  type?: SpecialAttackType
  cooldown?: number
  max_range?: number
  move_cost?: number
  gun_type?: string
  ammo_type?: string
  fake_skills?: Array<GroupElement[]>
  fake_dex?: number
  ranges?: Array<RangeElement[]>
  require_targeting_npc?: boolean
  require_targeting_monster?: boolean
  laser_lock?: boolean
  no_crits?: boolean
  targeting_cost?: number
  targeting_timeout_extend?: number
  targeting_sound?: string
  targeting_volume?: number
  no_ammo_sound?: NoAmmoSound
  min_mul?: number
  damage_max_instance?: DamageMaxInstance[]
  id?: ID
  target_moving_vehicles?: boolean
  require_sunlight?: boolean
  "//"?: string
  fake_str?: number
  min_consider_range?: number
  accuracy?: number
  effects?: EffectElement[]
  no_infection_chance?: number
  description?: string
  spell_data?: SpellData
  monster_message?: string
  fake_per?: number
  require_targeting_player?: boolean
  max_consider_range?: number
  allow_no_target?: boolean
}

type EffectElement = {
  id: string
  duration: number
  bp?: string
  affect_hit_bp?: boolean
}

type NoAmmoSound = "a chk!" | ""

type SpellData = {
  id: string
  min_level?: number
}

type SpecialWhenHitElement = SpecialWhenHitEnum | number

type SpecialWhenHitEnum = "RETURN_FIRE" | "ZAPBACK" | "ACIDSPLASH"

type MONSTERType = "MONSTER"

type UpgradesUnion = boolean | UpgradesUpgrades

type UpgradesUpgrades = {
  half_life?: number
  into_group?: string
  into?: string
  age_grow?: number
}
