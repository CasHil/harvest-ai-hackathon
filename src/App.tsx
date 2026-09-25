import { useState } from 'react'
import './App.css'

interface HarvesterProfile {
  name: string
  role: string
  skills: string[]
  status: 'Draft' | 'Pending Review' | 'Approved'
}

export default function App() {
  const [profile, setProfile] = useState<HarvesterProfile>({
    name: 'Young Professional',
    role: 'Forward Deployed Engineer (FDE)',
    skills: ['React', 'TypeScript', 'Node.js', 'GitHub Actions', 'Responsible AI'],
    status: 'Draft'
  })

  const [generatedCount, setGeneratedCount] = useState(1)

  const handleGenerateCV = () => {
    setProfile(prev => ({
      ...prev,
      status: 'Pending Review'
    }))
    setGeneratedCount(c => c + 1)
  }

  const handleApprove = () => {
    setProfile(prev => ({
      ...prev,
      status: 'Approved'
    }))
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="brand">
          <div className="brand-icon">H</div>
          <div className="title-area">
            <h1>Harvest AI Hackathon</h1>
            <p>De Harvester Schrijft Zijn Eigen CV Platform</p>
          </div>
        </div>
        <div className="badge">
          <span className="badge-dot"></span>
          GitHub Pages CI/CD Ready
        </div>
      </header>

      <main>
        <section className="hero-grid">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Harvester CV Generator</div>
            </div>
            <p className="card-desc">
              Generate standardized Harvest IT Post-Master CVs with anti-hallucination sourcing.
            </p>
            <button className="btn" onClick={handleGenerateCV}>
              Generate CV Draft #{generatedCount}
            </button>

            {profile && (
              <div className="cv-preview">
                <div><strong>Candidate:</strong> {profile.name}</div>
                <div><strong>Role:</strong> {profile.role}</div>
                <div><strong>Status:</strong> {profile.status}</div>
                <div><strong>Skills:</strong> {profile.skills.join(', ')}</div>
              </div>
            )}
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title">Harvest PO Review & Verification</div>
            </div>
            <p className="card-desc">
              Fast, human-in-the-loop review interface for Product Owners to approve or reject Harvester profiles.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                className="btn btn-secondary" 
                onClick={handleApprove}
                disabled={profile.status === 'Approved'}
              >
                {profile.status === 'Approved' ? '✓ Approved' : 'Approve Profile'}
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title">GitHub Actions Deployment Pipeline</div>
            </div>
            <p className="card-desc">
              Automated build & release pipeline configured via <code>.github/workflows/deploy.yml</code>.
            </p>
            <div className="cv-preview" style={{ color: '#94a3b8' }}>
              <div>• Trigger: Push to main</div>
              <div>• Target: GitHub Pages</div>
              <div>• Framework: React + Vite + TypeScript</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>Harvest CPION-Accredited IT Post-Master Program</div>
        <div>Deployed automatically with GitHub Actions</div>
      </footer>
    </div>
  )
}
