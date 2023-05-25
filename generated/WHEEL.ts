type Wheel = {
  id: string
  type: Type
  category?: Category
  name: Name
  description: string
  weight?: string
  volume?: string
  price?: number
  price_postapoc?: number
  bashing?: number
  to_hit?: number
  material?: string[]
  symbol?: Symbol
  color?: string
  diameter?: number
  width?: number
  "copy-from"?: string
  relative?: Relative
  looks_like?: string
}

type Category = "veh_parts"

type Name = {
  str: string
  str_pl?: string
}

type Relative = {
  weight: number
}

type Symbol = "]" | "=" | "m" | "H"

type Type = "WHEEL"
