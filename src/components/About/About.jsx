import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import profileimg from '../profileImg/123.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Scroll reveal animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 75%',
      }
    });

    tl.fromTo(imageRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    ).fromTo(textRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.5' // Overlap animations
    );
  }, []);

  return (
    <section id="about" className="about-section section-padding" ref={aboutRef}>
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image-wrapper" ref={imageRef}>
         <div className="hero-image-mask">
  <img src={profileimg} alt="Profile" className="hero-image" />
</div>
          <div className="about-glow"></div>
        </div>

        <div className="about-text" ref={textRef}>
          <h3>Designing logic, building experiences</h3>
          <p>
            I am a passionate Frontend Developer with a keen eye for modern,
            interactive, and scalable web interfaces. I specialize in React,jawa script,html,css,bootstrap,dsa,node js,express js
            GSAP, and modern CSS to craft seamless user experiences.
          </p>
          <p>
            Constantly learning and adapting to the latest web technologies,
            I aim to build applications that not only solve problems but also
            provide delightful, cinematic interactions for users.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <h4>3+</h4>
              <span>Years learning Experience</span>
            </div>
            <div className="stat-card">
              <h4>20+</h4>
              <span>Projects Completed</span>
            </div>
            <div className="stat-card">
              <h4>100%</h4>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
