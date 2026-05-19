import './App.css';
import './assets/styles/components.css';
import 'devicon/devicon.min.css';
import Sidebar from './layout/Sidebar';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import WorkExperience from './sections/WorkExperience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Reviews from './sections/Reviews';
import Certifications from './sections/Certifications';
import Separator from './components/Separator';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <AboutMe />
        <Separator />
        <Skills />
        <Separator />
        <WorkExperience />
        <Separator />
        <Projects />
        <Separator />
        <Education />
        <Separator />
        <Reviews />
        <Separator />
        <Certifications />
        <footer className="site-footer">
          &copy; {new Date().getFullYear()} Ravi Kakadia. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;
