/**
 * Lists all the generated files and the number of lines in each.
 *
 * Useful to see which files are easiest to work on.
 */

import { asynciter } from "https://deno.land/x/asynciter@0.0.15/mod.ts"

import { walk, WalkEntry } from "https://deno.land/std@0.188.0/fs/mod.ts"

import { match } from "npm:ts-pattern"
import { Command, EnumType, Table } from "./deps.ts"

const getMeta = async ({ path, ...rest }: WalkEntry) => {
  const text = await Deno.readTextFile(path)
  const lines = text.split("\n").length

  return { path, ...rest, lines }
}

const completed = await asynciter(Deno.readDir("schemas")).filter((x) => x.isFile).collect()
const files = walk("./generated", { exts: ["ts"] })
const metas = await asynciter(files).concurrentUnorderedMap(getMeta).collect()
const sortedMetas = metas
  .toSorted((a, b) => a.lines - b.lines)
  .map(({ name, lines }) => [name, `${lines}`])

const mode = new EnumType(["lines", "percentage", "checkbox"])

const main = () =>
  new Command()
    .type("Mode", mode)
    .name("list_todo")
    .description("Show current progress")
    .arguments("<mode:Mode>")
    .action((_, mode) =>
      match(mode)
        .with("lines", () =>
          new Table()
            .header(["Name", "Lines"])
            .body(sortedMetas)
            .render())
        .with("percentage", () => {
          const percentage = (completed.length / metas.length) * 100
          console.log(`Completed: ${completed.length}/${metas.length} (${percentage.toFixed(2)}%)`)
        })
        .with("checkbox", () => {
          const completedNames = completed.map((x) => `- [x] ${x.name}`).toSorted()
          const todos = metas.map((x) => `- [ ] ${x.name}`).toSorted()
          const text = [...completedNames, ...todos].join("\n")
          console.log(text)
        })
        .exhaustive()
    )

if (import.meta.main) {
  await main().parse(Deno.args)
}
