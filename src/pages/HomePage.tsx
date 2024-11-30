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
import { Col, Row } from "antd";

function HomePage() {
  const [loading, setLoading] = useState(false);

  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterAdmin",
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
            title="Good Evening"
            titleMemberName="Vishwa"
            breadcrumbItems={breadcrumbItems}
            role="ADMINISTRATOR"
            medicalCenterName="Mediphix"
          />
          {/* Main Body div */}
          <div className="flex-grow w-full flex flex-row">
            <div className="flex flex-col items-center gap-2">
              <div className="flex-1  w-full flex items-center justify-center px-1">
                <ButtonWithImage
                  title="Verify Doctors"
                  style={1}
                  img={doctorImg}
                  to="verifyDoctors"
                />
              </div>
              <div className="flex-1  w-full flex items-center justify-center px-1">
                <ButtonWithImage
                  title="Verify Medical Centers"
                  style={1}
                  img={hospitalImg}
                  to="verifyMedicalCenters"
                />
              </div>
              <div className="flex-1  w-full flex items-center justify-center px-1">
                <ButtonWithImage
                  title="Manage Users"
                  style={2}
                  img={userImg}
                  to=""
                />
              </div>
            </div>

            <div className=" flex flex-col flex-grow">
              {/* Stat Cards */}
              <Row style={{ flex: 1 }} className="">
                <Col span={6} className="pb-2 px-1">
                  <StatCard title="Doctors" val={200} />
                </Col>
                <Col span={6} className="pb-2 px-1">
                  <StatCard title="Medical Centers" val={450} />
                </Col>
                <Col span={6} className="pb-2 px-1">
                  <StatCard title="Patients" val={7850} />
                </Col>
                <Col span={6} className="pb-2 px-1">
                  <StatCard title="Sessions" val={15163} />
                </Col>
              </Row>
              <Row style={{ flex: 2 }} className="">
                <Col span={12} className=" px-1 ">
                  <SessionChart />
                </Col>
                <Col span={12} className="flex flex-col">
                  <div className="bg-mediphix_card_background mx-1 px-2 pt-2 rounded-t-lg font-medium">
                    Medical Center Memebers
                  </div>
                  <div className=" flex-1 px-1">
                    <ProvincePieChart />
                  </div>
                </Col>
              </Row>
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
