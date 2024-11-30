import { Col, Pagination, Row } from "antd";
import { DoctorService } from "../services/DoctorService";
import CardTitleAndValue from "./CardTitleAndValue";
import docImage from "./../assets/images/doctorImage.jpeg";
import { useState } from "react";
import DoctorVerificationModel from "./DoctorVerificationModel";

function DoctorVerificationBody() {
  const [modalOpen, setModalOpen] = useState(false);
  const data = DoctorService.getSampleDoctorApplicationList();
  function cardHandler(id: string) {
    setModalOpen(true);
  }
  return (
    <div className="mt-4">
      <DoctorVerificationModel
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
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
