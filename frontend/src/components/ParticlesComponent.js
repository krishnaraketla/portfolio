import React, { useEffect } from 'react';
import 'particles.js';

function ParticlesComponent() {
  useEffect(() => {
    window.particlesJS.load('particles-js', '/particles.json', function() {
      console.log('particles.js config loaded');
    });
  }, []);

  return <div id="particles-js"></div>;
}

export default ParticlesComponent;