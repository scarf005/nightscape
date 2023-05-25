type MissionDefinition = {
  id: string
  type: MissionDefinitionType
  name: NameUnion
  description?: string
  goal: string
  difficulty: number
  followup?: string
  value: number
  item?: string
  count?: number
  origins?: Origin[]
  has_generic_rewards?: boolean
  dialogue?: Dialogue
  end?: EndUnion
  start?: StartUnion
  destination?: string
  monster_type?: string
  monster_kill_goal?: number
  "//"?: string
  goal_condition?: GoalCondition
  urgent?: boolean
  deadline_low?: number
  deadline_high?: number
  fail?: Fail
  item_group?: string
  place?: string
  monster_species?: string
}

type Dialogue = {
  describe: string
  offer: string
  accepted: string
  rejected: string
  advice: string
  inquire: string
  success: string
  success_lie: string
  failure: string
}

type EndUnion = EndClass | string

type EndClass = {
  opinion?: Opinion
  effect?: EndEffect
  update_mapgen?: EndUpdateMapgen
}

type EndEffect = IndigoEffect[] | FluffyEffect | string

type IndigoEffect = PurpleEffect | string

type PurpleEffect = {
  u_buy_item?: string
  count?: number
  u_add_var?: string
  type?: EffectType
  context?: string
  value?: ValueEnum
  add_mission?: string
  u_adjust_var?: UAdjustVar
  adjustment?: number
  npc_lose_var?: string
  npc_add_var?: string
  u_add_trait?: string
  container?: string
  u_buy_monster?: string
  name?: string
  npc_add_effect?: string
  duration?: string
  set_npc_rule?: string
  u_sell_item?: string
  npc_lose_effect?: string
  npc_consume_item?: string
  u_learn_recipe?: string
}

type EffectType = "general" | "favor_owed_to_u" | "dialogue" | "mission" | "counter" | "talk"

type UAdjustVar = "favor" | "refugee_happiness"

type ValueEnum = "yes"

type FluffyEffect = {
  npc_add_trait?: string
  u_add_var?: string
  type?: EffectType
  context?: string
  value?: ValueEnum
  u_buy_item?: string
  container?: string
  count?: number
}

type Opinion = {
  trust: number
  value?: number
}

type EndUpdateMapgen = PurpleUpdateMapgen[] | FluffyUpdateMapgen

type PurpleUpdateMapgen = {
  om_terrain: string
  place_nested?: PlaceNested[]
  translate_ter?: TranslateTer[]
  "//"?: string
  place_npcs?: PurplePlaceNpc[]
  set?: PurpleSet[]
  place_vehicles?: PurplePlaceVehicle[]
  place_furniture?: PlaceFurniture[]
  place_item?: PlaceItem[]
}

type PlaceFurniture = {
  furn: string
  x: number
  y: number
}

type PlaceItem = {
  item: string
  x: number
  y: number
}

type PlaceNested = {
  chunks: string[]
  x: number
  y: number
}

type PurplePlaceNpc = {
  class: string
  x: number
  y: number
}

type PurplePlaceVehicle = {
  vehicle: string
  x: number
  y: number
  rotation: number
  chance: number
}

type PurpleSet = {
  square?: Line
  id: string
  x: number
  y: number
  x2?: number
  y2?: number
  point?: Line
  line?: Line
}

type Line = "terrain" | "furniture"

type TranslateTer = {
  from: From
  to: Empty
  x: number
  y: number
}

type From = "t_underbrush"

type Empty = "t_dirt"

type FluffyUpdateMapgen = {
  om_terrain: string
  place_nested?: PlaceNested[]
  set?: PurpleSet[]
}

type Fail = {
  effect: string
}

type GoalCondition = {
  u_compare_var?: string
  type?: EffectType
  context?: string
  op?: string
  value?: ValueUnion
  u_has_var?: string
  u_has_item?: string
  days_since_cataclysm?: number
  and?: And[]
}

type And = {
  u_has_item?: string
  u_has_items?: UHasItems
  u_has_skill?: UHasSkill
}

type UHasItems = {
  item: string
  count: number
}

type UHasSkill = {
  skill: string
  level: number
}

