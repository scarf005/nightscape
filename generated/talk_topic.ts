type TalkTopic = {
  type: TalkTopicType
  id: Empty
  dynamic_line?: TalkTopicDynamicLine
  responses?: ResponseElement[]
  speaker_effect?: SpeakerEffectUnion
  repeat_responses?: RepeatResponsesUnion
  "//"?: Empty
  "//2"?: string
  "//3"?: string
}

type Empty = string[] | string

type TalkTopicDynamicLine = DynamicLineElement[] | FluffyDynamicLine | string

type DynamicLineElement = PurpleDynamicLine | string

type PurpleDynamicLine = {
  u_male?: string[]
  no: BraggadociousNo
  u_has_item?: string
  yes?: string
  is_season?: string
  is_day?: Empty
  npc_has_effect?: string
  has_no_assigned_mission?: string
  days_since_cataclysm?: number
  npc_female?: boolean
}

type BraggadociousNo = string[] | HasManyAvailableMissionsNo | string

type HasManyAvailableMissionsNo = {
  has_many_assigned_missions: string
  no: string
}

type FluffyDynamicLine = {
  and?: DynamicLineAnd[]
  u_is_wearing?: NoUIsWearing
  yes?: DynamicLineYes
  no?: No3
  npc_has_var?: string
  type?: NoType
  context?: string
  value?: ValueUnion
  u_has_mission?: string
  u_has_weapon?: string
  npc_male?: string
  u_has_var?: string
  has_no_available_mission?: HasNoAvailableMission
  u_has_trait?: string
  npc_service?: boolean
  npc_has_effect?: string
  is_by_radio?: string
  npc_has_activity?: string
  give_hint?: boolean
  u_driving?: string
  npc_female?: boolean
  u_has_effect?: string
  days_since_cataclysm?: number
  has_no_assigned_mission?: string
  u_has_any_trait?: string[]
  u_compare_var?: string
  op?: string
  u_male?: boolean
  gendered_line?: string
  relevant_genders?: string[]
}

type DynamicLineAnd = PurpleAnd | string

type PurpleAnd = {
  is_by_radio?: string
  npc_has_trait?: string
  yes?: string
  no?: AndNo
  npc_engagement_rule?: string
  and?: FluffyAnd[]
  npc_cbm_reserve_rule?: string
  npc_cbm_recharge_rule?: string
  npc_aim_rule?: string
}

type FluffyAnd = {
  npc_override?: string
  yes: AndYes
  no?: string
  npc_rule?: string
}

type AndYes = PurpleYes | string

type PurpleYes = {
  and?: YesAnd[]
  has_pickup_list?: string
  no?: string
}

type YesAnd = {
  npc_override?: string
  yes: string
  no: string
  npc_rule?: string
}

type AndNo = PurpleNo | string

type PurpleNo = {
  npc_engagement_rule?: string
  no: FluffyNo
  yes: string
  npc_cbm_reserve_rule?: string
  npc_cbm_recharge_rule?: string
  npc_aim_rule?: string
}

type FluffyNo = {
  npc_engagement_rule?: string
  no: No1
  yes: string
  npc_cbm_reserve_rule?: string
  npc_cbm_recharge_rule?: string
  npc_aim_rule?: string
}

type No1 = TentacledNo | string

type TentacledNo = {
  npc_engagement_rule?: string
  no: No2
  yes: string
  npc_cbm_reserve_rule?: string
  npc_cbm_recharge_rule?: string
}

type No2 = StickyNo | string

type StickyNo = {
  npc_engagement_rule: string
  no: IndigoNo
  yes: string
}

type IndigoNo = {
  npc_engagement_rule: string
  no: string
  yes: string
}

type HasNoAvailableMission = {
  has_no_assigned_mission: string
  no: HasNoAvailableMissionNo
}

type HasNoAvailableMissionNo = HasManyAvailableMissionsNo | string

type No3 = string[] | IndecentNo | string

type IndecentNo = {
  u_has_var?: string
  type?: NoType
  context?: string
  value?: ValueEnum
  yes?: Empty
  no: No4
  has_many_available_missions?: HasManyAvailableMissions
  u_male?: boolean
  has_reason?: HasReason
  npc_driving?: string
  npc_has_effect?: string
  u_is_wearing?: string
  has_many_assigned_missions?: string
}

