# Pack Optimizer

## Overview

Pack Optimizer is a public optimization tool for creating fixed-count packs of variable-weight products within a target weight range. It is currently operated on Vercel.

GitHub: https://github.com/shinsap/pack-optimizer

## Challenge → Solution

**Problem:** Seafood processors creating fixed-weight packs (e.g., "200g packs") from variable-weight individual pieces calculate combinations by hand. The process is time-consuming and produces excess waste when combinations are not optimal.

**Solution:** A web tool where the operator enters individual piece weights and target pack weight. The tool automatically calculates the optimal combination with minimum waste using an optimization algorithm. The interface is simple enough for production-floor use with no technical knowledge required.

**Who this solves it for:** Small to mid-sized seafood processors, agricultural producers, and any business creating fixed-weight product packs from variable-weight raw materials.

## Public URL

- App: https://pack-optimizer.vercel.app/

## Role

- Tool planning
- Next.js frontend implementation
- Fixed-count pack optimization algorithm design
- Vercel deployment setup
- Repository maintenance

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel

## What This Demonstrates

- Domain-specific optimization tool development
- Simple, production-floor-oriented UX design
- Small utility development with public deployment
- Fixed-count pack optimization logic for variable-weight products
