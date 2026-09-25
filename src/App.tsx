import { useState } from 'react';
import { initialSampleCV } from './data/sampleCV';
import { HarvestCV } from './types/cv';
import { HarvesterWorkbench } from './components/HarvesterWorkbench';
import { HarvestCVPreview } from './components/HarvestCVPreview';
import { POApprovalPanel } from './components/POApprovalPanel';
import { AIAccountingModal } from './components/AIAccountingModal';
import { ShieldCheck, FileCheck, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import './App.css';

export default function App() {
  const [cv, setCv] = useState<HarvestCV>(initialSampleCV);
  const [activeTab, setActiveTab] = useState<'BUILDER' | 'PO_REVIEW'>('BUILDER');
  const [showAccounting, setShowAccounting] = useState<boolean>(false);

  return (
    <div className="app-container">
      {/* Top Header */}
      <header className="header no-print">
        <div className="brand">
          <div className="brand-icon">H</div>
          <div className="title-area">
            <h1>Harvest AI Hackathon</h1>
            <p>De Harvester Schrijft Zijn Eigen CV Platform</p>
          </div>
        </div>

        {/* Global Action Bar */}
        <div className="header-actions">
          <button className="btn-ai-accounting" onClick={() => setShowAccounting(true)}>
            <ShieldCheck size={16} /> AI Accounting & Costs
          </button>
          <a 
            href="https://github.com/CasHil/harvest-ai-hackathon" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-github-link"
          >
            GitHub Repo <ExternalLink size={14} />
          </a>
        </div>
      </header>

      {/* Main Navigation Tabs */}
      <nav className="sub-nav no-print">
        <div className="nav-tabs">
          <button 
            className={`tab-btn ${activeTab === 'BUILDER' ? 'active' : ''}`}
            onClick={() => setActiveTab('BUILDER')}
          >
            <Sparkles size={16} /> Harvester CV Builder
          </button>
          <button 
            className={`tab-btn ${activeTab === 'PO_REVIEW' ? 'active' : ''}`}
            onClick={() => setActiveTab('PO_REVIEW')}
          >
            <FileCheck size={16} /> Harvest PO Verification & Approval
            {cv.poReview.status === 'SUBMITTED' && <span className="notification-dot"></span>}
          </button>
        </div>

        <div className="status-summary">
          <span className="summary-label">PO Status:</span>
          <span className={`status-pill status-${cv.poReview.status.toLowerCase()}`}>
            {cv.poReview.status}
          </span>
        </div>
      </nav>

      {/* Main Split Layout */}
      <main className="main-content">
        <div className="split-grid">
          {/* Left Column: Interactive Controls */}
          <div className="left-panel no-print">
            {activeTab === 'BUILDER' ? (
              <HarvesterWorkbench cv={cv} onUpdateCV={setCv} />
            ) : (
              <POApprovalPanel cv={cv} onUpdateCV={setCv} />
            )}

            {/* Hackathon Quick Reference Card */}
            <div className="info-card margin-top-md">
              <h4 className="info-title flex-align">
                <BookOpen size={16} /> Harvest Post-Master Guidelines
              </h4>
              <ul className="info-list text-xs">
                <li>• <strong>CPION Accredited Format:</strong> Ensures professional enterprise placement standards.</li>
                <li>• <strong>Anti-Hallucination:</strong> All achievements traced to candidate's verified background.</li>
                <li>• <strong>Export:</strong> Download JSON or save directly to PDF.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Live A4 Harvest CV Preview */}
          <div className="right-panel">
            <HarvestCVPreview cv={cv} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer no-print">
        <div className="footer-left">
          Harvest CPION-Accredited IT Post-Master Program • Forward Deployed Engineering
        </div>
        <div className="footer-right">
          Deployed via GitHub Pages • Powered by React + OpenRouter API
        </div>
      </footer>

      {/* AI Accounting Modal */}
      {showAccounting && (
        <AIAccountingModal onClose={() => setShowAccounting(false)} />
      )}
    </div>
  );
}
