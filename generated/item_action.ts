type ItemAction = {
  type: Type
  id: string
  name: Name
}

type Name = {
  str: string
  ctxt?: string
}

type Type = "item_action"
