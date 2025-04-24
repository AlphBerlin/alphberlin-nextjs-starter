⚡ AlphBerlin Next.js + Supabase + Prisma + i18n Starter Kit ⚡
==========================================

> **The last Next.js & Supabase starter you’ll ever need.**

<p align="center">
  <a href="https://github.com/AlphBerlin/alphberlin-nextjs-starter/actions"><img src="https://img.shields.io/github/actions/workflow/status/AlphBerlin/alphberlin-nextjs-starter/ci.yml?branch=main" alt="CI status" /></a>
  <a href="https://github.com/sponsors/AlphBerlin"><img src="https://img.shields.io/badge/❤️-Sponsor-blue" alt="Sponsor" /></a>
</p>

<p align="center">
  Created by <a href="https://twitter.com/ajithberlin">AlphBerlin</a>
</p>

---

## 📋 Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prisma Setup & Seeding](#prisma-setup--seeding)
- [Versioned Seed Tasks](#versioned-seed-tasks)
- [Scripts](#scripts)
- [Paths & Aliases](#paths--aliases)
- [Showcase](#showcase)
- [Feedback & Issues](#feedback--issues)
- [License](#license)

---

## Features

- ⚡️ Next.js 15 (App Router)
- 💚 Supabase w/ supabase-ssr (works with App Router, Pages Router, Client, Server, Middleware)
- ⚛️ React 18 + TypeScript
- 📦 pnpm (fast, disk‑space efficient)
- 🎨 Tailwind CSS + [shadcn/ui](https://ui.shadcn.com/)
- 🧪 Jest w/ SWC & React Testing Library
- 🎛️ MSW v2 for API mocking in tests
- 🪝 TanStack Query v5 for client data fetching
- 📏 ESLint & Prettier for code quality
- 🐶 Husky & lint-staged for pre-commit checks
- 👷 GitHub Actions for CI (type checks, tests, linters)
- 🗂 Path mapping (import @/components, @/public/images, etc.)
- 🌗 Dark mode toggle with next-themes
- ✨ Next Top Loader for navigation
- 📊 Next Bundle Analyzer + Vercel Analytics
- 🔌 Prisma ORM & i18n configs

---

## Getting Started

### 1. Create a Supabase project

- Go to the [Supabase dashboard](https://app.supabase.com) and create a new project.

### 2. Scaffold your app

```bash
pnpm create next-app -e https://github.com/AlphBerlin/alphberlin-nextjs-starter my-app
# or
npx create-next-app -e https://github.com/AlphBerlin/alphberlin-nextjs-starter my-app
cd my-app
```

### 3. Environment variables

Rename `.env.local.example` to `.env.local` and fill in:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=<your supabase URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your anon key>
DATABASE_URL=<your database connection string>
```

### 4. Push your Prisma schema

```bash
npx prisma db push
```

### 5. Run database seed

```bash
pnpm prisma seed
```

### 6. Start development server

```bash
pnpm run dev
# now browse http://localhost:3000
```

> See [Supabase local development docs](https://supabase.com/docs/guides/getting-started/local-development).

---

## Prisma Setup & Seeding

1. **Schema migrations**: define models in `prisma/schema.prisma`.
2. **Push schema**: `npx prisma db push` to sync your database without migrations.
3. **Seed scripts**: implement your seed logic in `prisma/seed.ts`.
4. **Run seeds**: `pnpm prisma seed` executes `seed.ts` and any registered seed tasks.

---

## Versioned Seed Tasks

For more control and incremental data setup, you can define versioned seeds:

1. Create a new seed task in `prisma/seeds/`:

   ```ts
   // prisma/seeds/MyFeatureSeed.ts
   import { BaseSeedTask } from '../utils/BaseSeedTask';

   export default class MyFeatureSeed extends BaseSeedTask {
     static version = '1.2';

     async run() {
       // write your seeding logic here
     }
   }
   ```

2. Ensure your `seed.ts` loader picks up all classes extending `BaseSeedTask` and runs them in version order.

3. Each task’s `static version` defines its semantic version (e.g., `1.0`, `1.1`, `1.2`).

---

## Scripts

| Command           | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `pnpm dev`        | Development server at `http://localhost:3000`           |
| `pnpm build`      | Production build                                        |
| `pnpm start`      | Run production build                                    |
| `pnpm type-check` | TypeScript validation                                   |
| `pnpm lint`       | Run ESLint on `src/`                                     |
| `pnpm format`     | Run Prettier to format files                            |
| `pnpm format-check` | Check formatting with Prettier                        |
| `pnpm test`       | Run all Jest tests                                      |
| `pnpm analyze`    | Build & launch bundle analyzer                         |

---

## Paths & Aliases

Use the `@` prefix for cleaner imports:

```ts
import { Button } from '@/components/ui/Button';
import logo from '@/public/logo.png';
```

---

## Showcase

Built with this starter:

- More? Add yours by editing [README.md](https://github.com/AlphBerlin/alphberlin-nextjs-starter/edit/main/README.md)

---

## Feedback & Issues

Found a bug or want a new feature? File an issue:
https://github.com/AlphBerlin/alphberlin-nextjs-starter/issues

---

## License

Apache 2.0 © [AlphBerlin](https://github.com/AlphBerlin)

