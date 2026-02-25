(function() {
  'use strict';

  console.log('🌟 Firefly Theme: Content script loaded');

  const config = {
    fireflyEnabled: true,
    trailColor: '#00ff88',
    trailSize: 8,
    trailOpacity: 0.8,
    trailLifetime: 800,
    ambientParticleCount: 15,
    ambientColor: '#00ff88',
    glowIntensity: 0.5
  };

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let lastMouseX = mouseX;
  let lastMouseY = mouseY;
  let mouseVelocity = 0;
  let trailParticles = [];
  let ambientParticles = [];
  let animationId = null;
  let isRunning = false;

  function loadSettings() {
    console.log('📖 Loading settings from storage...');
    chrome.storage.local.get(['fireflyEnabled', 'brightness', 'trailLength', 'backgroundOpacity', 'themeColor'], (result) => {
      console.log('📦 Settings loaded:', result);
      
      if (result.fireflyEnabled !== undefined) {
        config.fireflyEnabled = result.fireflyEnabled;
        console.log('✅ Firefly enabled:', config.fireflyEnabled);
      }
      if (result.brightness !== undefined) {
        config.trailOpacity = parseFloat(result.brightness);
        console.log('✅ Trail opacity:', config.trailOpacity);
      }
      if (result.trailLength !== undefined) {
        config.trailLifetime = parseFloat(result.trailLength) * 1000;
        console.log('✅ Trail lifetime:', config.trailLifetime);
      }
      if (result.backgroundOpacity !== undefined) {
        document.documentElement.style.setProperty('--background-opacity', result.backgroundOpacity);
        console.log('✅ Background opacity:', result.backgroundOpacity);
      }
      if (result.themeColor !== undefined) {
        config.trailColor = result.themeColor;
        config.ambientColor = result.themeColor;
        document.documentElement.style.setProperty('--firefly-primary', result.themeColor);
        document.documentElement.style.setProperty('--firefly-glow', `${result.themeColor}4D`);
        document.documentElement.style.setProperty('--firefly-glow-strong', `${result.themeColor}99`);
        console.log('✅ Theme color:', result.themeColor);
      }
      
      console.log('🔧 Final config:', config);
      
      if (config.fireflyEnabled && !isRunning) {
        console.log('🚀 Initializing firefly effect...');
        init();
      } else if (!config.fireflyEnabled && isRunning) {
        console.log('🛑 Stopping firefly effect...');
        cleanup();
      } else if (config.fireflyEnabled && isRunning) {
        console.log('✅ Firefly effect already running');
      }
    });
  }

  loadSettings();

  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local') {
      if (changes.fireflyEnabled) {
        config.fireflyEnabled = changes.fireflyEnabled.newValue;
        if (config.fireflyEnabled && !isRunning) {
          init();
        } else if (!config.fireflyEnabled && isRunning) {
          cleanup();
        }
      }
      if (changes.brightness) {
        config.trailOpacity = parseFloat(changes.brightness.newValue);
      }
      if (changes.trailLength) {
        config.trailLifetime = parseFloat(changes.trailLength.newValue) * 1000;
      }
      if (changes.backgroundOpacity) {
        document.documentElement.style.setProperty('--background-opacity', changes.backgroundOpacity.newValue);
      }
      if (changes.themeColor) {
        config.trailColor = changes.themeColor.newValue;
        config.ambientColor = changes.themeColor.newValue;
        document.documentElement.style.setProperty('--firefly-primary', changes.themeColor.newValue);
        document.documentElement.style.setProperty('--firefly-glow', `${changes.themeColor.newValue}4D`);
        document.documentElement.style.setProperty('--firefly-glow-strong', `${changes.themeColor.newValue}99`);
      }
    }
  });

  function updateMousePosition(e) {
    lastMouseX = mouseX;
    lastMouseY = mouseY;
    mouseX = e.clientX;
    mouseY = e.clientY;

    const dx = mouseX - lastMouseX;
    const dy = mouseY - lastMouseY;
    mouseVelocity = Math.sqrt(dx * dx + dy * dy);

    document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);

    createTrailParticle(mouseX, mouseY, mouseVelocity);
  }

  function createTrailParticle(x, y, velocity) {
    const particle = {
      x: x,
      y: y,
      size: config.trailSize + Math.random() * 4,
      opacity: config.trailOpacity,
      lifetime: config.trailLifetime,
      age: 0,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      color: config.trailColor,
      glowSize: 10 + Math.random() * 10
    };

    trailParticles.push(particle);

    if (trailParticles.length > 50) {
      trailParticles.shift();
    }
  }

  function createAmbientParticle() {
    const particle = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 2 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.5,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      color: config.ambientColor,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03
    };

    ambientParticles.push(particle);

    if (ambientParticles.length > config.ambientParticleCount) {
      ambientParticles.shift();
    }
  }

  function updateTrailParticles(deltaTime) {
    for (let i = trailParticles.length - 1; i >= 0; i--) {
      const particle = trailParticles[i];
      particle.age += deltaTime;
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy -= 0.05;

      const progress = particle.age / particle.lifetime;
      particle.opacity = config.trailOpacity * (1 - progress);
      particle.size *= 0.995;

      if (particle.age >= particle.lifetime || particle.opacity <= 0.01) {
        trailParticles.splice(i, 1);
      }
    }
  }

  function updateAmbientParticles(deltaTime) {
    for (let i = ambientParticles.length - 1; i >= 0; i--) {
      const particle = ambientParticles[i];
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.pulsePhase += particle.pulseSpeed;

      const pulse = Math.sin(particle.pulsePhase) * 0.3 + 0.7;
      particle.currentOpacity = particle.opacity * pulse;

      if (particle.x < -50 || particle.x > window.innerWidth + 50 ||
          particle.y < -50 || particle.y > window.innerHeight + 50) {
        ambientParticles.splice(i, 1);
      }
    }
  }

  function render() {
    const canvas = document.getElementById('firefly-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    trailParticles.forEach(particle => {
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      );
      gradient.addColorStop(0, `rgba(0, 255, 136, ${particle.opacity})`);
      gradient.addColorStop(0.5, `rgba(0, 255, 136, ${particle.opacity * 0.5})`);
      gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.8})`;
      ctx.fill();
    });

    ambientParticles.forEach(particle => {
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 3
      );
      gradient.addColorStop(0, `rgba(0, 255, 136, ${particle.currentOpacity})`);
      gradient.addColorStop(0.5, `rgba(0, 255, 136, ${particle.currentOpacity * 0.3})`);
      gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    });
  }

  let lastTime = 0;
  function animate(currentTime) {
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    updateTrailParticles(deltaTime);
    updateAmbientParticles(deltaTime);
    render();

    animationId = requestAnimationFrame(animate);
  }

  function resizeCanvas() {
    const canvas = document.getElementById('firefly-canvas');
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }

  function init() {
    console.log('🌟 Firefly Theme: Initializing...');
    
    if (isRunning) {
      console.log('Already running, skipping init');
      return;
    }
    
    const canvas = document.createElement('canvas');
    canvas.id = 'firefly-canvas';
    canvas.className = 'firefly-canvas';
    document.body.appendChild(canvas);

    let background = document.querySelector('.firefly-background');
    
    if (!background) {
      background = document.createElement('div');
      background.className = 'firefly-background';
      
      if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getURL) {
        try {
          const backgroundImageUrl = chrome.runtime.getURL('images/background.png');
          console.log('Loading background image from:', backgroundImageUrl);
          background.style.backgroundImage = `url('${backgroundImageUrl}')`;
          
          const img = new Image();
          img.onload = function() {
            console.log('✅ Background image loaded successfully');
          };
          img.onerror = function() {
            console.error('❌ Failed to load background image');
          };
          img.src = backgroundImageUrl;
        } catch (e) {
          console.error('Error setting background image:', e);
        }
      } else {
        console.log('Chrome runtime API not available');
      }
      
      document.body.appendChild(background);
    } else {
      console.log('Background element already exists');
    }

    resizeCanvas();

    for (let i = 0; i < config.ambientParticleCount; i++) {
      createAmbientParticle();
    }

    document.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('resize', resizeCanvas);

    lastTime = performance.now();
    animationId = requestAnimationFrame(animate);
    isRunning = true;
    console.log('✅ Firefly Theme: Initialized successfully');
  }

  function cleanup() {
    console.log('🧹 Firefly Theme: Cleaning up...');
    
    if (animationId) {
      cancelAnimationFrame(animationId);
    }

    document.removeEventListener('mousemove', updateMousePosition);
    window.removeEventListener('resize', resizeCanvas);

    const canvas = document.getElementById('firefly-canvas');
    if (canvas) {
      canvas.remove();
    }

    const background = document.querySelector('.firefly-background');
    if (background) {
      background.remove();
    }

    trailParticles = [];
    ambientParticles = [];
    isRunning = false;
    console.log('✅ Firefly Theme: Cleaned up successfully');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadSettings();
    });
  } else {
    loadSettings();
  }

  window.addEventListener('beforeunload', cleanup);

})();