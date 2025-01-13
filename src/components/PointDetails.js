import React, { useState } from 'react';

const PointDetails = ({ point }) => {
    const [evidence, setEvidence] = useState('');
    const [uploaded, setUploaded] = useState(false);

    const handleUpload = () => {
        setUploaded(true);
        alert('Evidence uploaded!');
    };

    return (
        <div className="point-details">
            <h3>Details</h3>
            <p><strong>Description:</strong> {point.description}</p>
            <p><strong>Status:</strong> {point.completed ? 'Completed' : 'Pending'}</p>

            <div>
                <label>Upload Evidence:</label>
                <input
                    type="file"
                    onChange={(e) => setEvidence(e.target.files[0])}
                />
                <button onClick={handleUpload}>Upload</button>
            </div>

            {uploaded && <p>Evidence: {evidence?.name || 'Uploaded!'}</p>}
        </div>
    );
};

export default PointDetails;
