import './App.css';
import './assets/styles/fx.css';
import 'devicon/devicon.min.css';
import Sidebar from './layout/Sidebar';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import WorkExperience from './sections/WorkExperience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Reviews from './sections/Reviews';
import Certifications from './sections/Certifications';
import BackgroundFX from './components/BackgroundFX';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <BackgroundFX />
      <ScrollProgress />
      <Sidebar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <WorkExperience />
        <Projects />
        <Education />
        <Reviews />
        <Certifications />
        <footer className="site-footer">
          <span>&copy; {new Date().getFullYear()} Ravi Kakadia. All rights reserved.</span>
          <span className="site-footer-tag">Built with React &amp; Framer Motion</span>
        </footer>
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
