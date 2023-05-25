type Palette = {
  type: Type
  id: string
  terrain?: TerrainClass
  furniture?: Furniture
  toilets?: ToiletsClass
  items?: ItemsClass
  vendingmachines?: Vendingmachines
  computers?: Computers
  nested?: Nested
  mapping?: Mapping
  "//"?: string
  liquids?: Liquids
  monster?: MonsterClass
  item?: PaletteItem
  signs?: Signs
  sealed_item?: { [key: string]: SealedItem }
  traps?: { [key: string]: Trap[] }
  gaspumps?: Gaspumps
  monsters?: Monsters
}

type Computers = {
  "6"?: The6
  A?: ComputersA
}

type The6 = {
  name: string
  options: The6_Option[]
  access_denied?: string
  security?: number
  failures?: Failure[]
}

type Failure = {
  action: string
}

type The6_Option = {
  name: string
  action: string
  security?: number
}

type ComputersA = {
  name: string
  security: number
  options: AOption[]
  failures: Failure[]
}

type AOption = {
  name: string
  action: string
}

type Furniture = {
  "0"?: Furniture0
  "%"?: string
  "@"?: The2_Union
  "#"?: string
  b?: FurnitureB
  "?"?: string
  S?: FurnitureS
  T?: FurnitureT
  n?: string
  c?: The2_Union
  C?: FurnitureC
  d?: The2_Union
  D?: The2_Union
  e?: string
  g?: The2_Union
  h?: FurnitureH
  M?: string
  k?: The2_Union
  l?: FurnitureLUnion
  o?: string
  O?: FurnitureO
  U?: The2_Union
  W?: The2_Union
  r?: R
  p?: FurniturePUnion
  R?: R
  t?: TEnum
  Y?: string
  B?: string
  F?: string
  a?: The2_Union
  A?: FurnitureA
  "^"?: Furniture1
  "["?: string
  "]"?: string
  "!"?: string
  "{"?: string
  K?: FurnitureK
  E?: The2_Union
  q?: string
  y?: Furniture1
  ")"?: string
  "("?: string
  i?: Furniture1
  "1"?: Furniture1
  "2"?: The2_Union
  "3"?: string
  "4"?: string
  "5"?: string
  "6"?: string
  "7"?: The2_Union
  "8"?: string
  "9"?: string
  V?: The2_Union
  P?: FurnitureP
  Q?: string
  I?: string
  s?: R
  w?: The2_Union
  L?: FurnitureL
  u?: The2_Union
  "&"?: The2_Union
  "}"?: string
  H?: string
  X?: FurnitureX
  j?: string
  J?: string
  "."?: Hilarious[]
  ","?: Sticky
  ";"?: Ambitious
  "|"?: Mischievous[]
  f?: string
  G?: string
  N?: string
  x?: FurnitureXUnion
  ":"?: string
  "+"?: string
  z?: FurnitureZ
  m?: string
  "="?: Magenta
  $?: string
  v?: FurnitureV
  "-"?: Indecent[]
  "‡"?: string
  Z?: string
  Ŧ?: string
  "♥"?: string
  "♠"?: string
  "♦"?: string
  "♣"?: string
  Δ?: string
  "Ʌ"?: string
  "*"?: string
  "/"?: string
  "~"?: string
  "▤"?: string
  "`"?: string
  "'"?: Fluffy
  " "?: FurnitureUnion[]
  í?: string
  "₸"?: string
  Ø?: string
  Æ?: string
  ʭ?: string
  "¤"?: Enum
}

type FurnitureUnion = ChunkElement[] | string

type ChunkElement = number | string

type The2_Union = string[] | string

type Fluffy = Tentacled[] | string

type Tentacled = ChunkElement[] | string

type Sticky = Indigo[] | string

type Indigo = ChunkElement[] | string

type Indecent = ChunkElement[] | string

type Hilarious = ChunkElement[] | string

type Furniture0 = Purple0[] | string

type Purple0 = ChunkElement[] | string

type Furniture1 = IElement[] | string

type IElement = "f_indoor_plant" | "f_indoor_plant_y" | "f_bigmirror" | "f_bigmirror_b"

type Ambitious = Cunning[] | string

type Cunning = ChunkElement[] | string

type Magenta = Frisky[] | string

type Frisky = ChunkElement[] | string

type FurnitureA = AElement[] | string

type AElement = ChunkElement[] | string

type FurnitureC = CElement[] | string

type CElement = ChunkElement[] | string

type FurnitureK = KElement[] | string

type KElement = ChunkElement[] | string

type FurnitureL = PurpleL[] | Enum

type PurpleL = ChunkElement[] | string

