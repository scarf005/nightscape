type Fault = {
  id: string
  type: Type
  name: Name
  description: string
  mending_methods: MendingMethod[]
  flags?: string[]
}

type MendingMethod = {
  id: string
  name: string
  success_msg: string
  time: string
  skills: Skill[]
  requirements: Requirements
  turns_into?: string
  also_mends?: string
  description?: string
}

type Requirements = {
  tools?: Array<Array<Component[]>>
  components?: Array<Array<Component[]>>
  qualities?: Skill[]
}

type Component = number | string

type Skill = {
  id: string
  level: number
}

type Name = {
  str: string
}

type Type = "fault"
