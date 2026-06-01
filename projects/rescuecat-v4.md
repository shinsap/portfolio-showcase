# Rescue Cat Card v4

## Overview

Rescue Cat Card is a service concept for emergency situations where a third party can scan an NFC/QR card and access information needed to protect a cat when the owner is unable to respond.

## Role

- Product planning
- Requirement organization
- UI and user-flow design
- Frontend implementation
- Supabase and Cloudflare architecture planning
- GitHub repository and workflow maintenance
- Staging/test operation design

## Stack

- React
- TypeScript
- Supabase
- Cloudflare Pages/Workers
- GitHub Actions

## Development Operation

The project uses separate repositories for active development and staging/testing.

- `rescuecat-v4`: active development line
- `rescuecat-v4-staging`: staging and pre-production testing

Large changes are validated through staging before being reflected back into the main development line.

## Security and Maintenance Work

Repository inventory and cleanup included:

- archived old v1/v2/v3 repositories
- disabled old GitHub Actions workflows
- reviewed Actions secrets names
- checked webhooks, deploy keys, and GitHub Pages settings
- verified that the old v3 Supabase project is standalone and paused

## What This Demonstrates

- AI-assisted implementation with human operational review
- staging-oriented release discipline
- repository security hygiene
- practical handling of old code and service credentials
