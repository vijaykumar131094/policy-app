import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "../styles/styles.css";

const PolicyDetails = ({ selectedPolicy }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [placeholders, setPlaceholders] = useState({
    organisationName: "[Insert organisation name]",
    responsiblePerson: "[Insert responsible person]",
  });

  const handlePlaceholderChange = (key, value) => {
    setPlaceholders((prev) => ({ ...prev, [key]: value }));
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    alert("Changes saved successfully!");
  };

  return (
    <div className="policy-details-container">
      {/* Left Panel: Editable Placeholders */}
      <div className="edit-panel">
        <h3>Edit Placeholders</h3>
        <div className="placeholder-item">
          <label>Organisation Name:</label>
          <input
            type="text"
            value={placeholders.organisationName}
            onChange={(e) => handlePlaceholderChange("organisationName", e.target.value)}
            disabled={!isEditMode}
          />
        </div>
        <div className="placeholder-item">
          <label>Responsible Person:</label>
          <input
            type="text"
            value={placeholders.responsiblePerson}
            onChange={(e) => handlePlaceholderChange("responsiblePerson", e.target.value)}
            disabled={!isEditMode}
          />
        </div>
        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
        {isEditMode && (
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        )}
      </div>

      {/* Right Panel: PDF Viewer */}
      <div className="pdf-viewer">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
          <Viewer fileUrl="/policy.pdf" />
        </Worker>
      </div>
    </div>
  );
};

export default PolicyDetails;
