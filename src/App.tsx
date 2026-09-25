import { useState } from 'react';
import { initialSampleCV } from './data/sampleCV';
import { HarvestCV } from './types/cv';
import { HarvesterWorkbench } from './components/HarvesterWorkbench';
import { HarvestCVPreview } from './components/HarvestCVPreview';
import { POApprovalPanel } from './components/POApprovalPanel';
import { FileEdit, ShieldCheck, ExternalLink, BookOpen } from 'lucide-react';
import './App.css';

export default function App() {
  const [cv, setCv] = useState<HarvestCV>(initialSampleCV);
  const [activeTab, setActiveTab] = useState<'BUILDER' | 'PO_REVIEW'>('BUILDER');

  return (
    <div className="app-container">
      {/* Top Header */}
      <header className="header no-print">
        <div className="brand">
          <div className="brand-icon">H</div>
          <div className="title-area">
            <h1>Harvest CV Platform</h1>
            <p>De Harvester Schrijft Zijn Eigen CV</p>
          </div>
        </div>

        {/* Global Action Bar */}
        <div className="header-actions">
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
            <FileEdit size={16} /> Harvester CV Builder
          </button>
          <button 
            className={`tab-btn ${activeTab === 'PO_REVIEW' ? 'active' : ''}`}
            onClick={() => setActiveTab('PO_REVIEW')}
          >
            <ShieldCheck size={16} /> Harvest Business Review
            {cv.poReview.status === 'SUBMITTED' && <span className="notification-dot"></span>}
          </button>
        </div>

        <div className="status-summary">
          <span className="summary-label">Status:</span>
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

            {/* Quick Guidelines Card */}
            <div className="info-card margin-top-md">
              <h4 className="info-title flex-align">
                <BookOpen size={16} /> Harvest CV Richtlijnen
              </h4>
              <ul className="info-list text-xs">
                <li>• <strong>Max 2 Pagina's:</strong> Strikte A4 paginering volgens schetsontwerp.</li>
                <li>• <strong>Harvest Huisstijl:</strong> Groen (#092812), Rood (#782410) &amp; Creme tinten.</li>
                <li>• <strong>Lokale Gegevens:</strong> Directe JSON import/export &amp; PDF download.</li>
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
          Harvest CPION-Geaccrediteerd IT Post-Master Program
        </div>
        <div className="footer-right">
          Gedeployed op GitHub Pages • Standalone Local Browser App
        </div>
      </footer>
    </div>
  );
}
