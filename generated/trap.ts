type Trap = {
  type: Type
  id: string
  name: string
  color: string
  symbol: string
  visibility: number
  avoidance: number
  difficulty: number
  action: string
  benign?: boolean
  drops?: DropElement[]
  vehicle_data?: VehicleData
  comfort?: number
  floor_bedding_warmth?: number
  funnel_radius?: number
  map_regen?: string
  trigger_weight?: number
  trap_radius?: number
  always_invisible?: boolean
}

type DropElement = DropClass | string

type DropClass = {
  item: string
  quantity: number
  charges: number
}

type Type = "trap"

type VehicleData = {
  sound_volume?: number
  sound?: string
  damage?: number
  sound_type?: string
  sound_variant?: string
  remove_trap?: boolean
  spawn_items?: SpawnItemElement[]
  chance?: number
  set_trap?: string
  do_explosion?: boolean
  shrapnel?: number
  is_falling?: boolean
}

type SpawnItemElement = SpawnItemClass | string

type SpawnItemClass = {
  id: string
  chance: number
}
