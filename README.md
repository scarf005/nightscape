# NIGHTSCAPE: Bright Nights JSON Schema Generation Project

https://github.com/cataclysmbnteam/Cataclysm-BN/assets/54838975/db7a9055-3340-4bc1-ab5a-b00af25a51ba

Nightscape is a collaborative effort to create a JSON schema for [Cataclysm: Bright Nights][BN]. via
JSON schema you can get validate your JSON files as you write and get instant feedback on:

- missing field
- incorrect field value
- incorrect string field regex
- (and more)

[BN]: https://github.com/cataclysmbnteam/Cataclysm-BN

## Project structure

```
.
├── cli: CLI tools to help with development
├── generated: typescript types for entries generated with quicktype
├── schemas: manually written zod schemas
│   └── shared: commonly shared schemas
└── utils
```

## Contributing

Nightscape uses combination of [Typescript][ts], [deno][deno] and [zod][zod] to generate JSON
schema.

<!-- However, no prior knowledge of any of these are required to contribute, as contribution guide will walk you through each steps. -->

If you're interested, please read [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## Design Decisions

### Why Typescript (and deno)?

1. it's easy to setup and use, as [`deno`][deno] is a single binary packed with formatter, linter,
   benchmarking tool, and test runner.
2. Being type safe increases maintainability as it improves:

| Type         | Description                                                       |
| ------------ | ----------------------------------------------------------------- |
| safety       | less time spent debugging & writing unit tests for trivial cases. |
| productivity | better IDE autocompletion, less cognitive load to remember types  |
| readability  | code documentes itself                                            |

### Why zod?

| Candidates         | Pros                   | Cons                                                   |
| ------------------ | ---------------------- | ------------------------------------------------------ |
| [zod][zod]         | mature                 | verbose syntax, poor at complex typex                  |
| [ajv][ajv]         | fast                   | too low level                                          |
| [typebox][typebox] | lighter (no validator) | not mature, does not have better type support than zod |
| [arktype][arktype] | concise syntax         | not mature, no JSON schema generator, 'concise syntax' |

the project may consider switching to [arktype][arktype] if it matures enough.

[deno]: https://deno.land
[ts]: https://typescriptlang.org
[zod]: https://zod.dev
[ajv]: https://github.com/ajv-validator/ajv
[typebox]: https://github.com/sinclairzx81/typebox
[arktype]: https://arktype.io

## License

[GPL v3](LICENSE)

## Others

### What is the origin of the name?

cataclysm: bright **NIGHT**s **SC**hem**A** generation **P**roj**E**ct.
