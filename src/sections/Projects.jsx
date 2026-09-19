import projectsData from '../assets/data/projects.json';
import ProjectShowcase from '../components/ProjectShowcase';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';

export default function Projects() {
  return (
    <div className='section' id='projects'>
      <SectionHeading index='04' title='Projects' />
      <div className='section-content'>
        <ScrollReveal delay={0.05}>
          <ProjectShowcase projects={projectsData} />
        </ScrollReveal>
      </div>
    </div>
  )
}
