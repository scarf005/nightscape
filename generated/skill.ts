type Skill = {
  type: Type
  id: string
  name: Name
  description: string
  display_category: string
  companion_survival_rank_factor?: number
  companion_skill_practice?: CompanionSkillPractice[]
  companion_industry_rank_factor?: number
  tags?: Tag[]
  time_to_attack?: TimeToAttack
  companion_combat_rank_factor?: number
}

type CompanionSkillPractice = {
  skill: string
  weight: number
}

type Name = {
  str: string
}

type Tag = "combat_skill" | "contextual_skill"

type TimeToAttack = {
  min_time: number
  base_time: number
  time_reduction_per_level: number
}

type Type = "skill"
