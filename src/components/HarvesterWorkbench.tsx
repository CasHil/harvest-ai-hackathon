import React, { useState } from 'react';
import { HarvestCV, EducationItem, ExperienceItem, ProjectItem } from '../types/cv';
import { User, Upload, Plus, Trash2, FileText, CheckCircle } from 'lucide-react';

interface Props {
  cv: HarvestCV;
  onUpdateCV: (updated: HarvestCV) => void;
}

export const HarvesterWorkbench: React.FC<Props> = ({ cv, onUpdateCV }) => {
  const [jsonInputText, setJsonInputText] = useState<string>('');
  const [jsonError, setJsonError] = useState<string | null>(null);

  // Photo Upload Handler
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        onUpdateCV({
          ...cv,
          personalInfo: {
            ...cv.personalInfo,
            photoUrl: base64String
          }
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Helper to split comma separated string to array
  const handleCommaListChange = (field: keyof HarvestCV, value: string) => {
    const list = value.split(',').map(s => s.trim()).filter(Boolean);
    onUpdateCV({
      ...cv,
      [field]: list
    });
  };

  // Education Helpers
  const addEducation = () => {
    const newItem: EducationItem = {
      id: `edu-${Date.now()}`,
      degree: 'Nieuwe Opleiding',
      institution: 'Instelling / Universiteit',
      year: '2020 - 2024',
      details: ''
    };
    onUpdateCV({ ...cv, education: [...cv.education, newItem] });
  };

  const removeEducation = (id: string) => {
    onUpdateCV({ ...cv, education: cv.education.filter(e => e.id !== id) });
  };

  // Experience Helpers
  const addExperience = () => {
    const newItem: ExperienceItem = {
      id: `exp-${Date.now()}`,
      company: 'Bedrijf / Organisatie',
      role: 'Functietitel',
      startDate: '2023',
      endDate: 'Heden',
      location: 'Locatie',
      description: 'Omschrijving van werkzaamheden...',
      highlights: ['Belangrijkste resultaat 1']
    };
    onUpdateCV({ ...cv, experiences: [...cv.experiences, newItem] });
  };

  const removeExperience = (id: string) => {
    onUpdateCV({ ...cv, experiences: cv.experiences.filter(e => e.id !== id) });
  };

  // Project Helpers
  const addProject = () => {
    const newItem: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: 'Project Titel',
      client: 'Klant / Opdrachtgever',
      role: 'Rol',
      period: '2024',
      summary: 'Korte samenvatting van het project...',
      techStack: ['React', 'TypeScript'],
      achievements: ['Resultaat / Mijlpaal 1']
    };
    onUpdateCV({ ...cv, projects: [...cv.projects, newItem] });
  };

  const removeProject = (id: string) => {
    onUpdateCV({ ...cv, projects: cv.projects.filter(p => p.id !== id) });
  };

  // JSON Import
  const handleImportJSON = () => {
    try {
      setJsonError(null);
      const parsed = JSON.parse(jsonInputText);
      if (!parsed.personalInfo) {
        throw new Error("Ongeldig Harvest CV JSON formaat. Mist personalInfo.");
      }
      onUpdateCV(parsed);
      alert("JSON succesvol geïmporteerd!");
      setJsonInputText('');
    } catch (err: any) {
      setJsonError(err.message || "Fout bij parsen van JSON");
    }
  };

  return (
    <div className="workbench-card">
      <div className="card-header">
        <h3 className="card-title flex-align">
          <FileText className="icon-emerald" size={20} /> Harvester CV Builder
        </h3>
        <span className="badge-mode">Harvester Bewerking</span>
      </div>

      <p className="card-desc">
        Vul alle velden in om je Harvest CV op te stellen. Aanpassingen zijn direct live zichtbaar op de A4 weergave.
      </p>

      {/* PHOTO UPLOAD SECTION */}
      <div className="workbench-section">
        <h4 className="section-sub-title flex-align"><User size={16} /> Pasfoto Uploaden</h4>
        <div className="photo-upload-box">
          {cv.personalInfo.photoUrl && (
            <img src={cv.personalInfo.photoUrl} alt="Preview" className="photo-preview-thumb" />
          )}
          <div className="file-input-wrapper">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handlePhotoUpload} 
              id="photo-input" 
              className="file-input-hidden" 
            />
            <label htmlFor="photo-input" className="btn-secondary-xs cursor-pointer">
              <Upload size={14} /> {cv.personalInfo.photoUrl ? 'Foto Wijzigen' : 'Kies Foto Bestand'}
            </label>
            {cv.personalInfo.photoUrl && (
              <button 
                className="btn-danger-xs"
                onClick={() => onUpdateCV({
                  ...cv,
                  personalInfo: { ...cv.personalInfo, photoUrl: '' }
                })}
              >
                <Trash2 size={12} /> Verwijder
              </button>
            )}
          </div>
        </div>
      </div>

      {/* PERSONAL INFO FORM */}
      <div className="workbench-section">
        <h4 className="section-sub-title">Persoonlijke Gegevens (Pagina 1 Header)</h4>
        <div className="form-grid-2">
          <div className="form-group">
            <label className="field-label">Volledige Naam:</label>
            <input 
              type="text" 
              className="input-sm"
              value={cv.personalInfo.fullName}
              onChange={e => onUpdateCV({...cv, personalInfo: {...cv.personalInfo, fullName: e.target.value}})}
            />
          </div>
          <div className="form-group">
            <label className="field-label">Ondertitel / Functie:</label>
            <input 
              type="text" 
              className="input-sm"
              value={cv.personalInfo.subtitle}
              onChange={e => onUpdateCV({...cv, personalInfo: {...cv.personalInfo, subtitle: e.target.value}})}
            />
          </div>
          <div className="form-group">
            <label className="field-label">Woonplaats:</label>
            <input 
              type="text" 
              className="input-sm"
              value={cv.personalInfo.woonplaats}
              onChange={e => onUpdateCV({...cv, personalInfo: {...cv.personalInfo, woonplaats: e.target.value}})}
            />
          </div>
          <div className="form-group">
            <label className="field-label">Beschikbaarheid:</label>
            <input 
              type="text" 
              className="input-sm"
              value={cv.personalInfo.beschikbaarheid}
              onChange={e => onUpdateCV({...cv, personalInfo: {...cv.personalInfo, beschikbaarheid: e.target.value}})}
            />
          </div>
        </div>
        <div className="form-group margin-top-xs">
          <label className="field-label">Profilering & Samenvatting:</label>
          <textarea 
            rows={3} 
            className="textarea-input"
            value={cv.personalInfo.summary}
            onChange={e => onUpdateCV({...cv, personalInfo: {...cv.personalInfo, summary: e.target.value}})}
          />
        </div>
      </div>

      {/* PAGE 1 SIDEBAR FIELDS */}
      <div className="workbench-section">
        <h4 className="section-sub-title">Pagina 1 Left Sidebar (Komma-gescheiden)</h4>
        <div className="form-group">
          <label className="field-label">Skills:</label>
          <input 
            type="text" 
            className="input-sm"
            value={cv.skills.join(', ')}
            onChange={e => handleCommaListChange('skills', e.target.value)}
            placeholder="React, TypeScript, Agile..."
          />
        </div>
        <div className="form-group">
          <label className="field-label">Hobbies:</label>
          <input 
            type="text" 
            className="input-sm"
            value={cv.hobbies.join(', ')}
            onChange={e => handleCommaListChange('hobbies', e.target.value)}
            placeholder="Hardlopen, Schaken..."
          />
        </div>
        <div className="form-group">
          <label className="field-label">Talen:</label>
          <input 
            type="text" 
            className="input-sm"
            value={cv.talen.join(', ')}
            onChange={e => handleCommaListChange('talen', e.target.value)}
            placeholder="Nederlands, Engels..."
          />
        </div>
      </div>

      {/* PAGE 1 MAIN: EDUCATION */}
      <div className="workbench-section">
        <div className="flex-between margin-bottom-xs">
          <h4 className="section-sub-title">Pagina 1: Opleidingen</h4>
          <button className="btn-secondary-xs" onClick={addEducation}><Plus size={12} /> Voeg Opleiding Toe</button>
        </div>
        {cv.education.map((edu, idx) => (
          <div key={edu.id} className="item-editor-card">
            <div className="flex-between">
              <strong>Opleiding #{idx + 1}</strong>
              <button className="btn-icon-danger" onClick={() => removeEducation(edu.id)}><Trash2 size={14} /></button>
            </div>
            <div className="form-grid-2 margin-top-xs">
              <input 
                type="text" 
                placeholder="Diploma / Opleiding" 
                className="input-xs"
                value={edu.degree}
                onChange={e => {
                  const updated = [...cv.education];
                  updated[idx].degree = e.target.value;
                  onUpdateCV({...cv, education: updated});
                }}
              />
              <input 
                type="text" 
                placeholder="Jaar / Periode" 
                className="input-xs"
                value={edu.year}
                onChange={e => {
                  const updated = [...cv.education];
                  updated[idx].year = e.target.value;
                  onUpdateCV({...cv, education: updated});
                }}
              />
            </div>
            <input 
              type="text" 
              placeholder="Instelling / Universiteit" 
              className="input-xs margin-top-xs"
              value={edu.institution}
              onChange={e => {
                const updated = [...cv.education];
                updated[idx].institution = e.target.value;
                onUpdateCV({...cv, education: updated});
              }}
            />
          </div>
        ))}
      </div>

      {/* PAGE 2 SIDEBAR FIELDS */}
      <div className="workbench-section">
        <h4 className="section-sub-title">Pagina 2 Left Sidebar (Komma-gescheiden)</h4>
        <div className="form-group">
          <label className="field-label">Softskills:</label>
          <input 
            type="text" 
            className="input-sm"
            value={cv.softskills.join(', ')}
            onChange={e => handleCommaListChange('softskills', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="field-label">Programmeertalen:</label>
          <input 
            type="text" 
            className="input-sm"
            value={cv.programmeertalen.join(', ')}
            onChange={e => handleCommaListChange('programmeertalen', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="field-label">Tools:</label>
          <input 
            type="text" 
            className="input-sm"
            value={cv.tools.join(', ')}
            onChange={e => handleCommaListChange('tools', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="field-label">Domein:</label>
          <input 
            type="text" 
            className="input-sm"
            value={cv.domein.join(', ')}
            onChange={e => handleCommaListChange('domein', e.target.value)}
          />
        </div>
      </div>

      {/* PAGE 2 MAIN: EXPERIENCES */}
      <div className="workbench-section">
        <div className="flex-between margin-bottom-xs">
          <h4 className="section-sub-title">Pagina 2: Werkervaring</h4>
          <button className="btn-secondary-xs" onClick={addExperience}><Plus size={12} /> Voeg Werkervaring Toe</button>
        </div>
        {cv.experiences.map((exp, idx) => (
          <div key={exp.id} className="item-editor-card">
            <div className="flex-between">
              <strong>Werkervaring #{idx + 1}</strong>
              <button className="btn-icon-danger" onClick={() => removeExperience(exp.id)}><Trash2 size={14} /></button>
            </div>
            <div className="form-grid-2 margin-top-xs">
              <input 
                type="text" 
                placeholder="Functie" 
                className="input-xs"
                value={exp.role}
                onChange={e => {
                  const updated = [...cv.experiences];
                  updated[idx].role = e.target.value;
                  onUpdateCV({...cv, experiences: updated});
                }}
              />
              <input 
                type="text" 
                placeholder="Bedrijf" 
                className="input-xs"
                value={exp.company}
                onChange={e => {
                  const updated = [...cv.experiences];
                  updated[idx].company = e.target.value;
                  onUpdateCV({...cv, experiences: updated});
                }}
              />
            </div>
            <div className="form-grid-2 margin-top-xs">
              <input 
                type="text" 
                placeholder="Startdatum" 
                className="input-xs"
                value={exp.startDate}
                onChange={e => {
                  const updated = [...cv.experiences];
                  updated[idx].startDate = e.target.value;
                  onUpdateCV({...cv, experiences: updated});
                }}
              />
              <input 
                type="text" 
                placeholder="Einddatum" 
                className="input-xs"
                value={exp.endDate}
                onChange={e => {
                  const updated = [...cv.experiences];
                  updated[idx].endDate = e.target.value;
                  onUpdateCV({...cv, experiences: updated});
                }}
              />
            </div>
            <textarea 
              rows={2}
              placeholder="Omschrijving..."
              className="textarea-input text-xs margin-top-xs"
              value={exp.description}
              onChange={e => {
                const updated = [...cv.experiences];
                updated[idx].description = e.target.value;
                onUpdateCV({...cv, experiences: updated});
              }}
            />
          </div>
        ))}
      </div>

      {/* PAGE 2 MAIN: PROJECTS */}
      <div className="workbench-section">
        <div className="flex-between margin-bottom-xs">
          <h4 className="section-sub-title">Pagina 2: Projecten</h4>
          <button className="btn-secondary-xs" onClick={addProject}><Plus size={12} /> Voeg Project Toe</button>
        </div>
        {cv.projects.map((proj, idx) => (
          <div key={proj.id} className="item-editor-card">
            <div className="flex-between">
              <strong>Project #{idx + 1}</strong>
              <button className="btn-icon-danger" onClick={() => removeProject(proj.id)}><Trash2 size={14} /></button>
            </div>
            <div className="form-grid-2 margin-top-xs">
              <input 
                type="text" 
                placeholder="Project Titel" 
                className="input-xs"
                value={proj.title}
                onChange={e => {
                  const updated = [...cv.projects];
                  updated[idx].title = e.target.value;
                  onUpdateCV({...cv, projects: updated});
                }}
              />
              <input 
                type="text" 
                placeholder="Klant" 
                className="input-xs"
                value={proj.client}
                onChange={e => {
                  const updated = [...cv.projects];
                  updated[idx].client = e.target.value;
                  onUpdateCV({...cv, projects: updated});
                }}
              />
            </div>
            <textarea 
              rows={2}
              placeholder="Samenvatting..."
              className="textarea-input text-xs margin-top-xs"
              value={proj.summary}
              onChange={e => {
                const updated = [...cv.projects];
                updated[idx].summary = e.target.value;
                onUpdateCV({...cv, projects: updated});
              }}
            />
          </div>
        ))}
      </div>

      {/* SUBMIT FOR REVIEW */}
      <div className="workbench-section margin-top-md">
        <button 
          className="btn-primary full-width"
          onClick={() => {
            onUpdateCV({
              ...cv,
              poReview: { ...cv.poReview, status: 'SUBMITTED' }
            });
            alert("CV ingediend bij Harvest Business Reviewer!");
          }}
        >
          <CheckCircle size={16} /> Dien CV In Bij Harvest Reviewer
        </button>
      </div>

      {/* JSON IMPORT / EXPORT DETAILS */}
      <details className="json-import-details margin-top-md">
        <summary className="cursor-pointer text-sm font-semibold flex-align">
          <Upload size={16} /> JSON Importeren
        </summary>
        <div className="json-area margin-top-xs">
          <textarea 
            rows={3}
            className="textarea-input text-mono text-xs"
            value={jsonInputText}
            onChange={(e) => setJsonInputText(e.target.value)}
            placeholder='Plak hier een Harvest CV JSON string...'
          />
          {jsonError && (
            <div className="error-banner text-xs margin-top-xs">
              {jsonError}
            </div>
          )}
          <button className="btn-secondary-xs margin-top-xs" onClick={handleImportJSON}>
            Importeer JSON
          </button>
        </div>
      </details>
    </div>
  );
};
