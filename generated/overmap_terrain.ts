type OvermapTerrain = {
  id?: ID
  type: Type
  name?: string
  "//"?: string
  sym?: string
  color?: string
  mondensity?: number
  see_cost?: number
  flags?: string[]
  spawns?: Spawns
  "copy-from"?: string
  delete?: Delete
  extend?: Delete
  abstract?: string
  extras?: string
  looks_like?: string
  mapgen?: Mapgen[]
  land_use_code?: string
  connect_group?: string
  mapgen_straight?: MapgenCurvedElement[]
  mapgen_curved?: MapgenCurvedElement[]
  mapgen_end?: MapgenCurvedElement[]
  mapgen_tee?: MapgenCurvedElement[]
  mapgen_four_way?: MapgenCurvedElement[]
}

type Delete = {
  flags: string[]
}

type ID = string[] | string

type Mapgen = {
  method: Method
  name?: string
  weight?: number
  object?: Object
}

type Method = "builtin" | "json"

type Object = {
  fill_ter: string
  rows: string[]
  terrain: Terrain
  furniture: Furniture
  set: Set[]
}

type Furniture = {
  d: string
  O: string
  r: string
  t: string
  T: string
  S: string
  e: string
  h: string
  c: string
  l: string
  "#": string
}

type Set = {
  point: string
  x: number[]
  y: number
  id: string
  repeat: number[]
}

type Terrain = {
  "5": string
  "6": string
  " ": string
  d: string
  "%": string
  O: string
  ",": string
  _: string
  r: string
  x: string
  "^": string
  ".": string
  "-": string
  "|": string
  "#": string
  t: string
  "+": string
  "=": string
  D: string
  w: string
  T: string
  S: string
  e: string
  h: string
  c: string
  l: string
  s: string
}

type MapgenCurvedElement = {
  method: Method
  name: string
}

type Spawns = {
  group: string
  population: number[]
  chance: number
}

type Type = "overmap_terrain"
