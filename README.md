# Portfolio Showcase

Last updated: October 29, 2026

GitHub: https://github.com/shinsap

日本語版: [ja/README.md](ja/README.md)

This repository is a public portfolio index for selected projects. Most production and in-progress repositories are private because they include client work, operational settings, or active product code. This showcase summarizes the scope, architecture, development process, and selected implementation patterns that can be shared publicly.

## Profile

I plan, build, launch, and maintain small to mid-sized web products and business tools. I am an independent developer based in Sapporo, Hokkaido, and take on client development projects through Nortelia LLC (合同会社ノルテリア). I start from the client's workflow and the problem to be solved, then build only what that workflow needs — web apps, PWAs, admin screens, landing pages, and automation tools. AI-assisted development is part of how I keep cost and lead time reasonable; what the client gets is a system that fits their business and keeps running after launch.

## What I Build

These are the kinds of problems I solve — not an abstract list of skills, but the actual scenarios my products address:

- **Small business operators (5–30 staff)** who want to replace a manual daily task with a lightweight web tool, without a large system budget
- **Service owners** who need a landing page + payment flow launched quickly, without WordPress or a full CMS
- **Care facility teams** that need a shared lookup tool staff can open on a phone with no login
- **Producers or processors** with a domain-specific optimization problem (e.g., fixed-weight pack planning) that is too small for enterprise software
- **Hospitality and venue operators** with an operational request too specific for packaged software (e.g., per-venue banquet menu display)
- **Information tool + SEO funnels** where a search-facing content site leads users toward an app or service

My own products are the primary proof of this: every project below started as a real problem, was designed around the actual workflow, and is running in production.

## Scope of Work

I can take a project from an early idea through to ongoing operation:

- **Planning:** clarify the problem, the current workflow, and what is (and is not) worth building
- **Design:** requirements, user flow, data model, and screen design
- **Build:** web apps, PWAs, admin screens, landing pages, payment flows, and automation tools
- **Launch:** deployment, domains, analytics, and contact/lead forms
- **Operate:** maintenance, dependency updates, and feature improvements after launch

Small, focused projects are welcome — a single tool that removes one manual task is often the right starting point.

## Development Style

- Start from the business problem and the current workflow, then define the goal and user flow before choosing technology.
- Keep scope to what the workflow actually needs, so cost and lead time stay proportionate to the problem.
- Use AI-assisted development as a means of delivery, combined with an independent review step; architecture, security, and release decisions stay under human judgment.
- Separate active development, staging/test, and archived repositories, and validate changes in staging before reflecting them in production.
- Make production changes only with explicit approval, never as a side effect of routine development work.
- Keep maintaining after launch: dependency and runtime updates — including periodic security reviews of dependencies across active projects — are applied after assessing the impact of each change.
- Keep secrets out of source code and periodically review repositories, Actions, webhooks, deploy keys, and external service links.
- Implement AI-search discoverability with schema.org / JSON-LD, robots.txt, sitemaps, canonical metadata, AI crawler accessibility, and machine-readable product/company entity definitions.

## Selected Projects

