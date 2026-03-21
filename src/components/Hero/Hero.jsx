import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Particles from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import './Hero.css';
import profileimg from '../profileImg/123.png';

const Hero = () => {
  const heroRef = useRef(null);
  const textRefs = useRef([]);
  textRefs.current = [];

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  const initParticlesEngine = async (engine) => {
    await loadSlim(engine);
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(textRefs.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5 }
    );

    gsap.to('.hero-image-wrapper', {
      y: -20,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <Particles
        id="tsparticles"
        init={initParticlesEngine}
        options={{
          background: {
            color: { value: 'transparent' },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: '#ffffff' },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.2 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      <div className="hero-content">
        <div className="hero-text">
          <h3 ref={addToRefs} className="hero-greeting">Hello There</h3>
          <h1 ref={addToRefs} className="hero-name">I'm <span className="highlight">KRUNAL</span></h1>
          <h2 ref={addToRefs} className="hero-role">Frontend / Backend</h2>

          <div ref={addToRefs} className="hero-cta">
            <a href="#projects" className="btn btn-primary hover-target">View Projects</a>
            <a href="#contact" className="btn btn-secondary hover-target">Contact Me</a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <div className="hero-image-mask">
              <img src={profileimg} alt="Developer" className="hero-image" />
            </div>
            <div className="glow-backdrop"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
