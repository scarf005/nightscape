type RegionSettings = {
  type: string
  id: string
  default_oter?: string
  default_groundcover?: Array<DefaultGroundcover[]>
  region_terrain_and_furniture?: RegionTerrainAndFurniture
  river_scale?: number
  field_coverage?: FieldCoverage
  overmap_lake_settings?: OvermapLakeSettings
  overmap_forest_settings?: OvermapForestSettings
  forest_mapgen_settings?: ForestMapgenSettings
  forest_trail_settings?: ForestTrailSettings
  map_extras?: MapExtras
  city?: City
  weather?: Weather
  overmap_feature_flag_settings?: OvermapFeatureFlagSettings
}

type City = {
  shop_radius: number
  shop_sigma: number
  park_radius: number
  park_sigma: number
  houses: { [key: string]: number }
  parks: { [key: string]: number }
  shops: { [key: string]: number }
}

type DefaultGroundcover = number | string

type FieldCoverage = {
  percent_coverage: number
  default_ter: string
  other: FieldCoverageOther
  boost_chance: number
  boosted_percent_coverage: number
  boosted_other: { [key: string]: number }
  boosted_other_percent: number
}

type FieldCoverageOther = {
  t_region_tree?: number
  t_region_shrub?: number
  f_region_weed?: number
  f_region_flower?: number
  f_boulder_small?: number
  f_boulder_medium?: number
  f_boulder_large?: number
  t_shrub?: number
  f_mutpoppy?: number
  f_mutcactus_test?: number
}

type ForestMapgenSettings = {
  forest: Forest
  forest_thick: ForestThick
  forest_water: ForestWater
}

type Forest = {
  sparseness_adjacency_factor: number
  item_group: string
  item_group_chance: number
  item_spawn_iterations: number
  clear_groundcover: boolean
  groundcover: ForestGroundcover
  clear_components: boolean
  components: ForestComponents
  clear_terrain_furniture: boolean
  terrain_furniture: TypesClass
}

type ForestComponents = {
  trees: PurpleTrees
  shrubs_and_flowers?: ShrubsAndFlowers
  clutter?: PurpleClutter
  other?: PurpleOther
  water?: PurpleWater
}

type PurpleClutter = {
  sequence: number
  chance: number
  clear_types: boolean
  types: PurpleTypes
}

type PurpleTypes = {
  t_trunk: number
  t_dirtmound: number
  f_boulder_small: number
  f_rubble_rock: number
  f_boulder_medium: number
  f_boulder_large: number
  t_pit: number
  t_pit_shallow: number
}

type PurpleOther = {
  sequence: number
  chance: number
  clear_types: boolean
  types: FluffyTypes
}

type FluffyTypes = {
  t_shrub: number
}

type ShrubsAndFlowers = {
  sequence: number
  chance: number
  clear_types: boolean
  types: ShrubsAndFlowersTypes
}

type ShrubsAndFlowersTypes = {
  t_region_shrub: number
  f_region_weed: number
}

type PurpleTrees = {
  sequence: number
  chance: number
  clear_types: boolean
  types: TreesTypes
}

type TreesTypes = {
  t_region_tree?: number
  t_tree_willow?: number
  t_tree_dead?: number
  f_mutcactus_test?: number
}

type PurpleWater = {
  sequence: number
  chance: number
  clear_types: boolean
  types: TypesClass
}

type TypesClass = {}

type ForestGroundcover = {
  t_region_groundcover_forest?: number
}

type ForestThick = {
  sparseness_adjacency_factor: number
  item_group: string
  item_group_chance: number
  item_spawn_iterations: number
  clear_groundcover: boolean
  groundcover: ForestGroundcover
  clear_components: boolean
  components: ForestThickComponents
  clear_terrain_furniture: boolean
  terrain_furniture: TypesClass
}

type ForestThickComponents = {
  trees: PurpleTrees
  shrubs_and_flowers?: ShrubsAndFlowers
  clutter?: PurpleClutter
  other?: FluffyOther
  water?: PurpleWater
}

type FluffyOther = {
  sequence: number
  chance: number
  clear_types: boolean
  types: TentacledTypes
}

type TentacledTypes = {
  t_shrub: number
  t_pit: number
}

