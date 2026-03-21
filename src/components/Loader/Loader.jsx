import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Loader.css';

const Loader = () => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    })
      .to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        delay: 0.5,
        ease: 'power3.in',
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: 'power4.inOut',
      });
  }, []);

  return (
    <div className="loader" ref={loaderRef}>
      <h1 className="loader-text" ref={textRef}>Initializing...</h1>
    </div>
  );
};

export default Loader;
