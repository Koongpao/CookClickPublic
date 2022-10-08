const Userbox = ({ uid, username, email }) => {
  return (
    <div className="userbox-box">
      <h4 className="userbox-uid">{uid}</h4>
      <h4 className="userbox-username">{username}</h4>
      <h4 className="userbox-email">{email}</h4>
      <button className="userbox-deluser-btn">DELETE USER</button>
    </div>
  )
}
export default Userbox
