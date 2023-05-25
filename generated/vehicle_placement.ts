type VehiclePlacement = {
  type: Type
  id: string
  locations: Location[]
}

type Location = {
  x: Facing
  y: Facing
  facing: Facing
}

type Facing = number[] | number

type Type = "vehicle_placement"
