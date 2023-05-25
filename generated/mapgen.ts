type Mapgen = {
  type: MapgenType
  method: Method
  nested_mapgen_id?: string
  object: Object
  om_terrain?: OmTerrain
  weight?: number
  "//"?: string
  "//2"?: string
  "//3"?: string
  update_mapgen_id?: string
}

type Method = "json"

type Object = {
  mapgensize?: number[]
  rows?: string[]
  terrain?: TerrainClass
  furniture?: FurnitureClass
  "//"?: string
  place_npcs?: PlaceNpc[]
  place_vehicles?: PlaceVehicle[]
  place_item?: PlaceItemElement[]
  fill_ter?: FillTer
  place_items?: PlaceItemElement[]
  palettes?: string[]
  vendingmachines?: VendingmachinesClass
  place_loot?: PlaceLoot[]
  items?: ItemsClass
  add?: Add[]
  toilets?: Toilets
  place_nested?: PlaceNested[]
  set?: Set[]
  vehicles?: VehiclesClass
  place_monster?: PurplePlaceMonster[]
  sealed_item?: SealedItemClass
  liquids?: LiquidsClass
  predecessor_mapgen?: string
  rotation?: Rotation
  faction_owner?: FactionOwner[]
  monster?: MonsterClass
  place_monsters?: FluffyPlaceMonster[]
  nested?: NestedClass
  monsters?: Monsters
  item?: ObjectItem
  gaspumps?: Gaspumps
  place_vendingmachines?: PlaceVendingmachine[]
  place_signs?: PlaceGraffitiElement[]
  place_rubble?: PlaceFurnitureElement[]
  place_terrain?: PlaceTerrain[]
  place_liquids?: PlaceItemElement[]
  signs?: Signs
  computers?: Computers
  fields?: Fields
  mapping?: ObjectMapping
  traps?: TrapsClass
  place_toilets?: PlaceGaspumpElement[]
  place_traps?: PlaceTrap[]
  place_fields?: PlaceField[]
  place_furniture?: PlaceFurnitureElement[]
  npcs?: Npcs
  place_graffiti?: PlaceGraffitiElement[]
  place_gaspumps?: PlaceGaspumpElement[]
  place_ter_furn_transforms?: PlaceTerFurnTransform[]
  ter_furn_transforms?: TerFurnTransforms
  place_zones?: PlaceZone[]
}

type Add = {
  item: string
  x: Rotation
  y: Rotation
  chance: number
  repeat?: number
}

type Rotation = number[] | number

type Computers = {
  "8"?: Computers8
  "6"?: The5_Class
  "0"?: The5_Class
  a?: Computers8
  "7"?: The5_Class
  "5"?: The5_Class
}

type The5_Class = {
  name: string
  security?: number
  options: The0_Option[]
  failures?: Failure[]
  access_denied?: string
}

type Failure = {
  action: Action
}

type Action =
  | "shutdown"
  | "alarm"
  | "damage"
  | "amigara"
  | "manhacks"
  | "secubots"
  | "destroy_blood"
  | "destroy_data"

type The0_Option = {
  name: string
  action: string
  security?: number
}

type Computers8 = {
  name: string
  security: number
  options: The8_Option[]
  failures: Failure[]
}

type The8_Option = {
  name: string
  action: string
}

type FactionOwner = {
  id: ID
  x: number[]
  y: number[]
}

type ID =
  | "isherwood_family"
  | "free_merchants"
  | "robofac_auxiliaries"
  | "gods_community"
  | "your_followers"

type Fields = {
  "="?: FieldsClass
  W?: FieldsClass
  "1"?: FieldsClass
  "2"?: FieldsClass
  "3"?: FieldsClass
  "4"?: FieldsClass
  "5"?: FieldsClass
  "6"?: FieldsClass
  f?: FieldsClass
  "*"?: FieldsClass
  U?: FieldsClass
  "/"?: FieldsFields
  Q?: FieldsQ
  B?: FieldsClass
  u?: FieldsClass
  i?: FieldsClass
  I?: FieldsClass
  M?: FieldsClass
  q?: FieldsClass
  "`"?: FieldsClass
  "("?: FieldsClass
  "^"?: FieldsClass
}

type FieldsClass = {
  field: string
  intensity: number
  age: number
}

type FieldsFields = {
  field: string
}

type FieldsQ = {
  field: string
  intensity: number
}

