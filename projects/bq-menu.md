# BQmenu

## Overview

BQmenu is a B2B SaaS product for hotel banquet operations. Hotel staff register a completed banquet menu PDF, venue, and schedule in advance. Guests scan a fixed QR code placed in the banquet venue and view the menu directly in their browser — no app install, no account.

The product grew out of a real operational request from a hotel: rather than building a one-off system for that single property, it was designed and built as a multi-tenant B2B SaaS that any hotel can adopt. No customer or property names are disclosed here.

The MVP is complete and running in production (`app.bqmenu.com`). The first hotel deployment has been confirmed, and the product has moved into the commercial rollout phase — this is presented as an early-stage SaaS launch, not a large-scale adoption claim.

This entry covers product development. See [BQmenu LP](bqmenu-lp.md) for the go-to-market landing page, analytics, and sales/partner enablement work.

## Challenge → Solution

**Problem:** Hotel banquet venues traditionally rely on printed menus per venue and time slot. Reprinting for last-minute changes, guiding guests to the right signage, and avoiding mix-ups between adjacent venues are recurring, low-value manual work for banquet staff.

**Solution:** Each physical venue gets one fixed QR code. Staff register a banquet (name, guest count, staff-in-charge, venue, schedule, and a completed PDF) against that venue and time slot. BQmenu checks for double-booking on the same venue/overlapping time, and automatically switches the guest-facing screen between a before-publication state, the active menu, and an ended state based on the configured schedule — no per-event reprinting or QR reissuing required.

**Who this solves it for:** Hotel and banquet-venue staff who prepare menus per venue and time slot. The same approach — turning one site's operational request into a focused, reusable product — applies to other workflows that packaged software does not cover well.

## Product Development

Requirements were translated into the following core system behavior:

- Hotel staff authentication with role-based routing, and hotel-level data isolation enforced at the database level (Row Level Security), not just in the UI
- Banquet registration: banquet name, guest count, staff-in-charge, venue configuration, start/end date-time (5-minute increments), and a completed PDF
- Venue/time overlap checking across the same physical venue and combined-venue configurations
- Completed-PDF upload, PDF only, up to 10 MB, multi-page supported — validated server-side (file-type and structural checks), not trusted from the client
- One fixed QR code per physical venue, reused across banquets; combined-venue bookings display the same banquet through each included venue's existing QR rather than issuing a new one
- Automatic guest-facing state transitions — before publication → active menu → ended — driven by the hotel's configured schedule, not a fixed universal offset
- Banquet deletion with a confirmation step; changes are made by delete-and-re-register rather than in-place editing (see below)
- Guest viewing with no app install and no account: scan the QR, view the PDF in the browser

BQmenu intentionally does **not** provide: banquet reservation management, CRM, menu creation or PDF editing, translation, proofreading, allergy determination, or mobile ordering. The hotel prepares and owns the completed PDF; BQmenu controls where and when it is shown.

### Editing policy: delete-and-re-register, not in-place editing

Registered banquets cannot be partially edited or have their PDF swapped in place. A change is made by deleting the banquet (with an explicit confirmation step) and re-registering it with all fields re-entered. This was a deliberate product decision — a full re-entry step functions as a double-check against mistaken registrations, rather than being an unimplemented feature.

## Architecture & Product Decisions

- **Venue model**: a physical venue section is the fixed-QR unit. Banquets can also be registered against a pre-configured combination of venue sections; in that case, each physical venue's existing QR — not a new combined-venue QR — shows the same banquet.
- **Overlap checking, not a guarantee**: BQmenu checks for double-registration on the same venue during an overlapping time window. This reduces registration mistakes; it is not described as a 100%-prevention guarantee.
- **Publication state machine**: guest-facing display moves through before-publication → active → ended based on each hotel's configured publication time and the banquet's end time — not a fixed "30 minutes before" rule across all hotels.
- **Upload path**: PDF uploads go through a Supabase Edge Function with `service_role` access rather than a direct client-to-storage insert policy, so file-type/structure validation happens server-side instead of being trusted from the client.
- **Guest UX**: minimal by design — QR scan, browser view, nothing to install or sign up for.

