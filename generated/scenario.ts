type Scenario = {
  type: Type
  id: string
  name: string
  points: number
  description: string
  allowed_locs: string[]
  start_name: string
  flags: string[]
  missions?: string[]
  professions?: string[]
  forced_traits?: string[]
  forbidden_traits?: string[]
  traits?: string[]
  add_professions?: boolean
  vehicle?: string
  map_extra?: string
}

type Type = "scenario"