type FillTer =
  | "t_thconc_floor"
  | "t_tar_flat_roof"
  | "t_floor"
  | "t_flat_roof"
  | "t_metal_floor"
  | "t_rock_floor"
  | "t_carpet_metal"
  | "t_open_air"
  | "t_dirt"
  | "t_dirtfloor"
  | "t_shingle_flat_roof"
  | "t_glass_roof"
  | "t_grass"
  | "t_sidewalk"
  | "t_tile_flat_roof"
  | "t_linoleum_gray"
  | "t_metal_flat_roof"
  | "t_linoleum_white"
  | "t_pavement"
  | "t_carpet_green"
  | "t_carpet_concrete"
  | "t_rock_floor_no_roof"
  | "t_rock"
  | "t_floor_waxed"
  | "t_carpet_red"
  | "t_water_dp"
  | "t_water_cube"
  | "t_lake_bed"
  | "t_floor_resin"
  | "t_metal_floor_no_roof"
  | "t_sand"
  | "t_water_moving_dp"
  | "t_region_groundcover_urban"
  | "t_concrete"
  | "t_strconc_floor"
  | "t_region_groundcover_barren"
  | "t_thatch_roof"
  | "t_carpet_purple"
  | "t_junk_floor"
  | "t_grass_long"
  | "t_null"
  | "t_carpet_yellow"
  | "t_floor_blue"
  | "t_water_pump"
  | "t_fence_barbed"
  | "t_dirtmound"
  | "t_door_metal_pickable"
  | "t_scrap_floor"
  | "t_hole"
  | "t_shrub"
  | "t_open_air_rooved"
  | "t_pit_shallow"
  | "t_fencegate_c"
  | "t_console_broken"
  | "t_elevator"
  | "t_reinforced_door_glass_c"
  | "t_elevator_control_off"
  | "t_atm"
  | "t_plut_generator"
  | "t_m_frame"
  | "t_tree_willow"
  | "t_railing_h"
  | "t_dirtmoundfloor"
  | "t_elevator_control"
  | "t_card_science"
  | "t_low_stairs_end"
  | "t_chainfence"
  | "t_fence_v"
  | "t_chainfence_h"
  | "t_fence_post"
  | "t_gate_metal_c"
  | "t_floor_noroof"
  | "t_tree_pine"
  | "t_door_locked_alarm"
  | "t_door_locked"
  | "t_door_metal_locked"
  | "t_sandbox"
  | "t_privacy_fence"
  | "t_region_groundcover"
  | "t_window_stained_red"
  | "t_wall_glass"
  | "t_wall_metal"
  | "t_vat"
  | "t_strconc_wall"
  | "t_railing_v"
  | "t_pavement_y"
  | "t_gutter_north"
  | "t_grate"
  | "t_splitrail_fencegate_c"
  | "t_covered_well"
  | "t_current_trans"
  | "t_tree_coffee"
  | "t_window_domestic"
  | "t_door_locked_interior"
  | "t_little_column"
  | "t_thconc_floor_olight"
  | "t_fence_metal"
  | "t_pit_corpsed"
  | "t_region_tree"
  | "t_metal_railing"
  | "t_rock_wall"
  | "t_underbrush"
  | "t_reinforced_glass"
  | "t_machinery_old"
  | "t_shrub_strawberry"
  | "t_region_shrub_decorative"
  | "t_wall_wood"
  | "t_door_glass_c"
  | "t_tree_birch"
  | "t_ladder_down"
  | "t_water_sh"
  | "t_swater_dp"

type FurnitureClass = {
  "#"?: Frisky
  c?: LElement
  C?: LElement
  t?: TUnion
  r?: LElement
  k?: JUnion
  v?: string
  s?: SUnion
  b?: LElement
  A?: LElement
  B?: LElement
  D?: LElement
  E?: string
  F?: LElement
  G?: LElement
  H?: LElement
  I?: LElement
  M?: MUnion
  y?: YUnion
  d?: LElement
  L?: LElement
  h?: LElement
  "+"?: Enum
  O?: LElement
  S?: LElement
  f?: LElement
  V?: string
  u?: The8_Union
  n?: LElement
  ":"?: Element
  X?: FurnitureX
  "&"?: The3
  "="?: LElement
  T?: SUnion
  "^"?: LElement
  a?: FurnitureA
  l?: FurnitureL
  o?: LElement
  g?: The6_Union
  "{"?: LElement
  "["?: LElement
  K?: LElement
  R?: JUnion
  "7"?: LElement
  "@"?: LElement
  m?: LElement
  W?: LElement
  x?: LElement
  "2"?: LElement
  i?: LElement
  J?: LElement
  "0"?: YUnion
  U?: UUnion
  N?: LElement
  "*"?: The4
  z?: FurnitureZ
  p?: LElement
  e?: LElement
  "6"?: The6_Union
  Y?: FurnitureY
  "%"?: The1
  P?: LElement
  "8"?: The8_Union
  "9"?: LElement
  ">"?: The14
  "?"?: LElement
  "4"?: LElement
  "."?: The11
  _?: The15
  "|"?: Furniture
  "1"?: Furniture1
  "3"?: LElement
  "5"?: LElement
  w?: string
  Q?: LElement
  q?: LElement
  Z?: LElement
  "!"?: Furniture1
  "'"?: string
  "]"?: LElement
  ")"?: string
  "-"?: The9
  ";"?: string
  j?: JUnion
  $?: LElement
  "/"?: The13
  "}"?: Furniture1
  "("?: string
  ","?: The6
  "~"?: The16
  "£"?: Element
  "≠"?: string
  "¤"?: Element
  "֎"?: Enum
  "₸"?: string
  Ć?: Ć
  Ĉ?: Ć
  Ď?: Ď
  Д?: Ď
  д?: Ď
  Й?: Й
  " "?: FurnitureUnion
  "<"?: TEnum[]
  "`"?: string
  Δ?: Δ
}

type FurnitureUnion = Magenta[] | string

type Magenta = ChunkElement[] | string

type ChunkElement = number | string

type Furniture1 = Й[] | string

type Й =
  | "f_indoor_plant_y"
  | "f_indoor_plant"
  | "f_rack_coat"
  | "f_crate_c"
  | "f_crate_o"
  | "f_cardboard_box"
  | "f_filing_cabinet"

type Frisky = Mischievous[] | string

type Mischievous = Braggadocious[] | string

type Braggadocious = Enum | number

type Enum = "f_counter" | "f_null" | "f_skin_door" | "f_canvas_door"

type LElement = string[] | string

type The1 = The2[] | string

type The2 = ChunkElement[] | string

type The3 = Union[] | string

type Union = ChunkElement[] | string

type The4 = The5[] | string

type The5 = ChunkElement[] | string

type The6 = The7[] | string

type The7 = The8[] | string

type The8 = Sticky | number

