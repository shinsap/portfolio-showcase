# Portfolio Showcase

GitHub: https://github.com/shinsap

日本語版: [ja/README.md](ja/README.md)

This repository is a public portfolio index for selected projects. Most production and in-progress repositories are private because they include client work, operational settings, or active product code. This showcase summarizes the scope, architecture, development process, and selected implementation patterns that can be shared publicly.

## Profile

I build small to mid-sized web products and operational tools from planning to deployment. As an independent developer based in Sapporo, Hokkaido, I use AI-assisted development for rapid prototyping, local-first apps, landing pages, admin tools, and service workflows using modern web stacks.

## What I Build

These are the kinds of problems I solve — not an abstract list of skills, but the actual scenarios my products address:

- **Small business operators (5–30 staff)** who want to replace a manual daily task with a lightweight web tool, without a large system budget
- **Service owners** who need a landing page + payment flow launched quickly, without WordPress or a full CMS
- **Care facility teams** that need a shared lookup tool staff can open on a phone with no login
- **Producers or processors** with a domain-specific optimization problem (e.g., fixed-weight pack planning) that is too small for enterprise software
- **Information tool + SEO funnels** where a search-facing content site leads users toward an app or service

My own products are the primary proof of this: every project below started as a real problem, was designed around the actual workflow, and is running in production.

## Development Style

- Define the product goal and user flow first.
- Use AI tools for implementation speed, but keep architecture, security, repo hygiene, and deployment decisions under human review.
- Separate active development, staging/test, and archived repositories.
- Keep secrets out of source code and periodically review repositories, Actions, webhooks, deploy keys, and external service links.

## Selected Projects

| Project | Type | Status | Public URL | Stack | Challenge Solved |
|---|---|---|---|---|---|
| [Rescue Cat Card v4](projects/rescuecat-v4.md) | Emergency pet-care service | Launched / active | [App](https://app.rescuecat.jp/) | React, React Router v7, TypeScript, Vite, Tailwind CSS, Supabase, Stripe, Cloudflare Pages/Workers | No way for a third party to access cat care info when owner collapses → NFC/QR card + Stripe + Supabase web app |
| [Rescue Cat Card LP](projects/rescuecat-lp.md) | Landing page | Active | [LP](https://rescuecat.jp/) | Astro, TypeScript, Tailwind CSS, Cloudflare Pages, Stripe Payment Link | Story-driven LP that converts visitors with no prior knowledge into Stripe purchasers |
| [Nortelia LP](projects/nortelia-lp.md) | Corporate site | Active | [LP](https://nortelia.co.jp) | Astro, TypeScript, Tailwind CSS, Cloudflare Pages | Company portfolio site including hearing-aid battery LP and SEO content tools |
| [Denchi Atta?](projects/denchi-atta.md) | Household battery record PWA | Active | [LP](https://nortelia.co.jp/apps/battery/) / [App](https://app.nortelia.co.jp/) | React, TypeScript, Vite, Dexie, Firebase, PWA | Can't remember which battery each home device uses → no-login PWA with family sync |
| [Hearing Aid Denchichou](projects/denchichou.md) | Care-industry battery PWA | Active | [LP](https://nortelia.co.jp/apps/denchichou/) / [App](https://denchichou.nortelia.co.jp/) | React, TypeScript, Vite, Dexie, Firebase, PWA | Care staff look up resident hearing-aid battery sizes repeatedly with no shared record → name-search PWA with staff sync code |
| [Pack Optimizer](projects/pack-optimizer.md) | Optimization tool | Active | [App](https://pack-optimizer.vercel.app/) | Next.js, React, TypeScript, Tailwind CSS, Vercel | Seafood processors calculating fixed-weight pack combinations by hand → algorithm auto-calculates optimal combination |
| [BQ Menu](projects/bq-menu.md) | Hotel banquet menu system | Active / private demo | Private demo | React, TypeScript, Vite, Tailwind CSS, Supabase, Vercel | QR-based PDF menu system with venue-specific time settings |
| [Shinkyu](projects/shinkyu.md) | Sales support tool | Active / private use | Private operation | Next.js, React, TypeScript, Supabase, Anthropic SDK, Cloudflare Pages | AI-assisted sales support tool for acupuncture clinic operations |
| [外注前ナビ](projects/gaichu.md) | SMB outsourcing decision tool | Active | [App](https://gaichu.nortelia.co.jp) | Astro, React, TypeScript, Tailwind CSS v4, Cloudflare Pages, Cloudflare Pages Functions, Gemini 2.5 Flash-Lite, Turnstile, Zod | Diagnostic tool that helps SMBs decide whether to build in-house, outsource, or use existing SaaS — client-side rule engine with AI used only for output formatting |

## AI Tool Usage

I use AI coding tools for:

- requirements breakdown
- prototype generation
- component implementation
- refactoring support
- documentation drafting
- security and repository inventory checks
- deployment and workflow review

AI output is reviewed against product goals, data handling requirements, and operational constraints before adoption.

## Public Code Samples

- [AI-assisted workflow example](code-samples/ai-workflow-example.md)
- [Frontend component pattern](code-samples/frontend-component-example.tsx)
- [API boundary pattern](code-samples/api-boundary-example.ts)

These samples are simplified and sanitized. They are intended to show coding style and decision-making rather than expose production source code.

## Private Repository Policy

Many repositories remain private because they contain one or more of the following:

- active product development
- client or partner context
- operational infrastructure details
- deployment configuration
- implementation details not yet ready for public release

Detailed review can be arranged by sharing selected files, screenshots, a walkthrough, or temporary read access to a sanitized repository.
