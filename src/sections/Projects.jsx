import projectsData from '../assets/data/projects.json';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import '../assets/styles/projects.css';

export default function Projects() {
  return (
    <div className='section' id='projects'>
      <SectionHeading index='04' title='Projects' />
      <div className='section-content'>
        <div className='projects-grid'>
          {
            projectsData.map((project, index) => (
              <ProjectCard key={`${project.name}-${index}`} project={project} index={index} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
