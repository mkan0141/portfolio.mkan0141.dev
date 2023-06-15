'use client';

import { useCallback } from 'react';

import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';

const GlobalBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="absolute z-[-1]"
      id="background-particles"
      init={particlesInit}
      options={{
        autoPlay: true,
        background: {
          color: '#fbf7f6',
        },
        particles: {
          color: { value: 'rgb(254, 215, 170)' },
          move: {
            direction: 'top',
            enable: true,
            outModes: 'out',
            speed: 2,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 25,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: 6,
          },
          wobble: {
            enable: true,
            distance: 10,
            speed: 10,
          },
          zIndex: {
            value: { min: 0, max: 100 },
          },
        },
      }}
    />
  );
};

export { GlobalBackground };
