import { useState } from "react";
import NavBar from "../components/NavBar";
import MainGreeting from "../components/MainGreeting";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import SearchNHistory from "../components/SearchNHistory";
import MedicalCenterVerificationBody from "../components/MedicalCenterVerificationBody";

function MedicalCenterVerifyPage() {
  const [loading, setLoading] = useState(false);

  const breadcrumbItems = [
    {
      title: "Home",
      link: "/admin",
    },
    {
      title: "Verify Medical Centers",
      link: "",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <NavBar />

      {/* Body */}
      {!loading && (
        <div className="flex-grow flex flex-col px-8">
          <MainGreeting
            title="Verify Medical Center Applications"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="ADMINISTRATOR"
            medicalCenterName="Mediphix"
          />
          {/* Main Body div */}
          <div className="w-ful">
            <SearchNHistory searchBarTitle="Search the medical center name here" />
            <MedicalCenterVerificationBody />
          </div>
        </div>
      )}

      {loading && <Loading />}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MedicalCenterVerifyPage;
