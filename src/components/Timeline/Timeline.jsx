import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Timeline.css';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: '2023 - Present',
    role: 'Learning full staked developer',
    company: 'Red and White multimedia education',
    description: 'Full Stack Developer skilled in building responsive and scalable web applications.'
  },
  {
    year: '2021 - 2023',
    role: 'hsc student',
    company: 'sharda vidhyalaya',
    description: 'Successfully completed HSC in Commerce, building a foundation in business and finance..'
  },
  {
    year: '2019 - 2021',
    role: 'ssc student',
    company: 'sharda vidhyalaya',
    description: 'Successfully completed SSC, building a strong academic foundation.'
  },
  {
    year: '2020 - 2021',
    role: 'c++ student',
    company: 'shivem computer',
    description: 'Experienced in C++ with strong understanding of programming concepts..'
  }
];

const Timeline = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray('.timeline-item');

    items.forEach((item, index) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          y: 50,
          x: index % 2 === 0 ? -50 : 50
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        }
      );
    });

    gsap.fromTo('.timeline-line',
      { height: 0 },
      {
        height: '100%',
        duration: 2,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1
        }
      }
    );
  }, []);

  return (
    <section id="timeline" className="timeline-section section-padding" ref={containerRef}>
      <h2 className="section-title">Experience & Education</h2>

      <div className="timeline-container">
        <div className="timeline-line-wrapper">
          <div className="timeline-line"></div>
        </div>

        {timelineData.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content hover-target">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-role">{item.role}</h3>
              <h4 className="timeline-company">{item.company}</h4>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
