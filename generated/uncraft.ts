type Uncraft = {
  result?: string
  type: Type
  time?: string
  components?: Array<Array<Component[]>>
  flags?: Flag[]
  using?: Array<UsingElement[]>
  skill_used?: SkillUsed
  difficulty?: number
  qualities?: QualityUnion[]
  charges?: number
  skills_required?: SkillsRequired[]
  "copy-from"?: Abstract
  tools?: Array<Array<Component[]>>
  decomp_learn?: UncraftDecompLearn
  "//"?: string
  abstract?: Abstract
}

type Abstract = "crown_golden" | "ammo_cartridge"

type Component = number | string

type UncraftDecompLearn = Array<DecompLearnElement[]> | number

type DecompLearnElement = SkillUsed | number

type SkillUsed = "gun" | "fabrication" | "tailor" | "electronics" | "mechanics" | "survival"

type Flag = "BLIND_EASY" | "BLIND_HARD" | "UNCRAFT_LIQUIDS_CONTAINED"

type QualityUnion = PurpleQuality[] | FluffyQuality

type PurpleQuality = {
  id: ID
  level: number
}

type ID =
  | "PULL"
  | "CUT_FINE"
  | "CUT"
  | "HAMMER"
  | "SCREW"
  | "SAW_M"
  | "WRENCH"
  | "SCREW_FINE"
  | "WRENCH_FINE"
  | "SAW_M_FINE"

type FluffyQuality = {
  id: ID
  level: number
  amount?: number
}

type SkillsRequired = DecompLearnElement[] | number | string

type Type = "uncraft"

type UsingElement = UsingEnum | number

type UsingEnum =
  | "mre_accessory_list"
  | "mre_dessert_list"
  | "mre_extras_list"
  | "soldering_standard"
  | "welding_standard"
  | "ammo_9mm"
  | "ammo_762_25"
  | "ammo_380"
