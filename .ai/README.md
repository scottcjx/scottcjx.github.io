# AI handoff

This folder is the durable handoff for AI agents working on this repository.

Read `.ai/PROJECT_CONTEXT.md` before making changes. It records the current
architecture, content model, design direction, constraints, validation commands,
recent decisions, and known caveats.

**Maintenance rule:** every AI agent must update `.ai/PROJECT_CONTEXT.md` in the
same change whenever it makes a meaningful architectural, content-model,
design-system, deployment, or workflow change. Keep the document factual and
remove superseded decisions rather than allowing contradictory instructions to
accumulate.

**Cleanup rule:** after every change, audit for unused files and folders. Remove
obsolete generated artifacts, legacy framework files, duplicate assets, and
unreferenced tooling when they are demonstrably outside the active Astro site.
Never remove user content, deploy configuration, referenced assets, or files
whose purpose has not been verified.
