type JSONFlag = {
  id: string
  type: Type
  context: Context[]
  info?: string
  "//"?: string
  conflicts?: string[]
  inherit?: boolean
  craft_inherit?: boolean
  taste_mod?: number
  requires_flag?: string
}

type Context =
  | "ARMOR"
  | "TOOL_ARMOR"
  | "TOOL"
  | "GENERIC"
  | "BIONIC_ITEM"
  | "COMESTIBLE"
  | "GUNMOD"
  | "MAGAZINE"
  | "AMMO"
  | "GUN"
  | "generic"
  | "BIONIC"
  | "SPELL"
  | "item"
  | "mutation"
  | "CONSUMABLE"
  | "vehicle_part"

type Type = "json_flag"
