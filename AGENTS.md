# marketing-api

> Demo code written for the VulnFleet / Cursor exercise. Northwind Commerce is
> fictional. This repo does not use lodash.

## What this is

The Northwind Commerce marketing API: the public campaign feed behind the
marketing site's banners ("Accept payments in 40+ currencies"). Read-only, no
customer data.

## CMDB

| Field | Value |
|---|---|
| Tier | 3 |
| Exposure | public |
| Data class | none |
| Owner | growth-team |

## Install, build, test

```bash
npm ci         # install exactly what package-lock.json records
npm test       # node --import tsx --test "test/**/*.test.ts"
npm start      # tsx src/server.ts, port 3000 (PORT overrides)
npx tsc --noEmit  # typecheck (no build step: TypeScript runs through tsx)
```

## Conventions

- `GET /api/campaigns[?active=true]` in `src/app.ts`; campaigns are static data.
- Tests live in `test/*.test.ts` and start the real app on port 0.
- Remediation conventions: `.cursor/rules/northwind-remediation.mdc`.
  Fix procedure: the `northwind-safe-fix` skill.

## Cursor Cloud specific instructions

Verify command:

```bash
npm ci && npm test
```

Before editing, run the verify command. If it fails, stop and report the failing command and output.

- The environment's install step (`.cursor/environment.json`) already runs `npm ci`.
