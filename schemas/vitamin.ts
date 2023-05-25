import { z } from "../deps.ts"
import { head_link } from "../utils/head_link.ts"
import { showSchemaCli } from "../cli/show_schema.ts"

const vit_type = z.union([
  z.literal("vitamin").describe(
    `When simplified nutrition is enabled,
  this vitamin will not be added to any items and
  any time the game attempts to retrieve it from the player it will give 0.
  Only nutritional vitamins should have this type.`,
  ),
  z.literal("toxin").describe(
    "This is some toxic chemical or component. This currently has no effect.",
  ),
  z.literal("drug").describe("This is a drug. This currently has no effect."),
  z.literal("counter").describe(
    `This is a counter for something, that is neither a toxin, vitamin, or drug.
  This currently has no effect.`,
  ),
])
type VitaminType = z.infer<typeof vit_type>

const NO_DISPLAY = z.literal("NO_DISPLAY")
  .describe("This vitamin will not be displayed in the item menu.")

const vitamin = z.object({
  type: z.literal("vitamin")
    .describe(head_link("doc/VITAMIN.md")),

  id: z.string().describe("The id of the vitamin."),
  name: z.string()
    .describe(`What the vitamin shows up as where vitamins are displayed,
    such as the vitamins display in the item menu.`),

  vit_type,
  excess: z.string(),
  deficiency: z.string()
    .describe("The id of an effect that is triggered by a deficiency of this vitamin."),

  min: z.number()
    .describe("The smallest amount of this vitamin that the player can have."),
  max: z.number()
    .describe("The highest amount of this vitamin that the player can have."),

  rate: z.string()
    .describe("How long it takes to lose one unit of this vitamin."),

  flags: z.tuple([NO_DISPLAY]),
})

export type Vitamin = z.infer<typeof vitamin>

export { vitamin as VitaminSchema }

if (import.meta.main) {
  showSchemaCli(vitamin)
}
