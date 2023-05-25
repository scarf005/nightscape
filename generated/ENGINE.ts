type Engine = {
  abstract?: Abstract
  type: Type
  category?: string
  name: Name
  material?: string
  symbol?: string
  color?: string
  "copy-from"?: Abstract
  faults?: string[]
  looks_like?: string
  id?: string
  description?: string
  weight?: string
  volume?: string
  price?: Price
  price_postapoc?: Price
  displacement?: number
}

type Abstract = "engine_combustion" | "engine_gasoline" | "engine_diesel" | "engine_steam"

type Name = {
  str: string
}

type Price = number | string

type Type = "ENGINE"