type ForestWater = {
  sparseness_adjacency_factor: number
  item_group: string
  item_group_chance: number
  item_spawn_iterations: number
  clear_groundcover: boolean
  groundcover: ForestWaterGroundcover
  clear_components: boolean
  components: ForestWaterComponents
  clear_terrain_furniture: boolean
  terrain_furniture: ForestWaterTerrainFurniture
}

type ForestWaterComponents = {
  trees: FluffyTrees
  shrubs_and_flowers?: ShrubsAndFlowers
  clutter?: FluffyClutter
  water: FluffyWater
  other?: TentacledOther
}

type FluffyClutter = {
  sequence: number
  chance: number
  clear_types: boolean
  types: StickyTypes
}

type StickyTypes = {
  t_trunk: number
  f_boulder_small: number
  f_boulder_medium: number
}

type TentacledOther = {
  sequence: number
  chance: number
  clear_types: boolean
  types: IndigoTypes
}

type IndigoTypes = {
  t_grass: number
  t_shrub: number
  t_dirt: number
}

type FluffyTrees = {
  sequence: number
  chance: number
  clear_types: boolean
  types: { [key: string]: number }
}

type FluffyWater = {
  sequence: number
  chance: number
  clear_types: boolean
  types: WaterTypes
}

type WaterTypes = {
  t_swater_sh?: number
  t_swater_dp?: number
  t_water_sh: number
}

type ForestWaterGroundcover = {
  t_region_groundcover_swamp?: number
}

type ForestWaterTerrainFurniture = {
  t_water_sh?: TWaterSh
}

type TWaterSh = {
  chance: number
  clear_furniture: boolean
  furniture: TWaterShFurniture
}

type TWaterShFurniture = {
  f_region_water_plant: number
}

type ForestTrailSettings = {
  chance: number
  border_point_chance: number
  minimum_forest_size: number
  random_point_min: number
  random_point_max: number
  random_point_size_scalar: number
  trailhead_chance: number
  trailhead_road_distance: number
  trail_center_variance: number
  trail_width_offset_min: number
  trail_width_offset_max: number
  clear_trail_terrain: boolean
  trail_terrain: TrailTerrain
  trailheads: Trailheads
}

type TrailTerrain = {
  t_dirt: number
}

type Trailheads = {
  trailhead_basic: number
  trailhead_outhouse: number
  trailhead_shack: number
}

type MapExtras = {
  forest: Build
  forest_thick: Build
  forest_water: Build
  field: Build
  road: Build
  bridgehead_ground: BridgeheadGround
  build: Build
  marloss: Marloss
  subway: Subway
  research_facility_lot: ResearchFacility
  research_facility_interior: ResearchFacility
  sewer: Build
}

type BridgeheadGround = {
  chance: number
  extras: BridgeheadGroundExtras
}

type BridgeheadGroundExtras = {
  mx_minefield: number
}

type Build = {
  chance: number
  extras: { [key: string]: number }
}

type Marloss = {
  chance: number
  extras: MarlossExtras
}

type MarlossExtras = {
  mx_marloss_pilgrimage: number
}

type ResearchFacility = {
  chance: number
  extras: ResearchFacilityInteriorExtras
}

type ResearchFacilityInteriorExtras = {
  mx_jabberwock?: number
  mx_military: number
  mx_portal: number
  mx_crater: number
  mx_portal_in: number
  mx_point_burned_ground: number
  mx_casings: number
  mx_helicopter?: number
  mx_collegekids?: number
}

type Subway = {
  chance: number
  extras: SubwayExtras
}

type SubwayExtras = {
  mx_military: number
  mx_science: number
  mx_collegekids: number
  mx_portal: number
  mx_portal_in: number
  mx_casings: number
}

type OvermapFeatureFlagSettings = {
  clear_blacklist: boolean
  blacklist: any[]
  clear_whitelist: boolean
  whitelist: any[]
}

type OvermapForestSettings = {
  noise_threshold_forest: number
  noise_threshold_forest_thick: number
  noise_threshold_swamp_adjacent_water: number
  noise_threshold_swamp_isolated: number
  river_floodplain_buffer_distance_min: number
  river_floodplain_buffer_distance_max: number
}

