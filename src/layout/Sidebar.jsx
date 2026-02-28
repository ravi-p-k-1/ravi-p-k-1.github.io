import { useRef, useState } from 'react'
import SidebarListItem from '../components/SidebarListItem'
import '../assets/styles/sidebar.css'

export default function Sidebar() {

  // Home -> summary, skill, reviews
  // About -> Education, Certifications, Profiles
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Work Experience", link: "/work-experience" },
    { name: "Projects", link: "/projects" },
    { name: "About", link: "/about" }
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
      <div className='profile-image'>
        
      </div>
      <div className='contact'></div>
      <div className='sidebar-list' ref={navRef} onMouseLeave={hideHoverIndicator}>
        <span className="hover-indicator" style={indicatorStyle}></span>
        {
          navItems.map((item, index) => (
            <SidebarListItem key={index} itemName={item.name} itemLink={item.link} hoverFunction={moveHoverIndicator} />
          ))
        }
      </div>
    </div>
  )
}

