import { useState } from 'react';
import { initialSampleCV } from './data/sampleCV';
import { HarvestCV } from './types/cv';
import { HarvesterWorkbench } from './components/HarvesterWorkbench';
import { HarvestCVPreview } from './components/HarvestCVPreview';
import { POApprovalPanel } from './components/POApprovalPanel';
import { FileEdit, ShieldCheck, BookOpen } from 'lucide-react';
import './App.css';

export default function App() {
  const [cv, setCv] = useState<HarvestCV>(initialSampleCV);
  const [activeTab, setActiveTab] = useState<'BUILDER' | 'PO_REVIEW'>('BUILDER');

  return (
    <div className="app-container">
      {/* Simple Header with Harvest Logo */}
      <header className="header no-print">
        <div className="brand">
          <div className="logo-badge">
            <img src="/harvest-logo.png" alt="Harvest" className="harvest-brand-logo" />
          </div>
          <span className="header-divider">|</span>
          <span className="header-subtitle">CV Generator</span>
        </div>

        <nav className="header-nav">
          <button 
            className={`tab-btn ${activeTab === 'BUILDER' ? 'active' : ''}`}
            onClick={() => setActiveTab('BUILDER')}
          >
            <FileEdit size={16} /> Harvester
          </button>
          <button 
            className={`tab-btn ${activeTab === 'PO_REVIEW' ? 'active' : ''}`}
            onClick={() => setActiveTab('PO_REVIEW')}
          >
            <ShieldCheck size={16} /> Business Review
            {cv.poReview.status === 'SUBMITTED' && <span className="notification-dot"></span>}
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="split-grid">
          {/* Left Column: Interactive Controls */}
          <div className="left-panel no-print">
            {activeTab === 'BUILDER' ? (
              <HarvesterWorkbench cv={cv} onUpdateCV={setCv} />
            ) : (
              <POApprovalPanel cv={cv} onUpdateCV={setCv} />
            )}

            {/* Richtlijnen Card */}
            <div className="info-card margin-top-md">
              <h4 className="info-title flex-align">
                <BookOpen size={16} /> Harvest CV Richtlijnen
              </h4>
              <ul className="info-list text-xs">
                <li>• <strong>Max 2 Pagina's:</strong> Strikte A4 paginering conform schetsen.</li>
                <li>• <strong>Harvest Huisstijl:</strong> Groen (#092812), Rood (#782410) &amp; Creme tinten.</li>
                <li>• <strong>Export:</strong> Ondersteuning voor JSON import/export en PDF download.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Live A4 Harvest CV Preview */}
          <div className="right-panel">
            <HarvestCVPreview cv={cv} />
          </div>
        </div>
      </main>
    </div>
  );
}
