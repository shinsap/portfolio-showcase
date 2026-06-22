# 外注前ナビ (Pre-Outsourcing Navigator)

## Overview

外注前ナビ is a diagnostic web service that helps small and medium-sized business owners decide whether to build a tool in-house, outsource it, or not build it at all. Users answer a short series of category-specific questions, and the service returns a recommended approach with supporting reasoning.

The product is designed around a common real-world gap: business owners often reach out to outsourcing vendors before clarifying what they actually need, or without considering whether existing SaaS tools already solve the problem. 外注前ナビ is a structured way to surface that clarity before any money is spent.

## Public URL

- App: https://gaichu.nortelia.co.jp

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

## What This Demonstrates

- Diagnostic product design for SMB decision support
- Client-side rule engine with a condition DSL (JSON-driven, no hard-coded logic)
- Separation of AI output formatting from deterministic business logic
- Cost-controlled AI integration (token ceiling, thinking budget set to zero)
- Cloudflare Pages Functions for API secret isolation
- Pre-release security checklist process (secrets audit, Turnstile verification, emergency stop)
