import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components.css'

export default function SidebarListItem({ itemName, itemLink }) {
  return (
    <div className='sidebar-list-item'>
        <Link className='sidebar-list-item-link' to={itemLink}>{itemName}</Link>
    </div>
  )
}
