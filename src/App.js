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
        {/* <Certifications />
        <Profiles /> */}
      </main>
    </div>
  );
}

export default App;
