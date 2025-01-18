import React, { useState } from "react";
import { useParams } from "react-router-dom";
import policies from "../data/policies";
import "../styles/styles.css";

const ActionablePoints = () => {
  const { id } = useParams();
  const policy = policies.find((policy) => policy.id === id);
  const [selectedActionPoint, setSelectedActionPoint] = useState(null);
  const [evidence, setEvidence] = useState(null);

  if (!policy) {
    return <p>Policy not found.</p>;
  }

  if (!policy.actionPoints || policy.actionPoints.length === 0) {
    return <p>No actionable points available for this policy.</p>;
  }

  const handleActionPointClick = (actionPoint) => {
    setSelectedActionPoint(actionPoint);
    setEvidence(null); // Reset evidence for the new action point
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setEvidence(file);
    alert(`Evidence "${file.name}" uploaded successfully!`);
  };

  return (
    <div className="homepage-container">
      {/* Left Sidebar */}
      <div className="policies-sidebar">
        <h3>Actionable Points</h3>
        <ul>
          {policy.actionPoints.map((point) => (
            <li
              key={point.id}
              className={`policy-item ${
                selectedActionPoint?.id === point.id ? "active" : ""
              }`}
              onClick={() => handleActionPointClick(point)}
            >
              {point.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="policy-content">
        {selectedActionPoint ? (
          <>
            <h2>{selectedActionPoint.description}</h2>
            <div className="policy-text">
              <h4>Steps:</h4>
              <ul>
                {selectedActionPoint.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
            <div className="policy-actions">
              <h4>Evidence</h4>
              {!evidence ? (
                <input type="file" onChange={handleFileUpload} />
              ) : (
                <div>
                  <p>Uploaded File: {evidence.name}</p>
                  <button
                    className="action-button"
                    onClick={() =>
                      alert(`Viewing evidence: ${evidence.name}`)
                    }
                  >
                    View Evidence
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <p>Please select an actionable point to view details.</p>
        )}
      </div>
    </div>
  );
};

export default ActionablePoints;
