type Recipe = {
  type: Type
  result: string
  category?: Category
  subcategory?: string
  skill_used?: SkillUsed
  time?: Time
  autolearn?: RecipeAutolearn
  reversible?: boolean
  flags?: Flag[]
  components?: Array<Array<Time[]>>
  difficulty?: number
  batch_time_factors?: number[]
  tools?: Array<Array<Time[]>>
  book_learn?: Array<Time[]>
  qualities?: QualityUnion[]
  skills_required?: SkillsRequired[]
  result_mult?: number
  id_suffix?: string
  "//"?: string
  byproducts?: Array<Time[]>
  charges?: number
  using?: Array<Time[]>
  never_learn?: boolean
  decomp_learn?: DecompLearn
  contained?: boolean
  description?: string
  construction_blueprint?: string
  blueprint_provides?: Blueprint[]
  blueprint_requires?: Blueprint[]
  blueprint_name?: string
  check_blueprint_needs?: boolean
  blueprint_excludes?: Blueprint[]
  blueprint_needs?: BlueprintNeeds
  blueprint_resources?: string[]
  "//blueprint_requires"?: BlueprintRequire[]
  "copy-from"?: string
  "//2"?: string
  delete_flags?: DeleteFlag[]
  container?: Container
  obsolete?: boolean
}

type BlueprintRequire = {
  id: string
}

type RecipeAutolearn = Array<AutolearnElement[]> | boolean

type AutolearnElement = SkillUsed | number

type SkillUsed =
  | "cooking"
  | "electronics"
  | "mechanics"
  | "fabrication"
  | "gun"
  | "tailor"
  | "survival"
  | "computer"
  | "launcher"
  | "traps"
  | "firstaid"
  | "throw"
  | "melee"
  | "bashing"
  | "unarmed"
  | "shotgun"
  | "archery"
  | "rifle"
  | "pistol"
  | "stabbing"

type Blueprint = {
  id: string
  amount?: number
}

type BlueprintNeeds = {
  time?: string
  skills?: Array<AutolearnElement[]>
  inline?: Inline
}

type Inline = {
  tools: Array<Array<ToolElement[]>>
  qualities: Array<InlineQuality[]>
  components: Array<Array<Time[]>>
}

type Time = number | string

type InlineQuality = {
  id: ID
  level?: number
}

type ID =
  | "DIG"
  | "HAMMER"
  | "SAW_M"
  | "SAW_W"
  | "CUT"
  | "WRENCH"
  | "GLARE"
  | "SMOOTH"
  | "SCREW"
  | "DRILL"
  | "CHEM"
  | "CONTAIN"
  | "BOIL"
  | "DISTILL"
  | "FINE_DISTILL"
  | "CHISEL"
  | "COOK"
  | "ANVIL"
  | "SCREW_FINE"
  | "WRENCH_FINE"
  | "SAW_M_FINE"
  | "CUT_FINE"
  | "SEW"
  | "HAMMER_FINE"
  | "AXE"
  | "PRESSURIZATION"
  | "KNIT"
  | "WELD"
  | "BUTCHER"
  | "CHURN"

type ToolElement = ToolEnum | number

type ToolEnum =
  | "fake_gridwelder"
  | "oxy_torch"
  | "toolset"
  | "welder"
  | "welder_crude"
  | "frame_wood_light"
  | "log"
  | "fake_gridsolderingiron"
  | "soldering_iron"

type Category =
  | "CC_CHEM"
  | "CC_OTHER"
  | "CC_ELECTRONIC"
  | "CC_WEAPON"
  | "CC_BUILDING"
  | "CC_ANIMALS"
  | "CC_AMMO"
  | "CC_ARMOR"
  | "CC_FOOD"

type Container = "plastic_bag_vac" | "jar_glass_sealed" | "jar_3l_glass_sealed" | "can_medium"

type DecompLearn = any[] | number

type DeleteFlag = "FILTHY" | "BAD_TASTE" | "HIDDEN_POISON"

type Flag = "BLIND_HARD" | "ALLOW_ROTTEN" | "SECRET" | "BLIND_EASY" | "ALLOW_FILTHY" | "NO_RESIZE"

type QualityUnion = InlineQuality[] | PurpleQuality

type PurpleQuality = {
  id: ID
  level: number
  amount?: number
}

type SkillsRequired = AutolearnElement[] | SkillUsed | number

type Type = "recipe"
