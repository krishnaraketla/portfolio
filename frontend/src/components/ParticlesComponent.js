import React, { useEffect } from 'react';
import 'particles.js';

function ParticlesComponent() {
  useEffect(() => {
    window.particlesJS.load('particles-js', '/particles.json', function() {
      console.log('particles.js config loaded');
    });
  }, []);

  return <section id="particles-js"></section>;
}

export default ParticlesComponent;