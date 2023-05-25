type ActivityType = {
  id: string
  type: Type
  verb: string
  suspendable?: boolean
  based_on: BasedOn
  no_resume?: boolean
  rooted?: boolean
  refuel_fires?: boolean
  auto_needs?: boolean
  multi_activity?: boolean
}

type BasedOn = "speed" | "neither" | "time"

type Type = "activity_type"
