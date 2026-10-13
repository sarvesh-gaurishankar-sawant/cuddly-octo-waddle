# cuddly-octo-waddle

A simple counter app built with React, TypeScript and Vite.

## Scripts

| Command             | What it does                        |
| ------------------- | ----------------------------------- |
| `npm run dev`       | Start the dev server                |
| `npm test`          | Run the test suite once (Vitest)    |
| `npm run test:watch`| Run tests in watch mode             |
| `npm run typecheck` | Type-check without emitting         |
| `npm run build`     | Type-check and build to `dist/`     |

## Structure

- `src/counterReducer.ts` — pure state logic (increment / decrement / reset), unit-tested
- `src/Counter.tsx` — UI component, tested through accessible roles
- `src/main.tsx` — app entry point
