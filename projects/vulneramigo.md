# Vulneramigo

## Overview

Vulneramigo is a lightweight web app (PWA) that turns vulnerability information for PHP, Node.js, and Oracle Java into a report that both web agencies and their clients can understand. It is designed as a communication tool: it helps people who are not security specialists see whether an update is needed and what to do next.

Vulneramigo is currently **in development** and being prepared for public release. It is not yet available as a public service.

## Challenge → Solution

**Problem:** Vulnerability information for server-side technologies is published in technical language. Web agencies often need to explain to a client why a PHP, Node.js, or Java update matters, and website managers at small businesses find it hard to judge whether an advisory affects them or how urgent it is.

**Solution:** The user selects the technologies their site uses and enters the version information. Vulneramigo checks those versions against the advisories it includes, based on official vendor information, and organizes the result into a clear report: whether an update is needed, what action to take, and where the official source can be found.

The check covers only the advisories included in the tool and the versions the user enters. Vulneramigo does not scan websites, discover vulnerabilities, or assess the overall security of a site, and the report states this scope explicitly. When the information is not enough to reach a conclusion, the report says so rather than presenting the result as safe.

**Who this solves it for:** Web agencies that maintain client websites, and the people responsible for websites at small and mid-sized businesses.

## Key Features

- Japanese, English, and Spanish interface and reports
- A plain-language summary for the client's website manager
- Technical details for the web agency in the same report
- Recommended actions with links to official sources
- Print / save as PDF from the browser, so the report can be shared in client meetings
- Input is processed in the browser; entered information is not sent to a server or stored

## Status

- **Development:** In progress
- **Release:** Preparing for public release (not yet publicly available)

## Role

- Product planning and positioning as a client-communication tool
- Requirements definition, including the scope and wording of what the report does and does not claim
- Report and user-flow design for two audiences (website manager and web agency)
- Multilingual content design (Japanese / English / Spanish)
- Browser-only PWA implementation
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
- Privacy-conscious, browser-only processing of user input
- Multilingual product design for domestic and international users
