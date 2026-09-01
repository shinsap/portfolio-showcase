# Portion Weight Match

## Overview

Portion Weight Match is a browser-based optimization tool for grouping variable-weight portions into as many packs as possible while meeting a specified minimum pack weight and minimizing total excess weight. It is designed for seafood processing workflows but can also be used for other products whose individual weights vary.

GitHub: https://github.com/shinsap/portion-weight-match

## Challenge → Solution

**Problem:** In seafood processing, individual portions such as salmon cuts do not have uniform weights. When workers need to create packs that must each meet a minimum total weight, manually finding efficient combinations from the available weight inventory is slow and can increase giveaway.

**Solution:** The operator loads a CSV containing weight classes and stock quantities, enters the minimum weight per pack, and the app calculates an optimal packing plan. The result shows which weight classes and quantities to use for each pack, remaining inventory, and can be exported as an Excel work instruction.

The optimizer prioritizes: (1) maximizing the number of valid packs, then (2) minimizing total excess weight. The app runs entirely in the browser; business CSV data is not sent to a backend.

**Who this solves it for:** Small to mid-sized seafood processors and other food manufacturers that pack variable-weight items by total pack weight rather than by a fixed number of pieces.

## Public URL

- App: https://portion-weight-match.vercel.app/
- GitHub: https://github.com/shinsap/portion-weight-match

## Role

- Product planning and workflow definition
- Browser-only architecture design
- CSV validation and packing workflow design
- Exact optimization design using HiGHS/WASM
- Excel work-instruction export design
- Japanese / English UI
- Vercel deployment and repository maintenance

## Stack

- Next.js
- React
- TypeScript
- HiGHS / WebAssembly
- XLSX
- Vercel

## What This Demonstrates

- Domain-specific optimization for real production workflows
- Exact optimization with practical fallback strategy for larger problem sizes
- Browser-only processing for operational data
- Production-floor-oriented UX for users with low technical literacy
- CSV input and Excel output integrated into a lightweight web tool
- Independent implementation / review workflow with regression testing against real operational data
