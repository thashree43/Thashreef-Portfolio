import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaReact, FaNodeJs, FaJs, FaDatabase
} from 'react-icons/fa';
import { SiTypescript, SiRedux, SiMongodb, SiExpress } from 'react-icons/si';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// ─── CSS Injection ────────────────────────────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=Share+Tech+Mono&display=swap');

  :root {
    --bg-deep:       #ffffff;
    --bg-card:       rgba(255, 255, 255, 0.9);
    --accent:        #3b82f6;
    --accent-alt:    #06b6d4;
    --accent-glow:   rgba(59, 130, 246, 0.15);
    --accent-glow2:  rgba(6, 182, 212, 0.12);
    --text-primary:  #1f2937;
    --text-sub:      #6b7280;
    --border:        rgba(209, 213, 219, 0.5);
    --glass:         rgba(255, 255, 255, 0.7);
    --shadow-light:  0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    --shadow-medium: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  .hero-section {
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    font-family: 'Sora', sans-serif;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ── Matrix Canvas ── */
  .hero-matrix-canvas {
    position: absolute;
    inset: 0;
    opacity: 0.08;
    z-index: 0;
  }

  /* ── Ambient Orbs ── */
  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    pointer-events: none;
    z-index: 0;
  }
  .hero-orb--1 {
    width: 520px; height: 520px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
    top: -180px; left: -140px;
  }
  .hero-orb--2 {
    width: 420px; height: 420px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%);
    bottom: -100px; right: -120px;
  }
  .hero-orb--3 {
    width: 260px; height: 260px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
    top: 50%; left: 55%;
  }

  /* ── Grid Overlay ── */
  .hero-grid-overlay {
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: 0.02;
    background-image:
      linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%);
  }

  /* ── Floating Particles ── */
  .hero-particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
  }

  /* ── Code Lines ── */
  .hero-code-line {
    position: absolute;
    height: 1px;
    width: 160px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0;
    z-index: 1;
    pointer-events: none;
  }

  /* ── Main Content Wrapper ── */
  .hero-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1140px;
    padding: 60px 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }

  /* ── Left Column ── */
  .hero-left { display: flex; flex-direction: column; gap: 28px; }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    padding: 6px 14px;
    border-radius: 30px;
    border: 1px solid var(--border);
    background: var(--glass);
    backdrop-filter: blur(10px);
    font-size: 12px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: var(--accent);
    opacity: 0;
    box-shadow: var(--shadow-light);
  }
  .hero-badge .badge-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--accent);
    animation: badge-pulse 2s ease-in-out infinite;
  }
  @keyframes badge-pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.5; }
  }

  .hero-title {
    font-size: clamp(38px, 6vw, 64px);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -2px;
    color: var(--text-primary);
    opacity: 0;
  }
  .hero-title .highlight {
    background: linear-gradient(135deg, var(--accent), var(--accent-alt));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hero-title .title-cursor {
    display: inline-block;
    width: 3px;
    height: 0.85em;
    background: var(--accent);
    margin-left: 4px;
    vertical-align: middle;
    border-radius: 2px;
  }

  .hero-subtitle {
    font-size: clamp(16px, 2.2vw, 20px);
    font-weight: 300;
    color: var(--text-sub);
    letter-spacing: 0.4px;
    min-height: 1.4em;
    opacity: 0;
  }
  .hero-subtitle .sub-accent { color: var(--accent); font-weight: 600; }

  .hero-description {
    font-size: 14px;
    line-height: 1.8;
    color: var(--text-sub);
    max-width: 440px;
    opacity: 0;
  }

  /* ── Contact Chips ── */
  .hero-contacts {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .hero-contact-chip {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 7px 13px;
    border-radius: 20px;
    border: 1px solid var(--border);
    background: var(--glass);
    backdrop-filter: blur(8px);
    font-size: 12px;
    color: var(--text-sub);
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-light);
  }
  .hero-contact-chip:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
  }
  .hero-contact-chip svg { color: var(--accent); font-size: 13px; }

  /* ── Buttons ── */
  .hero-buttons { display: flex; gap: 12px; flex-wrap: wrap; }

  .hero-btn {
    position: relative;
    padding: 11px 24px;
    border-radius: 10px;
    font-family: 'Sora', sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    border: none;
    outline: none;
    overflow: hidden;
    transition: transform 0.25s, box-shadow 0.3s;
    opacity: 0;
  }
  .hero-btn:hover { transform: translateY(-2px); }

  .hero-btn--primary {
    background: linear-gradient(135deg, var(--accent), #2563eb);
    color: white;
    box-shadow: var(--shadow-medium);
  }
  .hero-btn--primary:hover {
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.25);
  }

  .hero-btn--ghost {
    background: white;
    color: var(--text-primary);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-light);
  }
  .hero-btn--ghost:hover {
    border-color: var(--accent);
    background: rgba(59, 130, 246, 0.05);
  }

  .hero-btn--outline {
    background: transparent;
    color: var(--accent);
    border: 1px solid var(--accent);
  }
  .hero-btn--outline:hover {
    background: rgba(59, 130, 246, 0.08);
  }

  /* ── Social Row ── */
  .hero-socials {
    display: flex;
    gap: 14px;
  }
  .hero-social-link {
    width: 38px; height: 38px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: white;
    backdrop-filter: blur(6px);
    display: flex; align-items: center; justify-content: center;
    color: var(--text-sub);
    text-decoration: none;
    font-size: 16px;
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-light);
  }
  .hero-social-link:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.15);
  }

  /* ── Right Column – Visual Panel ── */
  .hero-right {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .hero-visual {
    position: relative;
    width: 340px;
    height: 340px;
  }

  /* Central Avatar Ring */
  .hero-avatar-ring {
    position: absolute;
    inset: 50%;
    transform: translate(-50%, -50%);
    width: 180px; height: 180px;
    border-radius: 50%;
    border: 2px solid var(--border);
    background: white;
    backdrop-filter: blur(12px);
    display: flex; align-items: center; justify-content: center;
    flex-direction: column;
    gap: 2px;
    z-index: 3;
    opacity: 0;
    box-shadow: var(--shadow-medium);
  }
  .hero-avatar-ring .avatar-initials {
    font-size: 36px;
    font-weight: 700;
    background: linear-gradient(135deg, var(--accent), var(--accent-alt));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -1px;
  }
  .hero-avatar-ring .avatar-label {
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--text-sub);
  }

  /* Orbit Ring */
  .hero-orbit-ring {
    position: absolute;
    inset: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px dashed var(--border);
    pointer-events: none;
    opacity: 0;
  }
  .hero-orbit-ring--1 { width: 240px; height: 240px; }
  .hero-orbit-ring--2 { width: 310px; height: 310px; }

  /* Tech Icon Orbiting ── */
  .hero-tech-orbit {
    position: absolute;
    inset: 0;
    opacity: 0;
  }

  .hero-tech-node {
    position: absolute;
    width: 44px; height: 44px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: white;
    backdrop-filter: blur(8px);
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
    opacity: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 2;
    box-shadow: var(--shadow-light);
  }
  .hero-tech-node:hover {
    transform: scale(1.2);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
    border-color: var(--accent);
  }
  .hero-tech-node .tech-tooltip {
    position: absolute;
    bottom: calc(100% + 6px);
    left: 50%; transform: translateX(-50%);
    background: white;
    border: 1px solid var(--border);
    padding: 3px 10px;
    border-radius: 6px;
    font-size: 10px;
    white-space: nowrap;
    color: var(--text-sub);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
    box-shadow: var(--shadow-light);
  }
  .hero-tech-node:hover .tech-tooltip { opacity: 1; }

  /* ── Responsive ── */
  @media (max-width: 780px) {
    .hero-content {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 36px;
    }
    .hero-left { align-items: center; }
    .hero-description { max-width: 100%; }
    .hero-right { order: -1; }
    .hero-visual { width: 260px; height: 260px; }
    .hero-avatar-ring { width: 130px; height: 130px; }
    .hero-orbit-ring--1 { width: 180px; height: 180px; }
    .hero-orbit-ring--2 { width: 240px; height: 240px; }
  }
