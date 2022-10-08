import { FaPlus } from "react-icons/fa"
import Userbox from "../../components/Userbox"
import Dashboard from "./Dashboard"
const User = () => {
  const Exmem = [
    {
      uid: "6314a63eb9440a65d53afda1",
      username: "Mr. Yakkinkao",
      email: "Yakkin_kao@gmail.com",
    },
    {
      uid: "684fwa3eb9440sfajd67y34d",
      username: "L",
      email: "adsjfksjdladklfdsasd@gmail.com",
    },
  ]
  const Exmod = [
    {
      uid: "6314a63eb9440a65d53afda1",
      username: "Mr. Yakkinkao",
      email: "Yakkin_kao@gmail.com",
    },
  ]
  const Exadmin = [
    {
      uid: "6314a63eb9440a65d53afda1",
      username: "Mr. Yakkinkao",
      email: "Yakkin_kao@gmail.com",
    },
    {
      uid: "64a63qejrfj24365d53jfdls",
      username: "alsdjfkwejiofjfadfewiu2i3iufa",
      email: "Yakkin_kao@gmail.com",
    },
  ]
  return (
    <>
      <div className="user-top">
        <h1 className="user-title-txt">USER</h1>
        <button className="user-adduser-btn">
          <FaPlus />
          &nbsp;ADD USER
        </button>
      </div>
      <div className="user-member-info">
        <h4 className="user-mem-txt">Member</h4>
        <div className="user-memlist">
          {Exmem.map((info, index) => {
            return (
              <Userbox
                key={index}
                uid={info.uid}
                username={info.username}
                email={info.email}
              />
            )
          })}
        </div>
      </div>
      <div className="user-mod-info">
        <h4 className="user-mod-txt">Moderator</h4>
        <div className="user-modlist">
          {Exmod.map((info, index) => {
            return (
              <Userbox
                key={index}
                uid={info.uid}
                username={info.username}
                email={info.email}
              />
            )
          })}
        </div>
      </div>
      <div className="user-admin-info">
        <h4 className="user-admin-txt">Admin</h4>
        <div className="user-adminlist">
          {Exadmin.map((info, index) => {
            return (
              <Userbox
                key={index}
                uid={info.uid}
                username={info.username}
                email={info.email}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
export default User
