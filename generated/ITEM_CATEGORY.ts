type ItemCategory = {
  id: string
  type: Type
  name: Name
  zone?: string
  sort_rank: number
  priority_zones?: PriorityZone[]
  "//"?: string
}

type Name = {
  str: string
}

type PriorityZone = {
  id: string
  filthy: boolean
}

type Type = "ITEM_CATEGORY"
