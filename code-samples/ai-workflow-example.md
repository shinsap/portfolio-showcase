# Requirements, implementation, review, and acceptance

This describes the working approach used across the case studies; release authority and checks depend on each project's agreed scope. The adjacent TypeScript/TSX snippets are illustrative examples, not extracted production code.

I use herdr as my development workspace, running Claude Code and Codex in multiple panes to organize project work and separate implementation from review.

1. **Frame the problem.** Identify users, operational constraints, business objective, and what the product will not do.
2. **Define acceptance.** Specify data and authorization boundaries, failure behavior, and observable acceptance criteria before directing implementation.
3. **Implement a bounded change.** Claude Code or another implementation agent writes code, focused tests, and updated documentation.
4. **Review independently.** Codex or another review agent compares requirements and the diff, reporting findings separately from implementation. I decide scope and response based on evidence, impact, UX, and operational cost.
5. **Verify the relevant boundary.** A unit test, packaged CLI test, deployed-preview check, and physical-device check answer different questions. Record what passed and what remains unverified.
6. **Release and operate.** Follow project-specific authority for commits, deployment, and rollout. Update operating instructions when behavior changes. A merged PR alone is not deployment evidence.

## Examples of decisions that changed the work

- [BQmenu](../projects/bq-menu.md): align PDF delivery with requirements; diagnose a partial deletion failure and verify retries.
- [Portion Weight Match](../projects/portion-weight-match.md): replace an algorithm after counterexamples; overturn a static-review diagnosis with browser evidence.
- [RepoBD](../projects/repobd.md): test the published package and handle uncertain remote consumption after a local write.
- [Vulneramigo](../projects/vulneramigo.md): verify offline/update recovery on a deployed preview.
- [Hit & Lock](../projects/hit-and-lock.md): a separately scoped experiment allowed automated merging and production checks under predefined conditions.

AI supplies implementation and review capacity. I own problem definition, product scope, acceptance decisions, and the decision to accept, fix, defer, or stop.

[Portfolio](../README.md) · [日本語](../ja/code-samples/ai-workflow-example.md)
