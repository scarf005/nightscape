type ClothingMod = {
  type: string
  id: string
  flag: string
  item: string
  implement_prompt: string
  destroy_prompt: string
  mod_value: ModValue[]
  restricted?: boolean
}

type ModValue = {
  type: string
  value: number
  proportion?: Proportion[]
  round_up?: boolean
}

type Proportion = "thickness" | "coverage"
