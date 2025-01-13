import React, { useState } from 'react';

const ActionPoint = ({ point, onUpload }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => setFile(e.target.files[0]);
    const handleUpload = () => {
        if (file) onUpload(point.id, file);
    };

    return (
        <div className="action-point">
            <div className={`status-dot ${point.status}`}></div>
            <p>{point.description}</p>
            {point.status === "completed" ? (
                <p className="review-file">Uploaded: {point.reviewFile}</p>
            ) : (
                <div className="upload-section">
                    <input type="file" onChange={handleFileChange} />
                    <button onClick={handleUpload}>Upload</button>
                </div>
            )}
        </div>
    );
};

export default ActionPoint;
