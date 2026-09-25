import React, { useState } from 'react';
import { HarvestCV } from '../types/cv';
import { ShieldCheck, XCircle, CheckCircle, Search, DollarSign } from 'lucide-react';

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
        feedback: feedback || 'Approved by Harvest Business Manager for client presentation.'
      }
    });
  };

  const handleReject = () => {
    onUpdateCV({
      ...cv,
      poReview: {
        ...cv.poReview,
        status: 'REJECTED',
        feedback: feedback || 'Requires clarification on project achievements before client submission.'
      }
    });
  };

  return (
    <div className="workbench-card po-panel">
      <div className="card-header">
        <h3 className="card-title flex-align">
          <ShieldCheck className="icon-emerald" size={20} /> Harvest PO Review & Verification Hub
        </h3>
        <span className={`status-pill status-${cv.poReview.status.toLowerCase()}`}>
          {cv.poReview.status}
        </span>
      </div>

      <p className="card-desc">
        Evaluate candidate profiles against Harvest CPION quality standards and verify bullet claims against ground truth sources.
      </p>

      {/* Compliance Metric Cards */}
      <div className="metric-cards-grid">
        <div className="metric-card">
          <div className="metric-title">Anti-Hallucination Score</div>
          <div className="metric-value text-emerald">{cv.poReview.antiHallucinationScore}%</div>
          <div className="metric-sub flex-align">
            <Search size={12} /> 100% Ground Truth Traceable
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-title">Estimated Token Cost</div>
          <div className="metric-value">${cv.poReview.costInUSD.toFixed(3)}</div>
          <div className="metric-sub flex-align">
            <DollarSign size={12} /> Low Operating Overhead
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-title">CPION Post-Master Status</div>
          <div className="metric-value text-harvest">Accredited</div>
          <div className="metric-sub">Harvest Format Verified</div>
        </div>
      </div>

      {/* Ground Truth Claims Audit Table */}
      <div className="audit-section">
        <h4 className="audit-title">Ground Truth Anti-Hallucination Audit Trail</h4>
        <div className="audit-table-wrapper">
          <table className="audit-table">
            <thead>
              <tr>
                <th>Generated CV Claim</th>
                <th>Raw Source Evidence</th>
                <th>Match Score</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cv.aiVerifications.map((v) => (
                <tr key={v.bulletId}>
                  <td className="text-xs font-medium">{v.bulletText}</td>
                  <td className="text-xs text-muted">{v.sourceRawText}</td>
                  <td>
                    <span className="confidence-pill">{v.confidenceScore}%</span>
                  </td>
                  <td>
                    <span className="badge-verified">
                      <CheckCircle size={12} /> {v.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PO Review Action Box */}
      <div className="po-action-box">
        <label className="field-label">Harvest Product Owner Feedback / Notes:</label>
        <textarea 
          rows={2}
          className="textarea-input"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Add review feedback for Harvester or client note..."
        />
        <div className="flex-gap-sm margin-top-sm">
          <button className="btn-success" onClick={handleApprove}>
            <CheckCircle size={16} /> Approve & Issue Harvest Stamp
          </button>
          <button className="btn-danger" onClick={handleReject}>
            <XCircle size={16} /> Reject / Request Revision
          </button>
        </div>
      </div>
    </div>
  );
};
