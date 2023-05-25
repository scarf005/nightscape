type Faction = {
  type: Type
  id: string
  name: string
  likes_u: number
  respects_u: number
  known_by_u: boolean
  size: number
  power: number
  food_supply: number
  wealth: number
  relations: { [key: string]: Relation }
  mon_faction?: string
  epilogues?: Epilogue[]
  description: string
  currency?: string
  lone_wolf_faction?: boolean
}

type Epilogue = {
  power_min: number
  power_max?: number
  id: string
}

type Relation = {
  "kill on sight"?: boolean
  "watch your back"?: boolean
  "share my stuff"?: boolean
  "guard your stuff"?: boolean
  "lets you in"?: boolean
  "defends your space"?: boolean
  "knows your voice"?: boolean
}

type Type = "faction"
