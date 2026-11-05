# Vulneramigo

## Overview

Vulneramigo is a lightweight web app (PWA) that turns website security settings and vulnerability information for PHP, Node.js, and Oracle Java into a report that both web agencies and their clients can understand. It is designed as a communication tool: it helps people who are not security specialists see what to improve and what to do next.

Vulneramigo is publicly available and running in production at https://vulneramigo.nortelia.co.jp/.

## Challenge → Solution

**Problem:** Vulnerability information for server-side technologies is published in technical language. Web agencies often need to explain to a client why a PHP, Node.js, or Java update matters, and website managers at small businesses find it hard to judge whether an advisory affects them or how urgent it is.

**Solution:** Vulneramigo offers two checks that can be used on their own or combined into one report.

- **URL check (non-intrusive):** The user enters a website URL, and Vulneramigo reviews its publicly visible security settings: HTTPS and the HTTP-to-HTTPS redirect, security headers (CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy), and email / DNS settings (SPF, DMARC, MX, CAA). Results are grouped into confirmed items, recommended improvements, and items that could not be confirmed, with plain-language explanations and improvement hints.
- **Version check (CVE):** The user selects PHP, Node.js, or Oracle Java SE and enters the version. Vulneramigo checks it against the advisories it includes, based on official vendor information, and shows related CVEs, whether an update is needed, and where the official source can be found.

The scope is stated explicitly. The URL check is a simple, non-intrusive review and does not guarantee the security of the whole site. The version check covers only the advisories included in the tool and the versions the user enters; it does not detect PHP or Node.js versions from a URL. Vulneramigo does not discover vulnerabilities inside a site. When the information is not enough to reach a conclusion, the report says so rather than presenting the result as safe.

**Who this solves it for:** Web agencies that maintain client websites, and the people responsible for websites at small and mid-sized businesses.

## Key Features

- URL-based security-settings check (HTTPS, security headers, SPF / DMARC, MX / CAA) with confirmed / recommended / unconfirmed results
- Version-based CVE check for PHP, Node.js, and Oracle Java SE, usable alone or combined with the URL check
- Detailed PDF report integrating URL-check results (target site and date, findings, improvement hints, software vulnerabilities, scope and notes), with the target domain shown on the cover even for URL-only checks
- Optional PDF appendix, "What your environment reveals" (3 pages): shows what a browser and device can disclose when visiting a website, with each item labeled observed / estimated / unavailable, plus an explanation of how combined signals can make a browser identifiable. It is collected in the browser only when the user opts in, is not sent to a server or stored, and generates no tracking ID or fingerprint hash. IP address, precise location, and camera / microphone are not collected
- Redesigned top page centered on URL input, with the version check moved into a collapsible area for engineers and web producers
- Public monitoring panel showing the review status of PHP, Node.js, Oracle Java SE, CISA KEV, and OSV.dev (Phase 1, manually updated; automatic updates are not implemented)
- Japanese, English, and Spanish interface and reports
- A plain-language summary for the client's website manager, with technical details for the web agency in the same report
- Recommended actions with links to official sources

## Status

- **Development:** Released / maintained (BETA)
- **Release:** Publicly available at https://vulneramigo.nortelia.co.jp/
- **Latest update (2026-11-06):** Added the URL security-settings check, URL results in the PDF report, the optional environment appendix, a redesigned top page, and a public monitoring panel
- **Under consideration (timing undecided):** Overall PDF redesign, improved display of environment information, more URL-check items, more efficient management of security-information updates

## Role

- Product planning and positioning as a client-communication tool
- Requirements definition, including the scope and wording of what the report does and does not claim
- Report and user-flow design for two audiences (website manager and web agency)
- Multilingual content design (Japanese / English / Spanish)
- Non-intrusive URL check design and implementation, with results grouped as confirmed / recommended / unconfirmed
- Browser-based PWA implementation
- Curation of the included advisory data from official vendor information

## Stack

- React
- TypeScript
- Vite
- PWA (Service Worker)
- Cloudflare Workers (static assets)
- Vitest

## What This Demonstrates

- Turning specialist technical information into a deliverable that supports client communication
- Designing for two audiences at once: non-technical decision makers and technical implementers
- Careful, non-absolute product language that makes the tool's scope clear
- Privacy-conscious design: the optional environment appendix is collected in the browser only on opt-in, with no transmission, persistence, or fingerprint generation
- Separating observed, estimated, and unavailable data to make clear what can and cannot be concluded
- Multilingual product design for domestic and international users
