import React from 'react';

const ActionPoints = ({ actionPoints, onUploadEvidence }) => {
    return (
        <div className="action-points">
            {actionPoints.map((action, index) => (
                <div
                    key={index}
                    className={`action-point ${action.status === 'completed' ? 'red' : 'green'}`}
                >
                    <span>{action.text}</span>
                    {action.status === 'pending' && (
                        <input
                            type="file"
                            onChange={(e) => onUploadEvidence(index, e.target.files[0].name)}
                        />
                    )}
                    {action.evidence && <span>Evidence: {action.evidence}</span>}
                </div>
            ))}
        </div>
    );
};

export default ActionPoints;
