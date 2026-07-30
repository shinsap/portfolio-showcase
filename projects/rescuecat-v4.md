# Rescue Pet Card (formerly Rescue Cat Card v4)

## Overview

Rescue Pet Card is a launched service for emergency situations where a third party can scan an NFC/QR card and access information needed to protect a cat or dog when the owner is unable to respond.

The service originally launched as a cat-only product ("Rescue Cat Card"). In mid-July 2026 it was rebranded to **Rescue Pet Card** and expanded to support dogs alongside cats, together with a redesigned purchase flow that lets new users try the product before paying. The rebrand and dog-support launch were publicly announced via press release on **July 25, 2026**.

## Challenge → Solution

**Problem:** When a pet owner suddenly collapses, is hospitalized, or is in a disaster, there is no way for a third party to know what the pet needs — feeding schedule, medication, emergency contacts, or where to take it. The original cat-only product also asked new users to pay before they could see what the service actually did, which created friction and uncertainty at signup.

**Solution:** A physical NFC/QR card linked to a web profile. Scanning the card opens the pet's information instantly, no app install required. Dog support was added as a first-class pet type (not a cosmetic label change), and the purchase flow was redesigned so a new user registers, enters owner and pet details, and can preview exactly what the emergency scan screen will look like — before being asked to pay.

**Who this solves it for:** Cat and dog owners living alone, elderly owners, or anyone who wants a safety net for their pet in a worst-case scenario.

## What Changed in the Rescue Cat Card → Rescue Pet Card Update

### 1. Dog support (not just a rename)

- New `dogs` table as a child of a shared `pets` table (`dogs.pet_id → pets.id`), parallel to the existing `cats` table.
- Dog-specific fields distinct from cat fields: registration number, registered municipality, rabies vaccination year, filaria (heartworm) test year and prevention status, size category, walk notes, and a bite-warning flag. Cat-only fields (FIV/FeLV status) were intentionally not carried over to dogs.
- Shared fields (weight, age-from-birthdate) live on the parent `pets` table instead of being duplicated per species.
- Plan capacity (how many pets a card supports) is calculated as a combined cat + dog total, not tracked separately per species.
- The emergency public page and the owner's dashboard both gained a dedicated dog section, including the bite-warning display, with per-pet visibility toggles reused from the existing cat implementation.

### 2. Purchase flow redesign: preview-before-purchase

**Before:** register → pay → enter owner/pet information.

**After:** register → enter owner information → enter pet information (cats and/or dogs, up to 15 pets) → preview the emergency scan screen → purchase.

- After registering, a new user can enter their information and see a personal, login-protected preview of exactly what a third party would see if they scanned the physical card — using the same visibility rules as the real public page (medical-info consent, per-pet publish toggles).
- The preview period is free for 7 days from registration. Unregistered/incomplete previews are cleaned up automatically after expiry, with reminders sent partway through the window.
- Card purchase happens afterward, once the owner has seen the real preview. The minimum required plan (based on combined pet count) is calculated and enforced server-side, not trusted from the client. Registrations of 16 or more pets are routed to manual inquiry rather than self-checkout.
- Before a physical card exists, no public scan URL is issued — the preview only lives inside the authenticated dashboard, so there is no way to reach real card content before purchase.

### 3. Dual-domain migration

- New primary domain: `rescuepet.jp` / `app.rescuepet.jp` for the rebranded product and all new card purchases.
- The legacy `app.rescuecat.jp` domain is intentionally kept permanently alive for physical-card compatibility: cards already printed and shipped before the rebrand have NFC/QR codes hard-coded to that URL, and reprinting/reissuing them was not an option. New `/public/*` scan links resolve through the domain the card itself was issued against, so old cards keep working without any customer action.

## Public URL

- App: https://app.rescuepet.jp/ (new cards) / https://app.rescuecat.jp/ (legacy physical-card compatibility, `/public/*` only)

## Role

- Product planning, including the cat → cat+dog expansion and the purchase-flow redesign
- Requirement organization and cross-repo alignment (an internal reference implementation was reviewed and adapted, not copied, for the dog data model)
- UI and user-flow design
- Frontend implementation
- Supabase, Stripe, and Cloudflare architecture planning
- Security review of the purchase/authorization flow before production rollout
- GitHub repository and workflow maintenance
- Staging/test operation design

## Stack

- React
- React Router v7
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- Stripe
- Cloudflare Pages/Workers
- Wrangler
- GitHub Actions

## Development Operation

The project uses separate repositories for active development and staging/testing.

- `rescuecat-v4`: launched active service and main development line (repository name kept for continuity; the product itself is Rescue Pet Card)
- `rescuecat-v4-staging`: staging and pre-production testing

Large changes — including dog support and the purchase-flow redesign — were validated through staging before being reflected back into the active service line.

## Security and Maintenance Work

Repository inventory and cleanup included:

- archived old v1/v2/v3 repositories
- disabled old GitHub Actions workflows
- reviewed Actions secrets names
- checked webhooks, deploy keys, and GitHub Pages settings
- verified that the old v3 Supabase project is standalone and paused

A dedicated security review was also run on the purchase-flow branch before production release, covering authorization checks on order-claim and user-data access paths; findings were fixed and verified prior to launch.

## What This Demonstrates

- Evolving a live, revenue-generating product's data model and purchase flow without breaking existing paying customers or already-shipped physical hardware
- Physical product + digital service end-to-end (NFC card → Stripe purchase → Supabase profile → scan display)
- Designing a "try before you buy" flow for a product that is inherently hard to demo (a physical card tied to a real emergency use case)
- AI-assisted implementation with human operational and security review
- Staging-oriented release discipline
- Repository security hygiene
- Practical handling of legacy URLs, old code, and service credentials during a brand migration
