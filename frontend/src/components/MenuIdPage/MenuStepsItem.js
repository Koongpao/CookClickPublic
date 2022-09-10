import React from "react";

const MenuIngItem = (p) => {
  return (
    <>
      <div className="menu-steps-item">
        <div className="menu-steps-item-left">
          <img src={p.img} alt={"step" + p.index + "pic"}></img>
          {p.index}
        </div>
        <div className="menu-steps-item-right">{p.desc}</div>
      </div>
    </>
  );
};

export default MenuIngItem;
