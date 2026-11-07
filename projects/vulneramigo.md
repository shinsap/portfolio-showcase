# Vulneramigo

## Overview

Vulneramigo is a lightweight web app (PWA) that turns website security settings and vulnerability information for PHP, Node.js, Oracle Java SE, and Next.js into a report that both web agencies and their clients can understand. It is designed as a communication tool: it helps people who are not security specialists see what to improve and what to do next.

Vulneramigo is publicly available and running in production at https://vulneramigo.nortelia.co.jp/ (BETA).

## Challenge → Solution

**Problem:** Security settings and vulnerability information for server-side technologies are published in technical language. Web agencies often need to explain to a client why a PHP, Node.js, Java, or Next.js update matters, and website managers at small businesses find it hard to judge whether an advisory affects them or how urgent it is.

**Solution:** Vulneramigo offers two checks that can be used on their own or combined into one report.

- **URL check (BETA, non-intrusive):** The user enters the URL of a site they manage or have permission to check, and Vulneramigo reviews its publicly visible settings: HTTPS and the HTTP-to-HTTPS redirect, HTTP security headers, and email / DNS settings (SPF, DMARC, MX, CAA). Results are grouped into confirmed items, recommended improvements, and items that could not be confirmed, with plain-language explanations and improvement hints.
- **Version check:** The user selects PHP, Node.js, Oracle Java SE, or Next.js and enters the version. Vulneramigo checks it against the advisories it includes (for Next.js, 26 GHSA advisories), based on official information, and shows related advisories, whether an update is needed, and where the official source can be found.

The scope is stated explicitly. The URL check is a simple review of publicly visible settings: it does not scan the inside of a site, does not identify PHP, Node.js, Java, or Next.js versions from a URL, and does not guarantee the security of the whole site. The version check covers only the advisories included in the tool and the versions the user enters; it does not cover every vulnerability. When the information is not enough to reach a conclusion, or official sources disagree, the report says so rather than presenting the result as safe.

**Who this solves it for:** Web agencies that maintain client websites, and the people responsible for websites at small and mid-sized businesses.

## Key Features

- Version check for four products — PHP, Node.js, Oracle Java SE, and Next.js — against included advisories based on official information
- URL-based security-settings check (BETA): HTTPS, security headers, DNS, and SPF / DMARC email settings, with confirmed / recommended / unconfirmed results
- A plain-language summary for the client's website manager, with technical details, official-source links, and points to confirm for the web agency, in the same report
- Browser printing and PDF saving, including URL-check results in the report
- Optional PDF appendix, "What your environment reveals when you access a site": shows what a browser and device can disclose when visiting a website. It is collected in the browser only when the user opts in, is not sent to a server or stored, and generates no tracking ID
- An additional notice that points users to Oracle's official Security Alert for CVE-2026-114820. It is separate from the diagnosis result and does not determine whether a specific environment is affected
- Japanese, English, and Spanish interface and reports
- An optional "Support the Developer" link next to the URL-check notice

## Data Handling

- **Version check:** runs mainly in the browser, so the entered versions are processed in the browser.
- **URL check:** the entered URL is sent to the app's diagnostic server (a Cloudflare Worker), which looks at the target site's and DNS's publicly available information. The app does not store URL-check results. Cloudflare may retain access logs and rate-limit information.
- Only sites that the user manages, or has permission to check, should be entered.

## Status

- **Development:** Released / maintained (BETA)
- **Release:** Publicly available at https://vulneramigo.nortelia.co.jp/
- **Latest update (2026-11-08):** Added Next.js to the version check, an additional notice based on Oracle's official Security Alert, and a "Support the Developer" link; refined the explanatory text on the check screen
- **Under consideration (timing undecided):** More URL-check items, improved display of environment information, more efficient management of security-information updates

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
- Cloudflare Workers (static assets and the URL-check server)
- Vitest

## What This Demonstrates

- Turning specialist technical information into a deliverable that supports client communication
- Designing for two audiences at once: non-technical decision makers and technical implementers
- Careful, non-absolute product language that makes the tool's scope clear
- Privacy-conscious design that distinguishes browser-only processing from what is sent to the server
- Separating observed, estimated, and unavailable data to make clear what can and cannot be concluded
- Multilingual product design for domestic and international users
