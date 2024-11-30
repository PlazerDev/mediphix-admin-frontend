import { Modal } from "antd";
import { MedicalCenterService } from "../services/MedicalCenterService";
import centerImange from "./../assets/images/medical_center_logo.png";
import CardTitleAndValue from "./CardTitleAndValue";

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function MedicalCenterVerificationModel({ modalOpen, setModalOpen }: Props) {
  const data = MedicalCenterService.getSampleDoctorApplicationData();

  return (
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
          Thoroughly review the details and references provided by the medical
          center.
        </p>
        <div className="flex items-center justify-center py-4">
          <img
            src={centerImange}
            alt="Doctor Image"
            className="rounded-full h-24 w-24 object-cover "
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center justify-between">
            <div className="flex-1">
              <CardTitleAndValue title="Name With Initials" value={data.name} />
            </div>
            <div className="flex-1">
              <CardTitleAndValue title="Eamil" value={data.email} />
            </div>
            <div className="flex-1">
              <CardTitleAndValue
                title="Mobile Number"
                value={data.mobileNumber}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div style={{ flex: 1 }}>
              <CardTitleAndValue title="District" value={data.district} />
            </div>
            <div style={{ flex: 2 }}>
              <div className="flex-1">
                <CardTitleAndValue title="Address" value={data.address} />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div style={{ flex: 1 }}>
              <div className="flex-1">
                <p className="text-mediphix_text_c text-sm">
                  Registration Document
                </p>
                <p className="text-mediphix_accent underline hover:cursor-pointer">
                  Click Here
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end text-mediphix_text_c">
            <p>
              Requested: {data.requestedTime} | {data.requestedDate}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default MedicalCenterVerificationModel;
