type Species = {
  type: Type
  id: string
  description?: string
  fear_triggers?: RTrigger[]
  footsteps?: string
  anger_triggers?: RTrigger[]
}

type RTrigger = "HURT" | "FIRE" | "FRIEND_DIED" | "SOUND" | "FRIEND_ATTACKED"

type Type = "SPECIES"
