type Behavior = {
  type: Type
  id: string
  strategy?: string
  children?: string[]
  predicate?: string
  goal?: string
}

type Type = "behavior"
