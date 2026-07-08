import skills from '../assets/data/skills.json';
import '../assets/styles/skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOpenai } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as CodexIcon } from '../assets/custom-icons/codex.svg';
import { ReactComponent as GithubCopilotIcon } from '../assets/custom-icons/githubcopilot.svg';

const skillIcons = {
  openai: faOpenai
};

const customSkillIcons = {
  codex: CodexIcon,
  githubcopilot: GithubCopilotIcon
};

function SkillIcon({ skill }) {
  if (skill.isDeviconAvailable === false) {
    const initials = skill.initials || skill.name
      .split(/\s+|-/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join('');

    return <span className='skill-icons skill-icon-fallback' aria-hidden='true'>{initials}</span>;
  }

  if (skill.customIcon && customSkillIcons[skill.customIcon]) {
    const CustomIcon = customSkillIcons[skill.customIcon];
    return <CustomIcon className='skill-icons' aria-hidden='true' focusable='false' />;
  }

  if (skill.icon && skillIcons[skill.icon]) {
    return <FontAwesomeIcon className='skill-icons' icon={skillIcons[skill.icon]} />;
  }

  return <i className={`devicon-${skill.deviconCode || skill.name.toLowerCase()}-plain skill-icons`}></i>;
}

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
              skills.languages.map((skill, index) => {
                return (
                  <div key={index} className='skill-container'>
                    <SkillIcon skill={skill} />
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
              skills.frameworks.map((skill, index) => {
                return (
                  <div key={index} className='skill-container'>
                    <SkillIcon skill={skill} />
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
              skills.libraries.map((skill, index) => {
                return (
                  <div key={index} className='skill-container'>
                    <SkillIcon skill={skill} />
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
              skills.toolsAndDevOps.map((skill, index) => {
                return (
                  <div key={index} className='skill-container'>
                    <SkillIcon skill={skill} />
                    <div className='skill-name'>{skill.name}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='skills-section'>
          <div className='skills-section-title'>Generative AI</div>
          <div className='skills-list'>
            {
              skills.generativeAi.map((skill, index) => {
                return (
                  <div key={index} className='skill-container'>
                    <SkillIcon skill={skill} />
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
              skills.databases.map((skill, index) => {
                return (
                  <div key={index} className='skill-container'>
                    <SkillIcon skill={skill} />
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
              skills.cmsAndApi.map((skill, index) => {
                return (
                  <div key={index} className='skill-container'>
                    <SkillIcon skill={skill} />
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
