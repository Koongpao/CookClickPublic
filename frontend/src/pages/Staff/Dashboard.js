import React from "react"
import { FaPlus } from "react-icons/fa"
import Userpic from "../../img/user.jpg"

function Dashboard() {
  const reportmenuLine1 = "Butter Chicken With Starch"
  const reportmenuLine2 = "Mr. Yakkinkao"
  const reportmenuLine3 = 2
  const reportuserLine1 = "Mr. Yakkinkao"
  const reportuserLine2 = "Yakkin_kao@gmail.com"
  const reportuserLine3 = 3

  const Approvelst = ({ menuname, cookername }) => {
    return (
      <div className="approvelst-box">
        <h4 className="approvelst-menu">{menuname}</h4>
        <h4 className="approvelst-cooker">{cookername}</h4>
      </div>
    )
  }

  const Userlst = ({ usertype, Userpic }) => {
    return (
      <div className="userlst-box">
        <h4 className="userlst-title">{usertype}</h4>
        <button className="userlst-adduser-btn">
          <FaPlus />
        </button>
        <img src={Userpic} alt="UserPic" className="userlst-userpic"></img>
      </div>
    )
  }

  const menu1 = "Spaghetti Bologna in Tomato Sauce"
  const menu2 = "Stir Friend Pork with Holy Basil"
  const menu3 = "Chinese Hai-wan Style Rice"
  const menu4 = "Butter Chicken with Starch"
  const cooker1 = "Mr. Yakkinkao"
  const cooker2 = "ยืนกินปากกาที่ท่าพระ"
  const cooker3 = "iiiiii"
  const cooker4 = "ถถถถถถถถถถถถถถถถถถถถ"
  return (
    <>
      <div className="dashboard-top">
        <h1 className="dashboard-top-title">DASHBOARD</h1>
        <h3 className="dashboard-top-subtitle">REPORT SHOW</h3>
        <div className="dashboard-reportlist">
          <div className="dashboard-reportmenu">
            <h4 className="dashboard-report-l1">{reportmenuLine1}</h4>
            <h4 className="dashboard-report-txt">{reportmenuLine2}</h4>
            <h4 className="dashboard-report-txt">
              REPORTED {reportmenuLine3} TIME(S)
            </h4>
          </div>
          <div className="dashboard-reportuser">
            <h4 className="dashboard-report-l1">{reportuserLine1}</h4>
            <h4 className="dashboard-report-txt">{reportuserLine2}</h4>
            <h4 className="dashboard-report-txt">
              REPORTED {reportuserLine3} TIME(S)
            </h4>
          </div>
          <div className="dashboard-reportcomment">
            <h4 className="dashboard-report-l1">{reportmenuLine1}</h4>
            <h4 className="dashboard-report-txt">{reportmenuLine2}</h4>
            <h4 className="dashboard-report-txt">
              REPORTED {reportmenuLine3} TIME(S)
            </h4>
          </div>
        </div>
      </div>
      <div className="dashboard-ApproveAndUser">
        <h3 className="dashboard-approve-title">สูตรอาหารที่รอการอนุมัติ</h3>
        <div className="dashboard-approve">
          <Approvelst menuname={menu1} cookername={cooker1} />
          <hr />
          <Approvelst menuname={menu2} cookername={cooker2} />
          <hr />
          <Approvelst menuname={menu3} cookername={cooker3} />
          <hr />
          <Approvelst menuname={menu4} cookername={cooker4} />
        </div>
        <h3 className="dashboard-user-title">USER</h3>
        <Userlst usertype="MEMBER" Userpic={Userpic} />
        <Userlst usertype="MODERATOR" Userpic={Userpic} />
        <Userlst usertype="ADMIN" Userpic={Userpic} />
      </div>
    </>
  )
}
export default Dashboard
