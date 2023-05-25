type Vehicle = {
  id: string
  type: Type
  name: string
  parts: VehiclePart[]
  items?: Item[]
  blueprint?: Blueprint[]
  "//"?: string
}

type Blueprint = string[] | string

type Item = {
  x: number
  y: number
  chance: number
  items?: Blueprint
  item_groups?: Blueprint
  ammo?: number
  magazine?: number
  "//"?: Empty
  "//repeat"?: number
}

type Empty = {
  item: string
  "container-item": string
}

type VehiclePart = {
  x: number
  y: number
  part?: string
  fuel?: Fuel
  ammo?: number
  ammo_types?: string[]
  ammo_qty?: number[]
  parts?: PartUnion[]
}

type Fuel = "jp8" | "gasoline" | "diesel" | "water_clean" | "water" | "coal_lump"

type PartUnion = PartPartClass | string

type PartPartClass = {
  part: string
  fuel?: Fuel
  ammo_types?: string[]
  ammo?: number
  ammo_qty?: number[]
}

type Type = "vehicle"
