import { HiCheckBadge } from "react-icons/hi2";
import { MdAdminPanelSettings } from "react-icons/md";

interface Props {
  medicalCenterName: string;
  role: string;
}

function GreetingVerificationName({ medicalCenterName, role }: Props) {
  return (
    <div className="bg-mediphix_card_background inline-flex items-center gap-4 px-4 py-2 rounded-lg">
      <MdAdminPanelSettings className="text-4xl text-mediphix_text_a" />
      <div>
        <p className="font-bold text-mediphix_accent">{role}</p>
        <p>at {medicalCenterName}</p>
      </div>
      <HiCheckBadge className="text-2xl text-mediphix_accent" />
    </div>
  );
}

export default GreetingVerificationName;
