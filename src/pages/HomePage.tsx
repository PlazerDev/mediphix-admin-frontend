import { useState } from "react";
import NavBar from "../components/NavBar";
import MainGreeting from "../components/MainGreeting";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import ButtonWithImage from "../components/ButtonWithImage";
import doctorImg from "./../assets/images/doctor.png";
import hospitalImg from "./../assets/images/hospital.png";
import userImg from "./../assets/images/users.png";
import StatCard from "../components/StatCard";
import SessionChart from "../components/SessionChart";
import ProvincePieChart from "../components/ProvincePieChart";

function HomePage() {
  // setting loading
  const [loading, setLoading] = useState(false);

  // setting breadcrumb
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterAdmin",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <NavBar />
      {/* Body */}
      {!loading && (
        <div className="flex-grow px-8">
          <MainGreeting
            title="Good Evening"
            titleMemberName="Vishwa"
            breadcrumbItems={breadcrumbItems}
            role="ADMINISTRATOR"
            medicalCenterName="Mediphix"
          />
          {/* Main Body div */}
          <div className="flex item-center gap-4 justify-between">
            <div className="flex flex-col gap-4">
              <ButtonWithImage
                title="Verify Doctors"
                style={1}
                img={doctorImg}
                to="verifyDoctors"
              />
              <ButtonWithImage
                title="Verify Medical Centers"
                style={1}
                img={hospitalImg}
                to=""
              />
              <ButtonWithImage
                title="Manage Users"
                style={2}
                img={userImg}
                to=""
              />
            </div>
            <div className=" w-full">
              <div className="flex flex-row gap-2 justify-between mb-4">
                <StatCard title="Doctors" val={458} />
                <StatCard title="Medical Centers" val={286} />
                <StatCard title="Patients" val={1315} />
                <StatCard title="Sessions" val={8452} />
              </div>
              <div className="flex flex-row gap-4">
                <div className="p-4 bg-mediphix_card_background rounded-lg flex-1 h-[360px]">
                  <p className="font-medium mb-4">
                    Number of Session on last Week
                  </p>
                  <SessionChart />
                </div>
                <div className=" rounded-lg flex-1 flex flex-col gap-4">
                  <div className="p-4 bg-mediphix_card_background flex-1 justify-between rounded-lg">
                    <p className="font-medium mb-4">Medical Center Users</p>
                  </div>
                  <div className="p-4 bg-mediphix_card_background flex-1 justify-between rounded-lg h-80">
                    <p className="font-medium mb-4">
                      Province-Wise Medical Center Count
                    </p>
                    <ProvincePieChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
