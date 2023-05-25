type VehicleSpawn = {
  type: string
  id: string
  spawn_types: SpawnType[]
}

type SpawnType = {
  "//": string
  weight: number
  vehicle_function?: string
  vehicle_json?: VehicleJSON
}

type VehicleJSON = {
  vehicle: string
  placement: string
  number: Number
  fuel: number
  status: number
}

type Number = number[] | number
