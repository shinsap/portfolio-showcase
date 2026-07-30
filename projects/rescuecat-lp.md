# Rescue Pet Card LP (formerly Rescue Cat Card LP)

## Overview

Rescue Pet Card LP is the public-facing landing page for Rescue Pet Card. It explains the service concept, use case, and path to registration for people who want emergency pet-care information to be reachable when something happens to them.

The LP was rebranded alongside the underlying app in mid-July 2026: the cat-only "Rescue Cat Card" LP became "Rescue Pet Card" LP, reflecting dog support, and the conversion path was rebuilt around a preview-before-purchase flow instead of a direct Stripe purchase link. The rebrand was publicly announced via press release on **July 25, 2026**, alongside the app-side launch.

## Challenge → Solution

**Problem:** Rescue Pet Card solves a real problem, but the value is not obvious at a glance — "what happens to my pet if I collapse?" is not something people think about until it's too late. On top of that, the previous LP sent visitors straight into a Stripe purchase link, asking for payment before they could see what the product actually looked like in use.

**Solution:** A story-driven landing page that opens with the worst-case scenario, now explaining the product for both cats and dogs, and connects to the app's registration flow rather than directly to checkout — matching the new preview-before-purchase flow in the app, where visitors register, enter pet details, and see a real preview of the emergency scan screen before being asked to pay. Designed to convert visitors who arrive from search, social sharing, or word-of-mouth with no prior knowledge of the service.

## What Changed in the Rebrand

- Copy and imagery updated from cat-only to cat-and-dog messaging.
- Primary call-to-action changed from a direct Stripe Payment Link to the app's registration flow, so visitors land on sign-up rather than checkout — aligned with the app-side purchase-flow redesign.
- Domain moved from `rescuecat.jp` to `rescuepet.jp`; the old domain now 301-redirects visitors to the new one, while the `/public/*` physical-card scan path is kept separately routed to the legacy `app.rescuecat.jp` app domain so already-issued cards keep working.
- A press-kit page was added for media/press outreach around the rebrand launch.

## Public URL

- LP: https://rescuepet.jp/ (new) — https://rescuecat.jp/ now 301-redirects here

## Role

- Landing page structure planning, including the cat-only → cat+dog rebrand
- Service explanation and user-flow organization
- Story-driven section and copy design
- Conversion path redesign: from direct Stripe link to app registration, matching the preview-before-purchase flow
- Domain migration planning (redirect strategy that preserves legacy physical-card URLs)
- Public-facing content review

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Cloudflare Pages
- Claude Code / Cursor

## Relationship to Rescue Pet Card (app)

Rescue Pet Card (the app, formerly `rescuecat-v4`) is the launched service application with authentication, user records, cat/dog data, purchase flow, and Cloudflare-based operation.

Rescue Pet Card LP is the acquisition layer. It presents the service to new users and leads them into the app's own registration and free-preview flow rather than a direct checkout link.

## What This Demonstrates

- Rebranding and re-messaging a live, converting landing page without losing existing SEO/traffic (legacy domain preserved via redirect)
- Adjusting a conversion path to match a product-side flow change (direct-purchase link → app registration)
- Story-driven landing page design for an abstract-value service
- Separation between product application and marketing surface
- Static site deployment on Cloudflare Pages
