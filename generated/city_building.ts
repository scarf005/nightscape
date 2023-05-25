type CityBuilding = {
  type: Type
  id: string
  locations: Location[]
  overmaps: Overmap[]
  flags?: string[]
  "//"?: string
}

type Location = "land" | "swamp"

type Overmap = {
  point: number[]
  overmap: string
  locations?: Location[]
}

type Type = "city_building"
