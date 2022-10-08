import { useState } from "react"

const Approvalbox = ({
  menuname,
  cookername,
  menuid,
  checklist,
  setchecklist,
  setExapproval,
  Exapproval,
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
  const handleappclick = () => {
    console.log(menuid)
    console.log(check)
    const i = Exapproval.map((item) => item.menuid).indexOf(menuid)
    setExapproval(Exapproval.slice(0, i).concat(Exapproval.slice(i + 1)))
  }
  const handlerejclick = () => {
    console.log(menuid)
  }
  return (
    <div className="approvebox-box">
      <div className="approvebox-checkbox">
        <input
          type="checkbox"
          onChange={handleClick}
          checked={checklist.includes(menuid)}
        ></input>
      </div>
      <a className="approvebox-menu link-dark" href="/menuid">
        {menuname}
      </a>
      <span className="approvebox-cooker">{cookername}</span>
      <button className="approvebox-app-btn" onClick={handleappclick}>
        APPROVE
      </button>
      <button className="approvebox-rej-btn" onClick={handlerejclick}>
        REJECT
      </button>
    </div>
  )
}
export default Approvalbox
