# Portfolio Showcase

GitHub: https://github.com/shinsap

Japanese version: [ja/README.md](ja/README.md)

This repository is a public portfolio index for selected projects. Most production and in-progress repositories are private because they include client work, operational settings, or active product code. This showcase summarizes the scope, architecture, development process, and selected implementation patterns that can be shared publicly.

## Profile

I build small to mid-sized web products and operational tools from planning to deployment. As an independent developer, I use AI-assisted development for rapid prototyping, local-first apps, landing pages, admin tools, and service workflows using modern web stacks.

## Development Style

- Define the product goal and user flow first.
- Use AI tools for implementation speed, but keep architecture, security, repo hygiene, and deployment decisions under human review.
- Separate active development, staging/test, and archived repositories.
- Keep secrets out of source code and periodically review repositories, Actions, webhooks, deploy keys, and external service links.

## Selected Projects

| Project | Type | Status | Public URL | Stack | Notes |
|---|---|---|---|---|---|
| [Rescue Cat Card v4](projects/rescuecat-v4.md) | Emergency pet-care service | Launched / active | [App](https://app.rescuecat.jp/) | React, React Router v7, TypeScript, Vite, Tailwind CSS, Supabase, Stripe, Cloudflare Pages/Workers | Launched service where a third party can scan an NFC/QR card and access cat-protection information when the owner cannot respond due to an accident, disaster, or similar situation |
| [Rescue Cat Card LP](projects/rescuecat-lp.md) | Landing page | Active | [LP](https://rescuecat.jp/) | Modern frontend, Cloudflare/Vercel-oriented deployment | Public acquisition and explanation page for Rescue Cat Card |
| [Nortelia LP](projects/nortelia-lp.md) | Landing page | Active | [LP](https://nortelia.co.jp) | Astro, Tailwind CSS | Public-facing marketing/brand page, including the Hearing Aid Denchichou LP |
| [Denchi Atta?](projects/denchi-atta.md) | Household battery record PWA | Active | [LP](https://nortelia.co.jp/apps/battery/) / [App](https://app.nortelia.co.jp/) | React, TypeScript, Vite, React Router, Dexie, Firebase, PWA | Personal/family battery record app for checking which batteries are used at replacement time |
| [BQ Menu](projects/bq-menu.md) | Hotel banquet menu system | Active / closed demo | Closed demo | React, TypeScript, Vite, Tailwind CSS, Supabase, Vercel | QR-based PDF menu display system with venue-specific time settings and quick menu update support |
| [Hearing Aid Denchichou](projects/denchichou.md) | Care-industry hearing-aid battery PWA | Active | [LP](https://nortelia.co.jp/apps/denchichou/) / [App](https://denchichou.nortelia.co.jp/) | React, TypeScript, Vite, React Router, Dexie, Firebase, PWA | Care facility battery record app with a hearing-aid battery search LP lead-in |
| [Shinkyu](projects/shinkyu.md) | Sales support tool | Active / closed | Private operation | Next.js, React, TypeScript, Supabase, Anthropic SDK, Cloudflare Pages | Business tool for acupuncture clinic sales |
| [Pack Optimizer](projects/pack-optimizer.md) | Optimization tool | Active | [App](https://pack-optimizer.vercel.app/) | Next.js, React, TypeScript, Tailwind CSS, Vercel | Public repo for fixed-count pack planning for variable-weight products |

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
