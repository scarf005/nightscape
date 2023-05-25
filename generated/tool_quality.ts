type ToolQuality = {
  type: Type
  id: string
  name: NameUnion
  usages?: Array<Usage[]>
  "//"?: string
  "//2"?: string
  "//3"?: string
}

type NameUnion = NameClass | string

type NameClass = {
  str: string
}

type Type = "tool_quality"

type Usage = string[] | number
