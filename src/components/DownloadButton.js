// DownloadButton.js

import React from 'react';
import './DownloadButton.css';
const DownloadButton = ({ url, label }) => {
    const handleDownload = () => {
        window.open(url, '_blank');
    };

    return (
        <button className="download-button" onClick={handleDownload}>
            {label}
        </button>
    );
};

export default DownloadButton;
