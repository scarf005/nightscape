type Book = {
  id?: string
  type: Type
  name: Name
  description?: string
  weight?: Price
  volume?: string
  price?: Price
  price_postapoc?: number
  material?: MaterialUnion
  symbol?: Symbol
  color?: Color
  skill?: string
  max_level?: number
  intelligence?: number
  time?: Price
  fun?: number
  bashing?: number
  required_level?: number
  "//"?: string
  "copy-from"?: string
  abstract?: string
  to_hit?: number
  looks_like?: string
  flags?: string[]
  snippet_category?: SnippetCategory[]
  "//~"?: string
  martial_art?: string
}

type Color =
  | "pink"
  | "green"
  | "blue"
  | "light_blue"
  | "light_gray"
  | "red"
  | "light_green"
  | "brown"
  | "white"
  | "yellow"
  | "light_cyan"
  | "dark_gray"

type MaterialUnion = MaterialElement[] | MaterialElement

type MaterialElement = "paper" | "leather" | "plastic"

type Name = {
  str?: string
  str_pl?: string
  "//~"?: string
  str_sp?: string
}

type Price = number | string

type SnippetCategory = {
  id: string
  text: string
}

type Symbol = "?" | "ç"

type Type = "BOOK"
