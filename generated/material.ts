type Material = {
  type: Type
  id: string
  name: string
  density?: number
  specific_heat_liquid?: number
  specific_heat_solid?: number
  latent_heat?: number
  edible?: boolean
  bash_resist?: number
  cut_resist?: number
  bullet_resist?: number
  acid_resist?: number
  fire_resist?: number
  elec_resist?: number
  chip_resist?: number
  dmg_adj?: string[]
  bash_dmg_verb?: string
  cut_dmg_verb?: CutDmgVerb
  burn_data?: BurnDatum[]
  reinforces?: boolean
  repaired_with?: string
  salvaged_into?: string
  burn_products?: Array<BurnProduct[]>
  compacts_into?: string[]
  rotting?: boolean
  wind_resist?: number
  vitamins?: Array<VitaminElement[]>
  soft?: boolean
  "copy-from"?: string
  warmth_when_wet?: number
  "//1"?: string
  "//2"?: string
  compact_accepts?: string[]
  "//"?: string
  "//3"?: string
  "//4"?: string
  "//5"?: string
}

type BurnDatum = {
  fuel?: number
  smoke?: number
  burn?: number
  volume_per_turn?: string
  "//"?: string
  immune?: boolean
}

type BurnProduct = number | string

type CutDmgVerb =
  | "damaged"
  | "gouged"
  | "scratched"
  | "chipped"
  | "cut"
  | "sliced"
  | "slashed"
  | "squished"

type Type = "material"

type VitaminElement = number | VitaminEnum

type VitaminEnum = "calcium" | "vitA" | "vitB" | "iron" | "vitC"
