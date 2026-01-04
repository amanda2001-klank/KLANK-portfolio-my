import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Smaller bundle, includes connections

const Background = ({ children }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      // You can load other bundles if needed:
      // await loadFull(engine); // for everything (larger)
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    background: {
      color: {
        value: "#0f172a", // Dark slate like the reference
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "connect", // Connecting lines on hover
        },
        resize: true,
      },
      modes: {
        connect: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
          radius: 100,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="absolute inset-0 -z-10"
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;