type Sticky = "f_null" | "f_fungal_mass" | "f_flower_fungal"

type The9 = The10[] | Indigo

type The10 = Class | string

type Class = {
  furn: string
}

type Indigo = "f_null" | "f_camp_chair" | "f_large_canvas_wall"

type The11 = The12[] | Enum

type The12 = ChunkElement[] | string

type The13 = Mischievous[] | string

type YUnion = Δ[] | string

type Δ = "f_indoor_plant_y" | "f_indoor_plant" | "f_locker" | "f_hay"

type The6_Union = The6_Element[] | string

type The6_Element = "f_grave_head" | "f_grave_stone" | "f_grave_stone_old" | "f_statue" | "f_shower"

type The8_Union = Ć[] | string

type Ć = "f_null" | "f_dresser" | "f_bench" | "f_cupboard"

type Element =
  | "f_cellphone_booster"
  | "f_dresser"
  | "f_vent_pipe"
  | "f_exercise"
  | "f_standing_tank"
  | "f_table"
  | "f_small_satelitte_dish"
  | "f_server"

type TEnum =
  | "f_table"
  | "f_toilet"
  | "f_trashcan"
  | "f_standing_tank"
  | "f_locker"
  | "f_sink"
  | "f_null"
  | "f_counter"
  | "f_wardrobe"
  | "f_rack"
  | "f_treadmill"

type The14 = Element[] | Enum

type MUnion = MElement[] | string

type MElement = "f_crate_c" | "f_cardboard_box" | "f_heavy_lathe"

type JUnion = Ď[] | string

type Ď =
  | "f_locker"
  | "f_water_heater"
  | "f_vending_c"
  | "f_trashcan"
  | "f_stool"
  | "f_bookcase"
  | "f_rack"
  | "f_heavy_lathe"
  | "f_dishwasher"
  | "f_desk"

type SUnion = TEnum[] | string

type UUnion = UElement[] | string

type UElement = "f_dumpster" | "f_recycle_bin" | "f_fiber_mat"

type FurnitureX = PurpleX[] | string

type PurpleX = ZElement[] | Й

type ZElement = Й | number

type FurnitureY = YY[] | string

type YY = ChunkElement[] | Й

type The15 = The7[] | Ć

type FurnitureA = AAUnion[] | string

type AAUnion = ChunkElement[] | string

type FurnitureL = PurpleL[] | Ď

type PurpleL = FluffyL[] | string

type FluffyL = Ď | number

type TUnion = Element[] | TEnum

type FurnitureZ = PurpleZ[] | string

type PurpleZ = ZElement[] | string

type Furniture = "f_null" | "f_crate_o" | "f_large_canvas_wall"

type The16 = Array<ChunkElement[]> | string

type Gaspumps = {
  "&"?: LClass
  "1"?: LClass
  J?: LClass
  p?: GaspumpsG
  "@"?: GaspumpsG
  $?: GaspumpsG
  G?: GaspumpsG
  O?: TClass
}

type GaspumpsG = {
  fuel?: string
  amount?: number[]
}

type LClass = {}

type TClass = {
  amount?: number[]
}

type ObjectItem = {
  "*"?: ĈElement
  S?: YElement
  r?: RClass
  W?: ĈElement
  "!"?: RClass
  C?: The3_Element
  f?: F
  J?: JElement
  "1"?: ĈElement
  F?: ĈElement
  v?: ĈElement
  "@"?: JElement[]
  T?: T
  _?: Item
  e?: ĈElement
  "3"?: The3_Element
  "8"?: The8_Element
  c?: ĈElement
  B?: RClass
  "."?: ĈElement
  "0"?: JElement
  t?: ĈElement
  $?: ĈElement
  M?: ĈElement
  a?: ItemA
  u?: ĈElement[]
  "#"?: YElement
  "&"?: ĈElement[]
  "?"?: The3_Element
  "^"?: ĈElement[]
  A?: ĈElement
  j?: ĈElement
  h?: The3_Element
  o?: YElement
  q?: ĈElement
  U?: ĈElement
  i?: The3_Element
}

type RClass = {
  item: string
  chance?: number
  amount?: number[]
}

type YElement = {
  item: string
  chance?: number
  repeat?: number[]
  amount?: number[]
}

type ĈElement = {
  item: string
  chance?: number
}

type JElement = {
  item: string
}

type The3_Element = {
  item: string
  chance?: number
  repeat?: number
}

type The8_Element = {
  item: string
  chance?: number
  repeat?: Rotation
}

type T = JElement[] | ĈElement

type Item = ĈElement[] | YElement

type ItemA = AClass[] | ĈElement

type AClass = {
  item: string
  amount: Rotation
  chance: number
}

type F = {
  item: string
  amount: number[]
}

