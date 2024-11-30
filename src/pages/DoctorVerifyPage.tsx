import { useState } from "react";
import NavBar from "../components/NavBar";
import MainGreeting from "../components/MainGreeting";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import SearchNHistory from "../components/SearchNHistory";
import DoctorVerificationBody from "../components/DoctorVerificationBody";

function DoctorVerifyPage() {
  const [loading, setLoading] = useState(false);

  const breadcrumbItems = [
    {
      title: "Home",
      link: "/admin",
    },
    {
      title: "Verify Doctors",
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
            title="Verify Doctor Applications"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="ADMINISTRATOR"
            medicalCenterName="Mediphix"
          />
          {/* Main Body div */}
          <div className="w-ful">
            <SearchNHistory searchBarTitle="Search the doctor name here" />
            <DoctorVerificationBody />
          </div>
        </div>
      )}

      {loading && <Loading />}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default DoctorVerifyPage;
