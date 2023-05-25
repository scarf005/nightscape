import { zodToJsonSchema, ZodTypeAny } from "../deps.ts"
import { Command } from "./deps.ts"

/**
 * execute schema file then print the generated json schema.
 *
 * @example
 * ```ts
 * if (import.meta.main) {
 *   showSchemaCli(SCHEMA_NAME)
 * }
 * ```
 */
export const showSchemaCli = (schema: ZodTypeAny) =>
  new Command()
    .option("-a, --all", "show full schema", { required: false })
    .action(({ all = false }) => {
      // deno-lint-ignore no-explicit-any
      const jsonSchema = zodToJsonSchema(schema as any)

      const show = all ? Deno.inspect(jsonSchema, { colors: true, depth: Infinity }) : jsonSchema
      console.log(show)
    })
    .parse(Deno.args)
