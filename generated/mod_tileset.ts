type ModTileset = {
  type: string
  compatibility: string[]
  "tiles-new": TilesNew[]
}

type TilesNew = {
  file: string
  tiles: Tile[]
  sprite_width: number
  sprite_height: number
  sprite_offset_x?: number
  sprite_offset_y?: number
}

type Tile = {
  id: ID
  fg: number
  rotates?: boolean
}

type ID = string[] | string
