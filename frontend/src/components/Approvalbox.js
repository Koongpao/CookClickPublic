const Approvalbox = ({ menu, Status, settarget, setaction, setmodal }) => {
  const handleappclick = () => {
    setmodal(true)
    settarget(menu)
    setaction(1)
    console.log(menu)
  }
  const handlerejclick = () => {
    setmodal(true)
    settarget(menu)
    setaction(0)
    console.log(menu)
  }
  return (
    <>
      <a className="approvebox-menu link-dark" href="/menuid">
        {menu.menuname}
      </a>
      <span className="approvebox-cooker">
        {!Status && <span>โดย </span>}
        {menu.cookername}
      </span>
      {Status && (
        <>
          <button className="approvebox-app-btn" onClick={handleappclick}>
            APPROVE
          </button>
          <button className="approvebox-rej-btn" onClick={handlerejclick}>
            REJECT
          </button>
        </>
      )}
    </>
  )
}
export default Approvalbox
