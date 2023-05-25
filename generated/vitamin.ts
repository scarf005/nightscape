type Vitamin = {
  id: string
  type: string
  vit_type: string
  name: Name
  deficiency?: string
  min: number
  rate: string
  disease?: Array<number[]>
  excess?: string
  max?: number
  disease_excess?: Array<number[]>
  flags?: string[]
}

type Name = {
  str: string
}
