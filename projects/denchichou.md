# Hearing Aid Denchichou

## Overview

Hearing Aid Denchichou is a PWA for the care industry. It is designed for recording hearing-aid battery information for care-facility residents and home-visit care clients.

## Challenge → Solution

**Problem:** Care staff working at facilities or on home visits need to check the hearing-aid battery size for each resident before every battery replacement. The battery size varies by manufacturer and model, so staff have to look it up each time or rely on handwritten notes. When staff change shifts or new staff are assigned, the information is lost.

**Solution:** A name-searchable PWA where staff register each resident's hearing-aid model and battery size once, then look it up instantly by name on any subsequent visit. A sync code allows multiple staff to share the same record set without accounts or login.

**Who this solves it for:** Care facility staff, home-visit care workers, and any team regularly managing hearing-aid batteries for multiple people.

## Public URL

- LP: https://nortelia.co.jp/apps/denchichou/
- App: https://denchichou.nortelia.co.jp/

## Role

- Product planning
- Care-facility workflow design
- Local-first application direction
- PWA-oriented implementation planning
- Hearing-aid battery search LP flow planning
- Firebase-related configuration review

## Stack

- React
- TypeScript
- Vite
- React Router
- Dexie (IndexedDB)
- Firebase Firestore
- vite-plugin-pwa (Service Worker)
- Tailwind CSS
- Vercel

## LP Relationship

The LP is not just a generic landing page. It allows users to search hearing-aid battery sizes by model number (covering 343 models across 13 domestic manufacturers), and then routes them toward the Hearing Aid Denchichou app for ongoing record management.

The LP functions as an SEO content tool targeting long-tail searches from care workers who know the model but not the battery size.

## What This Demonstrates

- Care-industry operational tool design
- Hearing-aid battery record workflow modeling
- Offline/local-first thinking with IndexedDB + Firebase sync
- LP-to-app service funnel design
- SEO content strategy integrated into a service lead funnel
