import CardTitleAndValue from "./CardTitleAndValue";
import { DoctorService } from "../services/DoctorService";
import docImage from "./../assets/images/doctorImage.jpeg";
import { Modal } from "antd";

interface Props {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function DoctorVerificationModel({ modalOpen, setModalOpen }: Props) {
  const doctorApplicationData = DoctorService.getSampleDoctorApplicationData();

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
  );
}

export default DoctorVerificationModel;
