import React from 'react';
import './Projects.css';

const projectsData = [
    {
        title: 'On Click Services',
        description:'The Service Network Platform is a web-based app that connects service providers with consumers. It enables users to search for and book services across various categories, while providers can list and manage their offerings. Key features include user profiles, service listings, reviews, and real-time booking updates. Built with React, the platform offers a responsive, user-friendly interface for seamless interaction between users and providers.',
        image: 'https://mobisoftinfotech.com/resources/wp-content/uploads/2018/08/Banner.png', // Replace with your image path
        link: 'https://github.com/Dindokar-Prajakta12/On-click-services.git'
    },
    {
        title: 'Music search App',
        description: 'The Music Search App is a React application that lets users search for music tracks, artists, or albums using a public API like Spotify. It displays relevant music information, such as track titles and artist names, and uses Axios for API requests. The app features basic styling for a user-friendly experience, demonstrating effective API integration and state management in React.',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/037/044/052/small/ai-generated-studio-shot-of-black-headphones-over-music-note-explosion-background-with-empty-space-for-text-photo.jpg', // Replace with your image path
        link: 'https://vmusic-alpha.vercel.app/'
    },
    {
        title: 'Book search web App',
        description: 'The Book Search App is a React-based application that allows users to search for books by title or author using a public API, such as the Google Books API. Users can input a query, and the app fetches and displays relevant book information, including titles, authors, and descriptions. The app leverages Axios for API requests and includes basic styling for a user-friendly interface. ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Books_HD_%288314929977%29.jpg', // Replace with your image path
        link: 'https://bookhub-lyart.vercel.app/'
    },
    {
      title:'Testing Project',
      description:'API Testing of E-Commerce website Shopper Stack (In this web application there are 18 modules so API testing of these all 18 modules is done by using postman software.)',
      image:'https://www.brandbucket.com/sites/default/files/logo_uploads/470685/large_shopperstack.png',
      link:'https://github.com/Dindokar-Prajakta12/API-testing-project-.git'
    },
    {
      title:'Weather App',
      description:'The Weather App is a simple React-based application that allows users to check the current weather conditions. By entering a location, users can view details such as temperature, humidity, and weather description. The app fetches weather data from a public API, like OpenWeatherMap, and displays it with a clean, user-friendly interface, showcasing basic React functionality and API integration.',
      image:'https://raw.githubusercontent.com/alexkowsik/react-weather-app/master/src/images/screenshot.png',
      link:'https://weather-one-rouge.vercel.app/'
    },
    {
      title:'Guest House Website',
      description:'The Guest House Website is a React-based web application designed to showcase a guest house offerings. It features a responsive layout with sections for booking rooms, viewing amenities, and exploring services. The site includes a navigation bar, contact form, image gallery, and a footer for consistent information across pages, providing a user-friendly experience for potential guests.',
      image:'https://img1.wsimg.com/isteam/ip/86ea4636-87e0-43cd-8fc4-5564f60ff14d/Premium%20room%20service%20apartments%20in%20kharadi.jpeg/:/cr=t:12.49%25,l:0%25,w:100%25,h:75.03%25/rs=w:600,h:300,cg:true',
      link:'https://ghouse-five.vercel.app/'
    }
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h2 className="projects-title">My Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
