import skills from '../assets/data/skills.json';
import '../assets/styles/skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOpenai } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as CodexIcon } from '../assets/custom-icons/codex.svg';
import { ReactComponent as GithubCopilotIcon } from '../assets/custom-icons/githubcopilot.svg';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';

const skillIcons = {
  openai: faOpenai
};

const customSkillIcons = {
  codex: CodexIcon,
  githubcopilot: GithubCopilotIcon
};

const categories = [
  { title: 'Languages', key: 'languages' },
  { title: 'Frameworks and Runtime', key: 'frameworksAndRuntime' },
  { title: 'Libraries and ORM', key: 'librariesAndOrm' },
  { title: 'Databases and Vector Search', key: 'databasesAndVectorSearch' },
  { title: 'CMS, Hosting and Web', key: 'cmsHostingAndWeb' },
  { title: 'AI and Machine Learning', key: 'aiAndMachineLearning' },
  { title: 'Tools and DevOps', key: 'toolsAndDevOps' },
  { title: 'AI Developer Tools', key: 'aiDeveloperTools' },
  { title: 'Agile Methodologies', key: 'agileMethodologies' }
];

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
      <SectionHeading index='02' title='Skills' />
      <div className='section-content'>
        {
          categories.map((category, categoryIndex) => {
            const items = skills[category.key];

            if (!items || !items.length) {
              return null;
            }

            return (
              <ScrollReveal
                as='div'
                key={category.key}
                className='skills-section'
                delay={Math.min(categoryIndex * 0.05, 0.3)}
                y={18}
              >
                <div className='skills-section-title'>{category.title}</div>
                <div className='skills-list'>
                  {
                    items.map((skill, index) => (
                      <div
                        key={skill.name}
                        className='skill-container'
                        style={{ transitionDelay: `${Math.min(index * 25, 250)}ms` }}
                      >
                        <SkillIcon skill={skill} />
                        <div className='skill-name'>{skill.name}</div>
                      </div>
                    ))
                  }
                </div>
              </ScrollReveal>
            );
          })
        }
      </div>
    </div>
  )
}