`;

function useInjectStyles(css) {
  useEffect(() => {
    const tag = document.createElement('style');
    tag.textContent = css;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);
}

// ─── Tech Data ─────────────────────────────────────────────────────────────
const TECH_ICONS = [
  { Icon: FaReact,       color: '#61dafb', label: 'React' },
  { Icon: FaNodeJs,      color: '#339933', label: 'Node.js' },
  { Icon: SiTypescript,  color: '#3178c6', label: 'TypeScript' },
  { Icon: SiMongodb,     color: '#47a248', label: 'MongoDB' },
  { Icon: SiExpress,     color: '#aaaaaa', label: 'Express' },
  { Icon: SiRedux,       color: '#764abc', label: 'Redux' },
  { Icon: FaJs,          color: '#f7df1e', label: 'JavaScript' },
  { Icon: FaDatabase,    color: '#00b4d8', label: 'Database' },
];

const TECH_STACK_ROTATE = ['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express.js'];

// Positions (angle in degrees) for 8 icons on two rings
const ORBIT_POSITIONS = [
  { angle: 0,   ring: 120 },
  { angle: 60,  ring: 120 },
  { angle: 120, ring: 120 },
  { angle: 180, ring: 120 },
  { angle: 240, ring: 120 },
  { angle: 300, ring: 120 },
  { angle: 40,  ring: 155 },
  { angle: 160, ring: 155 },
];

function getOrbitXY(angleDeg, radius, containerSize) {
  const rad = (angleDeg * Math.PI) / 180;
  const cx = containerSize / 2;
  const cy = containerSize / 2;
  const iconHalf = 22;
  return {
    left: cx + radius * Math.cos(rad) - iconHalf,
    top:  cy + radius * Math.sin(rad) - iconHalf,
  };
}

// ─── Component ─────────────────────────────────────────────────────────────
const Hero = () => {
  useInjectStyles(STYLES);

  const heroRef         = useRef(null);
  const canvasRef       = useRef(null);
  const badgeRef        = useRef(null);
  const titleRef        = useRef(null);
  const subtitleRef     = useRef(null);
  const descriptionRef  = useRef(null);
  const contactRefs     = useRef([]);
  const btnRefs         = useRef([]);
  const socialRefs      = useRef([]);
  const avatarRef       = useRef(null);
  const orbitRingRefs   = useRef([]);
  const techOrbitRef    = useRef(null);
  const techNodeRefs    = useRef([]);
  const particleRefs    = useRef([]);
  const codeLineRefs    = useRef([]);

  const matrixInterval  = useRef(null);

  // ── Smooth Scroll Function ──
  const smoothScrollTo = useCallback((targetId) => {
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      console.warn(`Element with id "${targetId}" not found`);
      return;
    }

    window.history.pushState(null, '', `#${targetId}`);

    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: targetElement,
        offsetY: 70,
        autoKill: true,
      },
      ease: 'power3.inOut',
    });
  }, []);

  // ── Matrix Rain ──
  const startMatrix = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    const fs = 13;
    const cols = Math.floor(canvas.width / fs);
    const drops = new Array(cols).fill(1);
    const chars = '01アイウエオカキクケコサタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    const draw = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fs}px "Share Tech Mono", monospace`;
      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const alpha = Math.random() * 0.25 + 0.1;
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.fillText(ch, i * fs, drops[i] * fs);
        if (drops[i] * fs > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
    draw();
    matrixInterval.current = setInterval(draw, 55);
  }, []);

  // ── Main GSAP Timeline ──
  useEffect(() => {
    startMatrix();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Badge
      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.2);

      // Title reveal
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.5);

      // Typing cursor blink after title appears
      tl.to('.title-cursor', { opacity: 0, duration: 0.4, repeat: 3, yoyo: true, ease: 'steps(1)' }, 1.4);

      // Subtitle
      tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.85);

      // Rotating tech label
      let idx = 0;
      const rotateTech = () => {
        idx = (idx + 1) % TECH_STACK_ROTATE.length;
        gsap.to(subtitleRef.current, {
          opacity: 0, duration: 0.3,
          onComplete: () => {
            const el = subtitleRef.current;
            if (el) {
              el.innerHTML = `Full Stack <span class="sub-accent">${TECH_STACK_ROTATE[idx]}</span> Developer`;
              gsap.to(el, { opacity: 1, duration: 0.4 });
            }
            setTimeout(rotateTech, 2600);
          }
        });
      };
      setTimeout(rotateTech, 3200);

      // Description
      tl.to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 1.1);

      // Contact chips
      contactRefs.current.forEach((el, i) => {
        if (el) tl.to(el, { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.6)' }, 1.35 + i * 0.1);
      });

      // Buttons
      btnRefs.current.forEach((el, i) => {
        if (el) tl.to(el, { opacity: 1, y: 0, duration: 0.7, ease: 'back.out(1.5)' }, 1.7 + i * 0.12);
      });

      // Socials
      socialRefs.current.forEach((el, i) => {
        if (el) tl.to(el, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, 2.1 + i * 0.1);
      });

      // Avatar ring
      tl.to(avatarRef.current, { opacity: 1, scale: 1, duration: 1, ease: 'power4.out' }, 0.3);

      // Orbit rings
      orbitRingRefs.current.forEach((el, i) => {
        if (el) tl.to(el, { opacity: 1, duration: 1.2, ease: 'power2.out' }, 0.6 + i * 0.2);
      });

      // Tech orbit container + nodes
      tl.to(techOrbitRef.current, { opacity: 1, duration: 0.8 }, 0.8);
      techNodeRefs.current.forEach((el, i) => {
        if (el) tl.to(el, { opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }, 1.0 + i * 0.09);
      });

      // Code lines
      codeLineRefs.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(el,
            { opacity: 0, x: -80 },
            { opacity: 0.15, x: 0, duration: 2.5, delay: 0.5 + i * 0.3, ease: 'power2.out', repeat: -1, yoyo: true, repeatDelay: 2.5 }
          );
        }
      });

      // Floating particles
      particleRefs.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            x: `random(-60, 60)`,
            y: `random(-60, 60)`,
            rotation: `random(0, 360)`,
            duration: 4 + Math.random() * 3,
            repeat: -1, yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.08
          });
        }
      });

      // Slow orbit rings continuous rotation
      orbitRingRefs.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, { rotation: 360, duration: 40 + i * 15, repeat: -1, ease: 'none' });
        }
      });

      // Parallax on mouse move
      const onMouseMove = (e) => {
        const nx = (e.clientX / window.innerWidth - 0.5) * 2;
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(avatarRef.current, { x: nx * 8, y: ny * 8, duration: 0.8, ease: 'power2.out' });
        gsap.to(orbitRingRefs.current, { x: nx * 5, y: ny * 5, duration: 1, ease: 'power2.out' });
      };
      heroRef.current?.addEventListener('mousemove', onMouseMove);

    }, heroRef);

    return () => {
      ctx.revert();
      if (matrixInterval.current) clearInterval(matrixInterval.current);
    };
  }, [startMatrix]);

  // ── Helpers for initial hidden state (for GSAP to animate FROM) ──
  const hiddenSlide = { opacity: 0, transform: 'translateY(18px)' };
  const hiddenScale = { opacity: 0, transform: 'scale(0.6)' };
  const CONTAINER = 340;

  // Button configuration
  const heroButtons = [
    { label: 'View Projects', cls: 'hero-btn--primary', href: '#projects' },
    { label: 'Contact Me', cls: 'hero-btn--ghost', href: '#contact' },
  ];

  return (
    <section className="hero-section" ref={heroRef}>
      {/* Matrix Canvas */}
      <canvas className="hero-matrix-canvas" ref={canvasRef} />

      {/* Ambient Orbs */}
      <div className="hero-orb hero-orb--1" />
      <div className="hero-orb hero-orb--2" />
      <div className="hero-orb hero-orb--3" />

      {/* Grid */}
      <div className="hero-grid-overlay" />

      {/* Floating code lines */}
      {[...Array(7)].map((_, i) => (
        <div
          key={`code-${i}`}
          className="hero-code-line"
          ref={el => { codeLineRefs.current[i] = el; }}
          style={{ top: `${12 + i * 13}%`, left: `${5 + i * 4}%` }}
        />
      ))}

      {/* Floating particles */}
      {[...Array(28)].map((_, i) => (
        <div
          key={`p-${i}`}
          className="hero-particle"
          ref={el => { particleRefs.current[i] = el; }}
          style={{
            left:   `${Math.random() * 100}%`,
            top:    `${Math.random() * 100}%`,
            width:  `${Math.random() * 3 + 1.5}px`,
            height: `${Math.random() * 3 + 1.5}px`,
            background: i % 3 === 0 ? 'rgba(59, 130, 246, 0.25)' : 'rgba(6, 182, 212, 0.2)',
            borderRadius: '50%',
          }}
        />
      ))}

      {/* ── Main Grid ── */}
      <div className="hero-content">

        {/* LEFT */}
        <div className="hero-left">

          {/* Badge */}
          <div className="hero-badge" ref={badgeRef} style={{ opacity: 0, transform: 'translateY(12px)' }}>
            <span className="badge-dot" />
            Available for Work
          </div>

          {/* Title */}
          <h1 className="hero-title" ref={titleRef} style={{ opacity: 0, transform: 'translateY(18px)' }}>
            Hi, I'm <span className="highlight">Thashreef</span>
            <span className="title-cursor" />
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle" ref={subtitleRef} style={{ opacity: 0, transform: 'translateY(12px)' }}>
            Full Stack <span className="sub-accent">{TECH_STACK_ROTATE[0]}</span> Developer
          </p>

          {/* Description */}
          <p className="hero-description" ref={descriptionRef} style={hiddenSlide}>
            Crafting digital experiences with clean code and innovative solutions.
            Specializing in full-stack development with modern technologies.
          </p>

          {/* Contact Chips */}
          <div className="hero-contacts">
            {[
              { Icon: FaEnvelope, text: 'thashreefkhan4@gmail.com' },
              { Icon: FaPhone,    text: '9345826343' },
              { Icon: FaMapMarkerAlt, text: 'Bengaluru, Karnataka' },
            ].map((c, i) => (
              <div
                key={i}
                className="hero-contact-chip"
                ref={el => { contactRefs.current[i] = el; }}
                style={{ opacity: 0, transform: 'translateY(10px)' }}
              >
                <c.Icon /> {c.text}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            {heroButtons.map((b, i) => (
              <button
                key={i}
                className={`hero-btn ${b.cls}`}
                ref={el => { btnRefs.current[i] = el; }}
                style={{ opacity: 0, transform: 'translateY(16px)' }}
                onClick={() => smoothScrollTo(b.href.replace('#', ''))}
              >
                {b.label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="hero-socials">
            {[
              { Icon: FaGithub, href: 'https://github.com/thashree43', label: 'GitHub' },
              { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/thashreef-khan-248b86301/', label: 'LinkedIn' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label={s.label}
                className="hero-social-link"
                target="_blank"
                rel="noopener noreferrer"
                ref={el => { socialRefs.current[i] = el; }}
                style={{ opacity: 0, transform: 'scale(0.5)' }}
              >
                <s.Icon />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT – Visual */}
        <div className="hero-right">
          <div className="hero-visual">

            {/* Orbit rings */}
            <div className="hero-orbit-ring hero-orbit-ring--1" ref={el => { orbitRingRefs.current[0] = el; }} style={{ opacity: 0 }} />
            <div className="hero-orbit-ring hero-orbit-ring--2" ref={el => { orbitRingRefs.current[1] = el; }} style={{ opacity: 0 }} />

            {/* Tech nodes orbiting */}
            <div className="hero-tech-orbit" ref={techOrbitRef} style={{ opacity: 0 }}>
              {TECH_ICONS.map((tech, i) => {
                const pos = ORBIT_POSITIONS[i];
                const { left, top } = getOrbitXY(pos.angle, pos.ring, CONTAINER);
                return (
                  <div
                    key={tech.label}
                    className="hero-tech-node"
                    ref={el => { techNodeRefs.current[i] = el; }}
                    style={{ left, top, opacity: 0 }}
                  >
                    <tech.Icon color={tech.color} />
                    <span className="tech-tooltip">{tech.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Central Avatar */}
            <div className="hero-avatar-ring" ref={avatarRef} style={hiddenScale}>
              <span className="avatar-initials">TK</span>
              <span className="avatar-label">Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;