import React from "react"

export default function SidebarListItem({ itemName, itemLink, hoverFunction }) {
  return (
    <div className='sidebar-list-item' onMouseEnter={hoverFunction}>
      <a className='sidebar-list-item-link' href={itemLink}> {itemName} </a>
    </div>
  )
}
