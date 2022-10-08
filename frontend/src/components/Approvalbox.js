import { useState } from "react"
const Approvalbox = ({ menuname, cookername }) => {
  const [check, setcheck] = useState(false)
  const handleClick = () => {
    setcheck((current) => !current)
  }
  return (
    <div className="approvebox-box">
      <div className="approvebox-checkbox">
        <input type="checkbox" onClick={handleClick}></input>
        {console.log(check)}
      </div>
      <h3 className="approvebox-menu">{menuname}</h3>
      <h3 className="approvebox-cooker">{cookername}</h3>
      <button className="approvebox-app-btn">APPROVE</button>
      <button className="approvebox-rej-btn">REJECT</button>
    </div>
  )
}
export default Approvalbox
