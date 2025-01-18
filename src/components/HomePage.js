import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import policiesData from "../data/policies"; // Use a mutable copy
import "../styles/styles.css";

const HomePage = () => {
  const [policies, setPolicies] = useState(policiesData); // Store policies in state
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [editablePlaceholders, setEditablePlaceholders] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [changeLog, setChangeLog] = useState([]); // Track changes with timestamps
  const navigate = useNavigate();

  const handlePolicyClick = (policy) => {
    setSelectedPolicy(policy);
    setEditablePlaceholders(policy.placeholders || {});
    setIsEditMode(false); // Reset edit mode when switching policies
  };

  const handlePlaceholderChange = (key, value) => {
    setEditablePlaceholders((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    if (!selectedPolicy) return;

    // Log changes with timestamps
    const changes = Object.keys(editablePlaceholders).map((key) => {
      const oldValue = selectedPolicy.placeholders[key] || "Not Set";
      const newValue = editablePlaceholders[key];
      return `Updated ${key}: "${oldValue}" -> "${newValue}"`;
    });

    setChangeLog((prevLog) => [
      ...prevLog,
      ...changes.map((change) => ({
        change,
        timestamp: new Date().toLocaleString(),
      })),
    ]);

    // Update the global policies array
    const updatedPolicies = policies.map((policy) => {
      if (policy.id === selectedPolicy.id) {
        return {
          ...policy,
          placeholders: { ...editablePlaceholders },
        };
      }
      return policy;
    });

    setPolicies(updatedPolicies);
    setSelectedPolicy((prevPolicy) => ({
      ...prevPolicy,
      placeholders: { ...editablePlaceholders },
    }));
    setIsEditMode(false);

    alert("Changes saved successfully!");
  };

  const handleViewActionablePoints = (policyId) => {
    navigate(`/policy/${policyId}/actionable-points`);
  };

  return (
    <div className="homepage-container">
      {/* Left Sidebar */}
      <div className="policies-sidebar">
        <h3>Policies</h3>
        <ul>
          {policies.map((policy) => (
            <li
              key={policy.id}
              className={`policy-item ${
                selectedPolicy?.id === policy.id ? "active" : ""
              }`}
              onClick={() => handlePolicyClick(policy)}
            >
              {policy.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="policy-content">
        {selectedPolicy ? (
          <>
            <h2>{selectedPolicy.title}</h2>
            <div className="policy-text">
              {selectedPolicy.text.split("\n").map((line, index) => (
                <p key={index}>
                  {line.split(/(\[.*?\])/).map((part, idx) => {
                    if (isEditMode && part.startsWith("[") && part.endsWith("]")) {
                      return (
                        <input
                          key={idx}
                          type="text"
                          value={editablePlaceholders[part] || ""}
                          onChange={(e) =>
                            handlePlaceholderChange(part, e.target.value)
                          }
                          className="placeholder-input"
                        />
                      );
                    }
                    return part;
                  })}
                </p>
              ))}
            </div>
            <div className="policy-actions">
              {!isEditMode ? (
                <button className="edit-button" onClick={handleEdit}>
                  Edit
                </button>
              ) : (
                <button className="save-button" onClick={handleSave}>
                  Save
                </button>
              )}
              <button
                className="action-button"
                onClick={() => handleViewActionablePoints(selectedPolicy.id)}
              >
                View Actionable Points
              </button>
            </div>
            <div className="change-log">
              <h4>Change Log:</h4>
              <ul>
                {changeLog.map((log, index) => (
                  <li key={index}>
                    {log.change} (Timestamp: {log.timestamp})
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p>Please select a policy to view its details.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
