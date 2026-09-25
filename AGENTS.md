# Agent Guidelines & Skill Harness

This repository is configured with Matt Pocock's AI Agent Skills harness (`/setup-matt-pocock-skills`).

## Agent skills

### Issue tracker
GitHub Issues (`gh` CLI). See [`docs/agents/issue-tracker.md`](file:///Users/casperhildebrand/Developer/repos/harvest-ai-hackathon/docs/agents/issue-tracker.md).

### Triage labels
Standard 5-state triage + Wayfinder workflow labels. See [`docs/agents/triage-labels.md`](file:///Users/casperhildebrand/Developer/repos/harvest-ai-hackathon/docs/agents/triage-labels.md).

### Domain docs
Single-context (`CONTEXT.md` + `docs/adr/`). See [`docs/agents/domain.md`](file:///Users/casperhildebrand/Developer/repos/harvest-ai-hackathon/docs/agents/domain.md).

## Configuration Index
- **Domain Context**: [`CONTEXT.md`](file:///Users/casperhildebrand/Developer/repos/harvest-ai-hackathon/CONTEXT.md)
- **Domain Guide**: [`docs/agents/domain.md`](file:///Users/casperhildebrand/Developer/repos/harvest-ai-hackathon/docs/agents/domain.md)
- **Issue Tracker Specification**: [`docs/agents/issue-tracker.md`](file:///Users/casperhildebrand/Developer/repos/harvest-ai-hackathon/docs/agents/issue-tracker.md)
- **Triage & Ticket Labels**: [`docs/agents/triage-labels.md`](file:///Users/casperhildebrand/Developer/repos/harvest-ai-hackathon/docs/agents/triage-labels.md)

## Active Skills & Workflow Rules
1. **`/wayfinder`**: Orchestrate complex features into decision tickets.
2. **`/grill-me` / `/grill-with-docs`**: Align with Product Owners using structured Q&A before implementing features.
3. **Decisions & Traceability**: Record all architectural decisions in tickets or ADRs. Never guess requirements without checking `CONTEXT.md` or asking the PO.
