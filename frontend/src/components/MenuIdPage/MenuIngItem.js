import React from "react"

const MenuIngItem = ({ name, amount, id }) => {
  return (
    <div className="menu-ing-item" key={id}>
      <div className="menu-ing-item-right">{name}</div>
      <div className="menu-ing-item-left">{amount}</div>
    </div>
  )
}

export default MenuIngItem
