type Toolmod = {
  abstract?: string
  type: string
  name: Name
  weight?: string
  volume?: string
  material?: string[]
  symbol?: string
  color?: string
  acceptable_ammo?: string[]
  id?: string
  "copy-from"?: string
  category?: string
  description?: string
  flags?: string[]
  magazine_adaptor?: Array<MagazineAdaptor[]>
  price?: number
  capacity_multiplier?: number
}

type MagazineAdaptor = string[] | string

type Name = {
  str: string
}
