import React from "react";
import "./MenuId.css";
import Burger from "../img/testburger.jpg";
import MenuIngItem from "../components/MenuIdPage/MenuIngItem.js"
import MenuStepsItem from "../components/MenuIdPage/MenuStepsItem.js"
import MenuCommentItem from "../components/MenuIdPage/MenuCommentItem";

const MenuPage = () => {
  return (
    <div className="menupage">
      <div className="menu-intro">
        <div className="menu-intro-left">
          <img src={Burger} alt="testburger"></img>
        </div>
        <div className="menu-intro-right">
          <h1 className="menu-header">Test Burger</h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. unknown prinmply dummy text of the printing and typesetting
          industry. unknown prinmply dummy text of the printing and typesetting
          industry. unknown prmply dummy text of the printing and typesetting
          industry. unknown prininter too
        </div>
      </div>
      <div className="menu-ing-list">
        <h1>ส่วนผสม</h1>
        <MenuIngItem name="Bread" amount="100 g"/>
        <MenuIngItem name="Test" amount="test"/>
        <MenuIngItem name="Test" amount="test"/>
        <MenuIngItem name="Test" amount="test"/>
        <MenuIngItem name="Test" amount="test"/>
        <MenuIngItem name="Test" amount="test"/>
        <MenuIngItem name="Test" amount="test"/>
      </div>
      <div className="menu-steps-list">
        <h1>ขั้นตอนการทำ</h1>
        <MenuStepsItem desc="Step Test"/>
        <MenuStepsItem desc="Step Test"/>
        <MenuStepsItem desc="Step Test"/>
        <MenuStepsItem desc="Step Test"/>
      </div>
      <div className="menu-comments-list">
        <MenuCommentItem comment="Comment Test"/>
        <MenuCommentItem comment="Comment Test"/>
        <MenuCommentItem comment="Comment Test"/>
        <MenuCommentItem comment="Comment Test"/>
      </div>
    </div>
  );
};

export default MenuPage;
