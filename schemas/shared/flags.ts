import { z } from "../../deps.ts"

const flags = z.string().array().optional()
export type Flags = z.infer<typeof flags>

export { flags as flagsSchema }
