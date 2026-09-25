import React from 'react';
import { HarvestCV } from '../types/cv';
import { ShieldCheck, Download, Printer, User, MapPin, Calendar, BookOpen, Briefcase, FolderGit2 } from 'lucide-react';

import harvestLogo from '../assets/harvest-logo.png';

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
      {/* Top Action Bar (hidden when printing) */}
      <div className="no-print cv-action-bar">
        <div className="status-indicator">
          <span className={`status-pill status-${cv.poReview.status.toLowerCase()}`}>
            PO Status: {cv.poReview.status}
          </span>
          {isApproved && (
            <span className="harvest-badge">
              <ShieldCheck size={16} /> Harvest Goedgekeurd
            </span>
          )}
        </div>
        <div className="action-buttons">
          <button onClick={handleExportJSON} className="btn-secondary-sm">
            <Download size={14} /> Exporteer JSON
          </button>
          <button onClick={handlePrint} className="btn-primary-sm">
            <Printer size={14} /> Download PDF / Print
          </button>
        </div>
      </div>

      {/* Printable A4 Pages Container */}
      <div className="cv-pages-container">
        
        {/* ================= PAGE 1 ================= */}
        <div className="a4-page harvest-theme-page" id="page-1">
          {isApproved && (
            <div className="approval-watermark">
              <ShieldCheck size={64} />
              <span>HARVEST GOEDGEKEURD</span>
            </div>
          )}

          {/* PAGE 1 HEADER BLOCK */}
          <header className="page-header">
            <div className="header-info">
              <div className="brand-tag flex-align"><img src={harvestLogo} alt="Harvest" style={{ height: '16px', marginRight: '4px' }} /> HARVEST IT POST-MASTER</div>
              <h1 className="candidate-name">{cv.personalInfo.fullName || "Naam Harvester"}</h1>
              <div className="candidate-subtitle">{cv.personalInfo.subtitle || "Functietitel"}</div>
              <p className="candidate-summary">{cv.personalInfo.summary || "Korte profileringstekst..."}</p>
            </div>
            
            {/* PHOTO BOX */}
            <div className="photo-container">
              {cv.personalInfo.photoUrl ? (
                <img src={cv.personalInfo.photoUrl} alt={cv.personalInfo.fullName} className="candidate-photo" />
              ) : (
                <div className="photo-placeholder">
                  <User size={48} className="photo-placeholder-icon" />
                  <span>Foto</span>
                </div>
              )}
            </div>
          </header>

          {/* PAGE 1 SPLIT BODY */}
          <div className="page-body-grid">
            {/* PAGE 1 LEFT SIDEBAR */}
            <aside className="sidebar-col">
              <div className="sidebar-box">
                <h3 className="sidebar-title flex-align"><MapPin size={14} /> Woonplaats</h3>
                <p className="sidebar-text">{cv.personalInfo.woonplaats || "Niet opgegeven"}</p>
              </div>

              <div className="sidebar-box">
                <h3 className="sidebar-title flex-align"><Calendar size={14} /> Beschikbaarheid</h3>
                <p className="sidebar-text">{cv.personalInfo.beschikbaarheid || "Niet opgegeven"}</p>
              </div>

              <div className="sidebar-box">
                <h3 className="sidebar-title">Skills</h3>
                <ul className="sidebar-list">
                  {cv.skills.length > 0 ? cv.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  )) : <li className="empty-text">Geen skills</li>}
                </ul>
              </div>

              <div className="sidebar-box">
                <h3 className="sidebar-title">Hobbies</h3>
                <ul className="sidebar-list">
                  {cv.hobbies.length > 0 ? cv.hobbies.map((hobby, idx) => (
                    <li key={idx}>{hobby}</li>
                  )) : <li className="empty-text">Geen hobbies</li>}
                </ul>
              </div>

              <div className="sidebar-box">
                <h3 className="sidebar-title">Talen</h3>
                <ul className="sidebar-list">
                  {cv.talen.length > 0 ? cv.talen.map((taal, idx) => (
                    <li key={idx}>{taal}</li>
                  )) : <li className="empty-text">Geen talen</li>}
                </ul>
              </div>
            </aside>

            {/* PAGE 1 MAIN CONTENT: OPLEIDING */}
            <main className="main-col">
              <section className="section-block">
                <h2 className="section-title flex-align">
                  <BookOpen size={18} /> Opleiding
                </h2>
                <div className="education-list">
                  {cv.education.map((edu) => (
                    <div key={edu.id} className="edu-card">
                      <div className="card-header">
                        <h4 className="edu-degree">{edu.degree}</h4>
                        <span className="edu-year">{edu.year}</span>
                      </div>
                      <div className="edu-institution">{edu.institution}</div>
                      {edu.details && <p className="edu-details">{edu.details}</p>}
                    </div>
                  ))}
                  {cv.education.length === 0 && <p className="empty-text">Geen opleidingen toegevoegd.</p>}
                </div>
              </section>
            </main>
          </div>

          <footer className="page-footer">
            <span>Pagina 1 van 2</span>
            <span>Harvest CPION-Geaccrediteerd IT Post-Master Program</span>
          </footer>
        </div>

        {/* ================= PAGE 2 ================= */}
        <div className="a4-page harvest-theme-page" id="page-2">
          {/* PAGE 2 SPLIT BODY */}
          <div className="page-body-grid page-2-grid">
            {/* PAGE 2 LEFT SIDEBAR */}
            <aside className="sidebar-col">
              <div className="sidebar-box">
                <h3 className="sidebar-title">Softskills</h3>
                <ul className="sidebar-list">
                  {cv.softskills.length > 0 ? cv.softskills.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  )) : <li className="empty-text">Geen softskills</li>}
                </ul>
              </div>

              <div className="sidebar-box">
                <h3 className="sidebar-title">Programmeertalen</h3>
                <ul className="sidebar-list">
                  {cv.programmeertalen.length > 0 ? cv.programmeertalen.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  )) : <li className="empty-text">Geen talen</li>}
                </ul>
              </div>

              <div className="sidebar-box">
                <h3 className="sidebar-title">Tools</h3>
                <ul className="sidebar-list">
                  {cv.tools.length > 0 ? cv.tools.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  )) : <li className="empty-text">Geen tools</li>}
                </ul>
              </div>

              <div className="sidebar-box">
                <h3 className="sidebar-title">Domein</h3>
                <ul className="sidebar-list">
                  {cv.domein.length > 0 ? cv.domein.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  )) : <li className="empty-text">Geen domein</li>}
                </ul>
              </div>
            </aside>

            {/* PAGE 2 MAIN CONTENT: WERKERVARING & PROJECTEN */}
            <main className="main-col">
              {/* WERKERVARING */}
              <section className="section-block">
                <h2 className="section-title flex-align">
                  <Briefcase size={18} /> Werkervaring
                </h2>
                <div className="items-list">
                  {cv.experiences.map((exp) => (
                    <div key={exp.id} className="cv-card">
                      <div className="card-header">
                        <div>
                          <h4 className="card-role">{exp.role}</h4>
                          <div className="card-sub">{exp.company} — {exp.location}</div>
                        </div>
                        <span className="card-period">{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <p className="card-desc">{exp.description}</p>
                      {exp.highlights && exp.highlights.length > 0 && (
                        <ul className="bullet-list">
                          {exp.highlights.map((hl, idx) => (
                            <li key={idx}>{hl}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  {cv.experiences.length === 0 && <p className="empty-text">Geen werkervaring toegevoegd.</p>}
                </div>
              </section>

              {/* PROJECTEN */}
              <section className="section-block margin-top-sm">
                <h2 className="section-title flex-align">
                  <FolderGit2 size={18} /> Projecten
                </h2>
                <div className="items-list">
                  {cv.projects.map((proj) => (
                    <div key={proj.id} className="cv-card">
                      <div className="card-header">
                        <div>
                          <h4 className="card-role">{proj.title}</h4>
                          <div className="card-sub">{proj.client} — {proj.role}</div>
                        </div>
                        <span className="card-period">{proj.period}</span>
                      </div>
                      <p className="card-desc">{proj.summary}</p>
                      {proj.techStack && proj.techStack.length > 0 && (
                        <div className="tech-chips">
                          <strong>Tech:</strong> {proj.techStack.join(', ')}
                        </div>
                      )}
                      {proj.achievements && proj.achievements.length > 0 && (
                        <ul className="bullet-list">
                          {proj.achievements.map((ach, idx) => (
                            <li key={idx}>{ach}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  {cv.projects.length === 0 && <p className="empty-text">Geen projecten toegevoegd.</p>}
                </div>
              </section>
            </main>
          </div>

          <footer className="page-footer">
            <span>Pagina 2 van 2</span>
            <span>Harvest CPION-Geaccrediteerd IT Post-Master Program</span>
          </footer>
        </div>

      </div>
    </div>
  );
};
