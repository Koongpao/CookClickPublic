import { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Dropdown from "react-bootstrap/Dropdown"
import { decodeToken } from "react-jwt"

const Userbox = ({ uid, username, email, role }) => {
  const token = JSON.parse(localStorage.getItem("token"))
  const UserData = decodeToken(token)
  console.log(UserData)
  const [modalshow, setmodalshow] = useState(false)
  const showmodal = () => {
    setmodalshow(true)
  }
  const hidemodal = () => {
    setmodalshow(false)
  }
  const [memmodalshow, setmemmodalshow] = useState(false)
  const showmemmodal = () => {
    setmemmodalshow(true)
  }
  const hidememmodal = () => {
    setmemmodalshow(false)
  }
  const confirmsetmem = () => {
    console.log(uid)
    hidememmodal()
  }

  const [modmodalshow, setmodmodalshow] = useState(false)
  const showmodmodal = () => {
    setmodmodalshow(true)
  }
  const hidemodmodal = () => {
    setmodmodalshow(false)
  }
  const confirmsetmod = () => {
    console.log(uid)
    hidemodmodal()
  }
  return (
    <div className="userbox-box">
      <h4 className="userbox-uid">{uid}</h4>
      <h4 className="userbox-username">{username}</h4>
      <h4 className="userbox-email">{email}</h4>
      {UserData.role > role && (
        <>
          <button className="userbox-deluser-btn" onClick={showmodal}>
            แก้ไขข้อมูล
          </button>
          <Modal show={modalshow} onHide={hidemodal}>
            <Modal.Header closeButton>
              แก้ไขข้อมูลผู้ใช้ {username}
            </Modal.Header>
            <Modal.Body>
              <Dropdown>
                <Dropdown.Toggle>เปลี่ยนแปลงประเภทบัญชีผู้ใช้</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={showmemmodal}>Member</Dropdown.Item>
                  <Dropdown.Item onClick={showmodmodal}>
                    Moderator
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Modal.Body>
          </Modal>
          <Modal show={memmodalshow} onHide={hidememmodal}>
            <Modal.Header closeButton>
              ยืนยันการเปลี่ยน {username} เป็น Member
            </Modal.Header>
            <Modal.Footer>
              <Button onClick={hidememmodal}>ยกเลิกการเปลี่ยนแปลง</Button>
              <Button onClick={confirmsetmem}>ยืนยันการเปลี่ยนแปลง</Button>
            </Modal.Footer>
          </Modal>
          <Modal show={modmodalshow} onHide={hidemodmodal}>
            <Modal.Header closeButton>
              ยืนยันการเปลี่ยน {username} เป็น Moderator
            </Modal.Header>
            <Modal.Footer>
              <Button onClick={hidemodmodal}>ยกเลิกการเปลี่ยนแปลง</Button>
              <Button onClick={confirmsetmod}>ยืนยันการเปลี่ยนแปลง</Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  )
}
export default Userbox
