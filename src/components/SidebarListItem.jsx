import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarListItem({ itemName, itemLink }) {
  return (
    <div className='sidebar-list-item'>
        <Link to={itemLink}>{itemName}</Link>
    </div>
  )
}
