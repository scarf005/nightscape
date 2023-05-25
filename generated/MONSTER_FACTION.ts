type MonsterFaction = {
  type: Type
  name: string
  base_faction?: string
  by_mood?: ByMood
  friendly?: ByMood
  neutral?: ByMood
}

type ByMood = string[] | string

type Type = "MONSTER_FACTION"