type ValueUnion = ValueEnum | number

type NameUnion = NameClass | string

type NameClass = {
  str: string
}

type Origin =
  | "ORIGIN_SECONDARY"
  | "ORIGIN_COMPUTER"
  | "ORIGIN_OPENER_NPC"
  | "ORIGIN_ANY_NPC"
  | "ORIGIN_GAME_START"
  | "ORIGIN_NULL"

type StartUnion = StartClass | string

type StartClass = {
  effect?: StartEffect
  assign_mission_target?: AssignMissionTarget
  update_mapgen?: StartUpdateMapgen
  reveal_om_ter?: RevealOmTer
}

type AssignMissionTarget = {
  om_terrain: string
  om_special?: string
  reveal_radius?: number
  random?: boolean
  search_range?: number
  z?: number
  om_terrain_match_type?: string
  min_distance?: number
}

type StartEffect = IndecentEffect[] | StickyEffect | string

type IndecentEffect = TentacledEffect | string

type TentacledEffect = {
  npc_add_var?: string
  type?: string
  context?: string
  value?: ValueEnum
  u_buy_item?: string
  count?: number
  u_add_var?: string
  u_add_trait?: string
  npc_add_trait?: string
  npc_remove_item_with?: string
  clear_npc_rule?: string
  npc_add_effect?: string
}

type StickyEffect = {
  u_buy_item?: string
  u_add_var?: string
  type?: EffectType
  context?: string
  value?: string
}

type RevealOmTer = string[] | string

type StartUpdateMapgen = TentacledUpdateMapgen[] | StickyUpdateMapgen

type TentacledUpdateMapgen = {
  place_monster?: PurplePlaceMonster[]
  place_nested?: PlaceNested[]
  om_terrain?: string
  place_npcs?: FluffyPlaceNpc[]
}

type PurplePlaceMonster = {
  monster: string
  x: number
  y: number
  target: boolean
}

type FluffyPlaceNpc = {
  class: string
  x: Repeat
  y: Repeat
  target?: boolean
}

type Repeat = number[] | number

type StickyUpdateMapgen = {
  rows?: string[]
  terrain?: Terrain
  fields?: Fields
  items?: ItemsClass
  item?: Item
  monster?: Monster
  place_nested?: PlaceNested[]
  place_npcs?: TentacledPlaceNpc[]
  place_monster?: FluffyPlaceMonster[]
  om_terrain?: string
  place_item?: PlaceItem[]
  furniture?: Furniture
  traps?: Traps
  place_loot?: PlaceLoot[]
  place_vehicles?: FluffyPlaceVehicle[]
  set?: FluffySet[]
  place_fields?: PlaceField[]
}

type Fields = {
  b: B
}

type B = {
  field: string
  intensity: number
}

type Furniture = {
  a: string
}

type Item = {
  "@": Element[]
}

type Element = {
  item: string
  amount?: number
}

type ItemsClass = {
  "@": Items
}

type Items = {
  item: string
  chance: number
}

type Monster = {
  M: M
}

type M = {
  monster: string
}

type PlaceField = {
  x: number[]
  y: number
  field: string
  intensity: number
  repeat: number[]
}

type PlaceLoot = {
  group?: string
  x: Repeat
  y: Repeat
  chance: number
  repeat?: Repeat
  item?: string
}

type FluffyPlaceMonster = {
  monster?: string
  pack_size?: number[]
  x: Repeat
  y: Repeat
  target?: boolean
  group?: string
  name?: string
  chance?: number
}

type TentacledPlaceNpc = {
  class: string
  x: number
  y: number
  target?: boolean
  add_trait?: string
}

type FluffyPlaceVehicle = {
  vehicle: string
  x: number
  y: number
  rotation?: number
  fuel?: number
  status?: number
  chance?: number
}

type FluffySet = {
  point: string
  id: string
  x: number
  y: number
}

type Terrain = {
  "@"?: string
  b: Empty
  M?: Empty
  g?: string
  "."?: Empty
  a?: Empty
  R?: Empty
  F?: Empty
}

type Traps = {
  F: string
  R: string
}

type MissionDefinitionType = "mission_definition"
