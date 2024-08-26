import React from 'react';
import './About.css'
import pic from './peruu.jpg'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate(); // Updated hook
  
    const handleContactNavigate = () => {
      window.open('https://drive.google.com/file/d/1nx_Qdq4YjT3cQKXJEqpxDV-z0jFWUL4h/view?usp=drive_link', '_blank');
    };
  
    const handleResumeNavigate = () => {
      navigate('/contact'); 
    };
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Prajakta Dindokar</h1>
        <p>I am a recent graduate with a degree in Computer Science and Engineering, specializing in frontend development.
             I have hands-on experience with small React-based projects and a solid understanding of web technologies, including
              HTML, CSS, JavaScript, and Bootstrap. In addition to frontend skills, I am proficient in Java, manual testing,
             and networking. As I embark on my professional journey, I am eager to apply my knowledge and contribute to innovative projects..</p>
             <div className="home-buttons">
      <button className="btn primary-btn" onClick={handleContactNavigate}>Resume</button>
      <button className="btn secondary-btn" onClick={handleResumeNavigate}>Contact Me</button>
    </div>
      </div>
      <div className="home-photo">
        <img src={pic} alt="Your Name" />
      </div>
    </div>
  );
};
export default About;