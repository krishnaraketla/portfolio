import React from 'react';
import '../styles/PageSection.css';
import { Link } from 'react-router-dom';

const PageSection = (props) => {
    return (
        <div className="page-section">
            <div className='page-section-image'></div>
            <div className='page-section-text'>
                <div className='page-section-title'></div>
            </div>
        </div>
    );
};

export default PageSection;