## AI-Orchestrated Development

BQmenu's requirements, architecture, and implementation were developed using a requirements-driven, multi-agent AI workflow rather than a single "AI wrote the app" process.

- A requirements document is the source of truth for the product. Agents are directed to read the relevant sections for the task at hand rather than re-reading the entire specification each session, to keep implementation aligned with what was actually agreed.
- **Human role**: product direction, requirements decisions (e.g., the decision not to support in-place editing), architecture approval (e.g., upload-path design, RLS boundaries), and final go/no-go judgment on every commit.
- **Implementation agent (Claude Code)**: implementation against the current requirements slice, in small steps, with typecheck/lint/test run at each step.
- **Independent review agent (Codex)**: read-only review against the requirements document and the diff only — not a general code review. It checks for scope creep beyond the requirements, cross-hotel data leakage in RLS policies, double-registration handling, and PDF-safety validation, and reports findings without making changes itself.
- The review agent does not auto-fix issues it finds; a human decides whether to fix, accept, or stop. The commit bar is zero unresolved blocker/major findings.

This mirrors the same requirements-driven, review-gated approach used on the [BQmenu LP](bqmenu-lp.md) side of the project.

## SaaS Security Review & Hardening

After MVP completion, BQmenu moved from a limited initial deployment toward broader multi-tenant commercial rollout. That shift prompted a production security review and threat-model reassessment appropriate for a SaaS handling hotel operations.

The review covered multi-tenant isolation; authentication and authorization; database-level access boundaries; private file handling; public/private content separation; upload and delete flows; secret exposure; legacy environment containment; control-plane access; and emergency operations. The emphasis was on server-side enforcement rather than treating the frontend as the security boundary.

Security recommendations were not automatically implemented. Each item passed through a Human Gate that assessed realistic threat, exploitability, impact, existing mitigation, user experience, implementation cost, and operational burden. The goal was practical SaaS security without adding controls that would unnecessarily slow normal hotel operations.

The review was completed with server-side boundaries reviewed, infrastructure MFA/2FA and access review completed, credential-recovery and emergency operations documented, and legacy environments contained. No known launch-blocking technical findings remained at the time of review; lower-priority hardening was separated into a post-launch backlog.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Supabase (Database, Auth, Storage, Edge Functions)
- PostgreSQL
- Cloudflare Pages / Workers

## Production Status

- **MVP development:** Completed
- **Environment:** Production (`app.bqmenu.com`)
- **First customer:** Deployment confirmed; product is moving into the commercial rollout phase for additional hotels

## Public URL

- App: https://app.bqmenu.com (staff-authenticated product interface; guest menu views are reached per-venue via fixed QR codes issued during hotel onboarding, not a single public demo page)

## Role

- Product ownership: translating an ambiguous operational request into a defined, multi-tenant SaaS scope
- Requirements definition and specification ownership
- Solution and data-model design (venue model, publication state machine, RLS-based tenant isolation)
- AI development orchestration: directing implementation and independent review agents, and making accept/reject/stop decisions on their output
- SaaS security review ownership: threat-model reassessment, remediation prioritization, Human Gate decisions, and operational hardening before commercial rollout
- Production setup, testing strategy, and documentation
- Go-to-market and sales enablement design (see [BQmenu LP](bqmenu-lp.md))

## What This Demonstrates

- Turning a real, ambiguous operational request into a scoped, multi-tenant B2B SaaS product rather than a one-off custom build
- Requirements-driven, review-gated AI-orchestrated development, with a human holding final judgment at every step
- Practical, non-absolute product-safety language (overlap *checking* vs. guaranteed prevention) carried consistently from requirements into UI and later into sales copy
- Deliberate scope control: choosing not to build an edit feature, and explaining why, rather than leaving it as an unstated gap
- Moving a completed MVP into commercial SaaS rollout by reassessing the threat model and balancing security, UX, and operational cost rather than treating every possible hardening measure as mandatory
- End-to-end delivery from requirements through production deployment