type Enum =
  | "f_fireplace"
  | "f_locker"
  | "f_utility_shelf"
  | "f_table"
  | "f_rack"
  | "f_shower"
  | "f_tourist_table"
  | "f_rack_coat"

type FurnitureO = OElement[] | string

type OElement = ChunkElement[] | string

type FurnitureP = PElement[] | string

type PElement = ChunkElement[] | string

type R = Enum[] | string

type FurnitureS = Array<ChunkElement[]> | string

type FurnitureT = PurpleT[] | string

type PurpleT = ChunkElement[] | string

type FurnitureX = XElement[] | string

type XElement = ChunkElement[] | string

type FurnitureB = PurpleB[] | string

type PurpleB = ChunkElement[] | string

type FurnitureH = HElement[] | string

type HElement = ChunkElement[] | string

type FurnitureLUnion = LElement[] | string

type LElement = ChunkElement[] | string

type FurniturePUnion = PP[] | string

type PP = ChunkElement[] | string

type TEnum = "f_table" | "f_toilet" | "f_trashcan" | "f_pool_table"

type FurnitureV = VVUnion[] | string

type VVUnion = ChunkElement[] | string

type FurnitureXUnion = PurpleX[] | string

type PurpleX = ChunkElement[] | string

type FurnitureZ = ZElement[] | string

type ZElement = ChunkElement[] | string

type Mischievous = ChunkElement[] | string

type Gaspumps = {
  "!": Class
}

type Class = {}

type PaletteItem = {
  O?: OClass
  ","?: Element
  n?: NElement
  "#"?: Element
  ":"?: OClass
}

type Element = {
  item: string
  chance?: number
  repeat?: number[]
}

type OClass = {
  item: string
  repeat: number[]
}

type NElement = {
  item: string
  chance?: number
}

type ItemsClass = {
  a?: Element
  "."?: NElement
  d?: KUnion
  D?: ItemsD
  e?: LUnion
  g?: Element
  k?: UUnion
  l?: LUnion
  o?: ItemsO
  r?: LUnion
  p?: Element
  R?: MUnion
  t?: TElement
  u?: ItemsS
  F?: F
  U?: UUnion
  y?: Element
  Y?: YUnion
  O?: UUnion
  L?: LUnion
  Q?: KUnion
  b?: YUnion
  f?: KUnion
  K?: KUnion
  x?: LUnion
  X?: LUnion
  "["?: Element
  B?: ItemsB
  P?: Element
  "@"?: Empty
  "("?: EElement
  w?: LUnion
  W?: J
  ")"?: Element
  m?: YUnion
  c?: CUnion
  C?: KUnion
  S?: YUnion
  T?: IUnion
  v?: ItemsV
  V?: NElement
  "^"?: NElement
  "{"?: LUnion
  "}"?: Element
  " "?: The4_Union
  "="?: Element
  "-"?: NElement
  A?: ItemsA
  E?: EElement
  "*"?: EElement
  "/"?: NElement
  i?: IUnion
  s?: ItemsS
  "!"?: NElement
  "&"?: Element
  n?: IUnion
  "8"?: LUnion
  "9"?: Element
  Z?: NElement
  z?: Element[]
  N?: ItemsN
  J?: J
  j?: LUnion
  M?: MUnion
  I?: ItemsI
  $?: NElement
  "]"?: NElement
  "1"?: The4_Union
  "2"?: Items2
  "3"?: NElement[]
  _?: ItemsN
  "%"?: Element
  "?"?: Element
  ","?: NElement
  "4"?: The4_Union
  "5"?: The5_Union
  "6"?: Element[]
  h?: NElement
  H?: NElement
  "7"?: The4_Union
  q?: Element[]
  "¤"?: NElement
  "|"?: NElement
}

type The4_Union = NElement[] | NElement

type EElement = {
  item: string
  chance: number
  repeat?: number
}

type Items2 = ItemElement[] | Element

type ItemElement = {
  item: string
}

type The5_Union = ItemElement[] | NElement

type LUnion = Element[] | Element

type Empty = {
  item: Item
  chance: number
  repeat?: Repeat
}

type Item = PurpleItem | string

type PurpleItem = {
  subtype: string
  entries: DistributionElement[]
}

type DistributionElement = {
  group: string
}

type Repeat = number[] | number

type ItemsA = Element[] | AAClass

type AAClass = {
  item: AItem
  repeat?: number[]
  chance: number
}

type AItem = FluffyItem | string

type FluffyItem = {
  subtype: string
  entries: PurpleEntry[]
}

type PurpleEntry = {
  item?: string
  prob: number
  collection?: Collection[]
}

type Collection = {
  item: string
  count?: number[]
}

type ItemsB = EElement[] | BClass

type BClass = {
  item: BItem
  chance: number
  repeat?: Repeat
}

