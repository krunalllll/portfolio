import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, EffectCoverflow } from 'swiper/modules';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: 'E-Commerce Platform',
    tech: 'React, Node.js, MongoDB',
    demo: '#',
    github: 'https://github.com/krunalllll/html-project/blob/main/index.html',
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
  },
  {
    title: 'Fintech Dashboard',
    tech: 'React, GSAP, Tailwind',
    demo: 'https://pushpastore.netlify.app/',
    github: 'https://github.com/krunalllll/jawa-script-project/blob/main/index.html',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'AI Image Generator',
    tech: 'React, OpenAI API, Framer Motion',
    demo: 'https://gamingfy.netlify.app/',
    github: 'https://github.com/krunalllll/html-project',
    img: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
  },
  {
    title: 'Social Media App',
    tech: 'React Native, Firebase',
    demo: '#',
    github: '#',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  }
];

const TiltCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * 20); // max rotation
    y.set(yPct * -20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="project-card hover-target"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="project-image-container" style={{ transform: "translateZ(50px)" }}>
        <img src={project.img} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.demo} className="project-link" target="_blank" rel="noreferrer">Live Demo</a>
            <a href={project.github} className="project-link" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className="project-info" style={{ transform: "translateZ(30px)" }}>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tech">{project.tech}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.swiper-container-wrapper',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%'
        }
      }
    );
  }, []);

  return (
    <section id="projects" className="projects-section section-padding" ref={containerRef}>
      <h2 className="section-title">Selected Works</h2>

      <div className="swiper-container-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView={1}
          mousewheel={true}
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="projects-swiper"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <TiltCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