type ItemsClass = {
  c?: ItemsUnion
  C?: CUnion
  d?: The4_Union
  L?: Items2
  V?: The4_Union
  v?: The4_Union
  F?: ItemsUnion
  f?: ItemsUnion
  "."?: The20
  b?: ItemsUnion
  M?: The4_Union
  "@"?: YElement
  D?: ItemsD
  o?: ItemsUnion
  S?: The4_Union
  R?: ItemsUnion
  w?: ItemsUnion
  t?: ItemsT
  a?: ItemsD
  m?: The4_Union
  n?: The4_Union
  s?: The4_Union
  r?: RUnion
  e?: ItemsD
  "2"?: Items2
  "7"?: ItemsUnion
  "8"?: ItemsUnion
  k?: The4_Union
  "^"?: ItemsT
  B?: ItemsB
  Y?: ItemsUnion
  "{"?: RUnion
  T?: ItemsUnion
  "&"?: Items2
  ";"?: U
  E?: The4_Union
  O?: OUnion
  "#"?: Items2
  "1"?: ItemsUnion
  "3"?: ItemsUnion
  "5"?: ItemsUnion
  "6"?: ItemsUnion
  "9"?: ItemsUnion
  x?: The4_Union
  G?: The4_Union
  y?: YElement
  I?: ItemsD
  A?: The4_Union
  q?: QUnion
  l?: RUnion
  U?: The4_Union
  W?: Item
  " "?: Items
  g?: YElement
  p?: Item
  z?: ItemsUnion
  P?: The4_Union
  "0"?: The4_Union
  J?: The4_Union
  u?: The4_Union
  K?: The4_Union
  Q?: The4_Union
  "!"?: ItemsUnion
  "["?: Item
  $?: The17
  "%"?: The18
  "~"?: U
  j?: The4_Union
  "*"?: The19
  ")"?: ItemUnion
  i?: The4_Union
  "4"?: The4_Union
  "`"?: L
  h?: Item
  "="?: The4_Union
  X?: The4_Union
  H?: The4_Union
  "]"?: L
  "("?: YElement
  "/"?: ItemsD
  "?"?: YElement
  "}"?: YElement
  "¤"?: ĈElement
  "֎"?: ĈElement
  _?: The21
  "|"?: ĈElement
  ","?: U
  ":"?: ĈElement
  Z?: The8_Element
  "-"?: ĈElement
  N?: Item
  "'"?: JElement
  Ć?: ĈElement[]
  Ĉ?: ĈElement
  Ď?: ĈElement
  Д?: ĈElement
  д?: ĈElement
  ">"?: ĈElement
  "▤"?: Item
}

type Items = Empty[] | ĈElement

type Empty = {
  item: IndecentItem
  repeat?: number[]
  chance: number
}

type IndecentItem = PurpleItem | string

type PurpleItem = {
  subtype: Subtype
  entries: PurpleEntry[]
}

type PurpleEntry = {
  item: string
  prob: number
  count?: number[]
  charges?: number[]
}

type Subtype = "distribution"

type ItemsUnion = YElement[] | The8_Element

type Items2 = The8_Element[] | The8_Element

type The17 = Purple[] | The8_Element

type Purple = {
  item: string
  chance: number
  repeat?: number[]
  magazine?: number
  ammo?: number
}

type The18 = Purple[] | YElement

type ItemUnion = YElement[] | The3_Element

type The19 = JElement[] | YElement

type U = YElement[] | ĈElement

type The20 = Empty[] | YElement

type ItemsD = ĈElement[] | The8_Element

type The4_Union = YElement[] | YElement

type ItemsB = YElement[] | BB

type BB = {
  item: BItem
  chance: number
  repeat?: number[]
}

type BItem = FluffyItem | string

type FluffyItem = {
  subtype: Subtype
  entries: FluffyEntry[]
}

type FluffyEntry = {
  item?: string
  prob: number
  group?: string
}

type CUnion = YElement[] | CC

type CC = {
  item: CItem
  chance: number
  repeat?: Rotation
}

type CItem = TentacledItem | string

type TentacledItem = {
  subtype: Subtype
  entries: TentacledEntry[]
}

type TentacledEntry = {
  group: string
  prob: number
  count?: number[]
}

type OUnion = YElement[] | OO

type OO = {
  item: OItem
  chance?: number
  repeat?: number[]
}

type OItem = StickyItem | string

type StickyItem = {
  subtype: Subtype
  entries: StickyEntry[]
}

type StickyEntry = {
  group: EntryGroup
}

type EntryGroup = "SUS_dresser_mens" | "SUS_dresser_womens"

type L = ĈElement[] | ĈElement

type ItemsT = The8_Element[] | YElement

type The21 = The3_Element[] | ĈElement

type RUnion = The8_Element[] | RL

type RL = {
  item: RItem
  chance: number
  repeat?: Rotation
}

type RItem = IndigoItem | string

type IndigoItem = {
  subtype: Subtype
  entries: IndigoEntry[]
}

type IndigoEntry = {
  group: string
  prob: number
}

type QUnion = The3_Element[] | YElement

type LiquidsClass = {
  l?: Liquids
  X?: Liquids
  W?: Liquids
  K?: Liquids
  "6"?: Liquids
  Y?: Liquids
  w?: Liquids
  h?: Liquids
  "4"?: Liquids
  T?: Liquids
  E?: Liquids
  H?: Liquids
  ")"?: Liquids
  "0"?: Liquids
  "!"?: Liquids
  o?: Liquids
}

type Liquids = {
  liquid: Liquid
  amount: number[]
}

type Liquid =
  | "dandelion_wine"
  | "mead"
  | "wine_chardonnay"
  | "water"
  | "hb_beer"
  | "moonshine"
  | "wine_cabernet"
  | "water_clean"

type ObjectMapping = {
  b?: BClass
  B?: FClass
  C?: MappingC
  D?: D
  X?: MappingX
  d?: BClass
  s?: N
  x?: MappingXClass
  L?: BClass
  N?: N
  l?: MappingL
  n?: N
  r?: MappingR
  R?: R
  S?: S
  t?: MappingC
  e?: E
  c?: CClass
  F?: FClass
  "#"?: MappingO
  M?: FClass
  "!"?: MappingClass
  f?: MappingO
  O?: MappingO
  V?: V
  "]"?: MappingO
  U?: FClass
  u?: MappingU
  h?: Mapping
  "~"?: MappingO
  ","?: Mapping
  "."?: Fluffy
  o?: OClass
  " "?: Mapping
}

