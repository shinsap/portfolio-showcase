# RepoBD

> **Wrong repo. No secret.**

## Overview

RepoBD is an open-source CLI for one-time API key and token handoff with Git repository context. It was created after a real development mistake: while working across multiple terminals, a valid API key was placed into the wrong repository.

The product turns that failure mode into a narrow guardrail. A sender creates a one-time encrypted delivery from the repository the secret belongs to. A receiver runs RepoBD from their local clone; RepoBD verifies the current canonical Git repository before retrieving and applying the secret to the repository root `.env`.

RepoBD is not an AI-specific security tool. Its primary use cases are:

1. solo development across multiple repositories and terminals
2. multi-agent development with tools such as Claude Code and Codex
3. team handoff of API keys and tokens between developers

The current public release is `repobd@0.1.1`, published on npm and GitHub under the MIT license.

## Challenge → Solution

**Problem:** Secrets such as API keys and tokens normally carry no information about which local repository they belong to. A developer can therefore have the correct secret and still paste or apply it in the wrong terminal, repository, AI session, or teammate workflow.

**Solution:** RepoBD binds a short-lived, one-time delivery to the canonical identity of the intended Git repository. The receiver must be in a matching repository before the secret is retrieved.

A wrong-repository pull is rejected before any network call for the delivery lifecycle, so the secret is not retrieved, `.env` is not modified, and the delivery remains available for the correct repository until it expires or is otherwise consumed.

## Core Flow

### Send

From the repository the secret belongs to:

```text
repobd send
→ enter KEY
→ enter value
→ encrypt locally
→ create one-time delivery
→ receive delivery URL
```

### Pull

From the receiving clone:

```text
repobd pull
→ paste delivery URL
→ verify current Git repository
→ retrieve and decrypt locally only after a match
→ apply one KEY=value entry to the repository root .env
→ consume the delivery after the verified write
```

Wrong repository:

```text
Repository mismatch. Secret was not retrieved.
```

Expired and already-consumed deliveries are also rejected.

## Architecture & Security Boundary

RepoBD was designed around explicit security boundaries rather than broad security claims.

- Encryption and decryption happen client-side using AES-256-GCM with a fresh key for each delivery.
- The production backend runs on Cloudflare Workers with D1 for short-lived encrypted-envelope lifecycle state.
- The backend does not receive the plaintext secret, decryption key, or repository identity in the supported CLI flow.
- Repository identity is derived from the canonical Git origin rather than local filesystem paths, so separate clones of the same repository can match.
- A delivery has a fixed 15-minute TTL.
- A successful pull is intended to be one-time; replay after consumption is rejected.
- `.env` writes are deliberately narrow and fail closed on ambiguous or unsupported content rather than attempting to behave as a general dotenv editor.
- Repository binding is an accidental-misuse guardrail, not cryptographic authentication.

RepoBD is explicitly **not** a vault, password manager, production deployment secret store, identity system, or defense against a compromised local machine or malicious local user.

## AI-Assisted Development Context

AI coding agents are one use case, not the product definition.

When Claude Code, Codex, or other agents are running across several repositories, humans and orchestrators can still choose the wrong terminal or session. RepoBD does not route work or select the correct agent. It adds a final repository check before secret retrieval so that a context-selection mistake does not automatically become a wrong-repository secret write.

A practical benefit is that the raw API key does not need to be pasted directly into an AI chat. The RepoBD delivery URL is itself secret-bearing and must still be handled through a private, trusted channel.

## Development & Review Process

RepoBD was built with a requirements-driven, review-gated multi-agent workflow.

- **Human role:** product definition, threat-model boundaries, architecture decisions, security trade-offs, release scope, and final go/no-go decisions.
- **Claude Code:** implementation against the scoped requirements and approved architecture.
- **Codex:** independent read-only review of implementation deltas, security-sensitive behavior, and release readiness.
- **Human Gate:** commits, pushes, deployment, and scope changes remained under explicit human control during development.

The project was developed with security invariants, threat-model documentation, test strategy, architecture notes, and explicit statements of what the product does not protect against.

## Release & Deployment

- **npm:** `repobd@0.1.1`
- **License:** MIT
- **Repository:** public GitHub repository under the `repobd` organization
- **Production API:** Cloudflare Workers + D1
- **Landing page:** Cloudflare Workers Static Assets
- **Product site:** https://repobd.com
- **Source:** https://github.com/repobd/repobd

Install:

```bash
npm install -g repobd
```

CLI help:

```bash
repobd --help
repobd send --help
repobd pull --help
```

## Role

- Identified the product problem from a real multi-terminal development failure
- Defined the product scope and repository-context binding model
- Owned requirements, architecture, threat model, and security invariants
- Directed AI implementation and independent review workflows
- Made Human Gate decisions on scope, fixes, commits, deployment, and release readiness
- Designed the public product positioning around solo development, multi-agent workflows, and team secret handoff rather than framing it as an AI-only tool
- Shipped the CLI, npm package, production backend, public OSS repository, documentation, and landing page

## What This Demonstrates

- Turning a personal operational failure into a narrowly scoped developer product
- Defining the security boundary before implementation rather than adding security language after the fact
- Separating secret transport from repository-context verification
- Building and publishing a real npm CLI and public open-source package
- Designing fail-closed behavior for security-sensitive local file writes
- Using independent AI implementation and review roles while retaining human authority over architecture and release decisions
- Shipping the CLI, backend infrastructure, documentation, OSS repository, and public landing page as one coherent product
