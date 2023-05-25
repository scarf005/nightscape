type Snippet = {
  type: Type
  category: string
  "//"?: string
  text: SnippetText
}

type SnippetText = TextElement[] | string

type TextElement = PurpleText | string

type PurpleText = {
  text: TentacledText
  id?: string
}

type TentacledText = FluffyText | string

type FluffyText = {
  ctxt?: string
  str: string
  "//NOLINT(cata-text-style)"?: string
}

type Type = "snippet"
