import React from "react";

const MenuIngItem = (p) => {
  const handleImgIfnotNull = (p) => {
    if (p.img !== undefined){
      return <img src={p.img} alt={"step" + p.index + "pic"}></img>
    }
  }
  return (
    <>
      <div className="menu-steps-item">
        <div className="menu-steps-item-img">
          <h3>STEP {p.index}</h3>
          {handleImgIfnotNull(p)}
        </div>
        <div className="menu-steps-item-desc">{p.desc}</div>
      </div>
    </>
  );
};

export default MenuIngItem;
