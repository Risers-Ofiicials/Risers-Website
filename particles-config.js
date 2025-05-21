particlesJS("particles-js", {
  fpsLimit: 120,
  
  
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#fcd303"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.7,
      random: false
    },
    size: {
      value: 2.5,
      random: true
    },
    links: {
      enable: true,
      distance: 120,
      color: "#fcd303",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "out"
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true, // was false
        mode: "repulse"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true
});
