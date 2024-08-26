import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="about-container">
      <h2>Education</h2>
      {/* <p>I am a fresher with a degree in Computer Science and Engineering. Below are my education details:</p> */}
      <div className="education">
      
        <div className="education-cards">
          <div className="card">
            <h4>Bachelor of Engineering(B. E.) in Computer Science and Engineering</h4>
            <p>Sant Gadge Baba Amaravti University,Amaravti</p>
            <p> Percentage= 75.15%</p>
            <p>Graduation Year: 2023</p>
          </div>
          <div className="card">
            <h4> Higher Secondary Certificate</h4>
            <p>Maharashtra State Board</p>
            <p> Percentage= 59.90%</p>
            <p>Graduation Year: 2019</p>
          </div>
          <div className="card">
            <h4>Secondary School Certificate</h4>
            <p>Maharashtra State Board</p>
            <p> Percentage= 79.60%</p>
            <p>Graduation Year: 2017</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Education;
