type OvermapConnection = {
  type: string
  id: string
  default_terrain: string
  subtypes: Subtype[]
}

type Subtype = {
  terrain: string
  locations: string[]
  basic_cost?: number
  flags?: string[]
}
