type TraitGroup = {
  "//"?: string
  type: Type
  id: string
  subtype: Subtype
  traits: Trait[]
  "//2"?: string
  "//3"?: string
}

type Subtype = "distribution" | "collection"

type Trait = {
  trait?: string
  group?: string
  prob?: number
}

type Type = "trait_group"
