type Gate = {
  type: string
  id: string
  alias?: string[]
  door: string
  floor: string
  walls: Walls
  messages: Messages
  moves: number
  bashing_damage: number
}

type Messages = {
  pull: string
  open: string
  close: string
  fail: string
}

type Walls = string[] | string
