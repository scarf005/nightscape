type Harvest = {
  id: string
  type: HarvestType
  entries: Entry[]
  message?: string
  "//"?: string
}

type Entry = {
  drop: string
  type: EntryType
  mass_ratio?: number
  faults?: Fault[]
  base_num?: number[]
  scale_num?: number[]
  max?: number
  flags?: string[]
}

type Fault = "fault_bionic_nonsterile" | "fault_bionic_salvaged"

type EntryType = "flesh" | "bone" | "offal" | "skin" | "bionic_group" | "bionic"

type HarvestType = "harvest"
