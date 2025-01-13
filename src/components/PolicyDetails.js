import React, { useState } from "react";
import { useParams } from "react-router-dom";
import policies from "../data/policies";
import "../styles/styles.css";
import { motion } from "framer-motion";

const PolicyDetails = () => {
  const { id } = useParams();
  const policy = policies[id]; // Fetch policy by ID
  const [selectedPoint, setSelectedPoint] = useState(null); // Track selected action point
  const [evidence, setEvidence] = useState(null); // Track uploaded evidence

  if (!policy) {
    return <h2>Policy not found</h2>;
  }

  const handleActionPointClick = (point) => {
    setSelectedPoint(point);
    setEvidence(null); // Reset evidence when a new point is selected
  };

  const handleFileChange = (e) => {
    setEvidence(e.target.files[0]);
  };

  const handleUpload = () => {
    if (evidence) {
      alert(`Evidence "${evidence.name}" uploaded for "${selectedPoint.description}"`);
      // Reset evidence after uploading
      setEvidence(null);
    }
  };

  return (
    <div className="policy-details-container">
      {/* Left Section: Policy Text */}
      <div className="policy-text">
        <h2>{policy.title}</h2>
        {policy.text.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      {/* Middle Section: Action Points */}
      <div className="action-points">
        <h3>Action Points</h3>
        {policy.actionPoints && policy.actionPoints.length > 0 ? (
          policy.actionPoints.map((point) => (
            <motion.div
              key={point.id}
              className={`action-point-box ${point.status.toLowerCase()}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleActionPointClick(point)}
            >
              {point.description}
            </motion.div>
          ))
        ) : (
          <p>No action points defined for this policy.</p>
        )}
      </div>

      {/* Right Section: Evidence */}
      <div className="evidence-section">
        {selectedPoint ? (
          <>
            <h3>Details for: {selectedPoint.description}</h3>
            <p><strong>Status:</strong> {selectedPoint.status}</p>

            <div className="evidence-upload">
              <label htmlFor="evidence-file">Upload Evidence:</label>
              <input
                type="file"
                id="evidence-file"
                onChange={handleFileChange}
              />
              <button
                className="upload-button"
                onClick={handleUpload}
                disabled={!evidence}
              >
                Upload
              </button>
            </div>

            {evidence && (
              <p className="evidence-name">Selected File: {evidence.name}</p>
            )}
          </>
        ) : (
          <p>Select an action point to upload evidence.</p>
        )}
      </div>
    </div>
  );
};

export default PolicyDetails;
