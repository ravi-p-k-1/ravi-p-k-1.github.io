import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getLinkIcon, getProjectImage, getProjectLinks } from '../utils/projectLinks';
import '../assets/styles/projectShowcase.css';

const SWIPE_THRESHOLD = 80;

export default function ProjectShowcase({ projects = [] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const count = projects.length;

  if (!count) {
    return null;
  }

  const goTo = (nextIndex, dir) => {
    setDirection(dir);
    setIndex(((nextIndex % count) + count) % count);
  };

  const handlePrev = () => goTo(index - 1, -1);
  const handleNext = () => goTo(index + 1, 1);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      handlePrev();
    } else if (event.key === 'ArrowRight') {
      handleNext();
    }
  };

  const project = projects[index];
  const image = getProjectImage(project.image);
  const links = getProjectLinks(project.links);
  const isCompleted = project.progress === 'Completed';

  return (
    <div
      className='showcase'
      role='region'
      aria-roledescription='carousel'
      aria-label='Projects'
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className='showcase-progress' aria-hidden='true'>
        {
          projects.map((item, i) => (
            <span
              key={item.name}
              className={`showcase-progress-seg ${i === index ? 'is-active' : ''} ${i < index ? 'is-done' : ''}`}
            />
          ))
        }
      </div>

      <div className='showcase-stage'>
        <button type='button' className='showcase-arrow showcase-arrow-prev' onClick={handlePrev} aria-label='Previous project'>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className='showcase-window'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={project.name}
              className='showcase-slide'
              initial={{ opacity: 0, x: direction * 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -48 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -SWIPE_THRESHOLD) {
                  handleNext();
                } else if (info.offset.x > SWIPE_THRESHOLD) {
                  handlePrev();
                }
              }}
            >
              {image && (
                <div className='showcase-media'>
                  <img src={image} alt={project.name} draggable={false} />
                  <span className='showcase-counter'>
                    {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                  </span>
                </div>
              )}

              <div className='showcase-content'>
                <div className='showcase-meta'>
                  <span>{project.contribution}</span>
                  <span className='showcase-meta-sep'>&middot;</span>
                  <span className={isCompleted ? 'is-done' : ''}>{project.progress}</span>
                </div>
                <h3 className='showcase-name'>{project.name}</h3>
                <ul className='showcase-description'>
                  {
                    project.description.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))
                  }
                </ul>
                <div className='showcase-tech'>
                  {
                    project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))
                  }
                </div>
                {
                  links.length > 0 && (
                    <div className='showcase-links' aria-label={`${project.name} links`}>
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
            </motion.div>
          </AnimatePresence>
        </div>

        <button type='button' className='showcase-arrow showcase-arrow-next' onClick={handleNext} aria-label='Next project'>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {
        count > 1 && (
          <div className='showcase-tabs'>
            {
              projects.map((item, i) => (
                <button
                  key={item.name}
                  type='button'
                  className={`showcase-tab ${i === index ? 'is-active' : ''}`}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                >
                  <span className='showcase-tab-index'>{String(i + 1).padStart(2, '0')}</span>
                  <span className='showcase-tab-name'>{item.name}</span>
                </button>
              ))
            }
          </div>
        )
      }
    </div>
  )
}
