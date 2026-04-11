import './App.css';
import './assets/styles/components.css';
import 'devicon/devicon.min.css';
import Sidebar from './layout/Sidebar';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Reviews from './pages/Reviews';
import Certifications from './pages/Certifications';
import Profiles from './pages/Profiles';
import Separator from './components/Separator';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <AboutMe />
        <Separator />
        <Skills />
        {/* <WorkExperience />
        <Projects />
        <Education />
        <Reviews />
        <Certifications />
        <Profiles /> */}
      </main>
    </div>
  );
}

export default App;
