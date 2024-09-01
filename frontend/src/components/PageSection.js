import React from 'react';
import '../styles/PageSection.css';

const PageSection = ({ title, image, text, images }) => {
    return (
        <section className="page-section">
            {image && (
                <div className="page-section-image">
                    <img src={image} alt="page" />
                </div>
            )}
            <div className="page-section-text">
                <div className="page-section-title">{title}</div>
                {/* Render each paragraph */}
                {text.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                {images && (
                    <div className="page-section-images">
                        {images.map((img, index) => (
                            <img key={index} src={img} alt={`artwork-${index}`} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PageSection;