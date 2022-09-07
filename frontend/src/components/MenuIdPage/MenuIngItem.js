import React from 'react'


const MenuIngItem = (p) => {
  return (
    <>
    <div className="menu-ing-item">
          <div className="menu-ing-item-right">{p.name}</div>
          <div className="menu-ing-item-left">{p.amount}</div>
    </div>
    </>
  )
}

export default MenuIngItem