type Requirement = {
  id: string
  type: Type
  "//"?: string
  qualities?: Quality[]
  components?: Array<Array<Component[]>>
  tools?: Array<Array<Component[]>>
}

type Component = number | string

type Quality = {
  id: string
  level: number
}

type Type = "requirement"
