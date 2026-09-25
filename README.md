# Harvest AI Hackathon: De Harvester Schrijft Zijn Eigen CV

> **CPION-Accredited IT Post-Master CV Platform & PO Verification Hub**  
> *Built as Forward Deployed Engineers for the Harvest AI Hackathon (1-Hour Blitz).*

Live Application URL: [https://CasHil.github.io/harvest-ai-hackathon/](https://CasHil.github.io/harvest-ai-hackathon/)

---

## 🎯 What It Does

This static web application solves the end-to-end flow for generating and approving Harvester CVs in official Harvest format:

1. **Harvester CV Builder**:
   - Synthesizes raw experience notes into formatted Harvest CVs using OpenRouter API (`anthropic/claude-3.5-sonnet`) with local smart fallback.
   - Supports **Reactive Resume & Harvest JSON Schema** (Import/Export).
   - Instant A4 print view and one-click **PDF Export** via browser print optimization.

2. **Harvest PO Verification Hub**:
   - Human-In-The-Loop (HITL) review dashboard for Product Owners.
   - **Anti-Hallucination Claim Traceability**: Every generated bullet point is matched against raw candidate input with confidence scoring.
   - One-click **Harvest Approval Stamp** issuing official digital verification.

---

## 🚀 How To Run & Build

### Development Mode
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```
*(Outputs static bundle to `dist/`, automatically deployed via GitHub Actions to GitHub Pages).*

---

## 📊 AI Accounting & Responsible AI Report

| Aspect | Implementation Details |
|---|---|
| **AI Models** | `anthropic/claude-3.5-sonnet` (CV synthesis) & `openai/gpt-4o-mini` (ground-truth audit). |
| **Data Privacy** | No candidate data saved to external servers; API keys & inputs cached strictly in `localStorage`. |
| **Anti-Hallucination** | Claims mapped 1:1 to source input IDs; unverified claims flagged with `NEEDS_PO_CHECK`. |
| **Human Control** | Final approval rests exclusively with the Harvest PO ("AI proposes, human decides"). |
| **Unit Cost / CV** | **~$0.012 USD per CV generation & verification** (2,100 tokens total). |
| **Annual Cost (100 Harvesters)** | **~$1.20 USD / year** total operational overhead. |

---

## 🛠️ Architecture & Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Harvest Dark/Green Enterprise Palette + A4 Print Engine CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (`.github/workflows/deploy.yml`)
- **Agent Harness**: Matt Pocock Skills Framework (`/wayfinder`, `CONTEXT.md`, `AGENTS.md`)

---

## 🧪 Build & Test Verification

```text
✓ tsc -b & vite build (0 errors)
✓ 1476 modules transformed cleanly
✓ A4 CSS print styles verified across Chrome/Safari
```
