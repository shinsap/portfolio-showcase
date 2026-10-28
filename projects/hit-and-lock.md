# Hit & Lock

## Overview

Hit & Lock is a bilingual four-digit deduction puzzle PWA built as a small experiment in AI-assisted product development.

Players try to open a padlock and treasure box by guessing a four-digit code with no repeated digits. Each guess is evaluated with the Japanese labels 良 / 可 / 無, corresponding to correct digit and position, correct digit in the wrong position, or no match.

Public URL: https://hitandlock.nortelia.co.jp/

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
- X sharing without exposing the answer
- Offline-capable PWA
- Local progress storage and resume
- Color-vision support
- Reduced-motion support
- Anonymous PostHog event tracking

## Development Approach

The project was intentionally kept small and framework-light.

The core game logic was separated from the UI and covered with automated tests. The production version also includes end-to-end tests for the main flow, PWA behavior, offline startup, sharing, and analytics behavior when no key is configured.

The goal was not to perfect the visual design before release. It was to turn a small idea into something usable quickly, then decide from the working product whether further investment was worthwhile.

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

## Portfolio Position

Hit & Lock is intentionally a small project.

Its value as a portfolio piece is not the size of the game, but the development process: a speculative business idea was turned into a working, public product quickly enough to evaluate the idea through use rather than discussion alone.
