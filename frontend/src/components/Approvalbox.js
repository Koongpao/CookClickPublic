import { useState } from "react"
const Approvalbox = ({
  menuname,
  cookername,
  menuid,
  checklist,
  setchecklist,
}) => {
  const [check, setcheck] = useState(false)
  const handleClick = () => {
    setcheck((current) => !current)
    if (!checklist.includes(menuid)) {
      setchecklist([...checklist, menuid])
    } else {
      const i = checklist.indexOf(menuid)
      setchecklist(checklist.slice(0, i).concat(checklist.slice(i + 1)))
    }
  }
  return (
    <div className="approvebox-box">
      <div className="approvebox-checkbox">
        <input type="checkbox" onClick={handleClick}></input>
      </div>
      <a className="approvebox-menu link-dark" href="/menuid">
        {menuname}
      </a>
      <span className="approvebox-cooker">{cookername}</span>
      <button className="approvebox-app-btn">APPROVE</button>
      <button className="approvebox-rej-btn">REJECT</button>
    </div>
  )
}
export default Approvalbox
