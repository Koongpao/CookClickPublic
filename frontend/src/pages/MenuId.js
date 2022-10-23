import { useEffect, useState } from "react";
import "./MenuId.css";
import MenuIngItem from "../components/MenuIdPage/MenuIngItem.js";
import MenuStepsItem from "../components/MenuIdPage/MenuStepsItem.js";
import {
  GetCurrentMenuIfFavorited,
  GetMenuInfo,
  GetMyRatingOnMenu,
  GetSystemIngredient,
  GetSystemKitchenware,
  MenuEdit,
  RatingMenu,
  UnfavoriteMenu,
  FavoriteMenu,
  AddMenuComment,
  DelComment,
  DelMyComment,
  CommentReport,
  MenuReport,
} from "../script/controller";
import { useNavigate, useParams } from "react-router-dom";
import { BiFlag } from "react-icons/bi";
import {
  BsPersonCircle,
  BsFillStarFill,
  BsFillBookmarksFill,
  BsBookmarkPlus,
  BsBookmarkStarFill,
} from "react-icons/bs";
import { MdOutlineDescription, MdDelete } from "react-icons/md";
import Form from "react-bootstrap/Form";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { Modal, Button, Dropdown } from "react-bootstrap";
import { AiOutlineComment } from "react-icons/ai";
import axios from "axios";

