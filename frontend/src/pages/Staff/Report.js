import { FaPlus } from "react-icons/fa"
import Userbox from "../../components/Userbox"
import ReportBox from "../../components/Report/ReportBox"
import ReportUserBox from "../../components/Report/ReportUserBox"
import Dashboard from "./Dashboard"

const Report = () => {
  const ReportUser = [
    {
      username: "Mr. Yakkinkao",
      email: "Yakkin_kao@gmail.com",
      reportTime: 78
    },
    {
      username: "MarkMai",
      email: "MarkSuckSeed@gmail.com",
      reportTime: 5
    },
  ]
  const ReportComment = [
    {
      menu: "Tomyam Kung Spicy",
      username: "DnD mee Maew",
      reportTime: 2
    },
  ]
  const ReportMenu = [
    {
      menu: "Pad Thai with Kuncha",
      username: "KaoPOD",
      reportTime: 4
    },
    {
      menu: "Masala Chicken",
      username: "SETYOR",
      reportTime: 11
    },
  ]
  return (
    <>
      <div className="user-top">
        <h1 className="approve-title-txt">Report Show</h1>
        <button className="report-appsel-btn">
          DELETE
        </button>
        <button className="report-rejsel-btn">
          REJECT
        </button>
      </div>
      <div className="user-member-info">
        <h4 className="user-mem-txt">Reported USER</h4>
        <div className="user-memlist">
          {ReportUser.map((info, index) => {
            return (
              <ReportUserBox
                key={index}
                username={info.username}
                email={info.email}
                reportTime={info.reportTime}
              />
            )
          })}
        </div>
      </div>
      <div className="user-mod-info">
        <h4 className="user-mod-txt">Reported COMMENT</h4>
        <div className="user-modlist">
          {ReportComment.map((info, index) => {
            return (
              <ReportBox
                key={index}
                menu={info.menu}
                username={info.username}
                reportTime={info.reportTime}
              />
            )
          })}
        </div>
      </div>
      <div className="user-admin-info">
        <h4 className="user-admin-txt">Reported MENU</h4>
        <div className="user-adminlist">
          {ReportMenu.map((info, index) => {
            return (
              <ReportBox
                key={index}
                menu={info.menu}
                username={info.username}
                reportTime={info.reportTime}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Report
