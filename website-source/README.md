# Portfolio website source

React / TypeScript / Vite source for the portfolio published from the repository root.
Imported from local gitpage_build/build on 2026-10-15.

## Development

```sh
npm ci
npm run dev
```

## Build and publication

```sh
npm run build
```

Build output is written to dist/. GitHub Pages publishes the root of master.
To publish a future website update, copy the built index.html and assets/ to
the repository root, preserving CNAME. This upload preserves the deployed website.

Local environment files, dependencies, generated output, and prompt histories
are excluded. No API key is needed by this portfolio source.
