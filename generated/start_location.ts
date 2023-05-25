type StartLocation = {
  type: Type
  id: string
  name: string
  terrain?: TerrainElement[]
  "copy-from"?: string
  extend?: Extend
  flags?: string[]
}

type Extend = {
  flags: string[]
}

type TerrainElement = TerrainClass | string

type TerrainClass = {
  om_terrain: string
  om_terrain_match_type: OmTerrainMatchType
}

type OmTerrainMatchType = "PREFIX" | "TYPE" | "CONTAINS"

type Type = "start_location"
