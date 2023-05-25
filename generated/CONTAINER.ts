type Container = {
  id: string
  type: Type
  category?: Category
  name: Name
  description: string
  weight?: string
  volume?: string
  price?: number
  price_postapoc?: number
  to_hit?: number
  cutting?: number
  material?: Material
  symbol?: string
  color?: string
  contains?: string
  seals?: boolean
  watertight?: boolean
  use_action?: UseActionUnion
  flags?: string[]
  bashing?: number
  qualities?: Array<QualityElement[]>
  rigid?: boolean
  armor_data?: ArmorData
  looks_like?: string
  ascii_picture?: string
  preserves?: boolean
  unseals_into?: string
  "//"?: string
  "copy-from"?: string
  properties?: Array<string[]>
  container_data?: ContainerData
}

type ArmorData = {
  covers: string[]
  coverage: number
  encumbrance?: number
  material_thickness: number
  storage?: string
}

type Category = "tools" | "other" | "container"

type ContainerData = {
  contains: string
  seals: boolean
  watertight: boolean
}

type Material = string[] | string

type Name = {
  str: string
  str_pl?: string
}

type QualityElement = QualityEnum | number

type QualityEnum = "CONTAIN" | "BOIL"

type Type = "CONTAINER"

type UseActionUnion = UseActionClass | string

type UseActionClass = {
  type: string
  furn_type: string
}
