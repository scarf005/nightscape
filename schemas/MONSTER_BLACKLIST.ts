import { head_link } from "../utils/head_link.ts"
import { showSchemaCli } from "../cli/show_schema.ts"
import { z } from "../deps.ts"

const link = head_link("doc/MODDING.md#preventing-monsters-from-spawning")
const type = z.literal("monster_blacklist")
  .describe(link)

const byCategories = z.object({
  type,
  categories: z.string().array()
    .describe("list of banned `monstergroup`s."),
})

const byMonsters = z.object({
  type,
  monsters: z.string().array()
    .describe("list of banned `monster`s."),
})

const MONSTER_BLACKLIST = z.union([byCategories, byMonsters])

export type MonsterBlacklist = z.infer<typeof MONSTER_BLACKLIST>

export { MONSTER_BLACKLIST as MonsterBlacklistSchema }

if (import.meta.main) {
  showSchemaCli(MONSTER_BLACKLIST)
}
