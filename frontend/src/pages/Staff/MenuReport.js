import { MenuReportedList, MenuReport } from "../../script/controller";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

const MenuReportPage = () => {
  const [menuReport, setMenuReport] = useState({
    menu: [],
  });
  const [show, setShow] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      const menuReportData = await MenuReportedList(token);
      console.log(menuReportData);
      setMenuReport((prev) =>
        ({ ...prev, menu: menuReportData.data.menu })
      );
      const menuReportSize = menuReportData.data.menu.length;
      setShow(Array(menuReportSize).fill(false));
    };
    fetchdata();
  }, []);

  return (
    <>
      <div className="flex flex-col align-items-center">
        <div className="common-home">
          <h1 className="my-4 text-center">Report</h1>
          <div className="flex justify-content-evenly text-center">
            <a href="/staff/report/members" className="flex rp-nav justify-content-center align-items-center">
              <div>Reported Members</div>
            </a>
            <a href="/staff/report/comments" className="flex rp-nav justify-content-center align-items-center">
              <div>Reported Comments</div>
            </a>
            <a href="/staff/report/menus" className="flex rp-nav rp-nav-active justify-content-center align-items-center">
              <div>Reported Menus</div>
            </a>
          </div>
          <h4 className="m-2">Reported Menus</h4>
          <div className="flex flex-col align-items-center">
            {menuReport.menu.map((item, index) => {
              return (
                <div className="db-menu" key={index}>
                  <div className="mb-1">
                    Menu: {item.menuInfo[0].name} ({item.menuID})
                  </div>
                  <div className="text-sm text-muted mb-3">
                    By: {item.userDisplayName} ({item.userID})
                  </div>
                  <div className="text-sm mb-1">
                    REPORTED {item.count} TIME(S).
                  </div>
                  <div className="rp-desc" onClick={() => {
                    setShow(prev => [...prev, prev[index] = true])
                  }}>
                    Description
                  </div>
                  <div className="flex justify-content-end">
                    <button className="btn-blue">Ban Member</button>
                    <button className="btn-lightblue">Delete</button>
                  </div>
                  <Modal
                    show={show[index]}
                    onHide={() => {
                      setShow(prev => [...prev, prev[index] = false])
                    }}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header>
                      <Modal.Title id="contained-modal-title-vcenter">
                        Comments
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {item.reportdescription.map((it, index) => {
                        return (
                          <div key={index}>
                            {it.reporterName}: {it.description} 
                          </div>
                        );
                      })}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => {
                        setShow(prev => [...prev, prev[index] = false])
                      }}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default MenuReportPage
