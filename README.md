# marketing-api

> **Security demo fixture.** Part of the VulnFleet fix-verification demo. This repo
> does not depend on lodash; it exists to show the deterministic scan filtering a
> clean repo before any agent is launched. Not for production use. Northwind
> Commerce is fictional.

Northwind Commerce marketing API. Tier 3, public, no sensitive data.

Campaign copy is public marketing content only: no account, payment or PII fields.

- `GET /api/campaigns[?active=true]`

```bash
npm install
npm test
```
