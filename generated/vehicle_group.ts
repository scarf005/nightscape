type VehicleGroup = {
  type: Type
  id: string
  vehicles: Array<Vehicle[]>
  "//"?: string
}

type Type = "vehicle_group"

type Vehicle = number | string
