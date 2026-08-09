# BQmenu LP

## Overview

BQmenu LP is the go-to-market landing page for [BQmenu](bq-menu.md), a B2B SaaS product for hotel banquet operations. It was built as a commercial asset — not a simple product brochure — to introduce the product, communicate pricing and scope, and capture leads (demo requests and material requests) from hotels.

The LP is live in production at `bqmenu.com`, deployed on Cloudflare Pages with GA4 event tracking and a working contact form confirmed end-to-end in production.

## Positioning & Copy Discipline

The core design challenge on this project was not "write a landing page" — it was keeping the **defined product specification and the public sales language in exact agreement**, across the LP, the customer-facing sales deck, and the partner program materials, as all three were being developed at the same time.

A single `BQMENU_LP_SOURCE_OF_TRUTH.md` document defines, in specific terms, what the product does and does not do, and which claims are and are not allowed. Examples of restrictions enforced from that document into the LP copy:

- No "completely paperless" or absolute-elimination claims
- No "always 30 minutes before the event" — publication timing is per-hotel configuration, not a fixed universal rule
- Overlap checking is described as risk reduction ("同じ会場・重複する時間帯への二重登録をチェック"), never as a 100%-prevention guarantee
- The physical QR display materials (stands, POP, signage) are the hotel's responsibility to produce and install — BQmenu is not shown as providing them
- No implication that BQmenu edits, creates, or judges the content of the PDF (translation, proofreading, allergy determination) — the hotel owns the PDF
- The cost-comparison section is explicitly labeled a **reference model** ("紙メニュー印刷費のモデル試算"), with an explicit disclaimer that it does not guarantee actual savings
- Support scope is not over-promised beyond what has actually been agreed

A `BQMENU_LAUNCH_CHECKLIST.md` was used as the pre-launch gate to verify this alignment (LP vs. app vs. sales deck vs. partner deck) before the domain went live, alongside standard technical checks (build, responsive layout, form delivery, secrets exposure).

## What I Built

- Hero section with product name, category, and a one-line value statement, backed by actual product screenshots (registration, guest mobile view, overlap error, QR download)
- Problem section explaining the current manual/paper workflow the product replaces
- Feature explanations for fixed per-venue QR, the venue/time overlap check, and automatic timed publication — each written to match the app's actual behavior, not an idealized version of it
- **"ホテルがすること、ゲストがすること" (Operation Flow)** — a 5-step flow (hotel registers the banquet → hotel places the fixed QR in the venue → BQmenu switches to the published menu automatically at the configured time → guest scans and views → BQmenu switches to the ended screen after the banquet), so the LP shows *who does what*, not just a feature list
- Pricing section (setup fee + monthly fee per facility, contract term, renewal, and mid-month-start billing rules)
- Scope/responsibility section separating what BQmenu operates versus what the hotel is responsible for (PDF content, physical QR signage)
- ROI reference section: a labeled, disclaimed print-cost comparison model, not a savings guarantee
- Contact form (demo request / material request) with validation and required consent
- Privacy Policy page
- GA4 analytics and CTA/lead event tracking (see below)
- Metadata, OGP, and X Card tags; favicon
- Responsive layout across mobile/tablet/desktop
- Production deployment on Cloudflare Pages with a custom domain

## Analytics & Lead Tracking

GA4 is implemented (`gtag.js`), with custom events beyond the default page view:

- `cta_click` — fired from the header and hero CTAs, with the CTA's inquiry type attached
- `generate_lead` — fired on successful form submission

Form delivery runs through Web3Forms. Both the GA4 events and a live end-to-end form submission (delivery confirmed by received email) were verified against the production deployment before treating the launch checklist's contact-form item as complete.

## AI-Orchestrated Development

Like the [BQmenu app](bq-menu.md), the LP, sales deck, and partner materials were built against a fixed source-of-truth document rather than letting each piece of content (or each AI session) settle on its own interpretation of the product.

The review workflow is implemented as three scripts (`scripts/review-requirements.sh`, `scripts/review-ui.sh`, `scripts/review-full.sh`) that run a fixed sequence:

1. **Quality gate** — lint, typecheck, build, and a diff review
2. **Requirements/copy audit (read-only reviewer agent)** — checks the current working-tree diff against `AGENTS.md` and `BQMENU_LP_SOURCE_OF_TRUTH.md`, not the diff against a prior review
3. **UI audit (read-only reviewer agent)** — visual/responsive/accessibility review of the same diff
4. **STOP** — the scripts do not auto-fix anything they find; the run ends with review output, and a human decides whether to fix, accept, or hold

The human role covers product/commercial direction, source-of-truth content, requirements and copy decisions, and the final go/no-go call at each stage — including the pre-launch checklist gate before the domain was pointed at production.

## Sales & Partner Enablement

Development did not stop at a working website. The same source-of-truth discipline was extended into commercial materials:

- A customer-facing sales deck draft covering the product overview, the operational problem it replaces, the operation flow, pricing, onboarding, and contract scope
- A partner program source-of-truth document, partner deck outline, partner FAQ, and a sales-language guide defining approved vs. disallowed phrasing for anyone selling the product
- A partner guide document consolidating setup, FAQ, and approved sales language into a single print/distribution-ready reference, with a structured heading hierarchy and generated table of contents

Financial terms (commission structure, discount limits, etc.) are intentionally not disclosed in this portfolio entry. The point being demonstrated is the process: turning a shipped product into a sellable one, with consistent, non-exaggerated language enforced across every customer- and partner-facing document — not the deal terms themselves.

## Relationship to BQmenu (App)

[BQmenu](bq-menu.md) is the production application: staff authentication, banquet registration, the venue/QR/publication logic, and the guest-facing menu display.

BQmenu LP is the acquisition and commercialization layer built on top of it: it explains the product to hotels, drives demo and material requests through a tracked contact form, and is backed by sales and partner materials kept in sync with the same source-of-truth the app itself follows.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- GA4 (`gtag.js`)
- Web3Forms (contact form delivery)
- Cloudflare Pages (production deployment, custom domain)

## Public URL

- LP: https://bqmenu.com

## Role

- Landing page structure, copy, and visual direction
- Ownership of the LP source-of-truth document and its enforcement against app behavior
- Pricing, scope, and ROI-section framing (working within commercial terms decided separately)
- Contact form, GA4 event design, and production analytics verification
- Sales deck and partner enablement material authorship (deck outline, FAQ, sales-language guide, partner guide)
- AI review-workflow design (the three-stage script sequence) and human go/no-go judgment at each gate
- Cloudflare Pages production deployment and pre-launch checklist execution

## What This Demonstrates

- Treating a landing page as a commercial asset with measurable leads, not just a static brochure
- Keeping product spec, sales copy, UI, and partner materials in agreement through a single enforced source-of-truth document, verified by a repeatable checklist before launch
- A read-only, human-gated AI review workflow (requirements audit → UI audit → STOP) applied to marketing/commercial content, not only application code
- Extending a shipped SaaS product into a sellable one: sales deck, partner program, FAQ, and distribution-ready documentation
- Production-grade delivery: analytics, lead capture, and metadata verified end-to-end on the live domain
