type ProfessionItemSubstitutions = {
  type: Type
  trait?: string
  sub?: Sub[]
  item?: string
  bonus?: Bonus
}

type Bonus = {
  present: string[]
  absent?: string[]
}

type Sub = {
  item?: string
  new: NewElement[]
  present?: string[]
  absent?: string[]
}

type NewElement = NewClass | string

type NewClass = {
  item: string
  ratio: number
}

type Type = "profession_item_substitutions"