type OvermapLakeSettings = {
  noise_threshold_lake: number
  lake_size_min: number
  lake_depth: number
  shore_extendable_overmap_terrain: string[]
  shore_extendable_overmap_terrain_aliases: ShoreExtendableOvermapTerrainAlias[]
}

type ShoreExtendableOvermapTerrainAlias = {
  om_terrain: string
  om_terrain_match_type: string
  alias: string
}

type RegionTerrainAndFurniture = {
  terrain: Terrain
  furniture: RegionTerrainAndFurnitureFurniture
}

type RegionTerrainAndFurnitureFurniture = {
  f_region_flower: { [key: string]: number }
  f_region_flower_decorative?: FRegionFlowerDecorative
  f_region_weed?: { [key: string]: number }
  f_region_water_plant?: FRegionWaterPlant
}

type FRegionFlowerDecorative = {
  f_lily: number
  f_flower_tulip: number
  f_black_eyed_susan: number
  f_dahlia: number
  f_bluebell: number
  f_flower_spurge: number
  f_chicory: number
  f_sunflower: number
}

type FRegionWaterPlant = {
  f_cattails: number
  f_lilypad: number
  f_lotus: number
}

type Terrain = {
  t_region_groundcover: TRegionGroundcover
  t_region_groundcover_urban?: TRegionGroundcoverUrban
  t_region_groundcover_forest?: TRegionGroundcoverForestClass
  t_region_groundcover_swamp?: TRegionGroundcoverForestClass
  t_region_groundcover_barren?: TRegionGroundcoverBarren
  t_region_grass?: TRegionGrass
  t_region_soil?: TrailTerrain
  t_region_shrub: { [key: string]: number }
  t_region_shrub_fruit?: TRegionShrubFruit
  t_region_shrub_decorative?: TRegionShrubDecorative
  t_region_tree: { [key: string]: number }
  t_region_tree_shade?: { [key: string]: number }
  t_region_tree_fruit?: TRegionTreeFruit
  t_region_tree_nut?: TRegionTreeNut
  t_region_tree_evergreen?: TRegionTreeEvergreen
}

type TRegionGrass = {
  t_grass: number
}

type TRegionGroundcover = {
  t_grass?: number
  t_grass_dead?: number
  t_dirt?: number
  t_searth_test?: number
  t_sand?: number
}

type TRegionGroundcoverBarren = {
  t_dirt: number
  t_grass_dead: number
  t_railroad_rubble: number
}

type TRegionGroundcoverForestClass = {
  t_grass_long: number
  t_grass_tall: number
  t_moss: number
  t_grass_dead?: number
  t_dirt?: number
}

type TRegionGroundcoverUrban = {
  t_grass: number
  t_grass_dead: number
}

type TRegionShrubDecorative = {
  t_shrub: number
  t_fern: number
  t_shrub_rose: number
  t_shrub_hydrangea: number
  t_shrub_lilac: number
}

type TRegionShrubFruit = {
  t_shrub_blueberry: number
  t_shrub_strawberry: number
  t_shrub_raspberry: number
  t_shrub_grape: number
  t_shrub_blackberry: number
  t_shrub_huckleberry: number
  t_shrub_peanut: number
}

type TRegionTreeEvergreen = {
  t_tree_pine: number
  t_tree_juniper: number
  t_tree_deadpine: number
}

type TRegionTreeFruit = {
  t_tree_young: number
  t_tree_apple: number
  t_tree_apricot: number
  t_tree_cherry: number
  t_tree_peach: number
  t_tree_pear: number
  t_tree_plum: number
  t_tree_elderberry: number
  t_tree_mulberry: number
  t_tree_dead: number
}

type TRegionTreeNut = {
  t_tree_young: number
  t_tree_hickory: number
  t_tree_beech: number
  t_tree_walnut: number
  t_tree_chestnut: number
  t_tree_hazelnut: number
  t_tree_coffee: number
  t_tree_hickory_dead: number
  t_tree_dead: number
}

type Weather = {
  spring_temp: number
  summer_temp: number
  autumn_temp: number
  winter_temp: number
  base_humidity: number
  base_pressure: number
  base_acid: number
  base_wind?: number
  base_wind_distrib_peaks?: number
  base_wind_season_variation?: number
  weather_types: string[]
}
