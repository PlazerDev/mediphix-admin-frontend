import { Col, Modal, Pagination, Row } from "antd";
import { DoctorService } from "../services/DoctorService";
import CardTitleAndValue from "./CardTitleAndValue";
import docImage from "./../assets/images/doctorImage.jpeg";
import { useState } from "react";

function DoctorVerificationBody() {
  const [modalOpen, setModalOpen] = useState(false);
  const data = DoctorService.getSampleDoctorApplicationList();
  const doctorApplicationData = DoctorService.getSampleDoctorApplicationData();
  function cardHandler(id: string) {
    setModalOpen(true);
  }
  return (
    <div className="mt-4">
      <Modal
        title="Verification"
        style={{ top: 20 }}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={800}
        okText="Approve"
        cancelText="Reject"
      >
        <div>
          <p>
            Thoroughly review the details and references provided by the doctor.
          </p>
          <div className="flex items-center justify-center py-4">
            <img
              src={docImage}
              alt="Doctor Image"
              className="rounded-full h-24 w-24 object-cover "
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-between">
              <div className="flex-1">
                <CardTitleAndValue
                  title="Name With Initials"
                  value={doctorApplicationData.name}
                />
              </div>
              <div className="flex-1">
                <CardTitleAndValue
                  title="SLMC Registration Number"
                  value={doctorApplicationData.slmcNumber}
                />
              </div>
              <div className="flex-1">
                <CardTitleAndValue
                  title="NIC"
                  value={doctorApplicationData.nic}
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex-1">
                <CardTitleAndValue
                  title="Email"
                  value={doctorApplicationData.email}
                />
              </div>
              <div className="flex-1">
                <CardTitleAndValue
                  title="Mobile Number"
                  value={doctorApplicationData.mobileNumber}
                />
              </div>
              <div className="flex-1">
                <CardTitleAndValue
                  title="Education"
                  value={doctorApplicationData.education}
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div style={{ flex: 1 }}>
                <CardTitleAndValue
                  title="Specialization"
                  value={doctorApplicationData.specialization.join(", ")}
                />
              </div>
              <div style={{ flex: 2 }}>
                <CardTitleAndValue
                  title="Supported Appointment Categories"
                  value={doctorApplicationData.supportedAppointmentCatergories.join(
                    ", "
                  )}
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div style={{ flex: 1 }}>
                <div className="flex-1">
                  <p className="text-mediphix_text_c text-sm">ID Front</p>
                  <p className="text-mediphix_accent underline hover:cursor-pointer">
                    Click Here
                  </p>
                </div>
              </div>
              <div style={{ flex: 2 }}>
                <div className="flex-1">
                  <p className="text-mediphix_text_c text-sm">ID Back</p>
                  <p className="text-mediphix_accent underline hover:cursor-pointer">
                    Click Here
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end text-mediphix_text_c">
              <p>
                Requested: {doctorApplicationData.requestedTime} |{" "}
                {doctorApplicationData.requestedDate}
              </p>
            </div>
          </div>
        </div>
      </Modal>
      <Row gutter={[16, 16]}>
        {data.map((item) => (
          <Col key={item.id} span={6} className="rounded-lg">
            <div
              className="flex items-center gap-8 bg-mediphix_card_background rounded-lg px-4 py-2 hover:cursor-pointer hover:shadow-lg"
              onClick={() => {
                cardHandler(item.id);
              }}
            >
              <div>
                <img
                  src={docImage}
                  className="rounded-full object-cover w-24 h-24"
                  alt="Doctor Image"
                />
              </div>
              <div>
                <CardTitleAndValue title="Name" value={item.name} />
                <div className="flex flex-row gap-4 items-center">
                  <CardTitleAndValue title="Date" value={item.date} />
                  <CardTitleAndValue title="Time" value={item.time} />
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="flex items-center justify-end mt-2">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}

export default DoctorVerificationBody;
