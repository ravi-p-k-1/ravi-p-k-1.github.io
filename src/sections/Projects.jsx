import projectsData from '../assets/data/projects.json';
import ProjectCard from '../components/ProjectCard';
import '../assets/styles/projects.css';

export default function Projects() {
  return (
    <div className='section' id='projects'>
      <div className='section-title'>
        Projects
      </div>
      <div className='section-content'>
        <div className='projects-grid'>
          {
            projectsData.map((project, index) => (
              <ProjectCard key={`${project.name}-${index}`} project={project} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
