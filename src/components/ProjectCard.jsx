const projectImages = require.context('../assets/images/project-images', false, /\.(png|jpe?g|svg|webp)$/);

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

export default function ProjectCard({ project }) {
  const image = getProjectImage(project.image);
  const links = getProjectLinks(project.links);

  return (
    <article className='project-card'>
      <div className='project-card-header'>
        {image && <img src={image} alt={project.name} />}
        <div>
          <h3>{project.name}</h3>
          <div className='project-meta'>
            {project.contribution} | {project.progress}
          </div>
        </div>
      </div>
      <div className='project-card-content'>
        <ul>
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
                    {link.label}
                  </a>
                ))
              }
            </div>
          )
        }
      </div>
    </article>
  )
}
