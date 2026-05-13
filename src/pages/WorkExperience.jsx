import workExperienceData from '../assets/data/work-experience.json';
import '../assets/styles/workExperience.css';
import Slider from '../components/Slider';

export default function WorkExperience() {
  return (
    <div className='section'id='workExperience'>
      <div className='section-title'>
          Work Experience
        </div>
        <div className='section-content'>
          {
            workExperienceData.map((experience, index) => {

              let startDate = new Date(experience.startDate);
              let endDate = experience.endDate==="Present" ? experience.endDate : new Date(experience.endDate);

              let startDateStr = startDate.toLocaleString('default', {
                month: "long",
                year: "numeric"
              });
              
              let endDateStr = endDate==="Present" ? endDate : endDate.toLocaleString('default', {
                month: "long",
                year: "numeric"
              });

              return (
                <div key={index} className='work-experience-section'>
                  <div className='work-experience-header'>
                    <div className='company-info'>
                      <div className='company-name'>{experience.company}</div>
                      <div className='company-location'>{experience.location}</div>
                    </div>
                    <div className='position-info'>{experience.position} | {startDateStr} - {endDateStr}</div>
                  </div>
                  <div className='work-experience-description'>
                    <ul>
                      {
                        experience.description.map((point, ind) => (
                          <li key={ind}>{point}</li>
                        ))
                      }
                    </ul>
                  </div>
                  { experience.isDisplayProjects && (
                    <div className='selected-projects'>
                      <h3>Selected Projects</h3>
                      <Slider data={experience.projects} />
                    </div>
                  ) }
                </div>
              )
            })
          }
        </div>
    </div>
  )
}
