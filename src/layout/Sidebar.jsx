import { useRef, useState } from 'react'
import SidebarListItem from '../components/SidebarListItem'
import '../assets/styles/sidebar.css'
import profileImg from '../assets/images/profile-photo.jpg'
import profiles from '../assets/data/profiles.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const fontAwesomeIcons = {
  github: faGithub,
  hackerrank: faHackerrank,
  linkedin: faLinkedin,
  envelope: faEnvelope
};

function renderProfileIcon(profile) {
  if (profile.icon.library === 'devicon') {
    return <i className={`${profile.icon.className} sidebar-devicon`}></i>;
  }

  const icon = fontAwesomeIcons[profile.icon.name];

  if (!icon) {
    return null;
  }

  return <FontAwesomeIcon className='sidebar-icon' icon={icon} size='2x' />;
}

export default function Sidebar() {

  const navItems = [
    { name: "About Me", link: "#aboutMe" },
    { name: "Skills", link: "#skills" },
    { name: "Work Experience", link: "#workExperience" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Reviews", link: "#reviews" },
    { name: "Certifications", link: "#certifications" },
  ];

  const navRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    opacity: 0,
    transform: "translateY(0px)"
  });

  const moveHoverIndicator = (e) => {
    const item = e.currentTarget;
    const navTop = navRef.current.getBoundingClientRect().top;
    const itemTop = item.getBoundingClientRect().top;
    const y = itemTop - navTop;

    setIndicatorStyle({
      opacity: 1,
      transform: `translateY(${y}px)`
    });
  }

  const hideHoverIndicator = () => setIndicatorStyle((prev) => ({...prev, opacity: 0}));

  return (
    <div className='sidebar'>
      <div className='profile-header'>
        <div className='profile-image-container'>
          <img className='profile-image' src={profileImg} alt=''/>
        </div>
        <div className='profile-title'>
          <div className='profile-name'>Ravi Kakadia</div>
          <div className='profile-profession'>Full-Stack Developer</div>
        </div>
      </div>
      <div className='sidebar-separator'></div>
      <div className='sidebar-list' ref={navRef} onMouseLeave={hideHoverIndicator}>
        <span className="hover-indicator" style={indicatorStyle}></span>
        {
          navItems.map((item, index) => (
            <SidebarListItem key={index} itemName={item.name} itemLink={item.link} hoverFunction={moveHoverIndicator} />
          ))
        }
      </div>
      <div className='sidebar-separator'></div>
      <div className='contact'>
        {
          profiles.map((profile) => (
            <a
              key={profile.id}
              href={profile.url}
              target={profile.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={profile.url.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={`${profile.name} profile`}
              title={profile.name}
            >
              {renderProfileIcon(profile)}
            </a>
          ))
        }
      </div>
    </div>
  )
}

