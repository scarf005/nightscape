type ExternalOption = {
  type: Type
  name: string
  info: string
  stype: Stype
  value: Value
}

type Stype = "int" | "float" | "bool"

type Type = "EXTERNAL_OPTION"

type Value = boolean | number
