import { useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa"
import Userpic from "../../img/user.jpg"
import {
  MenuReportedList,
  MemberReportedList,
  CommentReportedList,
  MenuRequest,
} from "../../script/controller"


const Dashboard = () => {
  const [commentReportCount, setCommentReportCount] = useState(0)
  const [menuReportCount, setMenuReportCount] = useState(0)
  const [memberReportCount, setMemberReportCount] = useState(0)
  const [menuWaitingCount, setMenuWaitingCount] = useState(0)
  const [menuApprovedCount, setMenuApprovedCount] = useState(0)
  useEffect(() => {
    const fetchdata = async () => {
      const token = JSON.parse(localStorage.getItem("token"))
      const menuReportData = await MenuReportedList(token)
      const commentReportData = await CommentReportedList(token)
      const memberReportData = await MemberReportedList(token)
      const menuWaitingData = await MenuRequest(token, "waitapprove")
      const menuApprovedData = await MenuRequest(token, "approved")
      setMemberReportCount(memberReportData.memreport.length)
      setMenuReportCount(menuReportData.data.menu.length)
      setCommentReportCount(commentReportData.data.commentreport.length)
      setMenuWaitingCount(menuWaitingData.menu.length)
      setMenuApprovedCount(menuApprovedData.menu.length)
    }
    fetchdata()
  }, [])

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

  return (
    <>
      <div className="flex flex-col align-items-center">
        <div className="common-home">
          <h1 className="my-3 text-center">Dashboard</h1>
          <div className="align-self-start text-md m-3">Pending Reports...</div>
          <div className="flex justify-content-evenly">
            <a href="/" className="db-report shadow-red">
              <div>Menu Report</div>
              <div className="text-sm text-muted">
                {menuReportCount} pending menu(s).
              </div>
            </a>
            <a href="/" className="db-report shadow-yellow">
              <div>Member Report</div>
              <div className="text-sm text-muted">
                {memberReportCount} pending member(s).
              </div>
            </a>
            <a href="/" className="db-report shadow-blue">
              <div>Comment Report</div>
              <div className="text-sm text-muted">
                {commentReportCount} pending comment(s).
              </div>
            </a>
          </div>
          <div className="align-self-start text-md m-3">
            Menu Status...
          </div>
          <div className="flex justify-content-evenly">
            <a href="/" className="db-menu">
              <div>Total Approved Menu</div>
              <div className="text-sm text-muted">
                {menuApprovedCount} approved menu(s).
              </div>
            </a>
            <a href="/" className="db-menu">
              <div>Waiting for Approval</div>
              <div className="text-sm text-muted">
                {menuWaitingCount} menu(s) waiting for approval.
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Dashboard