type BItem = TentacledItem | string

type TentacledItem = {
  subtype: string
  entries: FluffyEntry[]
}

type FluffyEntry = {
  item: string
  prob: number
  count?: number[]
}

type KUnion = Element[] | TElement

type TElement = {
  item: string
  chance?: number
  repeat?: Repeat
}

type ItemsD = Element[] | DClass

type DClass = {
  item: DItem
  chance: number
  repeat?: Repeat
}

type DItem = StickyItem | string

type StickyItem = {
  subtype: string
  entries: TentacledEntry[]
}

type TentacledEntry = {
  item: string
  prob: number
}

type F = EElement[] | DClass

type ItemsI = NElement[] | EElement

type J = TElement[] | NElement

type MUnion = EElement[] | Element

type ItemsN = Element[] | EElement

type UUnion = TElement[] | TElement

type YUnion = NElement[] | Element

type IUnion = TElement[] | Element

type CUnion = EElement[] | NElement

type ItemsO = Element[] | OOClass

type OOClass = {
  item: OItem
  chance: number
  repeat?: Repeat
}

type OItem = IndigoItem | string

type IndigoItem = {
  subtype: string
  entries: StickyEntry[]
}

type StickyEntry = {
  group?: string
  distribution?: DistributionElement[]
}

type ItemsS = Element[] | NElement

type ItemsV = VClass[] | NElement

type VClass = {
  item: string
  chance: number
  repeat?: number[]
  ammo?: number
  magazine?: number
}

type Liquids = {
  g?: The0_Class
  "6"?: The0_Class
  "7"?: The0_Class
  H?: The0_Class
  "0"?: The0_Class
}

type The0_Class = {
  liquid: string
  amount: number[]
}

type Mapping = {
  c?: SClass
  S?: SClass
  X?: SClass
  d?: MappingD
  h?: HClass
  "]"?: FClass
  l?: SClass
  f?: MappingF
  s?: SClass
  b?: SClass
  r?: SClass
  "8"?: The8_Class
  A?: A
  E?: The8_Class
  F?: FClass
  a?: FClass
  t?: A
}

type The8_Class = {
  item: EElement
}

type A = {
  items: EElement
}

type FClass = {
  items: EElement[]
}

type SClass = {
  items: NElement[]
}

type MappingD = {
  items: ItemsI
}

type MappingF = {
  items: ItemsUnion
}

type ItemsUnion = EElement[] | EElement

type HClass = {
  item: NElement[]
}

type MonsterClass = {
  " ": Monster
}

type Monster = {
  monster: string
  chance: number
}

type Monsters = {
  "!": Monster[]
  ".": Monster[]
}

type Nested = {
  d: NestedD
}

type NestedD = {
  chunks: Array<ChunkElement[]>
}

type SealedItem = {
  item: ItemElement
  furniture: string
}

type Signs = {
  M: M
}

type M = {
  signage: string
}

type TerrainClass = {
  "0"?: Terrain0
  "1"?: Terrain1
  "2"?: The2_Union
  "3"?: string
  "4"?: string
  "5"?: The2_Union
  "7"?: Terrain7
  "*"?: The13
  "~"?: The35
  H?: The2_Union
  " "?: TerrainUnion
  b?: TerrainBUnion
  $?: The4
  ";"?: The26
  "+"?: The15
  i?: TerrainI
  e?: string
  O?: string
  W?: TerrainW
  S?: TerrainS
  T?: TerrainT
  U?: string
  C?: string
  g?: string
  k?: string
  "-"?: The20
  G?: string
  L?: TerrainL
  _?: The31
  f?: string
  s?: TerrainSUnion
  w?: TerrainWUnion
  x?: TerrainX
  "|"?: The33
  I?: The2_Union
  ","?: The18
  ":"?: The2_Union
  m?: TerrainM
  "/"?: The24
  "="?: The28
  "<"?: Terrain
  ">"?: TerrainEnum
  z?: string
  u?: U
  Z?: TerrainZ
  "["?: The29
  "]"?: string
  "'"?: The11
  y?: string
  j?: string
  "6"?: string
  r?: The2_Union
  l?: The2_Union
  B?: TerrainB
  q?: string
  "."?: The22
  o?: TerrainO
  "#"?: The2
  Q?: The2_Union
  "%"?: The7
  R?: TerrainR
  J?: string
  D?: TerrainD
  V?: The2_Union
  v?: The2_Union
  "("?: string
  ")"?: The2_Union
  X?: The2_Union
  N?: TerrainN
  "9"?: The2_Union
  "?"?: The2_Union
  p?: The2_Union
  "!"?: Braggadocious
  "@"?: The2_Union
  A?: The2_Union
  "&"?: The9
  t?: The2_Union
  M?: The2_Union
  "{"?: string
  F?: string
  Y?: string
  c?: string
  n?: The2_Union
  h?: The2_Union
  "`"?: The2_Union
  "^"?: string
  a?: string
  E?: string
  "}"?: string
  P?: string
  d?: The2_Union
  "8"?: Terrain8
  K?: string
  Ŋ?: string
  "ȴ"?: string
  "ȸ"?: string
  í?: string
  "¶"?: string
}

