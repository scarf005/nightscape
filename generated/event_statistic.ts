type EventStatistic = {
  id: string
  type: Type
  stat_type: StatType
  event_type?: string
  field?: string
  event_transformation?: string
  description?: Description
}

type Description = {
  str?: string
  str_pl?: string
  str_sp?: string
}

type StatType = "unique_value" | "count" | "total" | "minimum" | "maximum"

type Type = "event_statistic"
