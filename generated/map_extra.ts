type MapExtra = {
  id: string
  type: Type
  name: NameUnion
  description: string
  generator: Generator
  sym?: string
  color?: string
  autonote?: boolean
}

type Generator = {
  generator_method: GeneratorMethod
  generator_id: string
}

type GeneratorMethod = "null" | "map_extra_function" | "update_mapgen"

type NameUnion = NameClass | string

type NameClass = {
  str: string
}

type Type = "map_extra"
