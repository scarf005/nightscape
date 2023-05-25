type OvermapSpecial = {
  type: Type
  id: string
  overmaps: Overmap[]
  connections?: ConnectionElement[]
  locations?: OvermapSpecialLocation[]
  city_distance?: number[]
  city_sizes?: number[]
  occurrences: number[]
  flags?: Flag[]
  "//"?: string
  rotate?: boolean
  spawns?: Spawns
}

type ConnectionElement = {
  point: number[]
  connection: ConnectionEnum
  from?: number[]
  existing?: boolean
}

type ConnectionEnum = "local_road" | "sewer_tunnel" | "subway_tunnel"

type Flag =
  | "WILDERNESS"
  | "UNIQUE"
  | "BLOB"
  | "CLASSIC"
  | "ELECTRIC_GRID"
  | "FARM"
  | "URBAN"
  | "BEE"
  | "LAB"
  | "ANT"
  | "ENDGAME"
  | "MILITARY"
  | "LAKE"
  | "SLIME"
  | "FUNGAL"
  | "TRIFFID"
  | "MI-GO"

type OvermapSpecialLocation =
  | "wilderness"
  | "land"
  | "water"
  | "forest"
  | "forest_without_trail"
  | "field"
  | "lake_surface"
  | "swamp"

type Overmap = {
  point: number[]
  overmap: string
  locations?: OvermapLocation[]
}

type OvermapLocation = "lake_surface" | "lake_shore" | "land"

type Spawns = {
  group: string
  population: number[]
  radius: number[]
}

type Type = "overmap_special"
