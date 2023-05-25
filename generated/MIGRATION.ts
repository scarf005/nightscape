type Migration = {
  replace: string
  type: Type
  id: ID
  flags?: Flag[]
  charges?: number
  contents?: string[]
}

type Flag = "DIAMOND" | "HIDDEN_HALLU"

type ID = string[] | string

type Type = "MIGRATION"
