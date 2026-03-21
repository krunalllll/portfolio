import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef();
  const contactRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.contact-left',
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    ).fromTo('.contact-right',
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    );
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Note: User needs to insert their actual EmailJS keys here eventually
    emailjs.sendForm('service_placeholder', 'template_placeholder', formRef.current, 'public_key_placeholder')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        setIsSending(false);
        e.target.reset();
        setTimeout(() => setSuccess(false), 5000);
      }, (error) => {
        console.log(error.text);
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-section section-padding" ref={contactRef}>
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">
        <div className="contact-left">
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <h3 className="form-title">Send a Message</h3>

            <div className="input-group">
              <input type="text" name="user_name" required placeholder="Name" className="contact-input hover-target" />
            </div>

            <div className="input-group">
              <input type="email" name="user_email" required placeholder="Email" className="contact-input hover-target" />
            </div>

            <div className="input-group">
              <input type="text" name="subject" required placeholder="Subject" className="contact-input hover-target" />
            </div>

            <div className="input-group">
              <textarea name="message" required placeholder="Message" rows="5" className="contact-input hover-target"></textarea>
            </div>

            <button type="submit" className="btn btn-primary hover-target submit-btn" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>

            {success && <p className="success-msg">Message sent successfully!</p>}
          </form>
        </div>

        <div className="contact-right">
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <p className="contact-desc">Feel free to reach out to me for any inquiries, collaborations, or just to say hi!</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon glow"><FaPhoneAlt /></div>
                <span>+91 6354398954</span>
              </div>
              <div className="info-item">
                <div className="info-icon glow"><FaEnvelope /></div>
                <span>krunalrathod992@gmail.com</span>
              </div>
              <div className="info-item">
                <div className="info-icon glow"><FaMapMarkerAlt /></div>
                <span>d-54, parshwnath-township, part-10, near shivem school, nava naroda, ahemdabad,gujrat </span>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-icon hover-target"><FaLinkedin /></a>
              <a href="#" className="social-icon hover-target"><FaGithub /></a>
              <a href="#" className="social-icon hover-target"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