const MenuPage = ({ status }) => {
  const Navigate = useNavigate();

  const [menuDetails, setMenuDetails] = useState({
    _id: "",
    name: "",
    image: "",
    description: "",
    ingredient: [],
    kitchenware: [],
    cookingstep: [],
    comment: [],
  });
  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("userId"));

  const FetchData = async () => {
    const ingFullData = await GetSystemIngredient();
    const wareFullData = await GetSystemKitchenware();
    let myRating, ifFavorited;
    if (token) {
      myRating = await GetMyRatingOnMenu(token, mid);
      ifFavorited = await GetCurrentMenuIfFavorited(token, mid);
      setMenuFavorite(ifFavorited.result);
      if (!IgnoreInitialFavorite) {
        setInitialFavorite(ifFavorited.result);
        setIgnoreInitialFavorite(true);
      }
      setCurrentStarValue(myRating.ratescore);
    }
    let menuInfo;
    if (!status) {
      menuInfo = await GetMenuInfo(mid);
    } else {
      menuInfo = await MenuEdit(token, mid);
    }

    // console.log(menuInfo);
    menuInfo.query[0].image = "https://cookclick.code.in.th/images/".concat(
      menuInfo.query[0].image
    );
    for (let i = 0; i < menuInfo.query[0].cookingstep.length; i++) {
      if (menuInfo.query[0].cookingstep[i].image) {
        menuInfo.query[0].cookingstep[i].image =
          "https://cookclick.code.in.th/images/".concat(
            menuInfo.query[0].cookingstep[i].image
          );
      }
    }
    setMenuDetails(menuInfo.query[0]);
    const menuIngredients = menuInfo.query[0].ingredient.map((ing) => ({
      ...ingFullData.data.find((ingFull) => ingFull._id === ing.ingredientID),
      amount: ing.amount,
    }));
    const menuKitchenware = menuInfo.query[0].kitchenware.map((ware) => ({
      ...wareFullData.data.find(
        (wareFull) => wareFull._id === ware.kitchenwareID
      ),
    }));
    console.log(menuInfo.query[0]);
    setMenuDetails((prev) => ({
      ...prev,
      rating: prev.rating.toFixed(2),
      ingredient: menuIngredients,
      kitchenware: menuKitchenware,
    }));
    ingFullData.data.forEach((element, i) => {
      element.id = i;
      element.amount = 0;
    });
    wareFullData.data.forEach((element, i) => {
      element.id = i;
    });
  };

  const { mid } = useParams();
  useEffect(() => {
    FetchData();
  }, []);

  const sendReport = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
  };

  const [myComment, setMyComment] = useState("");

  function commentBox(props) {
    return (
      <div className="comment-box">
        <Form.Group className="mb-3" controlId="AddDesc">
          <Form.Control
            type="text"
            placeholder="ใส่คำอธิบายของสูตรอาหาร"
            as="textarea"
            onChange={(e) => setMyComment(e.target.value)}
            value={myComment}
          />
        </Form.Group>
        <div className="comment-box-button-box">
          <button
            style={{ display: myComment ? "block" : "none" }}
            className="comment-box-button"
            onClick={() => setMyComment("")}
          >
            {" "}
            ยกเลิก{" "}
          </button>
          <button
            style={{ display: myComment ? "block" : "none" }}
            className="comment-box-button"
            onClick={() => handleComment()}
          >
            {" "}
            เพิ่มคอมเมนต์{" "}
          </button>
        </div>
      </div>
    );
  }

  const handleComment = async () => {
    const response = await AddMenuComment(
      token,
      { description: myComment },
      mid
    );
    setMyComment("");
    FetchData();
  };
  const [currentStarValue, setCurrentStarValue] = useState(0);
  const [hoverStarValue, setHoverStarValue] = useState(0);
  const [menuFavorite, setMenuFavorite] = useState(false);
  const [rateSuccessMsg, setRateSuccessMsg] = useState(false);
  const [initialFavorite, setInitialFavorite] = useState(0);
  const [showFavoritemsg, setShowFavoritemsg] = useState(false);
  const [showUnfavoritemsg, setShowUnfavoritemsg] = useState(false);
  const [commentDeleteConf, setShowCommentDeleteConf] = useState(false);
  const [currentCommentForDelete, setCurrentCommentForDelete] = useState("");
  const [IgnoreInitialFavorite, setIgnoreInitialFavorite] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportContent, setReportContent] = useState("");
  const [commentReportId, setCommentReportId] = useState("")
  const [showMenuReportModal, setShowMenuReportModal] = useState(false);
  const [MenuReportContent, setMenuReportContent] = useState("");
  const comBox = commentBox();

  const handleRatingClick = async (value) => {
    setCurrentStarValue(value);
    let valueBody = {
      score: value,
    };
    const response = await RatingMenu(token, valueBody, mid);
    // console.log(response);
    setRateSuccessMsg(true);
    FetchData();
  };

  const handleSendReport = async () => {
    setReportContent("");
    setShowReportModal(false);
    const response = await CommentReport(token, {description: reportContent}, mid, commentReportId)
    console.log(response)
  };

  const handleFavoriteClick = async () => {
    if (menuFavorite === false) {
      const response = await FavoriteMenu(token, mid);
      setMenuFavorite(true);
      // console.log(response);
    } else {
      const response = await UnfavoriteMenu(token, mid);
      setMenuFavorite(false);
      // console.log(response);
    }
    if (initialFavorite) {
      console.log(initialFavorite);
      setShowUnfavoritemsg(!showUnfavoritemsg);
    } else {
      console.log(initialFavorite);
      setShowFavoritemsg(!showFavoritemsg);
    }
    FetchData();
  };

  const handleRemoveComment = async () => {
    const response = await DelMyComment(token, mid, currentCommentForDelete);
    console.log(response);
    setShowCommentDeleteConf(false);
    FetchData();
  };

  const handleReportMenu = async () => {
    const response = await MenuReport(token, {description: MenuReportContent}, mid);
    console.log(response);
    setShowMenuReportModal(false)
  }

  return (
    <div className="menupage">
      <div className="menu-img">
        <img src={menuDetails.image} alt="testburger"></img>
      </div>
      <div className="menu-desc">
        <h1 className="menu-header">{menuDetails.name}</h1>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div><BsPersonCircle /> By : {menuDetails.userDisplayName}</div>
          <BiFlag className="menu-report-menu" onClick={() => setShowMenuReportModal(true)}/>
        </div>
        <div style={{ height: "auto" }}>
          <MdOutlineDescription /> {menuDetails.description}
        </div>
        <div>
          <BsFillStarFill /> Rating : {menuDetails.rating}/5 -{" "}
          <span style={{ color: "rgba(0, 0, 0, 0.5)" }}>
            {" "}
            rated by {menuDetails.ratingWeight} peoples
          </span>
        </div>
        <div>
          <BsFillBookmarksFill /> Favorites : {menuDetails.favCount}
        </div>
      </div>

      <div
        className="menu-rating-bar"
        style={{ display: token ? "flex" : "none" }}
      >
        <div className="menu-rating-rate">
          Rate
          <div className="menu-rating-star">
            {[...Array(5)].map((star, starValue) => {
              const ratingValue = starValue + 1;
              return (
                <>
                  <label
                    style={{
                      display:
                        ratingValue > (hoverStarValue || currentStarValue)
                          ? "none"
                          : "block",
                    }}
                  >
                    <input
                      type="radio"
                      style={{ display: "none" }}
                      value={ratingValue}
                      onClick={() => handleRatingClick(ratingValue)}
                    />
                    <TiStarFullOutline
                      className="menu-star"
                      onMouseOver={() => setHoverStarValue(ratingValue)}
                      onMouseLeave={() => setHoverStarValue(0)}
                    />
                  </label>
                  <label
                    style={{
                      display:
                        ratingValue > (hoverStarValue || currentStarValue)
                          ? "block"
                          : "none",
                    }}
                  >
                    <input
                      type="radio"
                      style={{ display: "none" }}
                      value={ratingValue}
                      onClick={() => handleRatingClick(ratingValue)}
                    />
                    <TiStarOutline
                      className="menu-star"
                      onMouseOver={() => setHoverStarValue(ratingValue)}
                      onMouseLeave={() => setHoverStarValue(0)}
                    />
                  </label>
                </>
              );
            })}
          </div>
          <span
            style={{
              display: rateSuccessMsg ? "block" : "none",
              fontSize: "70%",
            }}
          >
            {" "}
            คุณได้ให้ {currentStarValue} ดาวกับเมนูนี้!
          </span>
        </div>
        <div className="menu-rating-comment">
          Comment
          <div>
            <a href="#comment-section">
              <AiOutlineComment
                style={{ fontSize: "180%", cursor: "pointer", color: "black" }}
                href="comment-section"
              />
            </a>
          </div>
        </div>
        <div className="menu-rating-fav">
          Favorite
          <div className="flex justify-content-center">
            <BsBookmarkPlus
              style={{
                fontSize: "150%",
                cursor: "pointer",
                display: menuFavorite ? "none" : "block",
                color: "green",
              }}
              onClick={() => handleFavoriteClick()}
            />
            <BsBookmarkStarFill
              style={{
                fontSize: "150%",
                cursor: "pointer",
                display: menuFavorite ? "block" : "none",
                color: "green",
              }}
              onClick={() => handleFavoriteClick()}
            />
          </div>
          <span
            style={{
              display: showFavoritemsg ? "block" : "none",
              fontSize: "70%",
            }}
          >
            นำเข้ารายการโปรดแล้ว
          </span>
          <span
            style={{
              display: showUnfavoritemsg ? "block" : "none",
              fontSize: "70%",
            }}
          >
            นำออกจากรายการโปรดแล้ว
          </span>
        </div>
      </div>

      <div className="menu-ing-list">
        <h4>ส่วนผสม</h4>
        {menuDetails.ingredient.map((eachIng, index) => (
          <div key={index}>
            <MenuIngItem
              index={index}
              name={eachIng.name}
              amount={eachIng.amount}
              unit={eachIng.unit}
            />
          </div>
        ))}
        <h4 className="pt-4">อุปกรณ์</h4>
        {menuDetails.kitchenware.map((eachWare, index) => (
          <div key={index}>
            <MenuIngItem name={eachWare.name} index={index} />
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
      </div>
      <h1 className="mt-5" id="comment-section">
        Comments
      </h1>
      {token && comBox}
      {menuDetails.comment
        .filter((eachItem) => eachItem.status !== false)
        .map((eachComment, id) => (
          <div className="menu-comments-list" key={id}>
            <div className="flex justify-content-between text-md">
              <span className="menu-comment-username">
                <BsPersonCircle style={{ fontSize: "150%" }} />
                &nbsp;
                {eachComment.displayname} &nbsp;{" "}
                <span
                  style={{
                    display: userId === eachComment.userID ? "block" : "none",
                  }}
                >
                  (You)
                </span>
              </span>
              <div className="flex">
                <MdDelete
                  className="delete-icon"
                  style={{
                    display: userId === eachComment.userID ? "block" : "none",
                  }}
                  onClick={() => {
                    setShowCommentDeleteConf(true);
                    setCurrentCommentForDelete(eachComment.commentID);
                  }}
                />
                {token && <BiFlag
                  className="report-icon"
                  style={{display: (userId === eachComment.userID)? "none" : "block"}}
                  onClick={() => {
                    setShowReportModal(true);
                    setCommentReportId(eachComment.commentID)
                  }}
                />}
              </div>
            </div>
            <p>{eachComment.description}</p>
          </div>
        ))}
      <Modal
        show={commentDeleteConf}
        onHide={() => setShowCommentDeleteConf(false)}
      >
        <Modal.Body className="text-center" style={{ fontSize: "28px" }}>
          ยืนยันลบคอมเมนต์นี้หรือไม่
        </Modal.Body>
        <Modal.Footer className="content-center">
          <Button
            className="button-28-blue"
            onClick={() => {
              setShowCommentDeleteConf(false);
            }}
          >
            กลับ
          </Button>
          <Button
            className="button-28-red"
            onClick={() => {
              handleRemoveComment();
            }}
          >
            ยืนยันลบคอมเมนต์
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showReportModal} onHide={() => setShowReportModal(false)}>
        <Modal.Body className="text-center" style={{ fontSize: "28px" }}>
          <input
            className="report-form-modal"
            onChange={(e) => setReportContent(e.target.value)}
            value={reportContent}
            placeholder="กรอกสาเหตุการรายงาน"
          />
        </Modal.Body>
        <Modal.Footer className="content-center">
          <Button
            className="button-28-blue"
            onClick={() => {
              setShowReportModal(false);
            }}
          >
            กลับ
          </Button>
          <Button
            className="button-28-red"
            onClick={() => {
              handleSendReport();
            }}
          >
            ยืนยันรายงาน
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showMenuReportModal} onHide={() => setShowMenuReportModal(false)}>
        <Modal.Body className="text-center" style={{ fontSize: "28px" }}>
          <input
            className="report-form-modal"
            onChange={(e) => setMenuReportContent(e.target.value)}
            value={MenuReportContent}
            placeholder="กรอกสาเหตุการรายงาน"
          />
        </Modal.Body>
        <Modal.Footer className="content-center">
          <Button
            className="button-28-blue"
            onClick={() => {
              setShowMenuReportModal(false);
            }}
          >
            กลับ
          </Button>
          <Button
            className="button-28-red"
            onClick={() => {
              handleReportMenu(MenuReportContent);
            }}
          >
            ยืนยันรายงาน
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MenuPage;
