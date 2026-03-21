import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiVite, SiGit, SiGithub, SiTailwindcss, SiFigma } from 'react-icons/si';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { name: 'HTML5', icon: SiHtml5, percentage: 95 },
  { name: 'CSS3', icon: SiCss, percentage: 90 },
  { name: 'JavaScript', icon: SiJavascript, percentage: 85 },
  { name: 'React', icon: SiReact, percentage: 80 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, percentage: 80 },
  { name: 'Git', icon: SiGit, percentage: 75 },
  { name: 'GitHub', icon: SiGithub, percentage: 80 },
  { name: 'Node', icon: SiFigma, percentage: 70 },
  { name: 'Vite', icon: SiVite, percentage: 85 },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const bars = gsap.utils.toArray('.skill-progress-fill');

    gsap.fromTo(bars,
      { width: 0 },
      {
        width: (i, el) => el.getAttribute('data-width'),
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="skills" className="skills-section section-padding" ref={sectionRef}>
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container" ref={triggerRef}>
        {skillsData.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-info">
              <div className="skill-icon-name">
                <skill.icon className="skill-icon hover-target" />
                <span className="skill-name">{skill.name}</span>
              </div>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="skill-progress-bar">
              <div
                className="skill-progress-fill glow"
                data-width={`${skill.percentage}%`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
