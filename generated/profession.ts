type Profession = {
  type: Type
  id?: string
  name: NameUnion
  description: string
  points: number
  skills?: Skills
  items?: Items
  CBMs?: string[]
  flags?: Flag[]
  "//"?: string
  traits?: string[]
  addictions?: Addiction[]
  vehicle?: string
  "copy-from"?: string
  pets?: Pet[]
  no_bonus?: string
  ident?: string
}

type Addiction = {
  intensity: number
  type: string
}

type Flag = "SCEN_ONLY"

type Items = {
  both: BothUnion
  male?: FemaleUnion
  female?: FemaleUnion
}

type BothUnion = string[] | BothClass

type BothClass = {
  items: string[]
  entries?: BothEntry[]
  ammo?: number
  magazine?: number
}

type BothEntry = {
  item?: string
  "ammo-item"?: string
  charges?: Charges
  "contents-item"?: Contents
  "contents-group"?: Contents
  "container-item"?: string
  group?: string
  "custom-flags"?: CustomFlag[]
  count?: number
}

type Charges = number[] | number

type Contents = string[] | string

type CustomFlag = "no_auto_equip" | "auto_wield" | "FIT"

type FemaleUnion = string[] | FemaleClass

type FemaleClass = {
  items: string[]
  entries: FemaleEntry[]
}

type FemaleEntry = {
  item: string
  "ammo-item"?: string
  charges?: number
  "contents-item"?: string
  "contents-group"?: string
  "container-item"?: string
}

type NameUnion = NameClass | string

type NameClass = {
  male: string
  female: string
}

type Pet = {
  name: string
  amount: number
}

type Skills = Skill[] | Skill

type Skill = {
  level: number
  name: string
}

type Type = "profession"
