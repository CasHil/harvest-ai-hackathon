# Issue Tracker Configuration

- **Provider**: GitHub Issues
- **Wayfinder Map Label**: `wayfinder:map`
- **Wayfinder Ticket Labels**:
  - `wayfinder:grilling`
  - `wayfinder:prototype`
  - `wayfinder:research`
  - `wayfinder:task`
- **CLI Tooling**: GitHub CLI (`gh`)
  - Create map: `gh issue create --title "<title>" --label "wayfinder:map" --body "..."`
  - Create ticket: `gh issue create --title "<title>" --label "<type>" --body "..."`
  - List frontier: `gh issue list --label "wayfinder:task,wayfinder:grilling,wayfinder:prototype,wayfinder:research" --state open`
