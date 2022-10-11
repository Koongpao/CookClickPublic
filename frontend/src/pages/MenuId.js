import React, { useEffect, useState} from "react";
import "./MenuId.css";
import MenuIngItem from "../components/MenuIdPage/MenuIngItem.js";
import MenuStepsItem from "../components/MenuIdPage/MenuStepsItem.js";
import MenuCommentItem from "../components/MenuIdPage/MenuCommentItem";
import Burger from "../img/testburger.jpg";
import {
  GetSystemIngredient,
  GetSystemKitchenware,
  SearchMenu,
} from "../script/controller";

const MenuPage = () => {
  const [menuDetails, setMenuDetails] = useState({
    name: "",
    image: "",
    description: "",
    ingredient: [],
    kitchenware: [],
    cookingstep: [],
  });

  const [token, setToken] = useState("")
  useEffect(() => {
    const TestFetchMenu = async () => {
      let response = await SearchMenu("ข้าวผัด");
      setMenuDetails(response.menulist[0]);
    };
    TestFetchMenu();
    mapIdtoName(menuDetails)
  }, []);
  const [ingIdList, setIngIdList] = React.useState([]);
  const [menuDetails2, setMenuDetails2] = React.useState([]);

  const mapIdtoName = (data) => {
    let l = menuDetails.ingredient.length;
    let ingdetail = [];
    for (let j = 0; j < l; j++) {
      for (let i = 0; i < data.length; i++) {
        if (menuDetails.ingredient[j].ingredientID === data[i]._id) {
          const newmenudetail = {
            name: data[i].name,
            amount: menuDetails.ingredient[j].amount,
            id: data[i].id,
          };
          ingdetail.push(newmenudetail);
        }
      }
    }
    setMenuDetails2(ingdetail);
  };

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
      mapIdtoName(ingFullData.data);
    };
    FetchData();
  }, []);

  return (
    <div className="menupage">
      <button onClick={() => console.log(menuDetails)}></button>
      <div className="menu-img">
        <img src={menuDetails.image} alt="testburger"></img>
      </div>
      <div className="menu-desc">
        <h1 className="menu-header">{menuDetails.name}</h1>
        {menuDetails.description}
      </div>
      <div className="menu-ing-list">
        <h1>ส่วนผสม</h1>
        {menuDetails2.map((eachIng) => (
          <div key={eachIng.id}>
            <MenuIngItem
              name={eachIng.name}
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
