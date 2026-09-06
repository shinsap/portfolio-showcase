# Nortelia LP

## Overview

Nortelia LP is the public corporate site for Nortelia LLC.

The Japanese site presents Nortelia's domestic businesses and products. The English site is intentionally curated rather than being a full translation: it presents Nortelia as a small product studio and practical software builder, with a focus on product development, workflow tools, and AI-assisted development.

The site also includes product and app landing pages such as Hearing Aid Denchichou and Battery Atta?.

## Public URLs

- Japanese: https://nortelia.co.jp
- English: https://nortelia.co.jp/en/
- BQmenu case study: https://nortelia.co.jp/en/works/bqmenu/

## Role

- Information architecture and page structure
- Visual direction and frontend implementation
- Copy and content organization
- Product showcase design
- Japanese / English site architecture
- SEO, structured data, canonical, sitemap and hreflang design
- Bilingual contact flow using Web3Forms
- Product case-study presentation
- Deployment-oriented build checks and secret scanning

## English Site Phase 1

The English site was added as a product-led international entry point rather than as a literal translation of the Japanese corporate site.

Its structure is:

- Hero
- Built by Nortelia
- What We Do
- Products
- How We Work
- About
- Contact

Products presented on the English site include RepoBD, BQmenu, Portion Weight Match, Pack Optimizer, and Rescue Pet Card.

The site explicitly distinguishes products with English-language access from products that currently use Japanese interfaces or operate for the Japanese market.

### BQmenu case study

The English BQmenu page explains a real product-development path: an actual hotel request became the starting point for a reusable B2B SaaS rather than a one-off custom system.

The case study does not claim that the BQmenu product itself is already multilingual or internationally deployed.

## Built by Nortelia

A **Built by Nortelia** product showcase near the top of the site makes Nortelia's in-house product development visible at a glance.

- Horizontally scrolling product cards with real product screenshots
- Desktop auto-scroll with drag support
- Mobile horizontal swipe support
- Native card links
- Pause / resume control
- Reduced-motion handling
- Separate detailed product section for deeper information

## Bilingual Contact

The Japanese and English contact pages share one reusable Web3Forms form component.

The form uses bilingual labels such as:

- お名前 / Name
- メールアドレス / Email
- お問い合わせ種別 / Topic
- お問い合わせ内容 / Message
- 送信する / Send

The production setup uses Web3Forms on the free plan and a Cloudflare Pages environment variable for the access key. The receiving email address is not directly exposed through visible text, `mailto:`, structured data, or reconstruction JavaScript.

Both Japanese and English production submissions were verified end-to-end.

## SEO / AIO

The site includes:

- page-specific titles and descriptions
- canonical URLs
- robots metadata
- Open Graph / Twitter metadata
- sitemap generation
- reciprocal `hreflang` for matched Japanese / English pages
- Organization / WebSite / WebPage structured data
- a SoftwareApplication schema on the English BQmenu case study
- explicit product descriptions, market/language status, and internal linking

The approach emphasizes accurate semantic content and ordinary technical SEO rather than adding speculative AI-specific markup.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- @astrojs/sitemap
- Cloudflare Pages
- Web3Forms
- GitHub Actions build check
- Gitleaks workflow for secret scanning

## What This Demonstrates

- Corporate and landing-page design and implementation
- Product-studio positioning through public web content
- Selective multilingual information architecture
- Product showcase / card-rail interaction design
- Responsive interaction across desktop and mobile
- Bilingual form design and static-site integration
- SEO / structured-data implementation
- Case-study design grounded in a real customer request
- Product-to-service funnel design
- Basic CI/CD and repository hygiene

## Portfolio Use

This project is suitable as a portfolio URL because it shows a production corporate site, multiple public product surfaces, multilingual content architecture, product case studies, contact operations, and deployment practices without exposing private product internals.
