type Battery = {
  id: string
  type: string
  category: string
  name: Name
  description: string
  weight: string
  volume: string
  price: number
  price_postapoc: number
  material: string[]
  symbol: string
  color: string
  max_capacity: string
  looks_like: string
  flags: string[]
}

type Name = {
  str: string
  str_pl: string
}
