import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';
import ScrollFloat from '../ScrollFloat';

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, '_blank');
  };

  return (
    <section className="about container section" id="about">
      <ScrollFloat>About Me</ScrollFloat>

      <div className="about__container grid">
        <img src={Image} alt="Avatar" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hey, I'm Shivam — an engineering student who loves building cool things with code. I'm super into full-stack web development, AI-powered ideas, and anything that mixes tech with creativity.
            </p>

            <p className="about__description">
              I've worked across both frontend and backend, mostly using the <strong>MERN stack</strong>, <strong>Firebase</strong>, <strong>Supabase</strong>, and <strong>Tailwind CSS</strong>. I also enjoy adding slick UI animations with <strong>Framer Motion</strong>, and I've got a soft spot for clean, responsive UX design.
            </p>

            <p className="about__description">
              Right now, I'm interning at <strong>Prodigy InfoTech</strong> as a Full-Stack Developer, where I'm levelling up by working on real-world projects and writing code that (hopefully) doesn't break in production.
            </p>

            <p className="about__description">
              Some of the projects I've built or contributed to include:
            </p>

            <ul className="about__list">
              <li>
                <strong>Inventory Manager Web App</strong> — AI-powered forecasting, voice-controlled inventory, smart expiry tracking, and real-time alerts.
              </li>
              <li>
                <strong>GovTech Proposals</strong> — Infra Booking System, Road Infra Tracker, and an AI-powered Experiment Setup Agent.
              </li>
            </ul>

            <p className="about__description">
              I'm curious about how we think and learn — diving into ideas like the <strong>Dunning-Kruger Effect</strong>, <strong>expert intuition</strong>, and simple ways to master complex topics. I prefer learning with step-by-step explanations, like I'm five, using Python or C++ with minimal built-ins.
            </p>

            <p className="about__description">
              I even came up with a page idea titled: <em>"List of Things That Shouldn't Be Eaten but Look Delicious"</em> — still on my to-build list!
            </p>

            <p className="about__description">
              Whether it's debugging that annoying Firestore error, designing an animated navbar, or turning wild ideas into real projects — I'm here for it.
            </p>

            <button className="btn link" onClick={downloadResume}>
              Download CV
            </button>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
