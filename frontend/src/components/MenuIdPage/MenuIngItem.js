import React from "react"

const MenuIngItem = ({ name, amount, unit }) => {
  return (
    <div className="menu-ing-item">
      <div className="menu-ing-item-right">{name}</div>
      <div className="menu-ing-item-left">{amount} {unit}</div>
    </div>
  )
}

export default MenuIngItem