type Mapping = {
  item: ĈElement[]
}

type MappingClass = {
  item: F[]
}

type MappingO = {
  items: ĈElement[]
}

type Fluffy = {
  items?: ĈElement
  item?: ĈElement
}

type FClass = {
  items: YElement[]
}

type MappingC = {
  items: The3_Element[]
}

type D = {
  items?: ĈElement
  item?: JElement[]
}

type BClass = {
  items?: L
  furniture?: string
}

type N = {
  items: ĈElement
}

type R = {
  item?: ItemUnion
  items?: ĈElement[]
}

type S = {
  items?: SItems
  furniture?: Element
  item?: JElement
}

type SItems = ĈElement[] | The3_Element

type V = {
  item: JElement[]
}

type MappingX = {
  items: L
  terrain?: FillTer
  traps?: string
  fields?: FieldsFields
  item?: JElement
}

type CClass = {
  items?: L
  item?: ĈElement[]
  furniture?: Й
}

type E = {
  items: The3_Element
  furniture?: string
}

type MappingL = {
  items?: LItems
  item?: ItemElement[]
}

type ItemElement = {
  item: string
  amount: Rotation
}

type LItems = The3_Element[] | The3_Element

type OClass = {
  furniture: Ď
  items: ĈElement
}

type MappingR = {
  item?: ItemUnion
  items?: ItemUnion
  furniture?: Ď
}

type MappingU = {
  items: U
  furniture?: Ć
}

type MappingXClass = {
  items?: ĈElement[]
  item?: XItem
}

type XItem = {
  item: string
  repeat: number[]
}

type MonsterClass = {
  "7"?: The7_Class
  "8"?: The7_Class
  B?: The7_Class
  "~"?: The22
  M?: The7_Class
  " "?: Monster
  K?: The7_Class
  r?: The7_Class
  A?: The7_Class
  T?: The7_Class
  k?: The7_Class
  u?: XClass
  ":"?: Monster
  i?: Monster
  S?: The7_Class
  "."?: The22
  ","?: The22
  Z?: The7_Class
  z?: The7_Class
  _?: MonsterUnion
  C?: The7_Class
  "("?: MonsterUnion
  "#"?: Monster[]
  "`"?: Monster
  "^"?: Monster
  U?: Monster
  "<"?: The7_Class
  ü?: The7_Class
  o?: The7_Class
  "!"?: Monster
  "?"?: The7_Class
  Y?: YClass
  q?: XClass
  Q?: XClass
  X?: XClass
}

type Monster = {
  monster: string
  chance?: number
}

type MonsterUnion = Monster[] | The7_Class

type The7_Class = {
  monster: string
}

type The22 = Monster[] | Monster

type XClass = {
  monster: string
  name?: string
}

type YClass = {
  monster: string
  friendly?: boolean
  name?: string
}

type Monsters = {
  u?: MonstersB
  W?: MonstersB
  " "?: MonstersB
  "~"?: MonstersB
  "!"?: MonstersB
  "/"?: MonstersB[]
  m?: The7_Class
  _?: Monster
  b?: Monster
  h?: Monster
  o?: Monster
  "#"?: MonstersUnion
  "%"?: Monster
  g?: Monster
  s?: Monster
  "."?: Monster
  B?: MonstersB
  S?: MonstersB
  ","?: MonstersB
}

type MonstersB = {
  monster: string
  chance: number
  density?: number
}

type MonstersUnion = MonstersB[] | Monster

type NestedClass = {
  U?: UClass
  R?: UClass
  Z?: UClass
  J?: Nested
  M?: MClass
  "1"?: UClass
  "2"?: UClass
  "3"?: UClass
  "4"?: UClass
  "{"?: Nested
  "}"?: Nested
  "["?: Nested
  "]"?: Nested
  "5"?: UClass
  "6"?: Nested
  "7"?: Nested
  "8"?: Nested
  G?: UClass
  "`"?: Nested
  "9"?: Nested
  E?: Nested
  B?: Nested
  D?: Nested
  "|"?: Nested
  "!"?: Nested
}

type Nested = {
  chunks: Array<ChunkElement[]>
}

type UClass = {
  chunks: The1_Chunk[]
}

type The1_Chunk = ChunkElement[] | string

type MClass = {
  chunks: string[]
}

type Npcs = {
  "1"?: The6_Class
  "2"?: The6_Class
  "3"?: The6_Class
  "4"?: The6_Class
  "5"?: The6_Class
  "6"?: The6_Class
  "7"?: The6_Class
  "~"?: The6_Class
  T?: The6_Class
  G?: The6_Class
  Q?: The6_Class
}

type The6_Class = {
  class: string
}

type PlaceField = {
  field: Field
  x: Rotation
  y: Rotation
  repeat?: Rotation
  intensity?: number
  age?: number
}

type Field = "fd_blood" | "fd_bile" | "fd_gibs_flesh" | "fd_toxic_gas" | "fd_web" | "fd_shock_vent"

type PlaceFurnitureElement = {
  furn?: string
  x: Rotation
  y: Rotation
  repeat?: number[]
}

type PlaceGaspumpElement = {
  x: number
  y: number
  amount?: number[]
}

type PlaceGraffitiElement = {
  text?: string
  x: number
  y: number
  snippet?: string
  signage?: string
}

type PlaceItemElement = {
  item?: string
  x: Rotation
  y: Rotation
  amount?: Rotation
  chance?: number
  repeat?: Rotation
  liquid?: string
}

type PlaceLoot = {
  item?: string
  x: Rotation
  y: Rotation
  chance?: number
  repeat?: Rotation
  group?: string
  ammo?: number
  magazine?: number
}

