type Construction = {
  type: Type
  id: string
  "//"?: string
  category?: Category
  required_skills?: Array<RequiredSkillElement[]>
  time?: string
  using?: Array<UsingElement[]>
  byproducts?: ByproductsUnion
  pre_terrain?: string
  post_terrain?: string
  group?: string
  pre_furniture?: string
  post_furniture?: string
  qualities?: QualityUnion[]
  pre_special?: PreSpecial
  post_flags?: string[]
  post_special?: string
  pre_note?: string
  pre_flags?: PreFlags
  dark_craftable?: boolean
  components?: Array<Array<Component[]>>
  tools?: Array<Tool[]>
  "copy-from"?: string
  "//2"?: string
  vehicle_start?: boolean
  on_display?: boolean
}

type ByproductsUnion = Byproduct[] | ByproductsEnum

type Byproduct = {
  item: string
  count?: number[]
  charges?: number[]
}

type ByproductsEnum =
  | "concrete_deconstruction_results"
  | "wall_deconstruction_results"
  | "road_deconstruction_results"
  | "metal_door_deconstruction_results"

type Category =
  | "CONSTRUCT"
  | "FURN"
  | "OTHER"
  | "DIG"
  | "FARM_WOOD"
  | "REPAIR"
  | "REINFORCE"
  | "WINDOWS"
  | "DECORATE"
  | "WORKSHOP"

type Component = number | string

type PreFlags = PreFlag[] | string

type PreFlag = "DIGGABLE" | "FLAT"

type PreSpecial =
  | "check_deconstruct"
  | "check_empty"
  | "check_support"
  | "check_down_OK"
  | "check_empty_up_OK"
  | "check_up_OK"
  | "check_no_trap"

type QualityUnion = QualityClass[] | QualityClass

type QualityClass = {
  id: ID
  level: number
}

type ID =
  | "PRY"
  | "SCREW"
  | "AXE"
  | "SAW_W"
  | "CUT"
  | "HAMMER"
  | "DIG"
  | "DRILL"
  | "WRENCH"
  | "SAW_M"
  | "GLARE"
  | "SMOOTH"
  | "WELD"

type RequiredSkillElement = RequiredSkillEnum | number

type RequiredSkillEnum =
  | "fabrication"
  | "survival"
  | "tailor"
  | "mechanics"
  | "cooking"
  | "electronics"

type Tool = Component[] | string

type Type = "construction"

type UsingElement = UsingEnum | number

type UsingEnum =
  | "wall_floor_glass_removal_standard"
  | "concrete_removal_standard"
  | "metal_removal_standard"
  | "linoleum_removal_standard"
  | "road_removal_standard"
  | "object_deconstruction_advanced"
  | "welding_standard"
  | "soldering_standard"
