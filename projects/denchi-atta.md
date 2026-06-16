# Denchi Atta?

## Overview

Denchi Atta? ("Got batteries?") is a personal and family-use PWA for recording household batteries. It helps users check which batteries are used in each device at replacement time.

## Challenge → Solution

**Problem:** When a battery runs out, most people cannot remember which battery type the device uses. Checking the device manual or the device itself takes time and often means opening hard-to-reach compartments. Households accumulate devices with different battery types and there is no easy place to record this.

**Solution:** A browser-based PWA that records which battery type each device uses. No install, no account, no login required. Users open it at the moment a battery dies and immediately see the correct type and available stock. A sync code allows sharing across family members and devices.

**Who this solves it for:** Households with multiple battery-powered devices, families where different members replace batteries, and anyone tired of buying the wrong battery size.

## Public URL

- LP: https://nortelia.co.jp/apps/battery/
- App: https://app.nortelia.co.jp/

## Role

- Product planning
- Household battery record workflow design
- PWA-oriented implementation planning
- Local-first data handling direction
- Replacement-time lookup experience design

## Stack

- React
- TypeScript
- Vite
- React Router
- Dexie (IndexedDB)
- Firebase
- vite-plugin-pwa
- Tailwind CSS
- Vercel

## What This Demonstrates

- Personal-use PWA design with zero-friction onboarding (no install, no login)
- Local-first product thinking with optional cloud sync
- Lightweight record and lookup workflows
- Practical UX for repeated household maintenance tasks
