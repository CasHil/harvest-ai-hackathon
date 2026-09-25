# Triage & Wayfinder Labels

The skills speak in terms of five canonical triage roles. This file maps those roles to the actual label strings used in this repo's issue tracker, along with Wayfinder workflow labels.

## Canonical Triage Roles

| Label in mattpocock/skills | Label in our tracker | Meaning |
| -------------------------- | -------------------- | ------- |
| `needs-triage`             | `needs-triage`       | Maintainer needs to evaluate this issue |
| `needs-info`               | `needs-info`         | Waiting on reporter or PO for more information |
| `ready-for-agent`          | `ready-for-agent`    | Fully specified, ready for an AFK agent |
| `ready-for-human`          | `ready-for-human`    | Requires human implementation or PO review |
| `wontfix`                  | `wontfix`            | Will not be actioned |

## Wayfinder Labels

| Label | Role | Description |
|---|---|---|
| `wayfinder:map` | Index / Core Map | The primary issue acting as the wayfinding index |
| `wayfinder:grilling` | Human-In-The-Loop | Questioning & requirements gathering session |
| `wayfinder:prototype` | Human-In-The-Loop | Disposable UI/code spike for human review |
| `wayfinder:research` | Away-From-Keyboard | Deep tech investigation or schema validation |
| `wayfinder:task` | Execution | Direct build block once decisions are locked |
