import { useRef, useState } from 'react'
import SidebarListItem from '../components/SidebarListItem'
import '../assets/styles/sidebar.css'
import profileImg from '../assets/images/profile-photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {

  const navItems = [
    { name: "About Me", link: "#aboutMe" },
    { name: "Skills", link: "#skills" },
    { name: "Work Experience", link: "#workExperience" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Reviews", link: "#reviews" },
    { name: "Certifications", link: "#certifications" },
    { name: "Profiles", link: "#profiles" },
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
      <div className='profile-image-container'>
        <img className='profile-image' src={profileImg} alt=''/>
      </div>
      <div className='sidebar-list' ref={navRef} onMouseLeave={hideHoverIndicator}>
        <span className="hover-indicator" style={indicatorStyle}></span>
        {
          navItems.map((item, index) => (
            <SidebarListItem key={index} itemName={item.name} itemLink={item.link} hoverFunction={moveHoverIndicator} />
          ))
        }
      </div>
      <div className='contact'>
        <a href='https://github.com/ravi-p-k-1' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon className='sidebar-icon' icon={faGithub} size='2x' color='#ffffff' />
        </a>
        <a href='https://www.linkedin.com/in/r-kakadia/' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon className='sidebar-icon' icon={faLinkedin} size='2x' color='#ffffff' />
        </a>
        <a href='mailto:r_kakadia@u.pacific.edu'>
          <FontAwesomeIcon className='sidebar-icon' icon={faEnvelope} size='2x' color='#ffffff' />
        </a>
      </div>
    </div>
  )
}