type HasManyAvailableMissions = {
  has_no_assigned_mission: string
  no: HasManyAvailableMissionsNo
}

type HasReason = {
  use_reason: boolean
}

type No4 = NoElement[] | AmbitiousNo | string

type NoElement = HilariousNo | string

type HilariousNo = {
  u_male: boolean
  yes: string[]
  no: string[]
}

type AmbitiousNo = {
  has_no_assigned_mission?: string
  no: No5
  npc_need?: string
  amount?: number
  yes?: NoYesUnion
  u_male?: UMale
  npc_has_var?: string
  type?: NoType
  context?: string
  value?: ValueEnum
  u_is_wearing?: NoUIsWearing
}

type No5 = CunningNo | string

type CunningNo = {
  has_many_assigned_missions?: string
  no: No6
  npc_need?: string
  amount?: number
  yes?: string
  npc_has_var?: string
  type?: NoType
  context?: string
  value?: ValueEnum
  npc_has_effect?: string
}

type No6 = MagentaNo | string

type MagentaNo = {
  npc_need: string
  level: string
  no: NoClass
  yes: string
}

type NoClass = {
  npc_has_effect: string
  no: string
  yes: string
}

type NoType =
  | "general"
  | "dialogue"
  | "generic"
  | "mission"
  | "recruit"
  | "counter"
  | "knowledge"
  | "talk"

type ValueEnum = "yes" | "phase_1" | "asked"

type NoUIsWearing = "badge_marshal" | "foodperson_mask"

type UMale = boolean | string

type NoYesUnion = FluffyYes | string

type FluffyYes = {
  npc_has_var: string
  type: NoType
  context: string
  value: ValueEnum
  yes: NoClass
  no: string
}

type ValueUnion = ValueEnum | number

type DynamicLineYes = string[] | TentacledYes | string

type TentacledYes = {
  u_has_var?: string
  type?: NoType
  context?: string
  value?: ValueUnion
  no: YesNo
  yes: YesYesUnion
  npc_need?: string
  level?: string
  npc_has_var?: string
  npc_has_effect?: string
  days_since_cataclysm?: number
  u_compare_var?: string
  op?: string
}

type YesNo = FriskyNo | string

type FriskyNo = {
  npc_need: string
  level: string
  no: MischievousNo
  yes: string
}

type MischievousNo = {
  npc_need: string
  level: string
  no: string
  yes: string
}

type YesYesUnion = StickyYes | string

type StickyYes = {
  npc_has_var?: string
  type?: NoType
  context?: string
  value?: ValueUnion
  no: string
  yes: string
  days_since_cataclysm?: number
  u_compare_var?: string
  op?: string
}

type RepeatResponsesUnion = RepeatResponse[] | RepeatResponsesClass

type RepeatResponse = {
  for_category: string[]
  response: RepeatResponseResponse
}

type RepeatResponseResponse = {
  text: string
  topic: string
  opinion?: Opinion
}

type Opinion = {
  trust?: number
  value?: number
  fear?: number
  anger?: number
  owed?: number
}

type RepeatResponsesClass = {
  for_item: string[]
  response: RepeatResponsesResponse
}

type RepeatResponsesResponse = {
  text: string
  topic: string
}

type ResponseElement = {
  text?: string
  topic?: string
  effect?: ResponseEffect
  truefalsetext?: Truefalsetext
  condition?: ResponseCondition
  trial?: Trial
  success?: Success
  failure?: Failure
  switch?: boolean
  default?: boolean
  opinion?: Opinion
  "//"?: string
  "//2"?: string
  mission_opinion?: MissionOpinion
}

type ResponseCondition = PurpleCondition | string

