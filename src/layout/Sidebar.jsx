import React from 'react'
import SidebarListItem from '../components/SidebarListItem'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='profile-image'></div>
      <div className='contact'></div>
      <div className='sidebar-list'>
        {/* Home -> summary, skill, reviews */}
        <SidebarListItem itemName={"Home"} itemLink={"/"}/>
        <SidebarListItem itemName={"Work Experience"} itemLink={"/work-experience"}/>
        <SidebarListItem itemName={"Projects"} itemLink={"/projects"}/>
        {/* About -> Education, Certifications, Profiles */}
        <SidebarListItem itemName={"About"} itemLink={"/about"}/>
      </div>
    </div>
  )
}

