import React from 'react'


const MenuIngItem = (p) => {
  return (
    <>
    <div className="menu-steps-item">
          <div className="menu-steps-item-left">{p.img}</div>
          <div className="menu-steps-item-right">{p.desc}</div>
    </div>
    </>
  )
}

export default MenuIngItem