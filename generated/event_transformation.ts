type EventTransformation = {
  id: string
  type: Type
  event_type?: string
  value_constraints?: ValueConstraints
  drop_fields?: DropField[]
  event_transformation?: string
  new_fields?: NewFields
}

type DropField = "character" | "killer" | "victim_type" | "category" | "skill"

type NewFields = {
  species?: Species
  terrain_flag?: TerrainFlag
  swimming?: Swimming
  mounted?: NewFieldsMounted
}

type NewFieldsMounted = {
  is_mounted: string
}

type Species = {
  species_of_monster: DropField
}

type Swimming = {
  is_swimming_terrain: string
}

type TerrainFlag = {
  flags_of_terrain: string
}

type Type = "event_transformation"

type ValueConstraints = {
  character?: Character
  killer?: Character
  species?: Category
  movement_mode?: Category
  mounted?: SwimmingClass
  swimming?: SwimmingClass
  underwater?: SwimmingClass
  terrain_flag?: Category
  category?: Category
  skill?: Category
}

type Category = {
  equals: string
}

type Character = {
  equals_statistic: EqualsStatistic
}

type EqualsStatistic = "avatar_id"

type SwimmingClass = {
  equals: boolean
}
