# 外注前ナビ (Pre-Outsourcing Navigator)

## Overview

外注前ナビ is a diagnostic web service that helps small and medium-sized business owners decide whether to build a tool in-house, outsource it, or not build it at all. Users answer a short series of category-specific questions, and the service returns a recommended approach with supporting reasoning.

The product is designed around a common real-world gap: business owners often reach out to outsourcing vendors before clarifying what they actually need, or without considering whether existing SaaS tools already solve the problem. 外注前ナビ is a structured way to surface that clarity before any money is spent.

Phase 1.5 added result sharing, a boss communication advisor, and result screen enhancements — all without increasing AI API costs.

## Public URL

- App: https://gaichu.nortelia.co.jp
- How it works: https://gaichu.nortelia.co.jp/how-it-works
- Listed on: [IDEAVALU](https://www.ideavalu.com/) (Japanese indie product launch platform)

## Role

- Product planning and problem framing
- Diagnosis flow and question design
- Scoring rule and red-flag system design
- Cloudflare Pages + Pages Functions deployment setup
- AI integration planning (cost control, Turnstile protection)
- Security review and secret management

## Stack

- Astro (static output)
- React (islands architecture)
- TypeScript
- Tailwind CSS v4
- Cloudflare Pages
- Cloudflare Pages Functions
- Gemini 2.5 Flash-Lite
- Cloudflare Turnstile
- Zod
- Vitest

## Architecture Notes

- **Diagnosis logic runs entirely client-side.** The scoring engine (`evaluate.ts`, `diagnose.ts`) runs in the browser with no server involvement. The server endpoint (`/api/report`) exists only to protect the Gemini API key and verify the Turnstile token.
- **AI is used only for output formatting.** Final judgment, red flags, and scores are all determined by JSON rules. Gemini receives the result and formats a short explanatory comment.
- **`severity: stop` is an invariant.** If any red-flag rule fires with `severity: stop`, the result is forced to `stop_and_organize` regardless of scoring. This behavior cannot be overridden.
- **Emergency cost switch.** Setting `AI_DISABLED=true` in Cloudflare Pages environment variables disables the Gemini call entirely. The rule-based diagnosis continues to function.
- **Share URL with zero server cost.** Answers are encoded as base64url and appended as `/?r=<encoded>`. The recipient's browser decodes and re-runs `diagnose()` client-side. No database, no server round-trip, no AI call on shared views.
- **Boss Advisor is fully template-based.** 6 boss archetypes × 4 result-level groups = 24 curated advice combinations. No AI involved; cost is zero.

## Key Features (Phase 1 + 1.5)

### Diagnosis Engine
- 7-level outcome scale: from "use what you already have" to "stop and reorganize your workflow first"
- Condition DSL in JSON (`eq / neq / lte / gte / in / contains / includes`) evaluated entirely in the browser
- `includes` operator handles multi-select answers stored as `string[]`
- SaaS detection rules: if the user already has Kintone, Salesforce, Notion, Garoon, Slack, or Chatwork, the engine surfaces that before recommending new tools
- Red-flag rules with `severity: stop` force `stop_and_organize` regardless of score

### Result Screen
- Level-based "Next Actions" (3 concrete steps per level, from `result-templates.json`)
- "Questions to ask your outsourcing partner" — category-specific checklist shown only when the result is freelancer / agency / fullscratch level
- Boss Advisor: select one of 6 boss archetypes (results-driven, logical, cautious, hands-off, tech-averse, consensus-driven) to get a tailored talking-point script for internal approval
- One-click copy of result text, share link, or dev question checklist

### Share URL
- Diagnosis result shareable via `/?r=<base64url>` — no login, no DB, no server
- `user_description` (free-text) is excluded from the URL for privacy
- AI report is not re-generated on shared views (cost = 0); a CTA invites the viewer to run their own diagnosis

### Supporting Pages
- `/how-it-works` — developer-facing explanation of the rule engine, DSL, and neutrality principles
- `/about` — why the service exists and the neutrality commitment

## What This Demonstrates

- Diagnostic product design for SMB decision support
- Client-side rule engine with a condition DSL (JSON-driven, no hard-coded logic)
- Separation of AI output formatting from deterministic business logic
- Cost-controlled AI integration (token ceiling, thinking budget set to zero)
- Serverless result sharing via base64url encoding (no DB, no API on share views)
- Template-based boss communication advisor (24 combinations, zero AI cost)
- Cloudflare Pages Functions for API secret isolation
- Pre-release security checklist process (secrets audit, Turnstile verification, emergency stop)
