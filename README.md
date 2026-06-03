# Portfolio Showcase

GitHub: https://github.com/shinsap

Japanese version: [ja/README.md](ja/README.md)

This repository is a public portfolio index for selected projects. Most production and in-progress repositories are private because they include client work, operational settings, or active product code. This showcase summarizes the scope, architecture, development process, and selected implementation patterns that can be shared publicly.

## Profile

I build small to mid-sized web products and operational tools from planning to deployment. Recent work focuses on AI-assisted development, rapid prototyping, local-first apps, landing pages, admin tools, and service workflows using modern web stacks.

## Development Style

- Define the product goal and user flow first.
- Use AI tools for implementation speed, but keep architecture, security, repo hygiene, and deployment decisions under human review.
- Separate active development, staging/test, and archived repositories.
- Keep secrets out of source code and periodically review repositories, Actions, webhooks, deploy keys, and external service links.

## Selected Projects

| Project | Type | Status | Stack | Notes |
|---|---|---|---|---|
| [Rescue Cat Card v4](projects/rescuecat-v4.md) | Emergency pet-care service | Launched / active | React, TypeScript, Supabase, Cloudflare Pages | Production operation with staging validation, security cleanup, workflow review |
| [Rescue Cat Card LP](projects/rescuecat-lp.md) | Landing page | Active | Modern frontend, Cloudflare/Vercel-oriented deployment | Public acquisition and explanation page for Rescue Cat Card |
| [Nortelia LP](projects/nortelia-lp.md) | Landing page | Active | React/modern frontend | Public-facing marketing/brand page, including the Hearing Aid Denchichou LP |
| [Denchi Atta?](projects/denchi-atta.md) | Household battery record PWA | In development | PWA, local-first app | Personal/family battery record app for checking which batteries are used at replacement time |
| [BQ Menu](projects/bq-menu.md) | Hotel banquet menu system | Active / closed demo | Vercel, frontend app, QR menu flow | Labor-saving QR menu display system for hotel banquet venues |
| [Hearing Aid Denchichou](projects/denchichou.md) | Care-industry hearing-aid battery PWA | In development | PWA, Firebase-related config, LP search flow | Care facility battery record app with a hearing-aid battery search LP lead-in |
| [Shinkyu](projects/shinkyu.md) | Sales support tool | Active | Cloudflare Pages/Workers | Business tool for acupuncture clinic sales |
| [Pack Optimizer](projects/pack-optimizer.md) | Optimization tool | Active/public | Next.js, Python, Vercel | Public repo, currently operated on Vercel |

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
