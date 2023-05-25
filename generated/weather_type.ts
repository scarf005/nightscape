type WeatherType = {
  id: string
  type: Type
  name: string
  color: string
  map_color: string
  glyph: string
  ranged_penalty: number
  sight_penalty: number
  light_modifier: number
  sound_attn: number
  dangerous: boolean
  precip: string
  rains: boolean
  acidic: boolean
  sun_intensity: string
  requirements?: Requirements
  animation?: Animation
  sound_category?: string
  effects?: Effect[]
}

type Animation = {
  factor: number
  color: Color
  glyph: Glyph
  tile: Tile
}

type Color = "c_light_blue" | "c_light_green" | "c_white"

type Glyph = "," | "." | "*"

type Tile = "weather_rain_drop" | "weather_acid_drop" | "weather_snowflake"

type Effect = {
  name: string
  intensity: number
}

type Requirements = {
  pressure_min?: number
  humidity_max?: number
  time?: string
  pressure_max?: number
  humidity_min?: number
  humidity_and_pressure?: boolean
  required_weathers?: string[]
  acidic?: boolean
  temperature_max?: number
  windpower_min?: number
}

type Type = "weather_type"