type TerrainUnion = Union[] | string

type Union = ChunkElement[] | string

type Braggadocious = The1[] | string

type The1 = ChunkElement[] | string

type The2 = The3[] | string

type The3 = ChunkElement[] | string

type The4 = The5[] | string

type The5 = ChunkElement[] | string

type The7 = The8[] | string

type The8 = ChunkElement[] | string

type The9 = The10[] | string

type The10 = ChunkElement[] | string

type The11 = The12[] | string

type The12 = ChunkElement[] | string

type The13 = The14[] | string

type The14 = ChunkElement[] | string

type The15 = The16[] | string

type The16 = The17[] | string

type The17 = Purple | number

type Purple = "t_door_c" | "t_door_o" | "t_door_locked_interior"

type The18 = The19[] | string

type The19 = ChunkElement[] | string

type The20 = The21[] | string

type The21 = ChunkElement[] | string

type The22 = The23[] | string

type The23 = ChunkElement[] | string

type The24 = The25[] | string

type The25 = ChunkElement[] | string

type Terrain0 = Fluffy0[] | string

type Fluffy0 = ChunkElement[] | string

type Terrain1 = The1_1_Union[] | string

type The1_1_Union = ChunkElement[] | string

type Terrain7 = The7_Element[] | string

type The7_Element = ChunkElement[] | string

type Terrain8 = The8_Element[] | string

type The8_Element = ChunkElement[] | string

type The26 = The27[] | string

type The27 = ChunkElement[] | string

type Terrain =
  | "t_stairs_down"
  | "t_stairs_up"
  | "t_ladder_up"
  | "t_sidewalk_ramp_up_high"
  | "t_slope_up"
  | "t_wood_stairs_up"

type The28 = The16[] | string

type TerrainEnum =
  | "t_stairs_up"
  | "t_stairs_down"
  | "t_sidewalk_ramp_down_low"
  | "t_ladder_down"
  | "t_slope_down"
  | "t_wood_stairs_down"

type TerrainB = BElement[] | string

type BElement = ChunkElement[] | string

type TerrainD = DElement[] | string

type DElement = ChunkElement[] | string

type TerrainL = FluffyL[] | string

type FluffyL = ChunkElement[] | string

type TerrainN = NN[] | string

type NN = ChunkElement[] | string

type TerrainR = RElement[] | string

type RElement = ChunkElement[] | string

type TerrainS = S[] | string

type S = ChunkElement[] | string

type TerrainT = FluffyT[] | string

type FluffyT = ChunkElement[] | string

type TerrainW = WElement[] | string

type WElement = ChunkElement[] | string

type TerrainZ = ZZ[] | string

type ZZ = ChunkElement[] | string

type The29 = The30[] | string

type The30 = ChunkElement[] | string

type The31 = The32[] | string

type The32 = ChunkElement[] | string

type TerrainBUnion = FluffyB[] | string

type FluffyB = ChunkElement[] | string

type TerrainI = Array<ChunkElement[]> | string

type TerrainM = MElement[] | string

type MElement = ChunkElement[] | string

type TerrainO = OOUnion[] | string

type OOUnion = ChunkElement[] | string

type TerrainSUnion = SUnion[] | string

type SUnion = ChunkElement[] | string

type U = Array<ChunkElement[]> | string

type TerrainWUnion = WW[] | string

type WW = ChunkElement[] | string

type TerrainX = FluffyX[] | string

type FluffyX = ChunkElement[] | string

type The33 = The34[] | string

type The34 = ChunkElement[] | string

type The35 = The36[] | string

type The36 = ChunkElement[] | string

type ToiletsClass = {
  T?: Class
  "&"?: Toilets
  t?: Class
  ";"?: Class
}

type Toilets = {
  amount?: number[]
}

type Trap = ChunkElement[] | string

type Type = "palette"

type Vendingmachines = {
  "8"?: The4_Class
  "9"?: The4_Class
  "4"?: The4_Class
  "5"?: The4_Class
  v?: The4_Class
  V?: The4_Class
  D?: The4_Class
  F?: The4_Class
}

type The4_Class = {
  item_group?: ItemGroup
}

type ItemGroup = "vending_drink" | "vending_food"
