import React from 'react';
import '../styles/Art.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ArtPage = () => {
    return (
        <>
        <Navbar />
        <div className='art-page'>
            <div className="bento-grid">
                <div className="bento-item large" style={{ backgroundImage: `url('images/film.webp')` }}>
                    <span className="bento-text">Film Photography</span>
                </div>
                <div className="bento-item large" style={{ backgroundImage: `url('images/oil.webp')` }}>
                    <span className="bento-text">Oil</span>
                </div>
                <div className="bento-item large" style={{ backgroundImage: `url('images/charcoal.webp')` }}>
                    <span className="bento-text">Charcoal</span>
                </div>
                <div className="bento-item small" style={{ backgroundImage: `url('images/watercolor.webp')` }}>
                    <span className="bento-text">Watercolor</span>
                </div>
                <div className="bento-item small" style={{ backgroundImage: `url('images/graphite.webp')` }}>
                    <span className="bento-text">Graphite</span>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default ArtPage;