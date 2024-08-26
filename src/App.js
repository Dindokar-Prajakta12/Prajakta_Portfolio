import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Education from './components/education/Education';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react';
// import Navbar from './components/navbar/Navbar';
// import Education from './components/education/Education';
// import About from './components/about/About';
// import Contact from './components/contact/Contact';
// import Skills from './components/skills/Skills';
// import Projects from './components/projects/Projects';

// function App(){
//   return(
//    <>
//     <Navbar/>
//     <About/>
//     <Education/>
//     <Skills/>
//     <Projects/>
//     <Contact/>
//    </>
//   )
// }

// export default App;