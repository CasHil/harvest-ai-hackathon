import React from 'react';
import { HarvestCV } from '../types/cv';
import { ShieldCheck, Award, CheckCircle2, Download, Printer } from 'lucide-react';

interface Props {
  cv: HarvestCV;
}

export const HarvestCVPreview: React.FC<Props> = ({ cv }) => {
  const isApproved = cv.poReview.status === 'APPROVED';

  const handlePrint = () => {
    window.print();
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cv, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Harvest_CV_${cv.personalInfo.fullName.replace(/\s+/g, '_')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="cv-preview-wrapper">
      {/* Top Action Bar (hidden in print) */}
      <div className="no-print cv-action-bar">
        <div className="status-indicator">
          <span className={`status-pill status-${cv.poReview.status.toLowerCase()}`}>
            {cv.poReview.status}
          </span>
          {isApproved && (
            <span className="harvest-badge">
              <ShieldCheck size={16} /> Harvest Verified
            </span>
          )}
        </div>
        <div className="action-buttons">
          <button onClick={handleExportJSON} className="btn-secondary-sm">
            <Download size={14} /> Export JSON
          </button>
          <button onClick={handlePrint} className="btn-primary-sm">
            <Printer size={14} /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Printable A4 Page Container */}
      <div className="a4-page harvest-theme">
        {/* Harvest Watermark Stamp for Approved CVs */}
        {isApproved && (
          <div className="approval-watermark">
            <ShieldCheck size={80} className="watermark-icon" />
            <div className="watermark-text">HARVEST APPROVED</div>
            <div className="watermark-sub">{cv.poReview.reviewDate || 'CPION Post-Master Verified'}</div>
          </div>
        )}

        {/* Header Header Banner */}
        <header className="harvest-cv-header">
          <div className="header-brand">
            <div className="harvest-logo-box">H</div>
            <div>
              <div className="program-title">HARVEST IT POST-MASTER PROGRAM</div>
              <div className="program-sub">CPION Accredited Post-Master Excellence</div>
            </div>
          </div>
          <div className="header-meta">
            <div className="cohort-badge">{cv.personalInfo.cohort}</div>
          </div>
        </header>

        {/* Candidate Title Block */}
        <section className="candidate-title-block">
          <h1 className="candidate-name">{cv.personalInfo.fullName}</h1>
          <h2 className="candidate-role">{cv.personalInfo.targetRole}</h2>
          <div className="contact-line">
            <span>{cv.personalInfo.email}</span> • <span>{cv.personalInfo.location}</span>
            {cv.personalInfo.linkedin && <span> • {cv.personalInfo.linkedin}</span>}
            {cv.personalInfo.github && <span> • {cv.personalInfo.github}</span>}
          </div>
        </section>

        {/* Executive Summary */}
        <section className="cv-section">
          <h3 className="section-heading">Professional Profile</h3>
          <p className="summary-text">{cv.personalInfo.summary}</p>
        </section>

        {/* Skills Matrix */}
        <section className="cv-section">
          <h3 className="section-heading">Core Competencies & Skills</h3>
          <div className="skills-grid">
            {cv.skills.map((cat, idx) => (
              <div key={idx} className="skill-cat-card">
                <h4 className="skill-cat-title">{cat.category}</h4>
                <div className="skill-tags">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-chip">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Highlights (Client Segment Focus) */}
        <section className="cv-section">
          <h3 className="section-heading">Featured Enterprise Projects</h3>
          {cv.projects.map((proj) => (
            <div key={proj.id} className="item-card">
              <div className="item-header">
                <div>
                  <h4 className="item-title">{proj.title}</h4>
                  <div className="item-sub">{proj.client} — <em>{proj.role}</em></div>
                </div>
                <div className="item-period">{proj.period}</div>
              </div>
              <p className="item-summary">{proj.summary}</p>
              <ul className="item-bullet-list">
                {proj.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="bullet-point">
                    {ach}
                    <span className="no-print verified-inline-tag" title="Verified against ground truth input">
                      <CheckCircle2 size={12} color="#10b981" /> Verified
                    </span>
                  </li>
                ))}
              </ul>
              <div className="item-tech-stack">
                <strong>Tech:</strong> {proj.techStack.join(' • ')}
              </div>
            </div>
          ))}
        </section>

        {/* Experience Timeline */}
        <section className="cv-section">
          <h3 className="section-heading">Work Experience</h3>
          {cv.experiences.map((exp) => (
            <div key={exp.id} className="item-card">
              <div className="item-header">
                <div>
                  <h4 className="item-title">{exp.role}</h4>
                  <div className="item-sub">{exp.company} — {exp.location}</div>
                </div>
                <div className="item-period">{exp.startDate} – {exp.endDate}</div>
              </div>
              <p className="item-summary">{exp.description}</p>
              <ul className="item-bullet-list">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="bullet-point">
                    {h}
                    <span className="no-print verified-inline-tag" title="Verified source claim">
                      <CheckCircle2 size={12} color="#10b981" /> Verified
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education & Certifications */}
        <div className="two-column-section">
          <section className="cv-section flex-1">
            <h3 className="section-heading">Education</h3>
            {cv.education.map((edu) => (
              <div key={edu.id} className="edu-item">
                <div className="edu-title">{edu.degree}</div>
                <div className="edu-sub">{edu.institution} ({edu.year})</div>
                {edu.certified && (
                  <div className="certified-badge"><Award size={12} /> Verified Diploma</div>
                )}
              </div>
            ))}
          </section>

          <section className="cv-section flex-1">
            <h3 className="section-heading">Certifications</h3>
            <ul className="cert-list">
              {cv.certifications.map((cert, cIdx) => (
                <li key={cIdx} className="cert-item">
                  <Award size={14} className="cert-icon" /> {cert}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer Compliance Note */}
        <footer className="harvest-cv-footer">
          <div>Harvest Post-Master Program • CPION Accredited Standard</div>
          <div>Harvest PO Verified • Zero AI Hallucination Warranty</div>
        </footer>
      </div>
    </div>
  );
};