type PurpleCondition = {
  not?: ConditionNotUnion
  and?: ConditionAnd[]
  npc_has_var?: string
  type?: NoType
  context?: string
  value?: string
  u_has_var?: string
  u_has_items?: UHasItems
  npc_has_trait?: string
  u_has_trait?: string
  u_has_trait_flag?: string
  u_is_wearing?: NoUIsWearing
  or?: IndecentOr[]
  npc_at_om_location?: string
  npc_has_bionics?: string
  npc_allies?: number
  npc_has_effect?: string
  u_has_item?: string
  u_has_perception?: number
  days_since_cataclysm?: number
  u_has_effect?: string
  u_has_any_trait?: string[]
  u_has_intelligence?: number
  u_has_skill?: UHasSkill
}

type ConditionAnd = TentacledAnd | string

type TentacledAnd = {
  u_has_var?: string
  type?: NoType
  context?: string
  value?: string
  not?: AndNotUnion
  u_has_mission?: string
  u_has_trait?: string
  npc_service?: boolean
  u_has_items?: UHasItems
  or?: AndOrUnion[]
  npc_has_trait?: string
  npc_has_effect?: string
  npc_has_var?: string
  u_has_item?: string
  u_has_intelligence?: number
  u_has_perception?: number
  u_has_effect?: string
  and?: StickyAnd[]
  mission_goal?: string
  u_has_strength?: number
}

type StickyAnd = {
  not: PurpleNot
}

type PurpleNot = {
  or?: PurpleOr[]
  u_is_wearing?: string
}

type PurpleOr = {
  u_is_wearing: PurpleUIsWearing
}

type PurpleUIsWearing = "foodperson_mask" | "foodperson_mask_on"

type AndNotUnion = FluffyNot | string

type FluffyNot = {
  npc_has_var?: string
  type?: NoType
  context?: string
  value?: string
  u_has_var?: string
  u_has_mission?: string
  u_has_trait_flag?: string
  u_has_effect?: string
  u_is_wearing?: NoUIsWearing
  npc_has_trait?: string
  npc_has_effect?: string
  u_has_item?: string
  u_has_trait?: string
  and?: NotAndClass[]
  u_has_intelligence?: number
}

type NotAndClass = {
  npc_has_var?: string
  type?: NoType
  context?: string
  value?: ValueEnum
  or?: AndOrClass[]
  not?: TentacledNot
}

type TentacledNot = {
  or: PurpleOr[]
}

type AndOrClass = {
  u_has_trait?: string
  or?: PurpleOr[]
}

type AndOrUnion = FluffyOr | string

type FluffyOr = {
  npc_has_trait_flag?: string
  npc_has_trait?: string
  u_is_wearing?: PurpleUIsWearing
  npc_has_var?: string
  type?: NoType
  context?: string
  value?: ValueEnum
  and?: NotAndClass[]
  u_has_trait?: string
  or?: PurpleOr[]
  mission_goal?: string
  u_has_perception?: number
  u_has_intelligence?: number
}

type UHasItems = {
  item: string
  count: number
}

type ConditionNotUnion = StickyNot | string

type StickyNot = {
  u_has_var?: string
  type?: NoType
  context?: string
  value?: ValueEnum
  u_has_mission?: string
  u_has_trait?: string
  u_has_effect?: string
  u_has_trait_flag?: string
  u_is_wearing?: NoUIsWearing
  npc_has_effect?: string
  npc_engagement_rule?: string
  npc_cbm_reserve_rule?: string
  npc_cbm_recharge_rule?: string
  npc_aim_rule?: string
  days_since_cataclysm?: number
  or?: TentacledOr[]
  and?: AndEnum[]
  npc_has_var?: string
}

type AndEnum = "has_no_available_mission" | "has_no_assigned_mission"

type TentacledOr = {
  npc_has_effect: string
}

type IndecentOr = StickyOr | string

type StickyOr = {
  npc_has_trait_flag?: string
  npc_has_trait?: string
  u_is_wearing?: NoUIsWearing
  u_has_trait?: string
  and?: NotAndClass[]
}

type UHasSkill = {
  skill: string
  level: number
}

type ResponseEffect = FriskyEffect[] | FluffyEffect | string

type FriskyEffect = PurpleEffect | string

type PurpleEffect = {
  u_sell_item?: string
  count?: number
  u_buy_item?: string
  npc_add_var?: string
  type?: NoType
  context?: string
  value?: string
  u_add_effect?: string
  duration?: Duration
  u_consume_item?: string
  npc_add_effect?: string
  add_debt?: Array<Duration[]>
  u_faction_rep?: number
}

