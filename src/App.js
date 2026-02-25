import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './layout/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work-experience' element={<WorkExperience />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