type PurplePlaceMonster = {
  monster?: PlaceMonsterMonster
  x: Rotation
  y: Rotation
  chance?: number
  repeat?: Rotation
  group?: PlaceMonsterGroup
  pack_size?: number[]
  one_or_none?: boolean
  friendly?: boolean
  name?: string
}

type PlaceMonsterGroup =
  | "GROUP_SCHOOL"
  | "GROUP_FOOTBALL"
  | "GROUP_ZOMBIE"
  | "GROUP_DOGS"
  | "GROUP_PARK_PLAYGROUND"
  | "GROUP_PARK_SCENIC"
  | "GROUP_PARK_DOG"
  | "GROUP_MAPGEN_POOL"
  | "GROUP_HOSPITAL"
  | "GROUP_NECROPOLIS"
  | "GROUP_NECROPOLIS_VAULT2"
  | "GROUP_NECROPOLIS_SEWERS"
  | "GROUP_NECROPOLIS_VAULT"
  | "GROUP_NECROPOLIS_SWIMMING"
  | "GROUP_NECROPOLIS_ROBOT"
  | "GROUP_NECROPOLIS_VAULT3"
  | "GROUP_MALL"
  | "GROUP_ARCADE"
  | "GROUP_HOUSE"
  | "GROUP_INDUSTRIAL_CENTER"

type PlaceMonsterMonster = MonsterElement[] | string

type MonsterElement = ChunkElement[] | string

type FluffyPlaceMonster = {
  monster: string
  x: Rotation
  y: Rotation
  repeat?: Rotation
  density?: number
  chance?: number
}

type PlaceNested = {
  chunks?: PlaceNestedChunk[]
  x: Rotation
  y: Rotation
  repeat?: Rotation
  neighbors?: Neighbors
  else_chunks?: ElseChunk[]
}

type PlaceNestedChunk = ChunkElement[] | string

type ElseChunk = ChunkElement[] | string

type Neighbors = {
  north?: EastUnion
  east?: EastUnion
  south?: EastUnion
  west?: EastUnion
  above?: string[]
}

type EastUnion = EastElement[] | PurpleEast

type EastElement = "lab" | "subway" | "open_air"

type PurpleEast = "forest_water" | "microlab_rock_border" | "open_air"

type PlaceNpc = {
  class: string
  x: Rotation
  y: number
  add_trait?: string
}

type PlaceTerFurnTransform = {
  transform: string
  x: number
  y: number
}

type PlaceTerrain = {
  ter: Ter
  x: Rotation
  y: number
}

type Ter =
  | "t_gas_tank"
  | "t_concrete_wall"
  | "t_door_metal_pickable"
  | "t_door_metal_lab_c"
  | "t_rock"
  | "t_switchgear_s"
  | "t_sai_box"

type PlaceTrap = {
  trap: string
  x: Rotation
  y: Rotation
  repeat?: number
  "//"?: string
}

type PlaceVehicle = {
  vehicle: string
  chance: number
  rotation?: Rotation
  x: Rotation
  y: Rotation
  status?: number
  fuel?: number
  repeat?: Rotation
}

type PlaceVendingmachine = {
  item_group?: PlaceVendingmachineItemGroup
  x: number
  y: number
}

type PlaceVendingmachineItemGroup = "vending_food" | "vending_drink" | "jewelry_front"

type PlaceZone = {
  type: PlaceZoneType
  faction: Faction
  x: number[]
  y: number[]
}

type Faction = "free_merchants" | "wasteland_scavengers" | "old_guard" | "lobby_beggars"

type PlaceZoneType = "NPC_INVESTIGATE_ONLY" | "NPC_NO_INVESTIGATE"

type SealedItemClass = {
  Q?: SealedItem
  e?: SealedItem
  I?: SealedItem
  j?: SealedItem
  z?: SealedItem
  u?: SealedItem
  "0"?: SealedItem
  "1"?: SealedItem
  "4"?: SealedItem
  "5"?: SealedItem
  "6"?: SealedItem
  "7"?: SealedItem
  "8"?: SealedItem
  "9"?: SealedItem
  "^"?: SealedItem
  $?: SealedItem
  m?: SealedItem
  p?: SealedItemP
  P?: SealedItemP
  "~"?: SealedItem
  "&"?: SealedItem
  "♥"?: ΔClass
  "♠"?: ΔClass
  "♦"?: ΔClass
  "♣"?: ΔClass
  "Ʌ"?: ΔClass
  "2"?: SealedItem
  "3"?: SealedItem
  M?: SealedItem
  D?: ΔClass
  Δ?: ΔClass
  "‡"?: ΔClass
  "%"?: ΔClass
  "#"?: SealedItem
}

type SealedItem = {
  item: JElement
  furniture: FurnitureEnum
}

type FurnitureEnum =
  | "f_plant_seedling"
  | "f_planter_harvest"
  | "f_plant_harvest"
  | "f_planter_mature"
  | "f_planter_seedling"
  | "f_plant_seed"

type ΔClass = {
  item: JElement
  furniture: FurnitureEnum
  chance?: number
}

type SealedItemP = {
  items?: ĈElement
  furniture: FurnitureEnum
  item?: JElement
}

type Set = {
  point?: Line
  id?: string
  x: Rotation
  y: Rotation
  chance?: number
  repeat?: number[]
  square?: Square
  x2?: number
  y2?: number
  line?: Line
  amount?: number[]
}

type Line = "terrain" | "trap" | "furniture" | "bash"

type Square = "terrain" | "radiation"

