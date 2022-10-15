import { MemberReportedList, DelMemberReport } from "../../script/controller";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

const MemberReportPage = () => {
  const [memberReport, setMemberReport] = useState({
    memreport: [],
  });
  const [show, setShow] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      const memberReportData = await MemberReportedList(token);
      setMemberReport((prev) =>
        ({ ...prev, memreport: memberReportData.memreport })
      );
      const memberReportSize = memberReportData.memreport.length;
      setShow(Array(memberReportSize).fill(false));
      console.log(memberReportData);
    };
    fetchdata();
  }, []);

  return (
    <>
      <div className="flex flex-col align-items-center">
        <div className="common-home">
          <h1 className="my-4 text-center">Report</h1>
          <div className="flex justify-content-evenly text-center">
            <a href="/staff/report/members" className="flex rp-nav rp-nav-active justify-content-center align-items-center">
              <div>Reported Members</div>
            </a>
            <a href="/staff/report/comments" className="flex rp-nav justify-content-center align-items-center">
              <div>Reported Comments</div>
            </a>
            <a href="/staff/report/menus" className="flex rp-nav justify-content-center align-items-center">
              <div>Reported Menus</div>
            </a>
          </div>
          <h4 className="m-2">Reported Members</h4>
          <div className="flex flex-col align-items-center">
            {memberReport.memreport.map((item, index) => {
              return (
                <div className="db-menu" key={index}>
                  <div className="mb-1">
                    Username: {item.username} ({item.userID})
                  </div>
                  <div className="text-sm text-muted mb-3">
                    Email: {item.email}
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
                    <button className="btn-lightblue" onClick={
                      async () => {
                        const token = JSON.parse(localStorage.getItem("token"));
                        const delReport = await DelMemberReport(token, item._id);
                        console.log(delReport);
                        window.location.reload();
                      }
                    }>
                      Delete
                    </button>
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
                      {item.reportdescription.map((it, id) => {
                        return (
                          <div key={id}>
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
export default MemberReportPage