| Project | Type | Status | Public URL | Stack | Challenge Solved |
|---|---|---|---|---|---|
| [Hit & Lock](projects/hit-and-lock.md) | Puzzle PWA / AI-assisted development experiment | Active / public | [App](https://hitandlock.nortelia.co.jp/) | Vite, TypeScript, PWA, Vitest, Playwright, Cloudflare Workers | Small B2B promotion idea → concept and requirements in about 3 hours, first playable AI-assisted build in about 2 more hours, then refined with testing, bilingual UI, accessibility and production readiness |
| [BQmenu](projects/bq-menu.md) | Hotel banquet B2B SaaS | MVP completed / production, first customer confirmed | [App](https://app.bqmenu.com) (staff login) | React, TypeScript, Vite, Tailwind CSS, Supabase, PostgreSQL, Cloudflare Pages / Workers | Customer-driven product development from a real hotel operational request, built as a multi-tenant SaaS rather than a one-off system: fixed per-venue QR, venue/time overlap checking, and automatic timed publication replace printed menus and manual venue guidance |
| [Portion Weight Match](projects/portion-weight-match.md) | Seafood / food packing optimization tool | Active | [App](https://portion-weight-match.vercel.app/) / [GitHub](https://github.com/shinsap/portion-weight-match) | Next.js, React, TypeScript, HiGHS/WASM, XLSX, Vercel | Variable-weight portions must be grouped into packs that meet a minimum total weight → exact optimization maximizes valid packs, minimizes excess weight, and exports an Excel work instruction entirely in the browser |
| [Rescue Pet Card](projects/rescuecat-v4.md) (formerly Rescue Cat Card v4) | Emergency pet-care service | Launched / active | [App](https://app.rescuepet.jp/) | React, React Router v7, TypeScript, Vite, Tailwind CSS, Supabase, Stripe, Cloudflare Pages/Workers | No way for a third party to access pet care info when owner collapses → NFC/QR card + Stripe + Supabase web app. Rebranded from cat-only to cat+dog in July 2026, with a preview-before-purchase flow redesign |
| [RepoBD](projects/repobd.md) | Developer security CLI / OSS | Public release v0.1.1 | [Site](https://repobd.com) / [GitHub](https://github.com/repobd/repobd) | TypeScript, Node.js, Cloudflare Workers, D1, AES-256-GCM | API keys and tokens carry no repository context → one-time encrypted delivery bound to the intended canonical Git origin, rejecting wrong-repo pulls before secret retrieval; branches, environments, credential purpose, and recipients inside the same repository are deliberately outside that check |
| [Vulneramigo](projects/vulneramigo.md) | Vulnerability-information report tool for web agencies and SMBs | Public / active | [App](https://vulneramigo.nortelia.co.jp/) | React, TypeScript, Vite, PWA, Cloudflare Workers | PHP / Node.js / Oracle Java advisories are hard to explain to non-technical clients → checks entered versions against included advisories based on official information, and produces a plain-language report for site managers plus technical details for agencies (JA/EN/ES, print/PDF, browser-only processing) |
| [Rescue Pet Card LP](projects/rescuecat-lp.md) (formerly Rescue Cat Card LP) | Landing page | Active | [LP](https://rescuepet.jp/) | Astro, TypeScript, Tailwind CSS, Cloudflare Pages | Story-driven LP that converts visitors with no prior knowledge into app registrants, now routed into a free-preview flow instead of a direct purchase link |
| [Nortelia LP](projects/nortelia-lp.md) | Corporate site | Active | [LP](https://nortelia.co.jp) | Astro, TypeScript, Tailwind CSS, Cloudflare Pages | Company website that showcases in-house apps and includes a hearing-aid battery search LP and SEO content tools |
| [Denchi Atta?](projects/denchi-atta.md) | Household battery record PWA | Active | [LP](https://nortelia.co.jp/apps/battery/) / [App](https://app.nortelia.co.jp/) | React, TypeScript, Vite, Dexie, Firebase, PWA | Can't remember which battery each home device uses → no-login PWA with family sync |
| [Hearing Aid Denchichou](projects/denchichou.md) | Care-industry battery PWA | Active | [LP](https://nortelia.co.jp/apps/denchichou/) / [App](https://denchichou.nortelia.co.jp/) | React, TypeScript, Vite, Dexie, Firebase, PWA | Care staff look up resident hearing-aid battery sizes repeatedly with no shared record → name-search PWA with staff sync code |
| [Pack Optimizer](projects/pack-optimizer.md) | Optimization tool | Active | [App](https://pack-optimizer.vercel.app/) | Next.js, React, TypeScript, Tailwind CSS, Vercel | Seafood processors calculating fixed-weight pack combinations by hand → algorithm auto-calculates optimal combination |
| [BQmenu LP](projects/bqmenu-lp.md) | Landing page / Go-to-market | Production | [LP](https://bqmenu.com) | Vite, React, TypeScript, Tailwind CSS, Cloudflare Pages | Go-to-market asset built with a source-of-truth-driven process that keeps product spec, sales copy, and partner materials in agreement, with production-verified GA4 lead tracking |
| [Shinkyu](projects/shinkyu.md) | Sales support tool | Active / private use | Private operation | Next.js, React, TypeScript, Supabase, Anthropic SDK, Cloudflare Pages | AI-assisted sales support tool for acupuncture clinic operations |
| [Pre-Outsourcing Navigator](projects/gaichu.md) | SMB outsourcing decision tool | Active | [App](https://gaichu.nortelia.co.jp) | Astro, React, TypeScript, Tailwind CSS v4, Cloudflare Pages, Cloudflare Pages Functions, Gemini 2.5 Flash-Lite, Turnstile, Zod | Diagnostic tool that helps SMBs decide whether to build in-house, outsource, or use existing SaaS — client-side rule engine with AI used only for output formatting |

## AI Tool Usage

AI tools are a means of delivery, not the product. They help keep cost and lead time reasonable; what matters to the client is a system that fits their workflow and can be maintained after launch.

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

## Contact

For development inquiries or project consultations, please use the contact form at [nortelia.co.jp/contact](https://nortelia.co.jp/contact/) (Japanese). Inquiries in English are also welcome.
