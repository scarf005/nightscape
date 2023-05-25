type Npc = {
  type: Type
  id: string
  "//"?: string
  name_suffix?: string
  class: string
  attitude: number
  mission: number
  chat: string
  faction: string
  mission_offered?: string
  name_unique?: string
  gender?: Gender
  "//2"?: string
}

type Gender = "female" | "male"

type Type = "npc"
