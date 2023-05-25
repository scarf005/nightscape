type Achievement = {
  id: string
  type: Type
  name: Name
  requirements: Requirement[]
  time_constraint?: TimeConstraint
  hidden_by?: string[]
  description?: string
  "//"?: string
  skill_requirements?: SkillRequirement[]
}

type Name = {
  str: string
}

type Requirement = {
  event_statistic: string
  is: Is
  target?: number
}

type Is = ">=" | "anything" | "<="

type SkillRequirement = {
  skill: string
  is: Is
  level: number
}

type TimeConstraint = {
  since: string
  is: Is
  target: string
}

type Type = "achievement"
