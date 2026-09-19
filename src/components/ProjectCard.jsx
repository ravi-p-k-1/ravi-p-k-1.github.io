import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faDribbble, faFigma, faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';
import ScrollReveal from './ScrollReveal';

const projectImages = require.context('../assets/images/project-images', false, /\.(png|jpe?g|svg|webp)$/);

const linkIcons = {
  github: faGithub,
  npm: faNpm,
  figma: faFigma,
  prototype: faFigma,
  dribbble: faDribbble,
  website: faGlobe
};

function getLinkIcon(label) {
  const key = label.toLowerCase().split(/\s+/).pop();
  return linkIcons[key] || faExternalLinkAlt;
}

function getProjectImage(image) {
  if (!image) {
    return '';
  }

  if (/^(https?:|data:|\/)/.test(image)) {
    return image;
  }

  try {
    return projectImages(`./${image}`);
  } catch {
    return image;
  }
}

function getProjectLinks(links = {}, prefix = '') {
  return Object.entries(links).flatMap(([key, value]) => {
    const label = prefix ? `${prefix} ${key}` : key;

    if (typeof value === 'string') {
      return [{
        label: label.charAt(0).toUpperCase() + label.slice(1),
        url: value
      }];
    }

    if (value && typeof value === 'object') {
      return getProjectLinks(value, label);
    }

    return [];
  });
}

export default function ProjectCard({ project, index = 0 }) {
  const image = getProjectImage(project.image);
  const links = getProjectLinks(project.links);
  const isCompleted = project.progress === 'Completed';

  return (
    <ScrollReveal as='article' className='project-card' delay={Math.min(index * 0.08, 0.32)}>
      {image && (
        <div className='project-card-media'>
          <img src={image} alt={project.name} />
        </div>
      )}
      <div className='project-card-body'>
        <div className='project-card-top'>
          <h3>{project.name}</h3>
          <div className='project-meta'>
            <span>{project.contribution}</span>
            <span className='project-meta-sep'>&middot;</span>
            <span className={`project-progress ${isCompleted ? 'is-done' : ''}`}>{project.progress}</span>
          </div>
        </div>
        <ul className='project-description'>
          {
            project.description.map((point, pointIndex) => (
              <li key={pointIndex}>{point}</li>
            ))
          }
        </ul>
        <div className='project-technologies'>
          {
            project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))
          }
        </div>
        {
          links.length > 0 && (
            <div className='project-links' aria-label={`${project.name} links`}>
              {
                links.map((link) => (
                  <a key={link.url} href={link.url} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={getLinkIcon(link.label)} />
                    {link.label}
                  </a>
                ))
              }
            </div>
          )
        }
      </div>
    </ScrollReveal>
  )
}
