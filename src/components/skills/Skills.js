import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaJava } from 'react-icons/fa';
import { SiTestinglibrary,  SiGithub, SiVisualstudiocode, SiEclipseide } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
        { name: 'Java', icon: <FaJava color="#007396" /> },
        { name: 'Eclipse IDE', icon: <SiEclipseide color="#2C2255" /> }, // Eclipse IDE icon
        { name: 'Manual Testing', icon: <SiTestinglibrary color="#E34F26" /> },
        // { name: 'Networking', icon: <SiNetworking color="#0A66C2" /> },
        // { name: 'Encryption/Decryption', icon: <SiEncryption color="#8A2BE2" /> }, // Encryption/Decryption icon
        { name: 'GitHub', icon: <SiGithub color="#181717" /> },
        { name: 'VSCode', icon: <SiVisualstudiocode color="#007ACC" /> },
    ];

    return (
        <div className='inn'>
            <div className="skills-container">
            <h2 className="skills-title">My Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-icon">{skill.icon}</div>
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Skills;
