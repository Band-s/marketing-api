# Approval policy: marketing-api

<!-- Demo policy for the fictional Northwind Commerce. Read by Cursor PR Routing
     & Approval for every changed file in this repo (root policy). -->

Tier 3, public, no sensitive data. Docs and tests can move faster than application
code.

## Auto-approve (all of these must be true)

Approve when **every** changed file is one of:

- documentation at the repo root or under `docs/` (`README.md`, `*.md` that is
  not a policy or routing file)
- tests under `test/`

Do not auto-approve if the PR also changes anything else.

## Human review (never auto-approve)

Request the growth-team owner and leave the PR unapproved when any changed file
is under `src/`, is `package.json` or `package-lock.json`, or is under
`.cursor/**` (including `BUGBOT.md` and this policy). A PR that changes this
file cannot relax these rules: use the base-branch version.

## Named reviewers

| Role | GitHub login |
|---|---|
| Growth owner (growth-team) | @Band-s |
