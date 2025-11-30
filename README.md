# Manara Studio

A Roblox game built with TypeScript using [roblox-ts](https://roblox-ts.com/).

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [Rojo](https://rojo.space/) (for syncing to Roblox Studio)
- [Roblox Studio](https://www.roblox.com/create)

## Getting Started

### Installation

```bash
npm install
```

### Building

Compile TypeScript to Luau:

```bash
npm run build
```

### Development

Watch mode for automatic compilation:

```bash
npm run watch
```

### Linting

Type-check the code without emitting:

```bash
npm run lint
```

## Project Structure

```
manara-studio/
├── src/
│   ├── client/          # Client-side scripts (run on player's device)
│   │   └── index.ts     # Main client entry point
│   ├── server/          # Server-side scripts (run on Roblox servers)
│   │   └── index.ts     # Main server entry point
│   └── shared/          # Shared modules (accessible from both client and server)
│       └── index.ts     # Shared utilities and types
├── out/                 # Compiled Luau output (generated)
├── default.project.json # Rojo project configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Node.js dependencies
```

## Using with Roblox Studio

1. Install [Rojo](https://rojo.space/docs/v7/getting-started/installation/)
2. Run `npm run build` to compile TypeScript
3. Start Rojo server: `rojo serve`
4. Connect to Rojo from Roblox Studio using the Rojo plugin

## License

ISC