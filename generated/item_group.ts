type ItemGroup = {
  type: Type
  id: string
  subtype?: Subtype
  entries?: Entry[]
  items?: ItemElement[]
  groups?: ItemGroupGroup[]
  ammo?: number
  magazine?: number
  "//"?: string
  "//2"?: string
  "//3"?: string
}

type Entry = {
  item?: string
  count?: Charges
  charges?: Charges
  prob?: number
  "container-item"?: string
  collection?: EntryCollection[]
  group?: string
  "ammo-item"?: string
  distribution?: EntryDistribution[]
  damage?: Charges
  "charges-min"?: number
  "charges-max"?: number
  "//"?: string
  "damage-min"?: number
  "damage-max"?: number
  "count-min"?: number
  "count-max"?: number
  "contents-group"?: string
  "contents-item"?: ContentsItem
  dirt?: number[]
}

type Charges = number[] | number

type EntryCollection = {
  group?: string
  item?: string
  "ammo-item"?: string
  charges?: Charges
  prob?: number
  "container-item"?: string
  count?: number[]
  distribution?: PurpleDistribution[]
}

type PurpleDistribution = {
  item?: string
  prob: number
  group?: string
  "damage-min"?: number
  "damage-max"?: number
  collection?: PurpleCollection[]
}

type PurpleCollection = {
  item?: string
  group?: string
}

type ContentsItem = string[] | string

type EntryDistribution = {
  item?: string
  prob?: number
  collection?: FluffyCollection[]
  damage?: number[]
  group?: string
  count?: number[]
  charges?: number[]
  "container-item"?: string
  "charges-min"?: number
  "charges-max"?: number
  "damage-min"?: number
  "damage-max"?: number
  distribution?: PurpleTion[]
}

type FluffyCollection = {
  group?: string
  damage?: number[]
  item?: string
  "charges-min"?: number
  "charges-max"?: number
  prob?: number
  distribution?: FluffyDistribution[]
  count?: number[]
  collection?: CollectionCollection[]
}

type CollectionCollection = {
  item: string
  prob?: number
}

type FluffyDistribution = {
  group?: string
  prob?: number
  damage?: number[]
  item?: string
  collection?: PurpleTion[]
  "charges-min"?: number
  "charges-max"?: number
}

type PurpleTion = {
  group?: string
  prob?: number
  damage?: number[]
  item?: string
  distribution?: TentacledDistribution[]
  collection?: CollectionCollectionClass[]
}

type CollectionCollectionClass = {
  item: string
  prob: number
  damage: number[]
}

type TentacledDistribution = {
  distribution?: CollectionCollectionClass[]
  group?: string
  prob?: number
  damage?: number[]
  item?: string
  collection?: TentacledCollection[]
}

type TentacledCollection = {
  item: string
  damage: number[]
}

type ItemGroupGroup = ItemUnion[] | string

type ItemUnion = number | string

type ItemElement = ItemUnion[] | ItemClass

type ItemClass = {
  item?: string
  "count-min"?: number
  "count-max"?: number
  prob?: number
  "contents-group"?: string
  "container-item"?: string
  "custom-flags"?: string[]
  "ammo-item"?: string
  charges?: Charges
  count?: Charges
  "contents-item"?: string[]
  group?: string
  "charges-min"?: number
  "charges-max"?: number
  distribution?: ItemDistribution[]
  "container-group"?: ContainerGroup
  damage?: Charges
  "damage-min"?: number
  "damage-max"?: number
  collection?: ItemCollection[]
}

type ItemCollection = {
  item?: string
  prob?: number
  distribution?: StickyDistribution[]
  "count-min"?: number
  "count-max"?: number
}

type StickyDistribution = {
  item: string
  prob: number
  count: number[]
}

type ContainerGroup = "wine_glasses"

type ItemDistribution = {
  item?: string
  prob?: number
  collection?: StickyCollection[]
  distribution?: IndigoDistribution[]
  count?: number[]
  group?: string
  damage?: number[]
}

type StickyCollection = {
  item?: string
  prob?: number
  group?: string
}

type IndigoDistribution = {
  item: ItemEnum
}

type ItemEnum = "briefs" | "boxer_briefs" | "boxer_shorts"

type Subtype = "collection" | "distribution"

type Type = "item_group"
