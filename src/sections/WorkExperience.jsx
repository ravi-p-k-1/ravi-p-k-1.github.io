import workExperienceData from '../assets/data/work-experience.json';
import '../assets/styles/workExperience.css';
import Slider from '../components/Slider';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';

export default function WorkExperience() {
  return (
    <div className='section' id='workExperience'>
      <SectionHeading index='03' title='Work Experience' />
      <div className='section-content'>
        <div className='timeline'>
          <span className='timeline-line' aria-hidden='true'></span>
          {
            workExperienceData.map((experience, index) => {
              const isCurrent = experience.endDate === 'Present';

              let startDate = new Date(experience.startDate);
              let endDate = isCurrent ? experience.endDate : new Date(experience.endDate);

              let startDateStr = startDate.toLocaleString('default', {
                month: "short",
                year: "numeric"
              });

              let endDateStr = isCurrent ? endDate : endDate.toLocaleString('default', {
                month: "short",
                year: "numeric"
              });

              return (
                <ScrollReveal
                  as='div'
                  key={index}
                  className='timeline-item'
                  delay={Math.min(index * 0.08, 0.32)}
                >
                  <span className={`timeline-dot ${isCurrent ? 'is-current' : ''}`}></span>
                  <div className='timeline-content'>
                    <div className={`timeline-date ${isCurrent ? 'is-current' : ''}`}>
                      {startDateStr} &mdash; {endDateStr}
                    </div>
                    <div className='timeline-header'>
                      <h3 className='timeline-position'>{experience.position}</h3>
                      <div className='timeline-company'>
                        {experience.company} <span className='timeline-dot-sep'>&middot;</span> {experience.location}
                      </div>
                    </div>
                    <ul className='timeline-description'>
                      {
                        experience.description.map((point, ind) => (
                          <li key={ind}>{point}</li>
                        ))
                      }
                    </ul>
                    { experience.isDisplayProjects && (
                      <div className='selected-projects'>
                        <h4>Selected Projects</h4>
                        <Slider data={experience.projects} />
                      </div>
                    ) }
                  </div>
                </ScrollReveal>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
