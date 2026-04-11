import skills from '../assets/data/skills.json';
import '../assets/styles/skills.css';

export default function Skills() {
  return (
    <div className='section' id='skills'>
      <div className='section-title'>
        Skills
      </div>
      <div className='section-content'>
        <div className='skills-section'>
          <div className='skills-section-title'>Languages</div>
          <div className='skills-list'>
            {
              skills.languages.filter(skill => skill.isDeviconAvailable!==false).map((skill, index) => {
                return (
                  <div key={index} className='skill-container'>
                    <i className={`devicon-${skill.deviconCode || skill.name.toLowerCase()}-plain skill-icons`}></i>
                    <div className='skill-name'>{skill.name}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='skills-section'>
          <div className='skills-section-title'>Frameworks</div>
          <div className='skills-list'>
            {
              skills.frameworks.filter(skill => skill.isDeviconAvailable!==false).map((skill, index) => {
                return (
                  <div key={index} className='skill-container'>
                    <i className={`devicon-${skill.deviconCode || skill.name.toLowerCase()}-plain skill-icons`}></i>
                    <div className='skill-name'>{skill.name}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='skills-section'>
          <div className='skills-section-title'>Libraries</div>
          <div className='skills-list'>
            {
              skills.libraries.filter(skill => skill.isDeviconAvailable!==false).map((skill, index) => {
                return (
                  <div key={index} className='skill-container'>
                    <i className={`devicon-${skill.deviconCode || skill.name.toLowerCase()}-plain skill-icons`}></i>
                    <div className='skill-name'>{skill.name}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='skills-section'>
          <div className='skills-section-title'>Tools and DevOps</div>
          <div className='skills-list'>
            {
              skills.toolsAndDevOps.filter(skill => skill.isDeviconAvailable!==false).map((skill, index) => {
                return (
                  <div key={index} className='skill-container'>
                    <i className={`devicon-${skill.deviconCode || skill.name.toLowerCase()}-plain skill-icons`}></i>
                    <div className='skill-name'>{skill.name}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='skills-section'>
          <div className='skills-section-title'>Databases</div>
          <div className='skills-list'>
            {
              skills.databases.filter(skill => skill.isDeviconAvailable!==false).map((skill, index) => {
                return (
                  <div key={index} className='skill-container'>
                    <i className={`devicon-${skill.deviconCode || skill.name.toLowerCase()}-plain skill-icons`}></i>
                    <div className='skill-name'>{skill.name}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='skills-section'>
          <div className='skills-section-title'>CMS</div>
          <div className='skills-list'>
            {
              skills.cmsAndApi.filter(skill => skill.isDeviconAvailable!==false).map((skill, index) => {
                return (
                  <div key={index} className='skill-container'>
                    <i className={`devicon-${skill.deviconCode || skill.name.toLowerCase()}-plain skill-icons`}></i>
                    <div className='skill-name'>{skill.name}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
