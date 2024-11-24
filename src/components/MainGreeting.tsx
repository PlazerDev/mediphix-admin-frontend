import Greeting from "./Greeting";
import GreetingVerificationName from "./GreetingVerificationName";

interface BreadcrumbItem {
  title: string;
  link: string;
}

interface Props {
  medicalCenterName: string;
  titleMemberName: string;
  role: string;
  title: string;
  breadcrumbItems: BreadcrumbItem[];
}

function MainGreeting({
  medicalCenterName,
  titleMemberName,
  role,
  title,
  breadcrumbItems,
}: Props) {
  return (
    <div className="flex md:flex-row md:items-center md:justify-between md:my-4 my-2 flex-col gap-2">
      <Greeting
        titleMemberName={titleMemberName}
        title={title}
        breadcrumb={breadcrumbItems}
      />
      <GreetingVerificationName
        medicalCenterName={medicalCenterName}
        role={role}
      />
    </div>
  );
}

export default MainGreeting;
