# Hit & Lock

## Overview

Hit & Lock is a bilingual four-digit deduction puzzle PWA built as a small experiment in AI-assisted product development.

Players try to open a padlock and treasure box by guessing a four-digit code with no repeated digits. Each guess is evaluated with the Japanese labels 良 / 可 / 無, corresponding to correct digit and position, correct digit in the wrong position, or no match.

Public URL: https://hitandlock.nortelia.co.jp/

## Mobile feedback translated into a measurable fix

An iPhone Safari report that too little guess history was visible led to PR #11: a 4×3 keypad, revised stage sizing, dynamic viewport height, and safe-area handling. At turn seven, Chromium viewport checks increased fully visible history rows from 3 to 5 at 390×664, 3 to 6 at 390×844, and 1 to 2 at 320×568. The PR passed 207 tests, a build, and one E2E test.

These figures are Chromium viewport measurements, not measurements from an actual iPhone. The PR left physical iPhone verification outstanding. Later device checks described elsewhere should not be confused with that milestone. My role was defining the usability problem and acceptance target; AI agents implemented and reviewed the layout change.

## Origin

The project did not start from a plan to build a serious game.

The initial question was whether a small puzzle that reveals a coupon or reward after completion could be useful for B2B promotions. That idea led from rewards, to treasure boxes, to locks, and finally to a Hit & Blow-style number deduction game.

The broader experiment was simple:

> How quickly can a small idea become a working product through AI-assisted development with as little manual effort as practical?

The initial concept and requirements took about three hours to shape. An AI-assisted workflow produced the first playable version in roughly two more hours.

That timing refers to the first playable version, not the finished production release. UI refinement, automated testing, PWA support, localization, accessibility, social sharing, analytics, and production readiness were added afterward.

## Product Features

- Daily puzzle shared by all users and switched at midnight JST
- Free play mode
- Japanese / English UI
- 良 / 可 / 無 result labels
- Hint and coin system
- Retry rules and streak tracking
- Share sheet after clearing (native share menu, X, LINE, Threads, copy), never exposing the answer; switches to the native share menu in home-screen-installed iPhone apps, and share links carry per-destination source tags
- Saveable result images (1080×1920 story and 1080×1080 square) rendered on the device with no external service; they contain neither the answer nor the guessed numbers
- Optional Ko-fi support link on the home page and the clear screen (a plain link, no external script or embed)
- BGM (about 3-minute loop, 2.2 MB AAC) with on/off and volume controls, silent in iPhone silent mode, paused when the app goes to the background, and cached for offline playback; credit shown in settings
- Offline-capable PWA
- Local progress storage and resume
- Color-vision support
- Reduced-motion support
- Anonymous PostHog event tracking, limited to domain + path + source information for page URLs and domain only for referrers
- Security headers on all pages (CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) and HTTP-to-HTTPS redirect

## Development Approach

The project was intentionally kept small and framework-light.

The core game logic was separated from the UI and covered with automated tests: 341 unit tests and 39 E2E tests covering the main play flow, layout at three screen sizes, PWA behavior, offline startup, sharing, analytics behavior when no key is configured, and no CSP violations in any scene.

The goal was not to perfect the visual design before release. It was to turn a small idea into something usable quickly, then decide from the working product whether further investment was worthwhile.

## Security Check

In November 2026, a security check of the production site was carried out, resulting in security headers, an HTTPS redirect, minimized analytics data, and updated development dependencies. The post-change state was verified in production.

## Stack

- Vite
- TypeScript
- vite-plugin-pwa
- Vitest
- Playwright
- Cloudflare Workers
- PostHog
- localStorage
- Web Audio API

No frontend framework is used for the application UI.

## AI-assisted Workflow

The project was built using an AI-assisted development process:

1. Shape the idea and requirements
2. Implement a playable first version
3. Review and test the behavior
4. Refine UI and interaction
5. Add PWA, localization, accessibility, sharing, analytics, and release checks
6. Deploy to Cloudflare Workers

AI was used as part of the development workflow; the game itself does not contain a generative-AI feature.

### AI-only operation experiment (2026-11)

For the 2026-11 feature additions, implementation was done by Claude Code and review by Codex, connected and run automatically with an orchestration tool (herdr). The four feature PRs (share sheet, result images, BGM, image fixes) went from planning through review, merge, and production verification without human confirmation. Merge conditions were: zero required review findings, passing automated tests, and a successful preview build with security headers confirmed. Humans were involved only in setting direction, checking on a real device, and handling a branch-creation problem. On-device checks on iPhone (BGM, each share destination, image saving, Ko-fi link) found no problems.

## What This Demonstrates

- Turning a lightweight idea into a usable product quickly
- AI-assisted requirements-to-implementation workflow
- Small PWA design without a large application framework
- Separation of game logic and UI
- Automated unit and E2E testing
- Bilingual UI
- Offline-first delivery
- Accessibility and reduced-motion handling
- Production deployment on Cloudflare Workers
- Security check and remediation of a production site
- A largely automated implement-review-merge-verify loop with explicit merge gates

## Portfolio Position

Hit & Lock is intentionally a small project.

Its value as a portfolio piece is not the size of the game, but the development process: a speculative business idea was turned into a working, public product quickly enough to evaluate the idea through use rather than discussion alone.

---

[Portfolio](../README.md) · [日本語](../ja/projects/hit-and-lock.md)
