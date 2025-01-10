import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import policies from '../data/policies';
import ActionPoints from './ActionPoints';

const PDFViewer = () => {
    const { id } = useParams();
    const policy = policies[id];

    const [actionPoints, setActionPoints] = useState(policy.actionPoints);

    const handleEvidenceUpload = (index, evidence) => {
        const updatedActionPoints = [...actionPoints];
        updatedActionPoints[index].evidence = evidence;
        updatedActionPoints[index].status = 'completed';
        setActionPoints(updatedActionPoints);
    };

    if (!policy) {
        return <h2>Policy not found</h2>;
    }

    return (
        <div className="pdf-viewer">
            <h1>{policy.title}</h1>
            <p>{policy.description}</p>

            <div className="pdf-container">
                <iframe
                    src={process.env.PUBLIC_URL + policy.file}
                    width="100%"
                    height="600px"
                    title={policy.title}
                />
            </div>

            <h2>Action Points</h2>
            <ActionPoints
                actionPoints={actionPoints}
                onUploadEvidence={handleEvidenceUpload}
            />
        </div>
    );
};

export default PDFViewer;
