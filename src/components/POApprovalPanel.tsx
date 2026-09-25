import React, { useState } from 'react';
import { HarvestCV } from '../types/cv';
import { ShieldCheck, CheckCircle, XCircle, MessageSquare } from 'lucide-react';

interface Props {
  cv: HarvestCV;
  onUpdateCV: (updated: HarvestCV) => void;
}

export const POApprovalPanel: React.FC<Props> = ({ cv, onUpdateCV }) => {
  const [feedback, setFeedback] = useState<string>(cv.poReview.feedback || '');

  const handleApprove = () => {
    onUpdateCV({
      ...cv,
      poReview: {
        ...cv.poReview,
        status: 'APPROVED',
        reviewDate: new Date().toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: 'numeric' }),
        feedback: feedback || 'Goedgekeurd door Harvest Business Reviewer voor plaatsing bij klant.'
      }
    });
  };

  const handleReject = () => {
    onUpdateCV({
      ...cv,
      poReview: {
        ...cv.poReview,
        status: 'REJECTED',
        feedback: feedback || 'Herziening vereist voor indienen bij klant.'
      }
    });
  };

  return (
    <div className="workbench-card po-panel">
      <div className="card-header">
        <h3 className="card-title flex-align">
          <ShieldCheck className="icon-emerald" size={20} /> Harvest Business Controle & Goedkeuring
        </h3>
        <span className={`status-pill status-${cv.poReview.status.toLowerCase()}`}>
          {cv.poReview.status}
        </span>
      </div>

      <p className="card-desc">
        Controleer de CV gegevens van de Harvester, voer directe aanpassingen uit en geef goedkeuring voor verzending naar opdrachtgevers.
      </p>

      {/* QUICK BUSINESS OVERVIEW */}
      <div className="review-summary-card">
        <div className="form-group">
          <label className="field-label">Kandidaat Naam:</label>
          <input 
            type="text" 
            className="input-sm"
            value={cv.personalInfo.fullName}
            onChange={e => onUpdateCV({
              ...cv,
              personalInfo: { ...cv.personalInfo, fullName: e.target.value }
            })}
          />
        </div>
        <div className="form-group margin-top-xs">
          <label className="field-label">Doelfunctie / Subtitle:</label>
          <input 
            type="text" 
            className="input-sm"
            value={cv.personalInfo.subtitle}
            onChange={e => onUpdateCV({
              ...cv,
              personalInfo: { ...cv.personalInfo, subtitle: e.target.value }
            })}
          />
        </div>
        <div className="form-group margin-top-xs">
          <label className="field-label">Profileringstekst (Business Edit):</label>
          <textarea 
            rows={3} 
            className="textarea-input"
            value={cv.personalInfo.summary}
            onChange={e => onUpdateCV({
              ...cv,
              personalInfo: { ...cv.personalInfo, summary: e.target.value }
            })}
          />
        </div>
      </div>

      {/* FEEDBACK & APPROVAL CONTROLS */}
      <div className="po-action-box margin-top-md">
        <label className="field-label flex-align">
          <MessageSquare size={14} /> Harvest Reviewer Feedback / Opmerkingen:
        </label>
        <textarea 
          rows={3}
          className="textarea-input"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Voeg opmerkingen toe voor de Harvester..."
        />

        <div className="flex-gap-sm margin-top-md">
          <button className="btn-success flex-1" onClick={handleApprove}>
            <CheckCircle size={16} /> Keur CV Goed (Harvest Stempel)
          </button>
          <button className="btn-danger flex-1" onClick={handleReject}>
            <XCircle size={16} /> Afkeuren / Aanpassing Vragen
          </button>
        </div>
      </div>
    </div>
  );
};
