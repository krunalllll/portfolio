import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0, ease: 'power2.out' });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.8, ease: 'power3.out' });
    };

    const addHoverClass = () => follower.classList.add('cursor-hover');
    const removeHoverClass = () => follower.classList.remove('cursor-hover');

    const links = document.querySelectorAll('a, button, .hover-target');
    links.forEach((link) => {
      link.addEventListener('mouseenter', addHoverClass);
      link.addEventListener('mouseleave', removeHoverClass);
    });

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', addHoverClass);
        link.removeEventListener('mouseleave', removeHoverClass);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="custom-cursor-follower" ref={followerRef}></div>
    </>
  );
};

export default Cursor;
