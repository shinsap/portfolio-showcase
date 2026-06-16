# Rescue Cat Card v4

## Overview

Rescue Cat Card is a launched service for emergency situations where a third party can scan an NFC/QR card and access information needed to protect a cat when the owner is unable to respond.

## Challenge → Solution

**Problem:** When a cat owner suddenly collapses, is hospitalized, or is in a disaster, there is no way for a third party to know what the cat needs — feeding schedule, medication, emergency contacts, or where to take it.

**Solution:** A physical NFC/QR card linked to a web profile. Scanning the card opens the cat's information instantly, no app install required. The card is purchased through Stripe, registered through a Supabase-backed web app, and displays correctly even for users with no account.

**Who this solves it for:** Cat owners living alone, elderly owners, or anyone who wants a safety net for their pet in a worst-case scenario.

## Public URL

- App: https://app.rescuecat.jp/

## Role

- Product planning
- Requirement organization
- UI and user-flow design
- Frontend implementation
- Supabase, Stripe, and Cloudflare architecture planning
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

- `rescuecat-v4`: launched active service and main development line
- `rescuecat-v4-staging`: staging and pre-production testing

Large changes are validated through staging before being reflected back into the active service line.

## Security and Maintenance Work

Repository inventory and cleanup included:

- archived old v1/v2/v3 repositories
- disabled old GitHub Actions workflows
- reviewed Actions secrets names
- checked webhooks, deploy keys, and GitHub Pages settings
- verified that the old v3 Supabase project is standalone and paused

## What This Demonstrates

- Physical product + digital service end-to-end (NFC card → Stripe purchase → Supabase profile → scan display)
- AI-assisted implementation with human operational review
- Staging-oriented release discipline
- Repository security hygiene
- Practical handling of old code and service credentials