type Signs = {
  i?: SClass
  s?: SClass
  S?: SClass
  P?: SClass
  p?: SClass
}

type SClass = {
  signage: string
}

type TerFurnTransforms = {
  r: TerFurnTransformsR
}

type TerFurnTransformsR = {
  transform: string
}

type TerrainClass = {
  q?: DUnion
  "+"?: The33
  "#"?: The26
  w?: LElement
  "."?: The37
  "0"?: Terrain0
  "]"?: The49
  c?: GUnion
  C?: LElement
  t?: LElement
  r?: EUnion
  k?: GUnion
  v?: GUnion
  ","?: The35
  s?: GUnion
  b?: BUnion
  "["?: The47
  W?: LElement
  m?: LElement
  M?: LElement
  "1"?: The1_Union
  "2"?: Terrain2
  "3"?: The3_Union
  "4"?: DUnion
  "5"?: The5_Union
  "6"?: LElement
  "7"?: LElement
  "8"?: LElement
  " "?: Terrain
  "-"?: LElement
  E?: EUnion
  G?: LElement
  y?: AUnion
  "|"?: The53
  U?: LElement
  "'"?: GUnion
  "="?: LElement
  o?: TerrainO
  g?: GUnion
  H?: LElement
  D?: LElement
  "<"?: The42
  u?: GUnion
  n?: FillTer
  ">"?: The42
  _?: The50
  a?: TerrainA
  d?: DUnion
  p?: PUnion
  O?: DUnion
  x?: LElement
  "~"?: The55
  F?: AUnion
  R?: LElement
  B?: TerrainB
  "/"?: LElement
  ";"?: The40
  e?: LElement
  J?: EUnion
  I?: GUnion
  j?: FillTer
  z?: TerrainZ
  Q?: TerrainQ
  "%"?: The29
  V?: AUnion
  A?: AUnion
  "^"?: LElement
  "@"?: The45
  L?: EUnion
  X?: TerrainX
  "!"?: TerrainUnion
  Z?: Z
  "*"?: The31
  $?: The28
  N?: NUnion
  Y?: GUnion
  f?: DUnion
  "9"?: Terrain9
  "&"?: GUnion
  S?: LElement
  T?: LElement
  l?: EUnion
  "{"?: AUnion
  P?: LElement
  h?: GUnion
  ":"?: The39
  ")"?: LElement
  "`"?: The52
  "?"?: The43
  i?: LElement
  "ȴ"?: Ŧ
  Ŋ?: FillTer
  K?: EUnion
  "¤"?: FillTer
  "}"?: LElement
  "("?: EUnion
  "₸"?: FillTer
  "®"?: string
  ž?: FillTer
  Ш?: FillTer
  Ϟ?: string
  Ὠ?: FillTer
  "§"?: string
  Թ?: string
  "❦"?: FillTer
  "ᨖ"?: FillTer
  "♥"?: FillTer
  "♠"?: FillTer
  "♦"?: FillTer
  "♣"?: FillTer
  "Ʌ"?: FillTer
  ó?: FillTer
  "°"?: FillTer
  Ø?: FillTer
  Й?: FillTer
  Ф?: string
  Ю?: string
  Δ?: string
  "№"?: string
  Ŧ?: Ŧ
  "‡"?: FillTer
}

type Terrain = The23[] | FillTer

type The23 = ChunkElement[] | TerElement

type TerElement =
  | "t_grass"
  | "t_dirt"
  | "t_shrub"
  | "t_water_sh"
  | "t_underbrush"
  | "t_tree_young"
  | "t_tree"
  | "t_swater_dp"
  | "t_swater_sh"
  | "t_tree_willow"
  | "t_grass_long"
  | "t_open_air"
  | "t_lava"
  | "t_grass_dead"
  | "t_dirtmound"
  | "t_fungus"
  | "t_grass_tall"
  | "t_pit_spiked"

type TerrainUnion = The24[] | string

type The24 = The25[] | string

type The25 = Indecent | number

type Indecent = "t_region_tree_fruit" | "t_region_tree_nut"

type The26 = The27[] | string

type The27 = The1_[] | string

type The1_ = FillTer | number

type The28 = The24[] | string

type The29 = The30[] | string

type The30 = ChunkElement[] | string

type GUnion = FillTer[] | string

type EUnion = FillTer[] | FillTer

type The31 = The32[] | string

type The32 = ChunkElement[] | string

type The33 = The34[] | string

type The34 = ChunkElement[] | string

type The35 = The36[] | string

type The36 = ChunkElement[] | string

type The37 = The38[] | FillTer

type The38 = ChunkElement[] | Tentacled | The4_Element

type Tentacled = {
  ter: TerElement
}

type The4_Element =
  | "t_dirt"
  | "t_shrub"
  | "t_grass"
  | "t_grass_long"
  | "t_concrete"
  | "t_underbrush"
  | "t_tree_young"
  | "t_tree_dead"
  | "t_tree_pine"
  | "t_floor_paper"
  | "t_floor"
  | "t_water_sh"
  | "t_flat_roof"
  | "t_region_tree"
  | "t_pavement"
  | "t_grass_tall"
  | "t_tree_maple"
  | "t_tree"
  | "t_fungus"
  | "t_grass_dead"
  | "t_tree_willow"
  | "t_gutter_west"
  | "t_tree_hickory"
  | "t_card_industrial"
  | "t_barndoor"
  | "t_wall_glass"
  | "t_fence_wire"
  | "t_chainfence_h"
  | "t_dirtfloor"

type Terrain0 = The0_0_Union[] | string

type The0_0_Union = ChunkElement[] | string

type The1_Union = The27[] | string

