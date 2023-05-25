type Monstergroup = {
  type: Type
  name: string
  default: string
  is_animal?: boolean
  monsters?: Monster[]
  "//"?: string
  is_safe?: boolean
}

type Monster = {
  monster: string
  freq: number
  cost_multiplier: number
  pack_size?: number[]
  conditions?: Condition[]
  starts?: number
  ends?: number
}

type Condition = "NIGHT" | "DAWN" | "DUSK" | "SPRING" | "SUMMER" | "AUTUMN" | "DAY"

type Type = "monstergroup"
