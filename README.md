# Shinya Sato | Product Development Portfolio

**I turn business problems into requirements, technical designs, AI-assisted implementation, and products that can be operated after launch.**

Based in Sapporo, Japan, I run Nortelia LLC. My background in B2B sales, new business development, and seafood and food businesses informs how I translate real workflows and business constraints into web products.

I make decisions about scope, data handling, operating effort, and acceptance criteria. Claude Code and Codex support implementation and review; the case studies distinguish their work from the requirements and decisions I own.

[GitHub](https://github.com/shinsap) · [Nortelia](https://nortelia.co.jp/) · [日本語](ja/README.md)

Last updated: November 8, 2026

## Selected Projects

### 1. BQmenu | From a hotel workflow request to a multi-tenant SaaS

A B2B SaaS that serves banquet menu PDFs through fixed venue QR codes at scheduled times. I translated a hotel request into requirements for venue modeling, publication windows, tenant isolation, and PDF handling.

- **Design:** physical venue units and combined configurations, PostgreSQL RLS, server-side PDF validation.
- **Change and recovery:** changed PDF delivery to meet an internal-ID privacy requirement. Fixed a production deletion failure with an additive migration, then verified retries for two affected records and registration in the same venue/time slot.
- **My role:** requirements, data model and acceptance criteria, AI development coordination, review decisions, and onboarding/operation procedures.

**Status:** MVP complete, running in production, first customer adoption confirmed.
**Stack:** React / TypeScript / Supabase / PostgreSQL / Cloudflare

[Case study](projects/bq-menu.md) · [Product site](https://bqmenu.com)

### 2. Rescue Pet Card | Operating a service across physical cards and the web

An NFC/QR emergency pet-care service combining authentication, pet records, payments, and emergency public pages.

- **Design:** shared and species-specific data, an owner-only preview before purchase, and server-side plan validation.
- **Change and improvement:** preserved issued-card URLs through rebranding. Separated optional attribution metadata from purchase-critical fields so malformed analytics data would not block checkout.
- **My role:** concept, requirements and purchase flow, AI development coordination, authorization/purchase checks, and ongoing operation.

**Status:** public and operating. Deployment evidence for the attribution fix is distinguished in the case study.
**Stack:** React / TypeScript / Supabase / Stripe / Cloudflare

[Case study](projects/rescuecat-v4.md) · [Product site](https://rescuepet.jp/)

### 3. Portion Weight Match | Translating food-packing constraints into integer optimization

A browser-only tool that groups variable-weight portions into minimum-weight packs, from CSV input to Excel work instructions.

- **Design:** maximize pack count, then minimize excess weight; keep business data local and run computation in a Web Worker.
- **Redesign:** counterexamples led from sequential packing to exact dynamic programming, followed by staged development of a HiGHS/WebAssembly column-generation and MIP approach. Unproven results must not be labeled Optimal.
- **My role:** business constraints, objective functions, input and unit requirements, acceptance checks, and redesign decisions based on evidence.

**Status:** public and operating; source private.
**Stack:** Next.js / TypeScript / HiGHS・WebAssembly / Web Workers / Vitest / Playwright

[Case study](projects/portion-weight-match.md) · [App](https://portion-weight-match.vercel.app/)

### 4. RepoBD | Turning a development mistake into a focused OSS tool

A CLI created after an API key was applied to the wrong repository. It combines one-time encrypted delivery with a Git-origin check before retrieval.

- **Design:** client-side encryption, short TTL, conservative `.env` writes, and explicit protection boundaries.
- **Failure handling:** verify the local write before remote consumption; if that request fails, use bounded retries without rewriting the file.
- **My role:** problem definition, scope and threat model, AI implementation/review coordination, and release decisions.

**Status:** v0.1.1 published, MIT license.
**Stack:** TypeScript / Node.js / Cloudflare Workers / D1 / AES-256-GCM

[Case study](projects/repobd.md) · [Public source](https://github.com/repobd/repobd) · [Product site](https://repobd.com)

## Technical Experience and Decisions

| Area | Technologies and practice | Examples |
|---|---|---|
| Web apps / PWA | TypeScript, React, Next.js, Vite, Service Worker | Rescue Pet Card, Hit & Lock |
| Data / authorization | Supabase, PostgreSQL, RLS, server-side validation | BQmenu, Rescue Pet Card |
| Computation | Integer optimization, WebAssembly, Web Workers | Portion Weight Match |
| AI features | Deterministic rules separated from generation, server-held API keys | Pre-Outsourcing Navigator |
| Quality / recovery | Vitest, Playwright, boundary/regression tests, failed-update and recovery checks | Portion Weight Match, Vulneramigo |
| Delivery / measurement | Cloudflare, Vercel, GitHub Actions, GA4, GSC | Product and LP projects |
| Media processing | Python, Playwright, FFmpeg, geographic data, audio synthesis | Direction Quiz, WobblyMaps |

## AI-assisted Development

| Role | Responsibility |
|---|---|
| Me | Problem framing, scope, design decisions, acceptance criteria, review disposition, device and workflow checks |
| Implementation AI, including Claude Code | Code, tests, and documentation against agreed requirements |
| Review AI, including Codex | Requirements/diff review and findings about correctness, authorization, and data handling |

I evaluate findings against impact, preconditions, UX, implementation cost, and operational burden. AI review findings themselves are reassessed when measurements or further verification contradict them. Case studies describe my decisions separately from AI-written implementation.

Hit & Lock also includes a scoped experiment in automatic merging and production checking under predefined review/test conditions. This is not the release policy for every project.

[Development and verification workflow](code-samples/ai-workflow-example.md)

## Other Software Projects

| Project | Focus |
|---|---|
| [Vulneramigo](projects/vulneramigo.md) | Public URL settings and included vulnerability advisories, with reports for managers and agencies; deployed-cache regression testing |
| [Hokkaidoku](projects/hokkaidoku.md) | Worker-based puzzle generation, explanatory hints, offline support; public test version |
| [Hit & Lock](projects/hit-and-lock.md) | TypeScript PWA, separated game/UI logic, unit/E2E tests, mobile layout improvement, AI workflow experiments |
| [Pre-Outsourcing Navigator](projects/gaichu.md) | JSON-driven diagnosis; AI formats explanations, while diagnosis remains available without AI |
| [Pack Optimizer](projects/pack-optimizer.md) | Fixed-piece-count pack combinations; [public source](https://github.com/shinsap/pack-optimizer) |
| [Shinkyu](projects/shinkyu.md) | Acupuncture-clinic sales support; private operation |

## Small PWA and Workflow Prototypes

Public small-scale PWAs exploring onboarding and local-first behavior. Vercel handles hosting/deployment, Firebase handles synchronization, and Dexie/IndexedDB stores records locally.

- [Denchi Atta?](projects/denchi-atta.md): household battery records and sharing.
- [Hearing Aid Denchichou](projects/denchichou.md): name lookup, staff sharing, and a model-search LP entry point.

## Websites, Landing Pages, and Measurement

My scope includes GA4 and Google Search Console (GSC) setup and integration for understanding search-to-inquiry journeys. Per-site configuration and verified behavior are distinguished from measured business improvements.

[Nortelia](projects/nortelia-lp.md) · [BQmenu LP](projects/bqmenu-lp.md) · [Rescue Pet Card LP](projects/rescuecat-lp.md) · [Measurement scope and evidence](projects/measurement.md)

## Video Generation and Media-processing Experiments

Local pipelines combine Python and browser rendering to generate video, audio, and covers from data. These were made as video-production tests and posted to TikTok and other channels.

- [Direction Quiz](projects/houi-atequiz.md): JSON → map/direction diagram → narration and synthesized audio → short video. [TikTok](https://www.tiktok.com/@houiatejp)
- [WobblyMaps](projects/wobblymaps.md): GeoJSON → shape processing and rolling animation → contact sounds and channel-specific video. [TikTok](https://www.tiktok.com/@wobblymaps)

## Earlier Generative-AI Content Work

[Suno music production](projects/suno-music.md): Suno-generated music, AI-generated thumbnails, YouTube publication, and distribution through DistroKid. This is a content-production experiment, separate from software engineering.

## Code and Further Review

Public source is available for [RepoBD](https://github.com/repobd/repobd) and [Pack Optimizer](https://github.com/shinsap/pack-optimizer). Most other projects remain private for business, client, or operational reasons. The two video pipelines are local projects with no GitHub repository.

The case studies document shareable decisions, roles, and verification. The basic [display sample](code-samples/frontend-component-example.tsx) and [input-validation sample](code-samples/api-boundary-example.ts) are illustrative snippets, not evidence of production implementation or quality.

## Contact

For employment, collaboration, or development discussions involving business understanding, requirements, and AI-assisted product delivery:

[Nortelia contact form](https://nortelia.co.jp/contact/)
