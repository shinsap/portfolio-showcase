# Portion Weight Match

## Overview

Portion Weight Match is a browser-based optimization tool for production sites that need to combine variable-weight portions into packs that meet a minimum total weight.

It was originally conceived for seafood processing, where individual cuts such as salmon portions vary in weight, but the same workflow can be applied to other variable-weight products.

The production version supports two separate workflows:

- Japan: gram-based input and calculation
- US: ounce-based input with pack minimums entered in pounds

All CSV data, optimization, and Excel generation stay in the browser. No backend, database, account, or business-data upload is required.

## Problem

When individual pieces do not have a uniform weight, creating packs such as “at least 2,000 g” or “at least 4.5 lb” becomes a combinatorial problem.

A manually convenient combination is not necessarily a globally efficient one. Using the wrong pieces early can reduce the total number of packs that can be produced or increase giveaway across the full inventory.

The goal is therefore not simply to find a valid pack. The tool must optimize the entire available inventory.

**Who this solves it for:** Small to mid-sized seafood processors and other food manufacturers that pack variable-weight items by total pack weight. The same pattern — load existing data as CSV, calculate in the browser, and hand the floor an Excel work instruction — can be adapted to other site-specific calculation or planning tasks that are currently done by hand.

## Production Design

The operator uploads a CSV containing weight classes and stock quantities, enters the minimum pack weight, and runs the calculation.

The result provides:

- the maximum number of packs that can be confirmed
- the weight-class quantities used in each pack
- total weight and excess for each pack
- remaining inventory
- Excel work-instruction export

The UI is intentionally single-purpose and lightweight for use by production staff rather than optimization specialists.

## Optimization Logic

The optimization objective is lexicographic:

1. Maximize the total number of packs that meet the minimum weight.
2. With that maximum pack count fixed, minimize total weight used, which minimizes total excess/giveaway.

The production optimizer is built around HiGHS running in WebAssembly, using exact mixed-integer optimization with pattern/column-generation-oriented paths and compact MIP solving where appropriate.

A key design rule is fail-closed behavior: if the solver cannot confirm optimality within the configured computational limits, the app does not present an unproven solution as “optimal.” It returns an explicit failure instead.

This was an important change from the early MVP, where sequential or greedy-style approaches could produce locally reasonable but globally inferior packing plans.

## Native US Weight Handling

The US route is not a gram-converted version of the Japanese workflow.

US piece weights are normalized directly to native `0.01 oz` integer ticks, while pound minimums are converted exactly through `1 lb = 16 oz`. US input never passes through grams.

This separation avoids introducing unnecessary decimal precision and state-space growth into the optimizer while allowing the JP and US routes to share the unit-independent optimization core.

The CSV schema is intentionally the same (`weights,stock`) on both routes, so the UI explicitly warns users that CSV files do not contain unit metadata and must be uploaded to the correct route.

## Input Limits and Safety

The current production policy is:

- up to 50 weight classes accepted
- 25 or fewer recommended for more reliable calculation time
- 26–50 accepted with a non-blocking complexity warning
- over 50 rejected before calculation

Class count alone does not determine difficulty. Weight distribution, stock quantities, and the relationship between piece weights and minimum pack weight also affect the size of the optimization problem.

The app therefore treats these limits as operational guardrails rather than a guarantee that every accepted input will solve within the time budget.

## Privacy and Security

The application is intentionally browser-only:

- no backend API
- no database
- no authentication
- no CSV or inventory upload
- no analytics or telemetry carrying business data
- no persistence of CSV contents, filenames, or calculation results

Input validation covers malformed CSV, unsafe numeric values, overflow, excessive classes, control characters, and resource limits. Worker execution is bounded and terminated on timeout, and solver failures remain fail-closed.

Excel output is generated locally using a small OOXML/ZIP writer with XML escaping and spreadsheet-formula injection protection.

Production hardening also includes response headers for MIME sniffing protection, referrer policy, framing protection, and unused browser permissions.

## Validation

The production release was validated with:

- regression fixtures based on production-like inventory
- an exact US 17-weight-class fixture
- Chromium production E2E
- WebKit production E2E
- Firefox basic compatibility testing
- CSV boundary and overflow tests
- XLSX generation tests
- architecture tests for browser-only and US no-grams boundaries
- final security review and Human Preview acceptance

A representative US fixture with 366 pieces across 17 weight classes and a 4.5 lb minimum is confirmed at 30 packs, zero excess, with remaining inventory conserved.

## Public URLs

- App: https://portion-weight-match.vercel.app/
- GitHub: https://github.com/shinsap/portion-weight-match

## Role

- Product concept and production-workflow definition
- Requirements and optimization-objective design
- Browser-only architecture design
- JP / US unit-boundary design
- CSV validation and operational guardrails
- Exact optimization design with HiGHS / WebAssembly
- Excel work-instruction export design
- Security and privacy boundary definition
- Human acceptance testing and AI-assisted implementation / independent review workflow
- Vercel production deployment and repository governance

## Stack

- Next.js
- React
- TypeScript
- HiGHS / WebAssembly
- Web Workers
- JSZip / OOXML
- Vitest
- Playwright
- Vercel

## What This Demonstrates

- Translating a real production-floor problem into an exact optimization product
- Recognizing where greedy/local optimization fails and redesigning around global objectives
- Separating unit-specific normalization from a shared optimization core
- Designing fail-closed behavior for computationally difficult inputs
- Keeping operational business data entirely inside the browser
- Building a low-friction CSV → optimization → Excel workflow for non-specialist users
- Using regression fixtures, independent AI review, browser E2E, security review, and Human Preview gates to move an MVP into a production release
