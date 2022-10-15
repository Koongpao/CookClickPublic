const Approvalbox = ({
  menu,
  Status,
  settarget,
  setaction,
  setmodal,
  setdesc,
}) => {
  const handleappclick = () => {
    setdesc("")
    setmodal(true)
    settarget(menu)
    setaction(1)
  }
  const handlerejclick = () => {
    setdesc("")
    setmodal(true)
    settarget(menu)
    setaction(0)
  }
  return (
    <>
      <a
        className="approvebox-menu link-dark"
        href={"/menuId/waiting/".concat(`${menu.userID}/${menu._id}`)}
      >
        {menu.name}
      </a>
      <span className="approvebox-cooker">
        {!Status && <span>โดย </span>}
        {menu.userID}
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
