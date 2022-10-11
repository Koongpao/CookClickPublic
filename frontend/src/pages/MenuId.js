import React, { useEffect, useState} from "react";
import "./MenuId.css";
import MenuIngItem from "../components/MenuIdPage/MenuIngItem.js";
import MenuStepsItem from "../components/MenuIdPage/MenuStepsItem.js";
import MenuCommentItem from "../components/MenuIdPage/MenuCommentItem";
import Burger from "../img/testburger.jpg";
import {
  GetMenuInfo,
  GetSystemIngredient,
  GetSystemKitchenware,
  SearchMenu,
} from "../script/controller";
import { useParams } from "react-router-dom";

const MenuPage = () => {
  const [menuDetails, setMenuDetails] = useState({
    name: "",
    image: "",
    description: "",
    ingredient: [],
    kitchenware: [],
    cookingstep: [],
  });

  const {id} = useParams()
  const [token, setToken] = useState("")

  useEffect(() => {
    const TestFetchMenu = async () => {
      let response = await GetMenuInfo(id);
      setMenuDetails(response.query[0]);
    };
    TestFetchMenu();
  }, []);

  const ingAlreadyDisplayed = React.useRef(false);
  React.useEffect(() => {
    if (ingAlreadyDisplayed.current) return;
    ingAlreadyDisplayed.current = true;
    setToken(JSON.parse(localStorage.getItem("token")));
    let myToken = JSON.parse(localStorage.getItem("token"));
    const FetchData = async () => {
      const ingFullData = await GetSystemIngredient(myToken);
      const wareFullData = await GetSystemKitchenware(myToken);
      let i = 0;
      ingFullData.data.forEach((element) => {
        element.id = i;
        i += 1;
        element.amount = 0;
      });
      i = 0;
      wareFullData.data.forEach((element) => {
        element.id = i;
        i += 1;
      });
    };
    FetchData();
  }, []);

  return (
    <div className="menupage">
      <div className="menu-img">
        <img src={menuDetails.image} alt="testburger"></img>
      </div>
      <div className="menu-desc">
        <h1 className="menu-header">{menuDetails.name}</h1>
        {menuDetails.description}
      </div>
      <div className="menu-ing-list">
        <h1>ส่วนผสม</h1>
        {menuDetails.ingredient.map((eachIng) => (
          <div key={eachIng.id}>
            <MenuIngItem
              name={eachIng.ingredientID}
              amount={eachIng.amount}
              id={eachIng.id}
            />
          </div>
        ))}
      </div>
      <div className="menu-steps-list">
        <div className="menu-steps-head">
          <h1>ขั้นตอนการทำ</h1>
        </div>
        {menuDetails.cookingstep.map((eachSteps) => (
          <MenuStepsItem
            img={eachSteps.image}
            desc={eachSteps.description}
            index={eachSteps.index + 1}
            key={eachSteps.index}
          />
        ))}
        <MenuStepsItem img={Burger} index={"TEST"}></MenuStepsItem>
      </div>
      <div className="menu-comments-list">
        <MenuCommentItem comment="Comment Test" />
        <MenuCommentItem comment="Comment Test" />
        <MenuCommentItem comment="Comment Test" />
        <MenuCommentItem comment="Comment Test" />
      </div>
    </div>
  );
};

export default MenuPage;
