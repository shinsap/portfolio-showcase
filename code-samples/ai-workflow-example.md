# AI-Assisted Development Workflow Example

This is a sanitized example of how I use AI tools during development.

## 1. Define The Goal

Start with a product-level description:

- who uses it
- what problem it solves
- what data it touches
- what should not be exposed
- what the deployment path looks like

## 2. Ask AI For A First Pass

Use AI for:

- initial component structure
- data model suggestions
- edge-case checklist
- implementation alternatives

## 3. Review Before Implementation

Before accepting code:

- check whether the design matches the existing app
- remove unnecessary abstractions
- verify secret handling
- check external service assumptions
- confirm testing and deployment impact

## 4. Implement In Small Steps

Prefer small commits and narrow changes:

- one feature or fix at a time
- focused tests where useful
- clear README or handover notes when operation changes

## 5. Operational Review

For active repositories:

- review GitHub Actions
- check secrets names
- check webhooks and deploy keys
- remove stale deployment automation
- archive old repositories with clear warnings

## Result

AI accelerates implementation, but final responsibility remains with the developer: product fit, security, deployment, and maintainability.