type Duration = number | string

type FluffyEffect = {
  add_mission?: string
  u_add_var?: string
  type?: NoType
  context?: string
  value?: string
  u_add_effect?: string
  duration?: Duration
  companion_mission?: string
  npc_add_trait?: string
  toggle_npc_rule?: string
  set_npc_engagement_rule?: string
  set_npc_cbm_reserve_rule?: string
  set_npc_cbm_recharge_rule?: string
  set_npc_aim_rule?: string
  npc_add_effect?: string
  npc_add_var?: string
  u_adjust_var?: string
  adjustment?: number
  u_consume_item?: string
  count?: number
}

type Failure = {
  topic: string
  effect?: FailureEffect
  opinion?: Opinion
}

type FailureEffect = MischievousEffect[] | StickyEffect | EffectEnum

type MischievousEffect = TentacledEffect | EffectEnum

type TentacledEffect = {
  u_faction_rep: number
}

type EffectEnum = "flee" | "hostile" | "deny_follow"

type StickyEffect = {
  npc_add_effect?: string
  duration?: number
  u_faction_rep?: number
}

type MissionOpinion = {
  trust: number
  value: number
}

type Success = {
  topic: string
  effect?: SuccessEffect
  opinion?: Opinion
}

type SuccessEffect = BraggadociousEffect[] | IndecentEffect | string

type BraggadociousEffect = IndigoEffect | string

type IndigoEffect = {
  add_debt?: Array<Duration[]>
  u_faction_rep?: number
  npc_change_faction?: string
}

type IndecentEffect = {
  u_faction_rep?: number
  u_add_var?: string
  type?: NoType
  context?: string
  value?: ValueEnum
  npc_add_var?: string
  npc_change_faction?: string
}

type Trial = {
  type: TrialType
  difficulty?: number
  mod?: Array<Duration[]>
  condition?: TrialCondition
  "//"?: string
}

type TrialCondition = {
  not?: ConditionNotClass
  or?: NotOrUnion[]
}

type ConditionNotClass = {
  or: NotOrUnion[]
}

type NotOrUnion = IndigoOr | string

type IndigoOr = {
  npc_need?: string
  amount?: number
  level?: string
  npc_has_effect?: string
}

type TrialType = "PERSUADE" | "INTIMIDATE" | "CONDITION" | "LIE"

type Truefalsetext = {
  condition: TruefalsetextCondition
  true: string
  false: string
}

type TruefalsetextCondition = FluffyCondition | string

type FluffyCondition = {
  npc_has_var?: string
  type?: NoType
  context?: string
  value?: ValueEnum
  npc_service?: boolean
  npc_rule?: string
  mission_goal?: string
}

type SpeakerEffectUnion = SpeakerEffectElement[] | PurpleSpeakerEffect

type SpeakerEffectElement = {
  effect: Effect1
}

type Effect1 = HilariousEffect[] | AmbitiousEffect

type HilariousEffect = {
  u_add_var?: string
  type?: NoType
  context?: string
  value?: ValueEnum
  npc_add_effect?: string
  duration?: number
  npc_add_var?: string
}

type AmbitiousEffect = {
  npc_add_effect?: string
  duration?: Duration
  u_add_var?: string
  type?: NoType
  context?: string
  value?: ValueEnum
  npc_add_var?: string
}

type PurpleSpeakerEffect = {
  effect?: Effect2
  sentinel?: string
  opinion?: Opinion
}

type Effect2 = CunningEffect[] | MagentaEffect

type CunningEffect = {
  u_add_var?: string
  type?: NoType
  context?: string
  value?: ValueEnum
  npc_first_topic?: string
  npc_add_effect?: string
  duration?: string
  npc_add_var?: string
  u_adjust_var?: string
  adjustment?: number
}

type MagentaEffect = {
  u_add_var?: string
  type?: NoType
  context?: string
  value?: string
  npc_add_var?: string
  u_buy_item?: string
  npc_add_effect?: string
  duration?: string
  count?: number
}

type TalkTopicType = "talk_topic"
