import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import policiesData from "../data/policies";
import "../styles/styles.css";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  const [policies, setPolicies] = useState(policiesData); // Editable policies
  const [selectedPolicy, setSelectedPolicy] = useState(null); // Selected policy
  const [editablePlaceholders, setEditablePlaceholders] = useState({}); // Editable placeholders

  // Handle policy selection
  const handlePolicyClick = (policy) => {
    setSelectedPolicy(policy);
    setEditablePlaceholders(policy.placeholders); // Load placeholders for editing
  };

  // Handle placeholder change
  const handlePlaceholderChange = (key, value) => {
    setEditablePlaceholders((prev) => ({ ...prev, [key]: value }));
  };

  // Save changes
  const handleSave = () => {
    if (!selectedPolicy) return;

    const changes = [];
    Object.keys(selectedPolicy.placeholders).forEach((key) => {
      if (selectedPolicy.placeholders[key] !== editablePlaceholders[key]) {
        changes.push({
          placeholder: key,
          before: selectedPolicy.placeholders[key] || "(empty)",
          after: editablePlaceholders[key] || "(empty)",
        });
      }
    });

    const updatedPolicies = {
      ...policies,
      [selectedPolicy.id]: {
        ...selectedPolicy,
        placeholders: editablePlaceholders, // Save updated placeholders
        lastUpdated: new Date().toLocaleString(),
        changes,
      },
    };

    setPolicies(updatedPolicies);
    alert("Changes saved successfully!");
  };

  const handleNavigate = () => {
    if (selectedPolicy) {
      navigate(`/policy/${selectedPolicy.id}`); // Navigate to action points page
    }
  };

  return (
    <div className="homepage-container">
      {/* Sidebar: List of Policies */}
      <motion.div
        className="policies-sidebar"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Policies</h3>
        <ul>
          {Object.values(policies).map((policy) => (
            <motion.li
              key={policy.id}
              className={`policy-item ${
                selectedPolicy?.id === policy.id ? "active" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePolicyClick(policy)}
            >
              {policy.title}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Main Content: Policy Details */}
      <motion.div
        className="policy-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {selectedPolicy ? (
          <>
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {selectedPolicy.title}
            </motion.h2>
            <div className="policy-text">
              {selectedPolicy.text.split("\n").map((line, index) => (
                <p key={index}>
                  {line.split(/(\[.*?\])/).map((part, idx) => {
                    if (part.startsWith("[") && part.endsWith("]")) {
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
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
            <button className="action-button" onClick={handleNavigate}>
              View Action Points & Evidence
            </button>
            {selectedPolicy.lastUpdated && (
              <motion.div
                className="update-info"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p>Last Updated: {selectedPolicy.lastUpdated}</p>
                <h4>Changes Made:</h4>
                <ul>
                  {selectedPolicy.changes.map((change, idx) => (
                    <li key={idx}>
                      <strong>{change.placeholder}:</strong> "{change.before}" ➔ "
                      {change.after}"
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Please select a policy to view and edit details.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default HomePage;
