# Wayfinder Map: Harvest CV Platform MVP (1-Hour Blitz)

## Destination
A live, static web application (GitHub Pages) that enables Harvesters to generate, customize, and export their CV in standard Harvest format (with JSON import/export and PDF download capability), while providing Harvest POs with a verification and approval dashboard featuring anti-hallucination source tracking and real-time cost accounting.

## Notes
- **Deployment**: Static Site on GitHub Pages (`.github/workflows/deploy.yml`).
- **Data Model**: Full JSON Import/Export compatible with standard resume schemas (Reactive Resume inspired).
- **Security**: Optional client-side OpenRouter API key entry with secure localStorage caching, plus local smart AI template generator fallback.
- **Verification**: Anti-hallucination source mapping linking generated bullet points directly to raw input claims.

## Decisions So Far
- **Decision 1**: Built as single-page React app (Vite + TypeScript + Lucide React).
- **Decision 2**: Dual-Mode Interface: (1) Harvester CV Workbench & (2) Harvest PO Review & Verification Hub.
- **Decision 3**: PDF Export via native browser print optimization + styled A4 preview component.
- **Decision 4**: JSON Schema compatibility with standard resume formats (Import / Export).

## Frontier & Ticket Resolution

### 1. `wayfinder:task` - JSON Schema & Reactive Resume Compatibility Core
- **Status**: CLOSED (Resolved via `src/types/cv.ts` and `src/data/sampleCV.ts`).

### 2. `wayfinder:prototype` - Harvester Workbench & Anti-Hallucination AI Generator
- **Status**: CLOSED (Resolved via `src/components/HarvesterWorkbench.tsx` with OpenRouter API + smart generator fallback).

### 3. `wayfinder:prototype` - Harvest Brand A4 CV Live Preview & PDF Downloader
- **Status**: CLOSED (Resolved via `src/components/HarvestCVPreview.tsx` with printable A4 layout and CPION branding).

### 4. `wayfinder:prototype` - Harvest PO Approval & Compliance Interface
- **Status**: CLOSED (Resolved via `src/components/POApprovalPanel.tsx` with PO feedback, status toggle, and audit trail).

### 5. `wayfinder:task` - AI Cost Accounting & Handover README Update
- **Status**: CLOSED (Resolved via `src/components/AIAccountingModal.tsx` and updated `README.md`).
