import React, { useState } from 'react';
import policies from '../policies'; // Adjust the path if needed
import '../styles/styles.css';
import ActionPoints from './ActionPoints'; // Import ActionPoints component

const HomePage = () => {
    const [selectedPolicy, setSelectedPolicy] = useState(null); // Track the selected policy

    // Handle policy selection
    const handlePolicySelect = (policyId) => {
        setSelectedPolicy(policies[policyId]);
    };

    return (
        <div className="homepage">
            <div className="policy-list">
                <h2>Policies</h2>
                <ul>
                    {Object.keys(policies).map((id) => (
                        <li
                            key={id}
                            className={selectedPolicy?.id === id ? 'selected' : ''}
                            onClick={() => handlePolicySelect(id)}
                        >
                            {policies[id]?.title}
                        </li>
                    ))}
                </ul>
            </div>

            {selectedPolicy && (
                <div className="policy-content">
                    <h2>{selectedPolicy.title}</h2>
                    <div className="policy-points">
                        <h3>Action Points</h3>
                        {Array.isArray(selectedPolicy.points) && selectedPolicy.points.length > 0 ? (
                            <ActionPoints
                                actionPoints={selectedPolicy.points}
                                onUploadEvidence={(index, evidence) => {
                                    console.log(`Evidence uploaded for point ${index}: ${evidence}`);
                                }}
                            />
                        ) : (
                            <p>No action points available</p>
                        )}
                    </div>
                    <div className="pdf-viewer">
                        <iframe
                            src={selectedPolicy.file}
                            title={selectedPolicy.title}
                            frameBorder="0"
                            style={{ width: '100%', height: '500px' }}
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