type Terrain2 = The27[] | string

type The3_Union = The27[] | string

type DUnion = The4_Element[] | string

type The5_Union = The27[] | string

type Terrain9 = The9_Element[] | string

type The9_Element = ChunkElement[] | string

type The39 = The24[] | string

type The40 = The41[] | string

type The41 = ChunkElement[] | Tentacled | string

type The42 = Ŧ[] | Ŧ

type Ŧ =
  | "t_stairs_up"
  | "t_ladder_up"
  | "t_slope_down"
  | "t_slope_up"
  | "t_gutter_downspout"
  | "t_wood_stairs_up"
  | "t_stairs_down"
  | "t_floor"
  | "t_wood_stairs_down"
  | "t_low_stairs_begin"
  | "t_ladder_down"
  | "t_dock"

type The43 = The44[] | string

type The44 = The1_[] | Hilarious

type Hilarious =
  | "t_water_sh"
  | "t_dirt"
  | "t_grass"
  | "t_shrub"
  | "t_tree"
  | "t_tree_young"
  | "t_tree_willow"
  | "t_swater_sh"
  | "t_door_locked"
  | "t_rock_floor"
  | "t_concrete_wall"
  | "t_door_glass_frosted_lab_c"
  | "t_door_glass_lab_c"

type The45 = The46[] | FillTer

type The46 = The1_[] | FillTer

type AUnion = string[] | FillTer

type TerrainB = The27[] | string

type NUnion = The46[] | FillTer

type TerrainQ = The46[] | FillTer

type TerrainX = The46[] | string

type Z = The27[] | string

type The47 = The48[] | string

type The48 = The25[] | Ambitious

type Ambitious =
  | "t_region_tree_shade"
  | "t_water_dp"
  | "t_water_sh"
  | "t_swater_dp"
  | "t_swater_sh"
  | "t_underbrush"

type The49 = TerElement[] | string

type The50 = The51[] | string

type The51 = ChunkElement[] | Cunning

type Cunning =
  | "t_dirt"
  | "t_grass"
  | "t_thconc_floor"
  | "t_dirtfloor"
  | "t_tree"
  | "t_tree_pine"
  | "t_tree_young"
  | "t_tree_maple"
  | "t_shrub"
  | "t_underbrush"
  | "t_tree_dead"
  | "t_sidewalk"
  | "t_pavement"
  | "t_tree_willow"
  | "t_fungus_mound"

type The52 = The46[] | FillTer

type TerrainA = The27[] | string

type BUnion = The46[] | string

type TerrainO = OElement[] | string

type OElement = ChunkElement[] | string

type PUnion = The46[] | string

type TerrainZ = FluffyZ[] | FillTer

type FluffyZ = The1_[] | TerElement

type The53 = The54[] | string

type The54 = ChunkElement[] | string

type The55 = The56[] | string

type The56 = ChunkElement[] | FillTer

type Toilets = {
  t?: ToiletsT
  T?: TClass
  "&"?: LClass
  ";"?: LClass
  "7"?: LClass
  "9"?: The9_Class
  B?: LClass
  i?: LClass
  "@"?: LClass
  P?: LClass
  "?"?: LClass
  a?: LClass
  "<"?: LClass
  $?: LClass
  U?: LClass
  "4"?: LClass
  L?: LClass
  "%"?: LClass
}

type The9_Class = {
  amount?: number
}

type ToiletsT = {
  "//"?: string
}

type TrapsClass = {
  "2"?: Traps2
  "3"?: string
  "4"?: string
  "5"?: string
  "6"?: string
  F?: string
  c?: string
  v?: string
  p?: GClass
  "1"?: GClass
  T?: string
  "^"?: string
  "."?: TrapsUnion[]
  f?: GClass
  g?: GClass
  q?: string
  "="?: Traps
}

type TrapsUnion = ChunkElement[] | string

type GClass = {
  trap: string
}

type Traps2 = GClass | string

type Traps = "tr_rollmat"

type VehiclesClass = {
  "."?: ØClass
  "*"?: ØClass
  ")"?: ØClass
  "]"?: ØClass
  V?: ØClass
  v?: ØClass
  G?: ØClass
  "&"?: ØClass
  "^"?: ØClass
  "'"?: Vehicles
  p?: Vehicles
  s?: ØClass
  Ø?: ØClass
  T?: ØClass
  c?: ØClass
  o?: ØClass
  J?: ØClass
  W?: ØClass
}

type ØClass = {
  vehicle: string
  chance: number
  status?: number
  rotation?: number
  fuel?: number
}

type Vehicles = {
  vehicle: string
  chance: number
}

type VendingmachinesClass = {
  U?: Vendingmachines
  F?: Vendingmachines
  l?: Vendingmachines
  m?: Vendingmachines
  V?: Vendingmachines
  M?: Vendingmachines
  "6"?: Vendingmachines
  "7"?: Vendingmachines
  "8"?: Vendingmachines
  "9"?: Vendingmachines
  W?: Vendingmachines
  "1"?: Vendingmachines
  "2"?: Vendingmachines
  "%"?: Vendingmachines
  v?: Vendingmachines
  D?: Vendingmachines
  J?: Vendingmachines
  C?: Vendingmachines
  K?: Vendingmachines
  u?: VendingmachinesU
  "["?: Vendingmachines
  "("?: Vendingmachines
}

type Vendingmachines = {
  item_group?: ItemGroup
}

type ItemGroup = "vending_drink" | "vending_food" | "farming_seeds"

type VendingmachinesU = {
  item_group: string
  reinforced: boolean
}

type OmTerrain = LElement[] | string

type MapgenType = "mapgen"
