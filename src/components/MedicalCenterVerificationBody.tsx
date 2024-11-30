import { Col, Pagination, Row } from "antd";
import React, { useState } from "react";
import CardTitleAndValue from "./CardTitleAndValue";
import centerImage from "./../assets/images/medical_center_logo.png";
import { MedicalCenterService } from "../services/MedicalCenterService";
import MedicalCenterVerificationModel from "./MedicalCenterVerificationModel";

function MedicalCenterVerificationBody() {
  const [modalOpen, setModalOpen] = useState(false);
  const data = MedicalCenterService.getSampleMedicalCenterApplicationList();
  function cardHandler(id: string) {
    setModalOpen(true);
  }
  return (
    <div className="mt-4">
      <MedicalCenterVerificationModel
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
                  src={centerImage}
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

export default MedicalCenterVerificationBody;
